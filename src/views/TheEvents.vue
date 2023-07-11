<template>
  <div
    class="flex flex-col justify-start flex-1 p-8 mx-auto max-w-[1200px] z-10 bg-white rounded-[10px] mt-4 mb-8"
  >
    <div
      class="flex flex-col items-start justify-between w-full mb-6 md:items-center md:flex-row"
    >
      <h3 class="text-[22px] md:text-[32px] leading-9 text-[#042925]">
        فعاليات الابتكار التجاري
      </h3>
    </div>
    <div class="flex items-center justify-between w-full mb-6">
      <div class="relative w-full">
        <BaseInput
          type="text"
          name="search"
          placeholder="البحث عن فعالية"
          v-model="search"
          :icon="true"
          label=""
          @keydown.enter.prevent="searchEvents"
          @input="updateSearch"
        >
        </BaseInput>
        <button
          class="absolute bg-white top-[10px] left-4"
          @click="searchEvents"
          v-if="search"
        >
          <img src="../assets/img/arrow-left.svg" alt="Arrow" />
        </button>
      </div>
    </div>
    <div
      class="flex items-start mb-6 border-b border-b-[#F2F2F2] -w-full overflow-x-scroll snap-x snap-proximity disable-scrollbars"
    >
      <div
        class="text-[16px] text-[#1e1e1e] cursor-pointer ml-10 pb-3 min-w-max snap-center"
        :class="{ selected: selectedTab === 0 }"
        @click="changeTab(0)"
      >
        عرض الجميع ({{ events.length }})
      </div>
      <div
        class="text-[16px] text-[#1e1e1e] cursor-pointer ml-10 pb-3 min-w-max snap-center"
        :class="{ selected: selectedTab === 1 }"
        @click="changeTab(1)"
      >
        فعاليات قادمة
      </div>
      <div
        class="text-[16px] text-[#1e1e1e] cursor-pointer ml-10 pb-3 min-w-max snap-center"
        :class="{ selected: selectedTab === 2 }"
        @click="changeTab(2)"
      >
        فعاليات منتهية
      </div>
    </div>
    <div class="grid w-full grid-cols-1 gap-4">
      <template v-if="filteredEvents.length === 0">
        <div
          class="py-5 px-6 bg-white rounded-lg border border-[#EAECF0] flex flex-col items-center justify-center"
        >
          <p class="text-[#3F3F3F] text-[18px] leading-[18px] font-bold">
            لا توجد نتائج
          </p>
        </div>
      </template>
      <div
        v-else
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
                >{{
                  item.status === "upcoming" ? " (قادمة)" : " (انتهت)"
                }}</span
              >
            </p>
            <div
              class="text-[#3F3F3F] text-[16px] leading-[18px]"
              v-html="item.desc"
            />
          </div>
        </div>
        <button
          v-if="item.status === 'upcoming'"
          class="text-[16px] text-[#307094] font-medium group-hover:underline mt-3 md:mt-0"
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
    <div class="flex items-center justify-center w-full mt-12"></div>
  </div>
</template>

<script setup>
import BaseInput from "../components/Base/Input.vue";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { LottieAnimation } from "lottie-web-vue";
import LoadingJson from "../assets/loading.json";
import { ref } from "vue";
window.scroll(0, 0);

let selectedTab = ref(0);
let search = ref("");
let events = ref([]);
let filteredEvents = ref([]);

function changeTab(newTab) {
  selectedTab.value = newTab;
  filterEvents(); // filter events after changing tab
}

function searchEvents() {
  filterEvents(); // filter events after a search is done
}

const { result, onError, onResult, refetch, loading } = useQuery(
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

onError((error) => {
  console.log(error.message);
});
onResult(({ data, errors }) => {
  if (errors) {
    console.error(errors);
    return;
  }
  let loading = ref(true);

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
      };
    });
    filterEvents(); // filter events initially after fetching
  } else {
    console.warn("Unexpected data structure:", data);
  }
});
function filterEvents() {
  let status;
  if (selectedTab.value === 1) status = "upcoming";
  else if (selectedTab.value === 2) status = "ended";

  filteredEvents.value = events.value.filter(
    (event) =>
      (!status || event.status === status) &&
      (!search.value ||
        event.title.toLowerCase().includes(search.value.toLowerCase()))
  );
}

function updateSearch(event) {
  search.value = event.target.value;
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
</script>

<style scoped>
.selected {
  color: #307094;
  font-weight: bold;
  border-bottom: 2px solid #307094;
}

.disable-scrollbars::-webkit-scrollbar {
  display: none;
}

.disable-scrollbars {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
}

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
