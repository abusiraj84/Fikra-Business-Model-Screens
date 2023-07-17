<template>
  <div
    class="flex flex-col justify-start flex-1 p-8 mx-auto max-w-[1200px] z-10 bg-white rounded-[10px] mt-4 mb-20"
  >
    <!-- Hero -->
    <div class="md:grid md:grid-cols-12 flex flex-col gap-[25px] w-full">
      <div
        class="flex flex-col items-start justify-between w-full mb-6 lg:col-span-6 md:col-span-12 col-span-12"
      >
        <h3
          class="text-[22px] md:text-[50px] font-medium leading-9 text-[#042925] mb-5 whitespace-nowrap"
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
          class="loginBtn mt-[44px] md:w-[280px] w-fit py-2 px-8 mx-1 text-center text-white rounded-full bg-primary hover:bg-[#307094] transition-all duration-300 font-light"
        >
          تسجيل
        </a>
      </div>
      <!-- Video -->
      <div class="w-full lg:col-span-6 md:col-span-12 col-span-12">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/xHywEra-_KQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          class="h-[200px] xl:h-[315px] md:h-[400px] rounded-[10px]"
        ></iframe>
      </div>

      <!-- 2 blocks -->
      <div class="w-full bg-[#F5F5F7] rounded-[10px] col-span-12">
        <div>
          <h3
            class="text-[24px] md:leading-3 font-medium text-center mt-[32px] md:px-2"
          >
            كيف يمكن لمنشأتك الابتكارية أن تشارك؟
          </h3>

          <div class="md:grid md:grid-cols-12 flex flex-col gap-[25px] p-8">
            <!-- 1 -->
            <div
              class="xl:col-span-4 col-span-12 bg-white rounded-2xl p-8 text-center flex flex-col items-center"
            >
              <div
                class="flex items-center justify-center w-[90px] h-[90px] rounded-full bg-[#ECECEC] border-2 border-[#ECECEC] mb-5"
              >
                <img src="/images/saudi-arabia-1.png" alt="" />
              </div>

              <p class="font-light text-[18px]">
                أن يكون مقر المنشأة الرئيسي في المملكة العربية السعودية
              </p>
            </div>
            <!-- 2 -->
            <div
              class="xl:col-span-4 col-span-12 bg-white rounded-2xl p-8 text-center flex flex-col items-center"
            >
              <div
                class="flex items-center justify-center w-[90px] h-[90px] rounded-full bg-[#ECECEC] border-2 border-[#ECECEC] mb-5"
              >
                <img src="/images/stamp-1.png" alt="" />
              </div>

              <p class="font-light text-[18px]">
                أن يكون للمنشأة سجل تجاري قائم
              </p>
            </div>
            <!-- 3 -->
            <div
              class="xl:col-span-4 col-span-12 bg-white rounded-2xl p-8 text-center flex flex-col items-center"
            >
              <div
                class="flex items-center justify-center w-[90px] h-[90px] rounded-full bg-[#ECECEC] border-2 border-[#ECECEC] mb-5"
              >
                <img src="/images/salary-1.png" alt="" />
              </div>

              <p class="font-light text-[18px]">
                أن تكون المنشأة قد استفادت ماليًا من تبني تقنية صاعدة أو ابتكار
              </p>
            </div>
          </div>
          <div class="bg-[#EEE] p-8 border-t flex items-start w-full">
            <img
              src="/images/note-211.svg"
              alt=""
              class="translate-y-[-10px] w-[48px] h-[48px] me-4"
            />

            <div class="ms-4">
              <h3 class="text-[24px] md:leading-3 font-medium mb-[8px]">
                أهداف المعرض والجائزة
              </h3>
              <ul class="space-y-1 list-disc text-[18px] md:text-justify">
                <li>
                  المساهمة في نمو الاقتصاد الوطني من خلال تشجيع المنشآت
                  الابتكارية على النمو و التوسع
                </li>
                <li>
                  دعم وتمكين المنشآت الابتكارية السعودية وتسهيل وصولهم للشركاء
                  في منظومة الابتكار
                </li>
                <li>
                  نشر ثقافة الابتكار في المملكة وإبراز المنشآت
                  الابتكارية محليًا وعالميًا
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Sizes -->

    <div class="w-full bg-[#F5F5F7] rounded-[10px] p-8 mb-[48px]">
      <h2 class="text-[24px] font-medium text-center mb-[32px]">
        المنشآت الابتكارية التي يمكنها المشاركة
      </h2>

      <div class="md:grid md:grid-cols-12 flex flex-col gap-[25px] w-full">
        <!-- xs -->
        <div
          class="lg:col-span-4 md:col-span-12 col-span-12 bg-white rounded-2xl p-8 text-center flex flex-col items-center"
        >
          <div
            class="flex items-center justify-center w-[90px] h-[90px] rounded-full bg-[#E9FAFF] mb-[20px]"
          >
            <img src="/images/icons-8-connected-people-1.svg" alt="" />
          </div>
          <h3 class="text-[22px] font-medium text-[#2A6490]">
            منشآت متناهية الصغر
          </h3>
          <p class="font-light">
            موظفون بدوام كامل من 1 إلى 5 أشخاص مع إيرادات من صفر إلى 3 مليون
            ريال سعودي
          </p>
        </div>
        <!-- small -->
        <div
          class="lg:col-span-4 md:col-span-12 col-span-12 bg-white rounded-2xl p-8 text-center flex flex-col items-center"
        >
          <div
            class="flex items-center justify-center w-[90px] h-[90px] rounded-full bg-[#E9FAFF] mb-[20px]"
          >
            <img src="/images/people-1.svg" alt="" />
          </div>
          <h3 class="text-[22px] font-medium text-[#2A6490]">منشآت صغيرة</h3>
          <p class="font-light">
            موظفون بدوام كامل من 6 إلى 49 شخص مع إيرادات من 3 إلى 40 مليون ريال
            سعودي
          </p>
        </div>
        <!-- medium -->
        <div
          class="lg:col-span-4 md:col-span-12 col-span-12 bg-white rounded-2xl p-8 text-center flex flex-col items-center"
        >
          <div
            class="flex items-center justify-center w-[90px] h-[90px] rounded-full bg-[#E9FAFF] mb-[20px]"
          >
            <img src="/images/icons-8-new-company-1.svg" alt="" />
          </div>
          <h3 class="text-[22px] font-medium text-[#2A6490]">منشآت متوسطة</h3>
          <p class="font-light">
            موظفون بدوام كامل من 50 إلى 249 شخص مع إيرادات من 40 إلى 200 مليون
            ريال سعودي
          </p>
        </div>
      </div>
    </div>

    <!-- Features -->

    <div class="w-full bg-[#F5F5F7] rounded-[10px] p-8 mb-[48px]">
      <h2 class="text-[24px] font-medium text-center mb-[32px]">
        المزايا المقدمة للمنشآت الفائزة
      </h2>

      <div class="md:grid md:grid-cols-12 flex flex-col gap-[25px] w-full">
        <!-- 1 -->
        <div
          class="lg:col-span-4 md:col-span-12 col-span-12 w-full bg-white rounded-2xl p-8 text-center flex items-center flex-col"
        >
          <img
            src="/images/rectangle-3243.png"
            alt=""
            class="mb-5 rounded-lg"
          />
          <h3
            class="text-[22px] font-medium text-[#2A6490] min-h-[52px] leading-[26px] mb-2"
          >
            تمييز وطني
          </h3>
          <p class="font-light">
            الدعاية الإعلامية للمنشأة بكونها ضمن المنشآت الأكثر ابتكارًا في
            السعودية للعام.
          </p>
        </div>
        <!-- 2 -->
        <div
          class="lg:col-span-4 md:col-span-12 col-span-12 bg-white rounded-2xl p-8 text-center flex items-center flex-col"
        >
          <img src="/images/xsCompanies.png" alt="" class="mb-5 rounded-lg" />
          <h3
            class="text-[22px] font-medium text-[#2A6490] min-h-[52px] leading-[26px] mb-2"
          >
            التأهيل لمسابقة كأس العالم<br />
            لريادة الأعمال
          </h3>
          <p class="font-light">
            الحصول على فرصة التأهل لتمثيل المملكة<br />
            العربية السعودية لمسابقة كأس العالم لريادة الأعمال.
          </p>
        </div>
        <!-- 3 -->
        <div
          class="lg:col-span-4 md:col-span-12 col-span-12 bg-white rounded-2xl p-8 text-center flex items-center flex-col"
        >
          <img
            src="/images/rectangle-324322.png"
            alt=""
            class="mb-5 rounded-lg"
          />
          <h3
            class="text-[22px] font-medium text-[#2A6490] min-h-[52px] leading-[26px] mb-2"
          >
            الوصول للمستثمرين
          </h3>
          <p class="font-light">
            الحصول على فرصة واعدة من خلال العمل على تحسين عروض المنشآت الفائزة
            وملفاتهم الاستثمارية، والوصول للمستثمرين.
          </p>
        </div>
      </div>
    </div>
    <!-- Prizes -->

    <div class="w-full bg-[#F5F5F7] rounded-[10px] p-8 mb-[48px]">
      <h2 class="text-[24px] font-medium text-center mb-[32px]">
        المنشآت الابتكارية الفائزة بالنسخة السابقة
      </h2>

      <div class="md:grid md:grid-cols-12 flex flex-col gap-[25px]">
        <!-- 1 -->
        <div
          class="col-span-4 bg-white rounded-2xl p-8 text-center flex flex-col items-center relative"
        >
          <img src="/images/wateen.png" alt="" class="mb-5 w-[200px]" />
          <h3 class="text-[22px] font-medium text-[#2A6490]">وتين - Wateen</h3>
          <p class="font-light">
            مبادرة بالتعاون مع وزارة الصحة تسعى إلى تقليص فجوة التواصل بين
            المتبرعين وبنوك الدم حتى تصبح عملية التبرع بالدم أسهل
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
          <h3 class="text-[22px] font-medium text-[#2A6490]">كاشن - Cashin</h3>
          <p class="font-light">
            آلية ذكية متكاملة لإدارة المدفوعات والفواتير الإلكترونية ونقاط البيع
            وتقارير الأعمال بطريقة آمنة ومبتكرة
          </p>
        </div>
        <!-- 3 -->
        <div
          class="col-span-4 bg-white rounded-2xl p-8 text-center flex flex-col items-center"
        >
          <img src="/images/erq.png" alt="" class="mb-5 w-[148px] h-[112px]" />
          <h3
            class="text-[22px] font-medium text-[#2A6490] leading-[26px] mb-2"
          >
            شركة عرق الذهب للمقاولات <br />
            ERQ ELTHAHAB CO
          </h3>
          <p class="font-light">المفهوم الرّاقي للأعمال المعماريّة والمدنية</p>
        </div>
        <!-- 4 -->
        <div
          class="col-span-4 bg-white rounded-2xl p-8 text-center flex flex-col items-center"
        >
          <img
            src="/images/image-43.png"
            alt=""
            class="mb-5 mt-[30px] w-[112px]"
          />
          <h3 class="text-[22px] font-medium text-[#2A6490]">كيود - Queed</h3>
          <p class="font-light">
            حلول ذكية لإدارة وتحليل استهلاك الكهرباء في المنازل لتعزيز كفاءة
            الطاقة والوعي بالاستهلاك
          </p>
        </div>
        <!-- 5 -->
        <div
          class="col-span-4 bg-white rounded-2xl p-8 text-center flex flex-col items-center"
        >
          <div class="h-[112px] flex justify-center items-center mb-5">
            <img src="/images/algooru.png" alt="" class="mb-5 w-[200px]" />
          </div>
          <h3 class="text-[22px] font-medium text-[#2A6490]">
            القورو - algooru
          </h3>
          <p class="font-light">
            مدرس خصوصي موثوق يمكن أبنك من التفوق والامتياز
          </p>
        </div>
        <!-- 6 -->
        <div
          class="col-span-4 bg-white rounded-2xl p-8 text-center flex flex-col items-center"
        >
          <img src="/images/whelmet.png" alt="" class="mb-5 w-[149px]" />
          <h3 class="text-[22px] font-medium text-[#2A6490]">
            وايتهلمت - White Helmet
          </h3>
          <p class="font-light">
            كل ما تحتاجه لتبدأ متابعة وتوثيق مراحل البناء رقمياً
          </p>
        </div>
      </div>
    </div>
    <!-- Jories -->

    <div class="w-full bg-[#F5F5F7] rounded-[10px] p-8 mb-[48px]">
      <h2 class="text-[24px] font-light text-center mb-[32px]">
        أبرز أعضاء لجنة التحكيم للنسخة السابقة
      </h2>

      <div
        class="md:grid flex flex-col grid-cols-center-3 gap-[25px] justify-center m-auto"
      >
        <!-- 1 -->
        <div
          class="col-span-4 bg-white rounded-2xl p-8 text-center flex flex-col items-center w-full justify-center justify-self-center mx-auto"
        >
          <img
            src="/images/waleed.png"
            alt=""
            class="mb-5 w-[157px] rounded-full"
          />
          <h3 class="text-[22px] font-medium text-[#2A6490]">د.وليد البلاع</h3>
          <p class="font-light">
            مستثمر رأس مال جريء، وعضو منتدب لشركة مباشر السعودية، وشريك في صندوق
            STV للاستثمار، ومهتم بريادة الأعمال
          </p>
        </div>
        <!-- 2 -->
        <div
          class="col-span-4 bg-white rounded-2xl p-8 text-center flex flex-col items-center w-full justify-center justify-self-center mx-auto"
        >
          <img
            src="/images/ryad.png"
            alt=""
            class="mb-5 w-[157px] rounded-full"
          />
          <h3 class="text-[22px] font-medium text-[#2A6490]">أ.رياض الزامل</h3>
          <p class="font-light">
            عضو مجلس إدارة الغرفة التجارية الصناعية في الرياض، ورجل اعمال
            ومستثمر
          </p>
        </div>
        <!-- 3 -->
        <div
          class="col-span-4 bg-white rounded-2xl p-8 text-center flex flex-col items-center w-full justify-center justify-self-center mx-auto"
        >
          <img
            src="/images/maha.png"
            alt=""
            class="mb-5 w-[157px] rounded-full"
          />
          <h3 class="text-[22px] font-medium text-[#2A6490]">أ.مها طيبة</h3>
          <p class="font-light">رائدة اعمال، ومستثمرة</p>
        </div>
        <!-- 4 -->
        <div
          class="col-span-4 bg-white rounded-2xl p-8 text-center flex flex-col items-center w-full justify-center justify-self-center mx-auto"
        >
          <img
            src="/images/omar.png"
            alt=""
            class="mb-5 w-[157px] rounded-full"
          />
          <h3 class="text-[22px] font-medium text-[#2A6490]">عمر كتبي</h3>
          <p class="font-light">
            مدير خدمات الابتكار للمنشآت الصغيرة والمتوسطة في جامعة الملك عبدالله
            للعلوم والتقنية
          </p>
        </div>
        <!-- 5 -->
        <div
          class="col-span-4 bg-white rounded-2xl p-8 text-center flex flex-col items-center w-full justify-center justify-self-center mx-auto"
        >
          <img
            src="/images/mazen.png"
            alt=""
            class="mb-5 w-[157px] rounded-full"
          />
          <h3 class="text-[22px] font-medium text-[#2A6490]">د.مازن الزايدي</h3>
          <p class="font-light">
            شريك في صندوق STV للاستثمار، وهو أكبر صندوق رأس مال جريء في الشرق
            الأوسط. عضو مجلس الإدارة في شبكة ريادة الاعمال العالمية
          </p>
        </div>
      </div>
    </div>

    <!-- stories -->

    <div class="w-full bg-[#F5F5F7] rounded-[10px] p-8 mb-[48px]">
      <h2 class="text-[24px] font-medium text-center mb-[32px]">
        قصص نجاح المنشآت الابتكارية المشاركة
      </h2>

      <div class="md:grid md:grid-cols-12 flex flex-col gap-[25px]">
        <!-- 1 -->
        <div class="col-span-4 bg-white rounded-2xl p-4 text-start">
          <iframe
            width="100%"
            height="155px"
            src="https://www.youtube.com/embed/BrKHt3WoKBU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            class="mb-5 rounded-lg"
          ></iframe>

          <p class="font-normal text-[22px]">تطبيق #يوما | #جائزة_ابتكر2021</p>
        </div>
        <!-- 2 -->
        <div class="col-span-4 bg-white rounded-2xl p-4 text-start">
          <!-- <img src="/images/xsCompanies.png" alt="" class="mb-5 rounded-lg" /> -->

          <iframe
            width="100%"
            height="155px"
            src="https://www.youtube.com/embed/BrKHt3WoKBU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            class="mb-5 rounded-lg"
          ></iframe>

          <p class="font-normal text-[22px]">شركة #ملاءة | #جائزة_ابتكر2021</p>
        </div>
        <!-- 3 -->
        <div class="col-span-4 bg-white rounded-2xl p-4 text-start">
          <iframe
            width="100%"
            height="155px"
            src="https://www.youtube.com/embed/BrKHt3WoKBU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            class="mb-5 rounded-lg"
          ></iframe>

          <p class="font-normal text-[22px]">شركة #IBoat | #جائزة_ابتكر2021</p>
        </div>
      </div>
    </div>
    <!-- Tesrmonials -->

    <div class="w-full bg-[#F5F5F7] rounded-[10px] p-8 mb-[48px]">
      <h2 class="text-[24px] font-normal text-center mb-[32px]">
        آراء المشاركين
      </h2>

      <div class="md:grid md:grid-cols-12 flex flex-col gap-[25px]">
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
              <h3 class="text-[18px] font-medium text-[#2A6490]">سلمى محمد</h3>
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
              <h3 class="text-[18px] font-medium text-[#2A6490]">خالد أحمد</h3>
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
            class="text-[16px] leading-[22px] font-extralight w-[85%] text-justify"
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
      "هي منشأة صغيرة أو متوسطة استفادت ماليا من تبني تقنية صاعدة أو ابتكار، سواء في المنتجات والخدمات، أم نموذج عملها التجاري، أم في بيئة عملها وعملياتها الداخلية.",
  },
  {
    question: "ماهي الابتكارات؟",
    answer: `هي ما يقدمه الكيان من سلع أو عمليات أو مزيج من السلع والعمليات، بحيث تكون جديدة أو مطورة بشكل ملحوظ، وتكون جاهزة أو شبه جاهزة للاستخدام من قبل الكيان نفسه أو من خلال عملائه.`,
  },
  {
    question: "ماهي التقنيات الصاعدة؟",
    answer:
      "هي التقنيات الحديثة الواعدة التي لا تزال استخداماتها وفوائدها التجارية والاجتماعية تظهر يوما بعد يوم، مثل تقنية الذكاء الاصطناعي وتقنية الحوسبة السحابية وغيرها.",
  },
  {
    question: "ما هو الدعم المقدم للفائزين؟",
    answer:
      "توجد عدة طرق لدعم الفائزين (جوائز نقدية، فرص احتضان، فرص استثمارية، دعم إعلامي، تطوير وتوجيه، تدريب)                                       ",
  },
  {
    question: "ما هي آلية التقديم على الجائزة؟",
    answer:
      "التقديم يكون عن طريق صفحة جائزة ابتكر 3202 في منصة فكرة:                                             https://fikra.sa/e/ebtker",
  },
  {
    question: "هل يوجد جوائز نقدية للفائزين للجائزة؟",
    answer:
      "نعم، بإجمالي يصل إلى 300 ألف ريال سعودي لعدد 3 فائزين، (150 ألف ريال للمركز الأول، 100 ألف ريال للمركز الثاني، و50 ألف ريال للمركز الثالث)، وذلك للمنشآت الفائزة في مسار المنشآت الصغيرة ومتناهية الصغر.",
  },
  {
    question: "ما هي المسارات الخاصة بالجائزة؟",
    answer: `1. مسار المنشآت المتوسطة. 2. مسار المنشآت الصغيرة ومتناهية الصغر.`,
  },
  {
    question: "ما هي مراحل جائزة ابتكر؟",
    answer: `ستكون المسابقة على 5 مراحل، وهي:
     1. فتح التسجيل واستقطاب المنشآت الابتكارية.
     2. تقييم المنشآت الابتكارية من قبل لجنة التحكيم الأولية لمسارات الجائزة.
      3. إلحاق المنشآت الصغيرة والمتناهية الصغر في برنامج النمو الابتكاري.
4. عرض المنشآت المتأهلة على لجنة التحكيم. 5. الحفل الختامي وتوزيع الجوائز.`,
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
