<template>
  <div
    class="flex flex-col justify-start flex-1 p-8 mx-auto w-[95%] md:w-[90%] xl:w-[70%] z-10 bg-white rounded-[10px] mt-4 mb-8"
  >
    <div
      class="flex flex-col items-start justify-between w-full mb-6 md:items-center md:flex-row"
    >
      <h3 class="text-[22px] md:text-[32px] leading-9 text-[#042925]">
        مكتبة الريادة و الإبتكار
      </h3>
    </div>
    <div class="flex items-center justify-between w-full mb-6">
      <div class="relative w-full ml-4">
        <BaseInput
          type="text"
          name="search"
          placeholder="البحث عن فعالية"
          v-model="search"
          :icon="true"
          label=""
        >
        </BaseInput>
        <button
          class="absolute bg-white top-[10px] left-4"
          @click="searchArticles"
        >
          <img src="../assets/img/arrow-left.svg" alt="Arrow" />
        </button>
      </div>
      <!-- <button
        type="button"
        class="flex items-center justify-center px-4 py-[11px] text-center bg-[#F2F2F2] rounded-lg"
      >
        <img src="../assets/img/filter.svg" alt="Filter" />
        <p class="mr-2 text-[20px] leading-5">فرز</p>
      </button> -->
    </div>
    <div
      class="flex items-start mb-6 border-b border-b-[#F2F2F2] -w-full overflow-x-scroll snap-x snap-proximity disable-scrollbars"
    >
      <div
        class="text-[16px] text-[#1e1e1e] cursor-pointer ml-10 pb-3 min-w-max snap-center"
        :class="{ selected: selectedTab === 0 }"
        @click="changeTab(0)"
      >
        عرض الجميع (74)
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
      <div
        v-for="item in events"
        :key="item.id"
        class="py-5 px-6 bg-white rounded-lg border border-[#EAECF0] flex flex-col md:flex-row items-start md:items-center justify-between hover:bg-[#EAF1F8] cursor-pointer"
      >
        <div class="flex items-center">
          <div
            class="px-2 py-4 ml-4 text-center rounded-lg"
            :class="[item.status]"
          >
            <p class="text-[28px] leading-[26px]">{{ item.day }}</p>
            <p class="text-[16px] leading-[18px]">{{ item.month }}</p>
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
                    : 'text-[#912018]',
                ]"
                >{{
                  item.status === "upcoming" ? " (قادمة)" : " (أنتهت)"
                }}</span
              >
            </p>
            <p class="text-[#3F3F3F] text-[16px] leading-[18px]">
              {{ item.desc }}
            </p>
          </div>
        </div>
        <button
          v-if="item.status === 'upcoming'"
          class="text-[16px] text-[#307094] hover:underline mt-3 md:mt-0"
        >
          سجل الآن
        </button>
        <p v-else class="text-[16px] text-[#FF3A46] mt-3 md:mt-0">
          التسجيل مغلق
        </p>
      </div>
    </div>
    <div class="flex items-center justify-center w-full mt-12">
      <button
        class="py-2 px-4 border-[1.5px] border-black rounded-full hover:bg-[#afafaf13] leading-[20px] hover:font-bold"
      >
        <p>المزيد</p>
      </button>
    </div>
  </div>
</template>

<script setup>
import BaseInput from "../components/Base/Input.vue";
import { ref } from "vue";
window.scroll(0, 0);

let events = [
  {
    id: 1,
    title: "كيف اختبر فكرتي؟",
    desc: "ورشة عمل مجانية لمدة ساعة في جدة بعنون “ابحث عن صحة فكرتك قبل اللإطلاق”",
    day: "28",
    month: "مارس",
    status: "upcoming",
    category: "ورشة عمل",
  },
  {
    id: 2,
    title: "كيف اختبر فكرتي؟",
    desc: "ورشة عمل مجانية لمدة ساعة في جدة بعنون “ابحث عن صحة فكرتك قبل اللإطلاق”",
    day: "28",
    month: "مارس",
    status: "upcoming",
    category: "ورشة عمل",
  },
  {
    id: 3,
    title: "كيف اختبر فكرتي؟",
    desc: "ورشة عمل مجانية لمدة ساعة في جدة بعنون “ابحث عن صحة فكرتك قبل اللإطلاق”",
    day: "28",
    month: "مارس",
    status: "upcoming",
    category: "ورشة عمل",
  },
  {
    id: 4,
    title: "كيف اختبر فكرتي؟",
    desc: "ورشة عمل مجانية لمدة ساعة في جدة بعنون “ابحث عن صحة فكرتك قبل اللإطلاق”",
    day: "28",
    month: "مارس",
    status: "upcoming",
    category: "ورشة عمل",
  },
  {
    id: 5,
    title: "ورشة ذكاء: انترنت الأشياء في صناعة المستقبل",
    desc: "ورشة عمل مجانية لمدة ساعة في جدة بعنون “ابحث عن صحة فكرتك قبل اللإطلاق”",
    day: "04",
    month: "مارس",
    status: "upcoming",
    category: "ورشة عمل",
  },
  {
    id: 6,
    title: "ورشة ذكاء: انترنت الأشياء في صناعة المستقبل",
    desc: "ورشة عمل مجانية لمدة ساعة في جدة بعنون “ابحث عن صحة فكرتك قبل اللإطلاق”",
    day: "04",
    month: "مارس",
    status: "upcoming",
    category: "ورشة عمل",
  },
  {
    id: 7,
    title: "ورشة ذكاء: انترنت الأشياء في صناعة المستقبل",
    desc: "ورشة عمل مجانية لمدة ساعة في جدة بعنون “ابحث عن صحة فكرتك قبل اللإطلاق”",
    day: "04",
    month: "مارس",
    status: "upcoming",
    category: "ورشة عمل",
  },
  {
    id: 8,
    title: "ورشة ذكاء: انترنت الأشياء في صناعة المستقبل",
    desc: "ورشة عمل مجانية لمدة ساعة في جدة بعنون “ابحث عن صحة فكرتك قبل اللإطلاق”",
    day: "04",
    month: "مارس",
    status: "upcoming",
    category: "ورشة عمل",
  },
  {
    id: 9,
    title: "استشارات للشركات الناشئة",
    desc: "تبدأ عملية اختيار الفكرة بعد وضع الاساسيات واختبارها مع مجموعة من العملاء بطرق متنوعة ومختلفة....",
    day: "17",
    month: "فبراير",
    status: "ended",
    category: "دورة تدريبية",
  },
];

let selectedTab = ref(0);
function changeTab(newTab) {
  selectedTab.value = newTab;
}

let search = ref("");
function searchArticles() {
  console.log("PERFORM SEARCH", search.value);
}
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
