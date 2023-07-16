<template>
  <!-- SECTION 5 -->
  <div
    v-if="!loading1"
    class="flex flex-col justify-start flex-1 p-8 mx-auto ] max-w-[1200px] xl:w-[70%] z-10 bg-white rounded-[10px] mt-4 mb-8"
  >
    <div class="flex flex-col items-start justify-between w-full mb-6">
      <h3 class="text-[22px] md:text-[32px] leading-9 text-[#042925] mb-5">
        {{ article.title }}
      </h3>
      <div class="flex items-center gap-x-[50px]">
        <div class="flex items-start justify-center">
          <img
            src="../assets/img/calendar.svg"
            alt="Calendar"
            class="w-6 h-6 ml-2"
          />
          <p class="text-[20px] text-[#191A1F]">
            {{ formatDate(article.created_at) }}
          </p>
        </div>
        <div class="rounded-full bg-[#FABE2C66] py-1 px-2">
          <p class="text-[16px] text-[#191A1F] px-[8px]">
            {{ article.category?.name }}
          </p>
        </div>
        <ShareSocial :title="article?.title" :image="article.featured_image" />
      </div>
    </div>
    <div class="flex flex-col items-start justify-between w-full mb-6">
      <img
        :src="article.featured_image"
        alt="test"
        class="w-full aspect-square md:aspect-[12/4] object-cover max-h-[372px] rounded-2xl md:max-h-[246px]"
      />
      <div
        class="text-[18px] leading-7 mt-6 mb-8 text-justify"
        v-html="article.content"
      />
      <div class="flex flex-col items-start justify-between mb-6">
        <p class="text-[18px] mb-2" v-if="article.files?.length">
          يمكنك الحصول على ملف المقال من خلال الضغط أدناه:
        </p>
        <a
          :href="file.url"
          target="_blank"
          v-for="file in article.files"
          class="flex items-center justify-center border border-[#EAECF0] py-2 px-5 rounded-lg hover:bg-[#EAF1F7] cursor-pointer"
        >
          <div
            v-if="file.file_type === 'application/pdf'"
            class="flex items-center justify-center px-2 py-3 bg-[#F6C4C7] rounded-lg ml-3"
          >
            <p class="text-[18px] text-[#FF1818]">PDF</p>
          </div>
          <div
            v-else-if="
              file.file_type === 'application/msword' ||
              file.file_type ===
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
            "
            class="flex items-center justify-center px-2 py-3 bg-[#c4d3f6] rounded-lg ml-3"
          >
            <p class="text-[18px] text-[#184eff]">DOC</p>
          </div>
          <div
            v-else-if="
              file.file_type === 'application/vnd.ms-excel' ||
              file.file_type ===
                'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
            "
            class="flex items-center justify-center px-2 py-3 bg-[#c4f6ca] rounded-lg ml-3"
          >
            <p class="text-[18px] text-[#297b3c]">EXCEL</p>
          </div>
          <div
            v-else-if="
              file.file_type === 'application/vnd.ms-powerpoint' ||
              file.file_type ===
                'application/vnd.openxmlformats-officedocument.presentationml.presentation'
            "
            class="flex items-center justify-center px-2 py-3 bg-[#f6e0c4] rounded-lg ml-3"
          >
            <p class="text-[18px] text-[#ff9b18]">POWERPOINT</p>
          </div>
          <div class="text-[#3F3F3F] space-y-1">
            <p class="text-[16px] font-bold">
              {{ file.file_name }}
            </p>
            <p class="text-[14PX]">اضغط هنا لتحميل الملف</p>
          </div>
        </a>
      </div>
    </div>
    <div class="flex flex-col items-start justify-between w-full mb-6">
      <h3
        class="text-[22px] md:text-[32px] leading-9 font-bold text-[#042925] mb-8"
      >
        تصفح المزيد
      </h3>

      <div class="grid w-full grid-cols-1 gap-4 md:grid-cols-3">
        <a
          :href="`/article/${item.id}`"
          class="relative hover:bg-[#EAF1F7] cursor-pointer group transition-all overflow-hidden rounded-lg border border-[#EAECF0]"
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
              class="rounded-t-lg group-hover:scale-110 transition-all duration-300 group-hover:saturate-150 w-full max-h-[213px]"
            />
          </div>
          <div class="rounded-b-lg p-4 text-right">
            <div class="h-[80px] mb-4">
              <p class="text-[22px] leading-[26px] text-[#042925] mb-1">
                {{ item.title }}
              </p>
              <p class="text-[16px] leading-[22px] mb-7">
                {{ truncateString(item.description) }}
              </p>
            </div>
            <div class="flex items-center justify-between">
              <p class="text-[18px] leading-[22px] text-[#00000046]">
                {{ formatDate(item.created_at) }}
              </p>
              <router-link
                :to="`/article/${item.id}`"
                class="text-[16px] leading-[22px] text-primary underline lg:invisible group-hover:visible"
                >قراءة المقال</router-link
              >
            </div>
          </div>
        </a>
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
import { ref } from "vue";
import { LottieAnimation } from "lottie-web-vue";
import LoadingJson from "../assets/loading.json";

