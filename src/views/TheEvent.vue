<template>
  <!-- breadcromp-->

  <div class="bg-[#F7F7F7]" v-if="!loading1">
    <div
      class="md:flex justify-start items-center gap-x-2 text-[16px] font-normal text-[#78787A] p-2 mx-auto max-w-[1200px] xl:w-[70%] hidden"
    >
      <!-- first -->
      <router-link to="/"><span>الصفحة الرئيسية</span></router-link>
      <span> > </span>
      <!-- second -->
      <router-link to="/events"><span>الفعاليات</span></router-link>
      <!-- third if found -->
      <span> > </span>
      <span> {{ event.title }}</span>
    </div>
  </div>
  <!-- page -->
  <div
    v-if="!loading1"
    class="flex flex-col justify-start flex-1 p-8 mx-auto max-w-[1200px] xl:w-[70%] z-10 bg-white rounded-[10px] mt-4 mb-8"
  >
    <div class="flex flex-col items-start justify-between w-full mb-6">
      <h3 class="text-[22px] md:text-[32px] leading-9 text-[#042925] mb-5">
        {{ event.title }}
      </h3>
      <div class="flex flex-wrap items-center gap-x-[50px] gap-y-2">
        <div class="flex items-center justify-center">
          <img
            src="../assets/img/calendar.svg"
            alt="Calendar"
            class="w-6 h-6 ml-2"
          />
          <p
            class="md:text-[20px] text-[14px] whitespace-nowrap text-[#191A1F]"
          >
            {{ formatDate(event.start_at) }}
          </p>
        </div>
        <div class="rounded-full bg-[#FABE2C66] py-1 px-2">
          <p class="text-[16px] text-[#191A1F] px-[8px] whitespace-nowrap">
            {{ event.category?.name }}
          </p>
        </div>
        <ShareSocial :title="event?.title" />
      </div>
    </div>
    <div class="flex flex-col items-start justify-between w-full mb-6">
      <img
        :src="event.thumbnail"
        alt="test"
        class="w-full aspect-square md:aspect-[12/4] object-cover max-h-[372px] rounded-2xl md:max-h-[246px] border border-[#eaecf092]"
      />
      <div class="text-[18px] leading-7 mt-6 mb-8" v-html="event.description" />
      <!-- url link -->
      <a
        :href="event.meeting_location"
        target="_blank"
        class="loginBtn w-fit py-2 px-12 mx-1 text-center text-white rounded-full bg-primary hover:bg-[#307094] transition-all duration-300 font-light mb-[50px]"
      >
        رابط التسجيل
      </a>
    </div>
    <div class="flex flex-col items-start justify-between w-full mb-6">
      <h3
        class="text-[22px] md:text-[32px] leading-9 font-medium text-[#042925] mb-8"
      >
        المزيد من الفعاليات القادمة
      </h3>

      <div class="grid w-full grid-cols-1 gap-4">
        <div
          @click="pushToPage(item.id)"
          v-for="item in filteredEvents"
          :key="item.id"
          class="group py-5 px-6 bg-white rounded-lg border border-[#EAECF0] flex flex-col md:flex-row items-start md:items-center justify-between hover:bg-[#EAF1F8] cursor-pointer"
        >
          <div class="flex items-center">
            <div
              class="px-2 py-4 ml-4 text-center rounded-lg w-[72px] h-[79px]"
              :class="[item.status]"
            >
              <p class="text-[28px] leading-[26px]">
                {{ item.day }}
              </p>
              <p class="text-[16px] leading-[18px]">
                {{ item.month }}
              </p>
            </div>
            <div class="flex flex-col items-start justify-center space-y-3">
              <p class="text-[#3F3F3F] text-[24px] leading-[18px] font-bold">
                {{ item.title }}
              </p>
              <p class="text-[#3F3F3F] text-[16px] leading-[18px]">
                {{ item.category
                }}<span
                  class="text-[#158456]"
                  :class="[
                    item.status === 'upcoming'
                      ? 'text-[#158456]'
                      : 'text-[#FF3A46]',
                  ]"
                >
                  {{ item.status === "upcoming" ? item.duration : " (انتهت)" }}
                </span>
              </p>
              <div
                class="text-[#3F3F3F] text-[16px] leading-[18px]"
                v-html="truncateString2(item.desc, 140)"
              />
            </div>
          </div>
          <button
            v-if="item.status === 'upcoming'"
            class="text-[16px] text-[#307094] font-medium group-hover:underline mt-3 md:mt-0 whitespace-nowrap float-left"
          >
            سجل الآن
          </button>
          <p
            v-else
            class="text-[16px] text-[#000] font-medium mt-3 md:mt-0 group-hover:underline"
          >
            تفاصيل الفعالية
          </p>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="flex w-full justify-center items-center min-h-[500px]">
    <LottieAnimation
      style="width: 150px; height: 150px"
      ref="anim"
      :animation-data="LoadingJson"
      :loop="true"
      :auto-play="true"
      :speed="1"
      @loopComplete="loopComplete"
      @complete="complete"
      @enterFrame="enterFrame"
      @segmentStart="segmentStart"
      @stopped="stopped"
    />
  </div>
