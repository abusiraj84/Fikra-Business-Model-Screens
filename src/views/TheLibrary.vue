<template>
  <div
    class="flex flex-col justify-start flex-1 p-8 mx-auto w-[95%] md:w-[90%] z-10 bg-white rounded-[10px] mt-4 mb-8"
  >
    <div
      class="flex flex-col items-start justify-between w-full mb-6 md:items-center md:flex-row"
    >
      <h3 class="text-[22px] md:text-[32px] leading-9 text-[#042925]">
        مكتبة الريادة و الإبتكار
      </h3>
    </div>
    <div class="flex items-center justify-between w-full mb-6">
      <div class="relative w-full">
        <BaseInput
          type="text"
          name="search"
          placeholder="البحث عن مقال"
          v-model="search"
          :icon="true"
          label=""
          @input="updateSearch"
          @keydown.enter.prevent="searchArticles"
        >
        </BaseInput>
        <button
          class="absolute bg-white top-[10px] left-4"
          @click="searchArticles"
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
        عرض الجميع
        <!-- ({{ articles.length }}) -->
      </div>
      <div
        v-for="(category, index) in categories"
        :key="category.id"
        class="text-[16px] text-[#1e1e1e] cursor-pointer ml-10 pb-3 min-w-max snap-center"
        :class="{ selected: selectedTab === index + 1 }"
        @click="changeTab(index + 1, category.id)"
      >
        {{ category.name }}
      </div>
    </div>
    <div
      v-if="loading"
      class="flex w-full justify-center items-center min-h-[500px]"
    >
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

    <div
      class="grid w-full grid-cols-1 gap-4 md:grid-cols-3 xl:grid-cols-3"
      v-else
    >
      <router-link
        :to="`/article/${item.id}`"
        class="relative hover:bg-[#EAF1F7] cursor-pointer group transition-all overflow-hidden rounded-lg"
        v-for="item in articles"
        :key="item.id"
      >
        <div
          class="text-[16px] leading-[22px] py-1 px-3 top-5 right-5 absolute bg-[#FFFFFFCC] rounded-xl z-10"
        >
          {{ item.category.name }}
        </div>
        <div class="overflow-hidden">
          <img
            :src="item.featured_image"
            :alt="item.title"
            class="rounded-t-lg group-hover:scale-110 transition-all duration-300 group-hover:saturate-150 w-full"
          />
        </div>
        <div class="border rounded-b-lg border-[#EAECF0] p-4 text-right">
          <p class="text-[22px] leading-[26px] text-[#042925] mb-1">
            {{ item.title }}
          </p>
          <p class="text-[16px] leading-[22px] mb-7">
            {{ truncateString(item.description) }}
          </p>
          <div class="flex items-center justify-between">
            <p class="text-[18px] leading-[22px] text-[#00000046]">
              {{ item.date }}
            </p>
            <router-link
              :to="`/article/${item.id}`"
              class="text-[16px] leading-[22px] text-primary underline invisible group-hover:visible"
              >قراءة المقال</router-link
            >
          </div>
        </div>
      </router-link>
    </div>

    <div v-if="!loading && articles.length === 0" class="text-[20px] h-[500px]">
      لا يوجد نتائج
    </div>
    <div class="flex items-center justify-center w-full mt-12">
      <button
        @click="loadMore"
        v-if="hasMorePages"
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
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { watch } from "vue";
import { LottieAnimation } from "lottie-web-vue";
import LoadingJson from "../assets/loading.json";

window.scroll(0, 0);

let articles = ref([]);

let selectedTab = ref(0);
let categoryId = ref(null);

let currentPage = ref(1);
let hasMorePages = ref(false);

function changeTab(newTab, newCategoryId) {
  selectedTab.value = newTab;
  categoryId.value = newCategoryId;
  currentPage.value = 1;
  hasMorePages.value = false;
  articles.value = []; // Clear current articles before refetchingcurrentPage.value

  refetch({
    first: 12,
    page: 1,
    keyword: search.value,
    category_id: newCategoryId,
  });
  if (newTab === 0) {
    categoryId.value = null;
  }
}
let search = ref("");
function searchArticles() {
  console.log("PERFORM SEARCH", search.value);
  currentPage.value = 1;
  hasMorePages.value = false;
  articles.value = []; // Clear current articles before refetching

  refetch({
    first: 12,
    page: 1,
    keyword: search.value,
  });
}
function updateSearch(event) {
  search.value = event.target.value;
}

function truncateString(str) {
  return str.length > 80 ? str.slice(0, 80) + "..." : str;
}

const { result, onError, onResult, refetch, loading } = useQuery(
  gql`
    query getLibraryArticles(
      $first: Int!
      $page: Int
      $keyword: String
      $category_id: Int
    ) {
      getLibraryArticles(
        first: $first
        page: $page
        keyword: $keyword
        category_id: $category_id
      ) {
        paginatorInfo {
          count
          currentPage
          hasMorePages
          lastPage
          total
        }
        data {
          id
          title
          description
          content
          featured_image
          files {
            file_id
            file_name
            file_type
            url
          }
          content_types {
            name
          }
          category {
            name
          }
          video {
            source
            code
          }
        }
      }
    }
  `,
  ref({
    first: 12,
    page: 1,
  }),

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

  if (data?.getLibraryArticles) {
    let imageCounter = data.getLibraryArticles.data.length;

    // update current page and hasMorePages
    hasMorePages.value = data.getLibraryArticles.paginatorInfo.hasMorePages;

    data.getLibraryArticles.data.forEach((item) => {
      let img = new Image();
      img.src = item.featured_image;
      img.onload = () => {
        imageCounter--;
        if (imageCounter === 0) {
          loading.value = false;
        }
      };
    });

    // Append new articles to the current ones instead of replacing them
    // don't duplicate articles

    articles.value = [
      ...articles.value,
      ...data.getLibraryArticles.data.filter(
        (item) => !articles.value.some((article) => article.id === item.id)
      ),
    ];

    // articles.value = [
    //   ...articles.value,
    //   ...data.getLibraryArticles.data.filter(
    //     (item) => !articles.value.some((article) => article.id === item.id)
    //   ),
    // ];
  } else {
    console.warn("Unexpected data structure:", data);
  }
});

function loadMore() {
  if (!hasMorePages.value) {
    return;
  }
  currentPage.value += 1;
  if (categoryId.value === null) {
    refetch({
      first: 12,
      page: currentPage.value,
      keyword: search.value,
    });
    return;
  } else {
    refetch({
      first: 12,
      page: currentPage.value,
      keyword: search.value,
      category_id: categoryId.value,
    });
  }
}

// Categories
let categories = ref([]);

const {
  result: categoriesResult,
  onError: categoriesOnError,
  onResult: categoriesOnResult,
} = useQuery(gql`
  query getCategories {
    getCategories {
      id
      name
    }
  }
`);

categoriesOnError((error) => {
  console.log(error.message);
});

categoriesOnResult(({ data, errors }) => {
  if (errors) {
    console.error(errors);
    return;
  }

  if (data?.getCategories) {
    console.log(data.getCategories);
    categories.value = data.getCategories;
    console.log(categories.value, "categories");
  } else {
    console.warn("Unexpected data structure:", data);
  }
});
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
</style>