window.scroll(0, 0);
import { useRoute } from "vue-router";
import ShareSocial from "../components/Base/ShareSocial.vue";
const route = useRoute();
let articleID = route.params.id;

const article = ref({});
const categoryID = ref(0);
let similarArticles = [
  {
    id: 1,
    title: "كيف اختبر فكرتي؟",
    desc: "تبدأ عملية اختيار الفكرة بعد وضع الأساسيات واختبارها مع مجموعة من العملاء بطرق مختلفة ومتنوعة",
    date: "28 فبراير 2022",
    img: "https://images.pexels.com/photos/1314410/pexels-photo-1314410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "مرحلة الفكرة",
  },
  {
    id: 2,
    title: "كيف اختار الشركة المناسبة؟",
    desc: "من أهم المقومات لنجاح الفكرة هو اختيار الشركة المناسبة لتنفيذ وتصميم الفكرة",
    date: "28 فبراير 2022",
    img: "https://images.pexels.com/photos/207607/pexels-photo-207607.jpeg?auto=compress&cs=tinysrgb&w=1600",
    category: "تأسيس الشركات",
  },
  {
    id: 3,
    title: "ما أهمية التدريب؟",
    desc: "لبناء فكرة معينة فأنت بحاجة إلى مجموعة من المهارات الي بدورها ستساعدك في بناء الفكرة",
    date: "28 فبراير 2022",
    img: "https://images.pexels.com/photos/45718/pexels-photo-45718.jpeg?auto=compress&cs=tinysrgb&w=1600",
    category: "التوجيه والارشاد",
  },
];

function truncateString(str) {
  return str.length > 80 ? str.slice(0, 80) + "..." : str;
}

// First Query
const {
  onError: onError1,
  onResult: onResult1,
  loading: loading1,
  refetch: refetch1,
} = useQuery(
  gql`
    query getLibraryArticle($article_id: Int!) {
      getLibraryArticle(article_id: $article_id) {
        id
        title
        description
        content
        featured_image
        created_at
        category {
          id
          name
        }
        content_types {
          name
        }
        video {
          source
          code
        }
        files {
          file_id
          file_name
          file_type
          url
        }
        article_user {
          rating
          user {
            id
          }
        }
      }
    }
  `,
  {
    article_id: articleID,
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

  if (data?.getLibraryArticle) {
    article.value = data.getLibraryArticle;
    categoryID.value = data.getLibraryArticle.category?.id;
    // manually refetch the second query with the new categoryID value
    await refetch2({
      first: 3,
      page: 1,
      category_id: categoryID.value,
    });
  } else {
    console.warn("Unexpected data structure:", data);
  }
});

// Related Articles

let articles = ref([]);
const {
  onError: onError2,
  onResult: onResult2,
  loading: loading2,
  refetch: refetch2,
} = useQuery(
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
          created_at
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
    category_id: categoryID.value,
  }),

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

  if (data?.getLibraryArticles) {
    console.log(data.getLibraryArticles, "data");
    articles.value = data.getLibraryArticles.data;
  } else {
    console.warn("Unexpected data structure:", data);
  }
});

function formatDate(date) {
  let d = new Date(date);
  let month = d.toLocaleString("ar-EG", { month: "long" });
  let day = d.getDate();
  let year = d.getFullYear();
  return `${day} ${month} ${year}`;
}
</script>
