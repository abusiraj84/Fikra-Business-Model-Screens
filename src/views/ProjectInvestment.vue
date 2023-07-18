<template>
  <div
    class="flex flex-col justify-start flex-1 p-8 mx-auto max-w-[1200px] z-10 bg-white rounded-[10px] mt-4 mb-8"
  >
    <h2 class="text-[32px] font-medium mb-[40px]">
      الاستثمار في المنشآت الابتكارية
    </h2>

    <!-- List of services -->

    <div class="">
      <!-- list of cards -->
      <div
        class="grid w-full grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 gap-y-[23px] gap-x-[20px]"
      >
        <a
          href="https://fikra-app.qewamx.com/dashboard/startup/deals"
          target="_blank"
          v-for="(item, index) in items.slice(0, 9)"
          :key="index"
          class="p-[32px] bg-gradient-to-b bg-[#FFF] hover:bg-[#EAF1F8] group rounded-lg border border-[rgba(120, 120, 122, 0.26)] cursor-pointer transition-all duration-300 min-h-[198px]"
        >
          <div class="flex items-start justify-between mb-5 h-[52px]">
            <p class="text-[20px] text-[#042925] font-medium">
              {{ item.title }}
            </p>
            <img :src="item.imgUrl" class="me-2" :alt="item.title" />
          </div>
          <div>
            <p class="text-[15px] text-[#78787A] font-light mb-[24px]">
              {{ item.description }}
            </p>
          </div>
          <div class="flex items-center justify-start mt-[40px]">
            <div
              class="loginBtn w-fit py-2 px-6 mx-1 text-center text-white rounded-full bg-primary hover:bg-[#307094] transition-all duration-300 font-light"
            >
              اضغط هنا
            </div>
          </div>
        </a>
      </div>
      <div class="flex justify-center items-center mt-[44px]"></div>
    </div>
  </div>
</template>

<script>
import ShareSocial from "../components/Base/ShareSocial.vue";

export default {
  components: {
    ShareSocial,
  },
  data() {
    return {
      items: [],
      desc: `<ul>
  <li>اسم الخدمة: حلول التدريب</li>
  <li>الجهة المقدمة للخدمة: شركة صلة تمكين العمل لتقنية المعلومات</li>
  <li>مجال الخدمة: التدريب: تقديم التدريب و/أو الإرشاد في مجال الابتكار وريادة الأعمال</li>
  <li>الفئة المستهدفة: جميع المراحل الابتكارية</li>
  <li>آلية الاستفادة من الخدمة: يتم الحصول على الخدمة عن طريق إرسال بريد إلكتروني، الوثائق المطلوبة: (السجل التجاري والشهادة الضريبية إن وجدت)</li>
  <li>شرح الخدمة: تنفيذ وتقديم المادة التدريبية في بيئة تفاعلية متمركزة حول المتعلمين، ومصممة مسبقا بشكل جید، وميسر لأي فرد، وفي أي مكان وزمان، باستعمال خصائص ومصادر الإنترنت والتقنيات الرقمية لتحقيق أهداف المنشأة في تحسین أداء العاملین</li>
  <li>مقابل تقديم هذه الخدمة: مقابل رسوم مالية</li>
</ul>`,
    };
  },
  created() {
    this.fetchItems();
  },
  methods: {
    async fetchItems() {
      // Fetch your data from the server and set the items array
      // Replace with the actual server call
      const response = await fetch("/items.json");
      this.items = await response.json();
    },
  },
};
</script>
<style>
.desc > ul {
  list-style: disc !important;
  margin-bottom: 10px;
}
</style>
