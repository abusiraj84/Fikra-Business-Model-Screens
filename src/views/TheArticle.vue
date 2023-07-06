<template>
  <!-- SECTION 5 -->
  <div
    class="flex flex-col justify-start flex-1 p-8 mx-auto w-[95%] md:w-[90%] max-w-[1200px] xl:w-[70%] z-10 bg-white rounded-[10px] mt-4 mb-8"
  >
    <div class="flex flex-col items-start justify-between w-full mb-6">
      <h3 class="text-[22px] md:text-[32px] leading-9 text-[#042925] mb-5">
        {{ article.title }}
      </h3>
      <div class="flex items-center">
        <div class="flex items-start justify-center ml-12">
          <img
            src="../assets/img/calendar.svg"
            alt="Calendar"
            class="w-6 h-6 ml-2"
          />
          <p class="text-[20px] text-[#191A1F]">{{ article.date }}</p>
        </div>
        <div class="rounded-full bg-[#FABE2C66] py-1 px-2">
          <p class="text-[16px] text-[#191A1F]">{{ article.category?.name }}</p>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-start justify-between w-full mb-6">
      <img
        :src="article.featured_image"
        alt="test"
        class="w-full aspect-square md:aspect-[12/4] object-cover max-h-[372px] rounded-2xl"
      />
      <div class="text-[18px] leading-7 mt-6 mb-8" v-html="article.content" />
      <div class="flex flex-col items-start justify-between mb-6">
        <p class="text-[18px] mb-2" v-if="article.files?.length">
          و بالأمان الحصول على ملف التقرير من خلال الضغط أدناه:
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
        <div class="relative" v-for="item in similarArticles" :key="item.id">
          <div
            class="text-[16px] leading-[22px] py-1 px-3 top-5 right-5 absolute bg-[#FFFFFFCC] rounded-xl"
          >
            {{ item.category }}
          </div>
          <img :src="item.img" :alt="item.title" class="rounded-t-lg" />
          <div class="border rounded-b-lg border-[#EAECF0] p-4 text-right">
            <p class="text-[22px] leading-[26px] text-[#042925] mb-1">
              {{ item.title }}
            </p>
            <p class="text-[16px] leading-[22px] mb-7">
              {{ truncateString(item.desc) }}
            </p>
            <div class="flex items-center justify-between">
              <p class="text-[18px] leading-[22px] text-[#00000046]">
                {{ item.date }}
              </p>
              <router-link
                to="/article/1"
                class="text-[16px] leading-[22px] text-primary underline"
                >قراءة المقال</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { ref } from "vue";

window.scroll(0, 0);
import { useRoute } from "vue-router";
const route = useRoute();
let articleID = route.params.id;

const article = ref({});
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

const { onError, onResult, refetch, loading } = useQuery(
  gql`
    query getLibraryArticle($article_id: Int!) {
      getLibraryArticle(article_id: $article_id) {
        id
        title
        description
        content
        featured_image

        category {
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
onError((error) => {
  console.log(error.message);
});
onResult(({ data, errors }) => {
  if (errors) {
    console.error(errors);
    return;
  }

  if (data?.getLibraryArticle) {
    console.log(data.getLibraryArticle, "data");
    article.value = data.getLibraryArticle;
    console.log(article.value, "article");
  } else {
    console.warn("Unexpected data structure:", data);
  }
});
</script>