</template>

<script setup>
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { watch, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { LottieAnimation } from "lottie-web-vue";
import LoadingJson from "../assets/loading.json";
import ShareSocial from "../components/Base/ShareSocial.vue";

window.scroll(0, 0);
const route = useRoute();
const router = useRouter();

const pushToPage = async (id) => {
  // router.push({ path: `/events/${id}` });
  await router.push({ path: `/events/${id}` });
  await window.scroll(0, 0);
  await window.location.reload();

  await refetch1();
  // await refetch2();
};

let workshopId = route.params.id;
let currentEventId = ref(route.params.id);
const event = ref({});
const categoryID = ref(0);
let events = ref([]);
let filteredEvents = ref([]);

function truncateString(str) {
  return str.length > 80 ? str.slice(0, 80) + "..." : str;
}
function truncateString2(str, num) {
  return str.length > num ? str.slice(0, num) + "..." : str;
}

// First Query
const {
  onError: onError1,
  onResult: onResult1,
  loading: loading1,
  refetch: refetch1,
} = useQuery(
  gql`
    query getWorkshopDetails($workshop_id: Int!) {
      getWorkshopDetails(workshop_id: $workshop_id) {
        id
        title
        description
        meeting_type
        meeting_location
        duration
        instructor_name
        instructor_email
        instructor_bio
        thumbnail
        video_src
        video_id

        category {
          id
          name
        }
        start_at
        end_at
      }
    }
  `,
  {
    workshop_id: workshopId,
  }
);
onError1((error) => {
  console.log(error.message);
});
onResult1(async ({ data, errors }) => {
  if (errors) {
    console.error(errors);
    return;
  }

  if (data?.getWorkshopDetails) {
    event.value = await data.getWorkshopDetails;
    categoryID.value = await data.getWorkshopDetails?.category?.id;
    // relatedEvents(); // filter events initially after fetching
  } else {
    console.warn("Unexpected data structure:", data);
  }
});

// Related events

const {
  onError: onError2,
  onResult: onResult2,
  loading: loading2,
  refetch: refetch2,
} = useQuery(
  gql`
    query getAllWorkshops {
      getAllWorkshops {
        id
        title
        description
        meeting_type
        meeting_location
        duration
        instructor_name
        instructor_email
        instructor_bio
        thumbnail
        video_src
        video_id
        category {
          id
          name
        }
        start_at
        end_at
        created_at
        updated_at
      }
    }
  `,

  {
    fetchPolicy: "no-cache",
  }
);
onError2((error) => {
  console.log(error.message);
});
onResult2(({ data, errors }) => {
  if (errors) {
    console.error(errors);
    return;
  }

  if (data?.getAllWorkshops) {
    // update current page and hasMorePages
    events.value = data.getAllWorkshops.map((event) => {
      return {
        id: event.id,
        title: event.title,
        desc: event.description,
        day: getDay(event.start_at),
        month: getMonthArabic(event.start_at),
        status: getStatus(event.start_at),
        category: event.category.name,
        categoryID: event.category.id,
        duration: durationSecToMin(event.duration),
      };
    });
    relatedEvents(); // filter events initially after fetching
  } else {
    console.warn("Unexpected data structure:", data);
  }
});

async function relatedEvents() {
  // category
  console.log(categoryID.value, "categoryID");

  if (categoryID.value !== 0) {
    console.log("im here");
    filteredEvents.value = events.value.filter(
      (event) =>
        event.categoryID === categoryID.value &&
        event.id.toString() !== currentEventId.value
    );
  } else {
    filteredEvents.value = events.value;
    // filter by status upcoming
    filteredEvents.value = filteredEvents.value.filter(
      (event) => event.status === "upcoming"
    );
    console.log(filteredEvents.value, "filteredEvents");
  }
}
const getDay = (date) => {
  // return day as number
  return new Date(date).getDate();
};

const getMonthArabic = (date) => {
  // return month as arabic
  const month = new Date(date).getMonth();
  const months = [
    "يناير",
    "فبراير",
    "مارس",
    "ابريل",
    "مايو",
    "يونيو",
    "يوليو",
    "اغسطس",
    "سبتمبر",
    "اكتوبر",
    "نوفمبر",
    "ديسمبر",
  ];
  return months[month];
};

const getStatus = (date) => {
  const today = new Date();
  const eventDate = new Date(date);

  if (eventDate > today) {
    return "upcoming";
  } else {
    return "ended";
  }
};

const durationSecToMin = (duration) => {
  const minutes = Math.floor(duration / 60);
  const seconds = duration - minutes * 60;
  return ` (${minutes} ساعات)`;
};

function formatDate(date) {
  let d = new Date(date);
  let month = d.toLocaleString("ar-EG", { month: "long" });
  let day = d.getDate();
  let year = d.getFullYear();
  return `${day} ${month} ${year}`;
}
</script>
<style scoped>
.upcoming {
  background-color: #e1f2e8;
  border: 1px solid #027a48;
  color: #158456;
}
.ended {
  background-color: #fef3f2;
  border: 1px solid #fda29b;
  color: #912018;
}
</style>
