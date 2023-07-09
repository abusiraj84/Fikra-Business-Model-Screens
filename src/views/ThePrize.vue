<template>
  <div
    class="flex flex-col justify-start flex-1 p-8 mx-auto max-w-[1200px] z-10 bg-white rounded-[10px] mt-4 mb-20"
  >
    <!-- Hero -->
    <div class="grid grid-cols-12 gap-x-[30px] gap-y-[48px] mb-[48px]">
      <div
        class="flex flex-col items-start justify-between w-full mb-6 col-span-6"
      >
        <h3
          class="text-[22px] md:text-[50px] font-medium leading-9 text-[#042925] mb-5"
        >
          جائزة ابتكر
        </h3>
        <p class="text-[22px] text-[#042925] font-light leading-7 text-justify">
          هي جائزة سنوية تطلقها منشآت كواحدة من المبادرات النوعية التي تعمل على
          نشر ثقافة الابتكار واكتشاف المنشآت الابتكارية.
          <br />
          <br />
          وهي مخصصة للمنشآت التي تبنت تقنية صاعدة أو ابتكار، سواءً تم تطبيق ذلك
          في منتجات وخدمات المنشأة، أم نموذج عملها التجاري، أم في بيئة عملها و
          عملياتها الداخلية.
        </p>
        <a
          href="https://fikra-app.qewamx.com/login"
          target="_blank"
          class="loginBtn mt-[44px] w-fit py-2 px-8 mx-1 text-center text-white rounded-full bg-primary hover:bg-[#307094] transition-all duration-300 font-light"
        >
          تسجيل
        </a>
      </div>
      <!-- Video -->
      <div class="col-span-6 w-full">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/xHywEra-_KQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <!-- 2 blocks -->
      <div class="w-full bg-[#F5F5F7] rounded-[10px] p-8 col-span-6">
        <div class="px-2">
          <h3 class="text-[24px] leading-3 font-medium">
            كيف يمكن لمنشأتك الابتكارية أن تشارك؟
          </h3>
          <ul class="p-3 md:p-4 lg:p-5 space-y-1 list-disc text-[18px]">
            <li>أن يكون مقر المنشأة الرئيسي في المملكة العربية السعودية</li>
            <li>أن يكون للمنشأة سجل تجاري قائم</li>
            <li>
              أن تكون المنشأة قد استفادت ماليًا من تبني تقنية صاعدة أو ابتكار
            </li>
          </ul>
        </div>
      </div>
      <div class="w-full bg-[#F5F5F7] rounded-[10px] p-8 pb-1 col-span-6">
        <div class="px-2 mb-5">
          <h3 class="text-[24px] leading-3 font-medium">
            أهداف المعرض والجائزة
          </h3>
          <ul class="p-3 md:p-4 lg:p-5 space-y-1 list-disc text-[18px]">
            <li>
              المساهمة في نمو الاقتصاد الوطني من خلال تشجيع المنشآت الابتكارية
              على النمو و التوسع
            </li>
            <li>
              دعم وتمكين المنشآت الابتكارية السعودية وتسهيل وصولهم للشركاء في
              منظومة الابتكار
            </li>
            <li>
              نشر ثقافة الابتكار في المملكة وإبراز المنشآت
              الابتكارية محليًا وعالميً
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Sizes -->

    <div class="w-full bg-[#F5F5F7] rounded-[10px] p-8 mb-[48px]">
      <h2 class="text-[24px] font-light text-center mb-[32px]">
        المنشآت الابتكارية التي
        <span class="font-normal">يمكنها المشاركة بمسابقة ابتكر السنوية</span>
      </h2>

      <div class="grid grid-cols-12 gap-[25px]">
        <!-- xs -->
        <div class="col-span-4 bg-white rounded-2xl p-8 text-center">
          <img src="/images/xsCompanies.png" alt="" class="mb-5 w rounded-lg" />
          <h3 class="text-[22px] font-medium text-[#2A6490]">
            منشآت متناهية الصغر
          </h3>
          <p class="font-light">
            حيث يكون عدد موظفيها الأساسيين – دوام كامل- من 1 إلى 5 وألّا تتجاوز
            إيراداتها 3 مليون ريال سعودي
          </p>
        </div>
        <!-- small -->
        <div class="col-span-4 bg-white rounded-2xl p-8 text-center">
          <img
            src="/images/smaalCompanies.png"
            alt=""
            class="mb-5 rounded-lg"
          />
          <h3 class="text-[22px] font-medium text-[#2A6490]">منشآت صغيرة</h3>
          <p class="font-light">
            حيث يكون عدد موظفيها الأساسيين – دوام كامل- من 6 إلى 49 و إيراداتها
            بين 3 إلى 40 مليون ريال سعودي
          </p>
        </div>
        <!-- medium -->
        <div class="col-span-4 bg-white rounded-2xl p-8 text-center">
          <img
            src="/images/mediumCompanies.png"
            alt=""
            class="mb-5 rounded-lg"
          />
          <h3 class="text-[22px] font-medium text-[#2A6490]">منشآت متوسطة</h3>
          <p class="font-light">
            حيث يكون عدد موظفيها الأساسيين – دوام كامل- من 50 إلى 249 و
            إيراداتها بين 40 إلى 200 مليون ريال سعودي
          </p>
        </div>
      </div>
    </div>

    <!-- Features -->

    <div class="w-full bg-[#F5F5F7] rounded-[10px] p-8 mb-[48px]">
      <h2 class="text-[24px] font-medium text-center mb-[32px]">
        مزايا المنشآت الفائزة بجائزة ابتكر
      </h2>

      <div class="grid grid-cols-12 gap-[25px]">
        <!-- 1 -->
        <div class="col-span-3 bg-white rounded-2xl p-8 text-center">
          <img src="/images/xsCompanies.png" alt="" class="mb-5 rounded-lg" />
          <h3 class="text-[22px] font-medium text-[#2A6490]">تمييز وطني</h3>
          <p class="font-light">
            الدعاية الإعلامية للمنشأة بكونها ضمن المنشآت الأكثر ابتكارًا في
            السعودية للعام.
          </p>
        </div>
        <!-- 2 -->
        <div class="col-span-3 bg-white rounded-2xl p-8 text-center">
          <img src="/images/xsCompanies.png" alt="" class="mb-5 rounded-lg" />
          <h3 class="text-[22px] font-medium text-[#2A6490]">
            التأهيل لمسابقة كأس العالم لريادة الأعمال
          </h3>
          <p class="font-light">
            حيث يكون عدد موظفيها الأساسيين – دوام كامل- من 6 إلى 49 و إيراداتها
            بين 3 إلى 40 مليون ريال سعودي
          </p>
        </div>
        <!-- 3 -->
        <div class="col-span-3 bg-white rounded-2xl p-8 text-center">
          <img
            src="/images/smaalCompanies.png"
            alt=""
            class="mb-5 rounded-lg"
          />
          <h3 class="text-[22px] font-medium text-[#2A6490]">
            الوصول للمستثمرين
          </h3>
          <p class="font-light">
            الحصول على فرصة واعدة من خلال العمل على تحسين عروض المنشآت الفائزة
            وملفاتهم الاستثمارية، والوصول للمستثمرين.
          </p>
        </div>
        <!-- 4 -->
        <div class="col-span-3 bg-white rounded-2xl p-8 text-center">
          <img
            src="/images/mediumCompanies.png"
            alt=""
            class="mb-5 rounded-lg"
          />
          <h3 class="text-[22px] font-medium text-[#2A6490]">دعم وتدريب</h3>
          <p class="font-light">
            معسكر تدريبي للمنشآت السعودية الابتكارية الناشئة يتم من خلاله تقديم
            عدد من ورش العمل والاستشارات عن طريق نخبة من المدربين والمستشارين
            بالإضافة لصقل مواهب المنشآت الابتكارية السعودية وإعدادهم على أكمل
            وجه لتقديم أفضل العروض الاستثمارية أمام لجنة التحكيم النهائية.
          </p>
        </div>
      </div>
    </div>
    <!-- Prizes -->

    <div class="w-full bg-[#F5F5F7] rounded-[10px] p-8 mb-[48px]">
      <h2 class="text-[24px] font-light text-center mb-[32px]">
        المنشآت الابتكارية التي
        <span class="font-normal"
          >الفائزة بالنسخ السابقة من جائزة ابتكر السنوية</span
        >
      </h2>

      <div class="grid grid-cols-12 gap-[25px]">
        <!-- 1 -->
        <div
          class="col-span-4 bg-white rounded-2xl p-8 text-center flex flex-col items-center relative"
        >
          <img src="/images/wateen.png" alt="" class="mb-5 w-[200px]" />
          <h3 class="text-[22px] font-medium text-[#2A6490]">وتين Wateen</h3>
          <p class="font-light">
            التطبيق المعتمد من وزارة الصحة السعودية للتبرع بالدم مميزات وتين: -
            يعلمك متى تكون مؤهل للتبرع بالدم
          </p>
        </div>
        <!-- 2 -->
        <div
          class="col-span-4 bg-white rounded-2xl p-8 text-center flex flex-col items-center"
        >
          <div class="h-[112px] flex justify-center items-center mb-5">
            <img
              src="/images/cashin.png"
              alt=""
              class="mb-5 w-[200px] h-[28.5px]"
            />
          </div>
          <h3 class="text-[22px] font-medium text-[#2A6490]">CASHIN</h3>
          <p class="font-light">
            التطبيق المعتمد من وزارة الصحة السعودية للتبرع بالدم مميزات وتين: -
            يعلمك متى تكون مؤهل للتبرع بالدم
          </p>
        </div>
        <!-- 3 -->
        <div
          class="col-span-4 bg-white rounded-2xl p-8 text-center flex flex-col items-center"
        >
          <img src="/images/erq.png" alt="" class="mb-5 w-[148px] h-[112px]" />
          <h3 class="text-[22px] font-medium text-[#2A6490]">
            شركة عرق الذهب للمقاولات
          </h3>
          <p class="font-light">
            التطبيق المعتمد من وزارة الصحة السعودية للتبرع بالدم مميزات وتين: -
            يعلمك متى تكون مؤهل للتبرع بالدم
          </p>
        </div>
        <!-- 4 -->
        <div
          class="col-span-4 bg-white rounded-2xl p-8 text-center flex flex-col items-center"
        >
          <img src="/images/queed.png" alt="" class="mb-5 w-[112px]" />
          <h3 class="text-[22px] font-medium text-[#2A6490]">Queed</h3>
          <p class="font-light">
            التطبيق المعتمد من وزارة الصحة السعودية للتبرع بالدم مميزات وتين: -
            يعلمك متى تكون مؤهل للتبرع بالدم
          </p>
        </div>
        <!-- 5 -->
        <div
          class="col-span-4 bg-white rounded-2xl p-8 text-center flex flex-col items-center"
        >
          <div class="h-[112px] flex justify-center items-center mb-5">
            <img src="/images/algooru.png" alt="" class="mb-5 w-[200px]" />
          </div>
          <h3 class="text-[22px] font-medium text-[#2A6490]">AlGooru</h3>
          <p class="font-light">
            التطبيق المعتمد من وزارة الصحة السعودية للتبرع بالدم مميزات وتين: -
            يعلمك متى تكون مؤهل للتبرع بالدم
          </p>
        </div>
        <!-- 6 -->
        <div
          class="col-span-4 bg-white rounded-2xl p-8 text-center flex flex-col items-center"
        >
          <img src="/images/whelmet.png" alt="" class="mb-5 w-[149px]" />
          <h3 class="text-[22px] font-medium text-[#2A6490]">WhiteHelemt</h3>
          <p class="font-light">
            التطبيق المعتمد من وزارة الصحة السعودية للتبرع بالدم مميزات وتين: -
            يعلمك متى تكون مؤهل للتبرع بالدم
          </p>
        </div>
      </div>
    </div>
    <!-- Jories -->

    <div class="w-full bg-[#F5F5F7] rounded-[10px] p-8 mb-[48px]">
      <h2 class="text-[24px] font-light text-center mb-[32px]">لجنة التحكيم</h2>

      <div class="grid grid-cols-12 gap-[25px]">
        <!-- 1 -->
        <div
          class="col-span-3 bg-white rounded-2xl p-8 text-center flex flex-col items-center"
        >
          <img
            src="https://media.licdn.com/dms/image/D4D03AQF6eTdjS8JlbA/profile-displayphoto-shrink_800_800/0/1666802207986?e=1694044800&v=beta&t=dMhlXP0DAcBtSQMwd6T_icGQbyh3wwv55WeVXrSUHWI"
            alt=""
            class="mb-5 w-[157px] rounded-full"
          />
          <h3 class="text-[22px] font-medium text-[#2A6490]">وائل الترابي</h3>
          <p class="font-light">رئيس مجلس ادارة شركة قوام</p>
        </div>
        <!-- 2 -->
        <div
          class="col-span-3 bg-white rounded-2xl p-8 text-center flex flex-col items-center"
        >
          <img
            src="https://media.licdn.com/dms/image/C5603AQGo1-8hIaX0QQ/profile-displayphoto-shrink_800_800/0/1650195192973?e=1694044800&v=beta&t=mo4x1-kc7ho2jFYbQT6Dd7b8FKNYNOKoTV4yYzswuzI"
            alt=""
            class="mb-5 w-[157px] rounded-full"
          />
          <h3 class="text-[22px] font-medium text-[#2A6490]">عادل الصاعدي</h3>
          <p class="font-light">مؤسس في شركة قوام</p>
        </div>
        <!-- 3 -->
        <div
          class="col-span-3 bg-white rounded-2xl p-8 text-center flex flex-col items-center"
        >
          <img
            src="https://media.licdn.com/dms/image/C4D03AQFH_V5MNxyVAg/profile-displayphoto-shrink_800_800/0/1648829370094?e=1694044800&v=beta&t=HbuncSuSfGT1lJKrWL3-P8keT-eBlkRe-L8qzS4RvSE"
            alt=""
            class="mb-5 w-[157px] rounded-full"
          />
          <h3 class="text-[22px] font-medium text-[#2A6490]">ألاء بكداش</h3>
          <p class="font-light">مؤسس في شركة قوام</p>
        </div>
        <!-- 4 -->
        <div
          class="col-span-3 bg-white rounded-2xl p-8 text-center flex flex-col items-center"
        >
          <img
            src="https://media.licdn.com/dms/image/D4D03AQFlzFJsJE51Kg/profile-displayphoto-shrink_800_800/0/1669216976684?e=1694044800&v=beta&t=oTCX5pfrpxuUh4ar_9PYNAFVlqMdCFMnxHSbn70uaDI"
            alt=""
            class="mb-5 w-[157px] rounded-full"
          />
          <h3 class="text-[22px] font-medium text-[#2A6490]">عايدة الحجازي</h3>
          <p class="font-light">مساعدة المدير التنفيذي</p>
        </div>
      </div>
    </div>
    <!-- Tesrmonials -->

    <div class="w-full bg-[#F5F5F7] rounded-[10px] p-8 mb-[48px]">
      <h2 class="text-[24px] font-normal text-center mb-[32px]">
        آراء المشاركين
      </h2>

      <div class="grid grid-cols-12 gap-[25px]">
        <!-- 1 -->
        <div
          class="col-span-4 bg-white rounded-2xl p-8 text-center flex flex-col items-center relative"
        >
          <img
            src="/images/quote.svg"
            alt=""
            class="absolute top-[-12px] start-10"
          />
          <p class="font-light text-[18px] mb-5">
            "أود أن أشكر جائزة 'ابتكر' على تكريم المنشآت الابتكارية. فقد ساهمت
            هذه الجائزة في تشجيع الشركات والمؤسسات على تطوير وتبني التقنيات
            الصاعدة والابتكارات.
            <br />
            <br />
            من خلال هذه الجائزة، نمتلك الآن منصة للاحتفاء بالشركات الرائدة في
            مجال الابتكار، مما يعزز المنافسة الصحية ويعكس روح الابتكار في
            المجتمع."
          </p>
          <div class="flex items-center gap-x-5 w-full">
            <img src="/images/1.png" alt="" class="w-[47px] rounded-full" />

            <div class="flex flex-col justify-start text-start">
              <h3 class="text-[18px] font-medium text-[#2A6490]">
                أحمد الجابر
              </h3>
              <p class="font-light text-[16px]">
                المدير التنفيذي لدى وتين Wateen
              </p>
            </div>
          </div>
        </div>
        <!-- 2 -->
        <div
          class="col-span-4 bg-white rounded-2xl p-8 text-center flex flex-col items-center relative"
        >
          <img
            src="/images/quote.svg"
            alt=""
            class="absolute top-[-12px] start-10"
          />
          <p class="font-light text-[18px] mb-5">
            "أود أن أشكر جائزة 'ابتكر' على تكريم المنشآت الابتكارية. فقد ساهمت
            هذه الجائزة في تشجيع الشركات والمؤسسات على تطوير وتبني التقنيات
            الصاعدة والابتكارات.
            <br />
            <br />
            من خلال هذه الجائزة، نمتلك الآن منصة للاحتفاء بالشركات الرائدة في
            مجال الابتكار، مما يعزز المنافسة الصحية ويعكس روح الابتكار في
            المجتمع."
          </p>
          <div class="flex items-center gap-x-5 w-full">
            <img src="/images/2.png" alt="" class="w-[47px] rounded-full" />

            <div class="flex flex-col justify-start text-start">
              <h3 class="text-[18px] font-medium text-[#2A6490]">
                أحمد الجابر
              </h3>
              <p class="font-light text-[16px]">
                المدير التنفيذي لدى وتين Wateen
              </p>
            </div>
          </div>
        </div>
        <!-- 3 -->
        <div
          class="col-span-4 bg-white rounded-2xl p-8 text-center flex flex-col items-center relative"
        >
          <img
            src="/images/quote.svg"
            alt=""
            class="absolute top-[-12px] start-10"
          />
          <p class="font-light text-[18px] mb-5">
            "أود أن أشكر جائزة 'ابتكر' على تكريم المنشآت الابتكارية. فقد ساهمت
            هذه الجائزة في تشجيع الشركات والمؤسسات على تطوير وتبني التقنيات
            الصاعدة والابتكارات.
            <br />
            <br />
            من خلال هذه الجائزة، نمتلك الآن منصة للاحتفاء بالشركات الرائدة في
            مجال الابتكار، مما يعزز المنافسة الصحية ويعكس روح الابتكار في
            المجتمع."
          </p>
          <div class="flex items-center gap-x-5 w-full">
            <img src="/images/3.png" alt="" class="w-[47px] rounded-full" />

            <div class="flex flex-col justify-start text-start">
              <h3 class="text-[18px] font-medium text-[#2A6490]">
                أحمد الجابر
              </h3>
              <p class="font-light text-[16px]">
                المدير التنفيذي لدى وتين Wateen
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- FAQ -->
    <div class="w-full bg-[#F5F5F7] rounded-[10px] p-8 mb-[48px]">
      <div
        class="flex flex-col items-start justify-between w-full mb-6 md:items-center md:flex-row"
      >
        <h3 class="text-[22px] md:text-[28px] leading-9 text-[#042925]">
          الأسئلة الأكثر شيوعًا
        </h3>
      </div>
      <div class="flex flex-col gap-y-[12px]">
        <div
          v-for="(item, index) in faqs"
          :key="index"
          class="rounded-[8px] px-[32px] cursor-pointer border border-[#EAECF0] hover:border-primary transition-all duration-100 ease-in-out"
          :class="
            openIndex === index
              ? `border-[#BACDDB] bg-[#E8F1F8] py-[32px]`
              : 'bg-[#fff] py-[16px]'
          "
          @click="toggleFaq(index)"
        >
          <div class="flex items-center justify-between mb-[8px]">
            <h3 class="text-[22px] leading-[26px] font-normal w-[75%]">
              {{ item.question }}
            </h3>
            <div class="flex">
              <img
                v-if="openIndex !== index"
                src="../assets/img/plus.svg"
                class="w-6 h-6"
              />
              <img
                v-if="openIndex === index"
                src="../assets/img/circle.svg"
                class="w-6 h-6"
              />
            </div>
          </div>
          <p
            v-if="openIndex === index"
            class="text-[16px] leading-[22px] font-extralight w-[75%]"
          >
            {{ item.answer }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const videos = [
  { id: "https://www.youtube.com/watch?v=M3_ZRe7Akp0", title: "شركة ملاdءة" },
  { id: "https://www.youtube.com/watch?v=QxccbxJU7eo", title: "تطبيق يوما" },
  { id: "https://www.youtube.com/watch?v=ngRzJY7YCZ0", title: "شركة Ioat" },
  { id: "https://www.youtube.com/watch?v=M3_ZRe7Akp0", title: "حاضنة قوام" },
];

const faqs = [
  {
    question: "ما هي المنشأة الابتكارية؟",
    answer:
      "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها.",
  },
  {
    question: "ماهي الابتكارات؟",
    answer: `الابتكارات (Innovations) هي ما يقدمه الكيان من سلع (منتجات أو خدمات) أو عمليات (نموذج عمل تجاري أو بيئة عمل أو عمليات داخلية) أو مزيج من السلع والعمليات، بحيث تكون جديدة أو مطورة بشكل ملحوظ، وتكون جاهزة أو شبه جاهزة للاستخدام من قبل الكيان نفسه أو من خلال عملائه.`,
  },
  {
    question: "ماهي التقنيات الصاعدة؟",
    answer:
      "لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص.",
  },
  {
    question: "ما هي آلية الانضمام إلى منصة فكرة؟",
    answer:
      'هنا يوجد محتوى نصي" فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء. العديد من برامح النشر المكتبي وبرامح تحرير صفحات الويب تستخدم لوريم إيبسوم بشكل إفتراضي كنموذج عن النص، وإذا قمت بإدخال "lorem ipsum" في أي محرك بحث ستظهر العديد من المواقع الحديثة العهد في نتائج البحث.',
  },
  {
    question: "ما هي شروط المشاركة في جائزة ابتكر؟",
    answer:
      'للمهتمين قمنا بوضع نص لوريم إبسوم القياسي والمُستخدم منذ القرن الخامس عشر في الأسفل. وتم أيضاً توفير الأقسام 1.10.32 و 1.10.33 من "حول أقاصي الخير والشر" (de Finibus Bonorum et Malorum) لمؤلفه شيشيرون (Cicero) بصيغها الأصلية',
  },
  {
    question: "كيف يمكننا متابعة الفعاليات والإعلانات الجديدة؟",
    answer:
      'هنا يوجد محتوى نصي" فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء. العديد من برامح النشر المكتبي وبرامح تحرير صفحات الويب تستخدم لوريم إيبسوم بشكل إفتراضي كنموذج عن النص، وإذا قمت بإدخال "lorem ipsum" في أي محرك بحث ستظهر العديد من المواقع الحديثة العهد في نتائج البحث.',
  },
  {
    question: "من هو المبتكر التجاري؟",
    answer:
      'هنا يوجد محتوى نصي" فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء. العديد من برامح النشر المكتبي وبرامح تحرير صفحات الويب تستخدم لوريم إيبسوم بشكل إفتراضي كنموذج عن النص، وإذا قمت بإدخال "lorem ipsum" في أي محرك بحث ستظهر العديد من المواقع الحديثة العهد في نتائج البحث.',
  },
];
const openIndex = ref(null);

function toggleFaq(index) {
  if (openIndex.value !== index) return (openIndex.value = index);
  openIndex.value = null;
}
</script>

<style scoped>
.hide-bg {
  mix-blend-mode: multiply;
  filter: contrast(1);
}
</style>
