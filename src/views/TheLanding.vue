<template>
  <div class="flex flex-col items-center justify-center h-auto mx-auto">
    <div class="flex flex-col w-full">
      <div class="flex flex-col flex-1 overflow-hidden pb-28">
        <!-- SECTION 1 -->
        <div
          class="flex flex-col items-center justify-center bg-[#BED8ED] pt-20 pb-28"
        >
          <div
            class="w-[85%] md:w-[40%] xl:w-[30%] text-center text-[48px] md:text-[62px] leading-[68px] font-[460] whitespace-nowrap text-[#1E1E1E] flex justify-center"
          >
            <h1>
              <span class="text-[#307094]">فكـرة</span> لديك نحوّلها إلى
              <br />
              كيان تجاري ابتكاري <br />
              قـائـم وفعّـال
            </h1>
          </div>
          <p
            class="text-[20px] md:text-[24px] leading-[32px] text-[#1E1E1E] mt-4 mb-7 w-[80%] md:w-full text-center font-light"
          >
            من خلال تسخير خدمات أكثر من 100 جهة حكومية وخاصة
          </p>
          <div
            class="flex items-center gap-5 justify-center max-w-[1200px] w-[85%] lg:w-[23%]"
          >
            <button
              type="submit"
              class="w-fit py-[12px] whitespace-nowrap px-[32px] text-center text-white rounded-full bg-primary hover:bg-[#307094] transition-all duration-300 font-light"
            >
              ابدأ رحلتك في عالم الابتكار التجاري
            </button>
            <button
              type="button"
              class="w-fit py-[12px] px-[32px] text-center border border-black rounded-full text-balck hover:bg-white transition-all duration-300 whitespace-nowrap font-light flex gap-2"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.5 8.96533C9.5 8.48805 9.5 8.24941 9.59974 8.11618C9.68666 8.00007 9.81971 7.92744 9.96438 7.9171C10.1304 7.90525 10.3311 8.03429 10.7326 8.29239L15.4532 11.3271C15.8016 11.551 15.9758 11.663 16.0359 11.8054C16.0885 11.9298 16.0885 12.0702 16.0359 12.1946C15.9758 12.337 15.8016 12.449 15.4532 12.6729L10.7326 15.7076C10.3311 15.9657 10.1304 16.0948 9.96438 16.0829C9.81971 16.0726 9.68666 15.9999 9.59974 15.8838C9.5 15.7506 9.5 15.512 9.5 15.0347V8.96533Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              شاهد ماهي بوابة فكرة
            </button>
          </div>
        </div>
        <!-- SECTION 2 -->
        <div
          class="z-0 flex items-center justify-center px-6 bm_img h-[200px] md:h-[400px] md:-mt-2"
        >
          <div
            class="hero_img h-[420px] w-[430px] md:h-[620px] md:w-[630px]"
          ></div>
        </div>
        <!-- SECTION 11 (Logged In Only) -->
        <div
          v-if="isLoggedIn"
          class="flex flex-col justify-start flex-1 p-8 mx-auto max-w-[1200px] w-full z-10 bg-white rounded-[10px] opacity-95 -mt-[128px] mb-12"
        >
          <div
            class="flex flex-col items-start justify-between w-full mb-6 md:items-center md:flex-row"
          >
            <div class="flex flex-col items-start justify-start">
              <h3 class="text-[22px] md:text-[32px] leading-9 text-[#042925]">
                شهادة المنشأة الابتكارية
              </h3>
              <p class="leading-[34px] text-primary text-[18px] w-full">
                6 طلبات
              </p>
            </div>
            <button
              type="button"
              class="text-[20px] hover:underline hover:text-primary"
            >
              جميع الطلبات
            </button>
          </div>
          <div class="grid w-full grid-cols-1 gap-2 md:grid-cols-2">
            <div
              class="p-8 bg-white rounded-lg border border-[#EAECF0] hover:border-primary space-y-4"
            >
              <div class="flex items-center justify-between">
                <img src="../assets/img/ns3a.svg" class="w-[137px] h-[50px]" />
                <p class="text-[18px]">تحت الدارسة</p>
              </div>
              <p class="text-[16px] text-[#78787A]">
                الاستثمار الجريء والدعم النشط للشركات المحفظة يتم الاستثمار بعد
                التحليل العميق للشركة المستهدف
              </p>
            </div>
            <div
              class="p-8 bg-white rounded-lg border border-[#EAECF0] hover:border-primary space-y-4"
            >
              <div class="flex items-center justify-between">
                <img
                  src="../assets/img/Al-baha.svg"
                  class="w-[137px] h-[50px]"
                />
                <p class="text-[18px]">تم القبول</p>
              </div>
              <p class="text-[16px] text-[#78787A]">
                الاستثمار الجريء والدعم النشط للشركات المحفظة يتم الاستثمار بعد
                التحليل العميق للشركة المستهدف
              </p>
            </div>
          </div>
        </div>
        <!-- SECTION 3 -->
        <div
          class="flex flex-col justify-start flex-1 p-8 max-w-[1200px] mx-auto w-full z-10 bg-[#96B2C8] rounded-[10px] mt-4 mb-10"
        >
          <h3 class="mb-3 text-[32px] leading-9 text-white">
            ماهي بوابة فكرة؟
          </h3>
          <p class="mb-4 text-[20px] leading-8 text-white font-extralight">
            لكون الابتكار التجاري لا ينشأ أو ينمو إلا على قاعدة معرفية رصينة
            وشبكة علاقات فعالة. تأتي بوابة الابتكار التجاري الوطنية “فكرة” لتقدم
            لك من خلال أقسامها المختلفة مجموعة من الأدوات غير المسبوقة في السوق
            السعودي. أدواتنا ستساند أفكارك الابتكارية في رحلة الازدهار أينما كان
            موقعك الجغرافي في المملكة.
          </p>
          <div
            class="grid w-full grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 font-extralight"
          >
            <div
              class="flex items-center justify-around p-2 bg-white rounded-lg md:p-5"
            >
              <div class="flex flex-col items-start">
                <p class="text-[#042925] text-3xl md:text-4xl">60+</p>
                <p
                  class="text-black font-normal text-md md:text-xl leading-[20px]"
                >
                  جهة
                </p>
              </div>
              <img
                src="../assets/img/reward.svg"
                class="w-[30px] h-[30px] md:w-[50px] md:h-[50px]"
                alt="Icon"
              />
            </div>
            <div
              class="flex items-center justify-around p-2 bg-white rounded-lg md:p-5"
            >
              <div class="flex flex-col items-start">
                <p class="text-[#042925] text-3xl md:text-4xl">220+</p>
                <p
                  class="text-black font-normal text-md md:text-xl leading-[20px]"
                >
                  مبتكر تجاري
                </p>
              </div>
              <img
                src="../assets/img/businessman.svg"
                class="w-[30px] h-[30px] md:w-[50px] md:h-[50px]"
                alt="Icon"
              />
            </div>
            <div
              class="flex items-center justify-around p-2 bg-white rounded-lg md:p-5"
            >
              <div class="flex flex-col items-start">
                <p class="text-[#042925] text-3xl md:text-4xl">150+</p>
                <p
                  class="text-black font-normal text-md md:text-xl leading-[20px]"
                >
                  الخدمات المنفذة
                </p>
              </div>
              <img
                src="../assets/img/event.svg"
                class="w-[30px] h-[30px] md:w-[50px] md:h-[50px]"
                alt="Icon"
              />
            </div>
            <div
              class="flex items-center justify-around p-2 bg-white rounded-lg md:p-5"
            >
              <div class="flex flex-col items-start">
                <p class="text-[#042925] text-3xl md:text-4xl">20+</p>
                <p
                  class="text-black font-normal text-md md:text-xl leading-[20px]"
                >
                  قصص النجاح
                </p>
              </div>
              <img
                src="../assets/img/rocket.svg"
                class="w-[30px] h-[30px] md:w-[50px] md:h-[50px]"
                alt="Icon"
              />
            </div>
          </div>
        </div>
        <!-- SECTION 4 -->
        <div
          class="flex flex-col justify-start flex-1 py-8 max-w-[1200px] mx-auto w-[85%] z-10 bg-white rounded-[10px] mt-10 mb-8"
        >
          <h3 class="mb-6 text-[32px] leading-9 text-[#042925] font-light">
            قصص نجاح في بوابة فكرة
          </h3>
          <div
            class="grid w-full grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
          >
            <div
              class="flex items-center justify-center p-5 bg-white rounded-lg border border-[#EAECF0]"
            >
              <img
                src="../assets/img/fodex.svg"
                class="w-[140] h-[36px]"
                alt="Icon"
              />
            </div>
            <div
              class="flex items-center justify-center p-5 bg-white rounded-lg border border-[#EAECF0]"
            >
              <img
                src="../assets/img/jahez.svg"
                class="w-[140] h-[36px]"
                alt="Icon"
              />
            </div>
            <div
              class="flex items-center justify-center p-5 bg-white rounded-lg border border-[#EAECF0]"
            >
              <img
                src="../assets/img/highberbary.svg"
                class="w-[140] h-[36px]"
                alt="Icon"
              />
            </div>
            <div
              class="flex items-center justify-center p-5 bg-white rounded-lg border border-[#EAECF0]"
            >
              <img
                src="../assets/img/marn.svg"
                class="w-[140] h-[36px]"
                alt="Icon"
              />
            </div>
          </div>
        </div>
        <!-- SECTION 5 -->
        <div
          class="flex flex-col justify-start flex-1 max-w-[1200px] mx-auto w-full z-10 bg-white rounded-[10px] mt-4"
        >
          <div
            class="flex flex-col items-start justify-between w-full mb-6 md:items-center md:flex-row"
          >
            <h3 class="text-[36px] md:text-[32px] leading-9 text-[#042925]">
              خدمات منظومة الابتكار
            </h3>
            <button
              type="button"
              class="px-4 py-2 text-center bg-white border rounded-full md:px-6 text-primary border-primary hover:bg-[#EAF1F8]"
            >
              عرض جميع الخدمات
            </button>
          </div>
          <div
            class="grid w-full grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-4"
          >
            <div
              class="py-3 px-3 bg-gradient-to-b from-[#BED8ED] to-[#ECF6FF] hover:from-[#4882AE] hover:to-[#4882AE] group rounded-lg border border-[#BACDDB]"
            >
              <p
                class="text-[14px] text-left w-full font-extralight group-hover:text-white"
              >
                10 جهات
              </p>
              <div class="flex items-start">
                <img
                  src="../assets/img/training_icon.svg"
                  class="w-[36px] h-[36px] ml-1 group-hover:text-white"
                  alt="Icon"
                />
                <div>
                  <p
                    class="text-[22px] text-[#042925] font-normal group-hover:text-white"
                  >
                    التدريب
                  </p>
                  <p
                    class="text-[15px] text-[#78787A] font-light group-hover:text-white"
                  >
                    يهدف اكتساب مهارات لبناء فكرتك
                  </p>
                </div>
              </div>
            </div>
            <div
              class="py-3 px-3 bg-gradient-to-b from-[#BED8ED] to-[#ECF6FF] hover:from-[#4882AE] hover:to-[#4882AE] group rounded-lg border border-[#BACDDB]"
            >
              <p
                class="text-[14px] text-left w-full font-extralight group-hover:text-white"
              >
                10 جهات
              </p>
              <div class="flex items-start">
                <img
                  src="../assets/img/checkboard.svg"
                  class="w-[36px] h-[36px] ml-1"
                  alt="Icon"
                />
                <div>
                  <p
                    class="text-[22px] text-[#042925] font-normal group-hover:text-white"
                  >
                    دراسة السوق
                  </p>
                  <p
                    class="text-[15px] text-[#78787A] font-light group-hover:text-white"
                  >
                    اكتشاف الفرص والاحتياجات لفكرتك
                  </p>
                </div>
              </div>
            </div>
            <div
              class="py-3 px-3 bg-gradient-to-b from-[#BED8ED] to-[#ECF6FF] hover:from-[#4882AE] hover:to-[#4882AE] group rounded-lg border border-[#BACDDB]"
            >
              <p
                class="text-[14px] text-left w-full font-extralight group-hover:text-white"
              >
                10 جهات
              </p>
              <div class="flex items-start">
                <img
                  src="../assets/img/ruler.svg"
                  class="w-[36px] h-[36px] ml-1"
                  alt="Icon"
                />
                <div>
                  <p
                    class="text-[22px] text-[#042925] font-normal group-hover:text-white"
                  >
                    اختبار الافكار
                  </p>
                  <p
                    class="text-[15px] text-[#78787A] font-light group-hover:text-white"
                  >
                    ابحث عن صحة فكرتك قبل الإطلاق
                  </p>
                </div>
              </div>
            </div>
            <div
              class="py-3 px-3 bg-gradient-to-b from-[#BED8ED] to-[#ECF6FF] hover:from-[#4882AE] hover:to-[#4882AE] group rounded-lg border border-[#BACDDB]"
            >
              <p
                class="text-[14px] text-left w-full font-extralight group-hover:text-white"
              >
                10 جهات
              </p>
              <div class="flex items-start">
                <img
                  src="../assets/img/tv_input.svg"
                  class="w-[36px] h-[36px] ml-1"
                  alt="Icon"
                />
                <div>
                  <p
                    class="text-[22px] text-[#042925] font-normal group-hover:text-white"
                  >
                    التصميم والتنفيذ
                  </p>
                  <p
                    class="text-[15px] text-[#78787A] font-light group-hover:text-white"
                  >
                    طور وابدأ بعملية اختبار فكرتك
                  </p>
                </div>
              </div>
            </div>
            <div
              class="py-3 px-3 bg-gradient-to-b from-[#BED8ED] to-[#ECF6FF] hover:from-[#4882AE] hover:to-[#4882AE] group rounded-lg border border-[#BACDDB]"
            >
              <p
                class="text-[14px] text-left w-full font-extralight group-hover:text-white"
              >
                10 جهات
              </p>
              <div class="flex items-start">
                <img
                  src="../assets/img/training_icon.svg"
                  class="w-[36px] h-[36px] ml-1"
                  alt="Icon"
                />
                <div>
                  <p
                    class="text-[22px] text-[#042925] font-normal group-hover:text-white"
                  >
                    التدريب
                  </p>
                  <p
                    class="text-[15px] text-[#78787A] font-light group-hover:text-white"
                  >
                    يهدف اكتساب مهارات لبناء فكرتك
                  </p>
                </div>
              </div>
            </div>
            <div
              class="py-3 px-3 bg-gradient-to-b from-[#BED8ED] to-[#ECF6FF] hover:from-[#4882AE] hover:to-[#4882AE] group rounded-lg border border-[#BACDDB]"
            >
              <p
                class="text-[14px] text-left w-full font-extralight group-hover:text-white"
              >
                10 جهات
              </p>
              <div class="flex items-start">
                <img
                  src="../assets/img/checkboard.svg"
                  class="w-[36px] h-[36px] ml-1"
                  alt="Icon"
                />
                <div>
                  <p
                    class="text-[22px] text-[#042925] font-normal group-hover:text-white"
                  >
                    دراسة السوق
                  </p>
                  <p
                    class="text-[15px] text-[#78787A] font-light group-hover:text-white"
                  >
                    اكتشاف الفرص والاحتياجات لفكرتك
                  </p>
                </div>
              </div>
            </div>
            <div
              class="py-3 px-3 bg-gradient-to-b from-[#BED8ED] to-[#ECF6FF] hover:from-[#4882AE] hover:to-[#4882AE] group rounded-lg border border-[#BACDDB]"
            >
              <p
                class="text-[14px] text-left w-full font-extralight group-hover:text-white"
              >
                10 جهات
              </p>
              <div class="flex items-start">
                <img
                  src="../assets/img/ruler.svg"
                  class="w-[36px] h-[36px] ml-1"
                  alt="Icon"
                />
                <div>
                  <p
                    class="text-[22px] text-[#042925] font-normal group-hover:text-white"
                  >
                    اختبار الافكار
                  </p>
                  <p
                    class="text-[15px] text-[#78787A] font-light group-hover:text-white"
                  >
                    ابحث عن صحة فكرتك قبل الإطلاق
                  </p>
                </div>
              </div>
            </div>
            <div
              class="py-3 px-3 bg-gradient-to-b from-[#BED8ED] to-[#ECF6FF] hover:from-[#4882AE] hover:to-[#4882AE] group rounded-lg border border-[#BACDDB]"
            >
              <p
                class="text-[14px] text-left w-full font-extralight group-hover:text-white"
              >
                10 جهات
              </p>
              <div class="flex items-start">
                <img
                  src="../assets/img/tv_input.svg"
                  class="w-[36px] h-[36px] ml-1"
                  alt="Icon"
                />
                <div>
                  <p
                    class="text-[22px] text-[#042925] font-normal group-hover:text-white"
                  >
                    التصميم والتنفيذ
                  </p>
                  <p
                    class="text-[15px] text-[#78787A] font-ligh group-hover:text-white"
                  >
                    طور وابدأ بعملية اختبار فكرتك
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- SECTION 6 -->
        <div
          class="flex flex-col mt-[104px] justify-start flex-1 mx-auto w-full max-w-[1200px] z-10 bg-white rounded-[10px]"
        >
          <div
            class="flex flex-col items-start justify-between w-full mb-6 md:items-center md:flex-row"
          >
            <div class="flex flex-col items-start justify-start">
              <h3 class="text-[22px] md:text-[32px] leading-9 text-[#042925]">
                شهادة المنشأة الابتكارية
              </h3>
              <p
                class="md:text-[22px] leading-[26px] md:w-[70%] text-[19px] w-full font-light"
              >
                هل تمثل منشأة صغيرة أو متوسطة نجحت في تنفيذ ابتكار أو تقنية
                صاعدة؟ أحصل على الشهادة اليوم واستفد من المزايا!
              </p>
            </div>
            <button
              type="button"
              class="px-4 md:px-6 md:mt-0 mt-2 py-2 text-center bg-[#2A6490] whitespace-nowrap rounded-full w-fit text-white hover:bg-[#307094] transition-all duration-300"
            >
              اطلب الشهادة
            </button>
          </div>
          <div class="bg-[#E8F1F8] p-6 md:p-12 rounded-lg">
            <h1
              class="text-center text-[22px] md:text-[28px] leading-9 text-[#042925] mb-6 font-light"
            >
              الحاصلون على الشهادة
            </h1>
            <div
              class="grid w-full grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5"
            >
              <div
                class="flex items-center justify-center py-7 px-4 bg-white rounded-lg border border-[#EAECF0]"
              >
                <img
                  src="../assets/img/dell.svg"
                  class="w-[140px] h-[36px]"
                  alt="Icon"
                />
              </div>
              <div
                class="flex items-center justify-center py-7 px-4 bg-white rounded-lg border border-[#EAECF0]"
              >
                <img
                  src="../assets/img/huwawai.svg"
                  class="w-[140px] h-[36px]"
                  alt="Icon"
                />
              </div>
              <div
                class="flex items-center justify-center py-7 px-4 bg-white rounded-lg border border-[#EAECF0]"
              >
                <img
                  src="../assets/img/jahez.svg"
                  class="w-[140px] h-[36px]"
                  alt="Icon"
                />
              </div>
              <div
                class="flex items-center justify-center py-7 px-4 bg-white rounded-lg border border-[#EAECF0]"
              >
                <img
                  src="../assets/img/highberbary.svg"
                  class="w-[140px] h-[36px]"
                  alt="Icon"
                />
              </div>
              <div
                class="flex items-center justify-center py-7 px-4 bg-white rounded-lg border border-[#EAECF0]"
              >
                <img
                  src="../assets/img/marn.svg"
                  class="w-[140px] h-[36px]"
                  alt="Icon"
                />
              </div>
              <div
                class="flex items-center justify-center py-7 px-4 bg-white rounded-lg border border-[#EAECF0]"
              >
                <img
                  src="../assets/img/tyme.svg"
                  class="w-[140px] h-[36px]"
                  alt="Icon"
                />
              </div>
              <div
                class="flex items-center justify-center py-7 px-4 bg-white rounded-lg border border-[#EAECF0]"
              >
                <img
                  src="../assets/img/sushi.svg"
                  class="w-[140px] h-[36px]"
                  alt="Icon"
                />
              </div>
              <div
                class="flex items-center justify-center py-7 px-4 bg-white rounded-lg border border-[#EAECF0]"
              >
                <img
                  src="../assets/img/fodex.svg"
                  class="w-[140px] h-[36px]"
                  alt="Icon"
                />
              </div>
              <div
                class="flex items-center justify-center py-7 px-4 bg-white rounded-lg border border-[#EAECF0]"
              >
                <img
                  src="../assets/img/dyson.svg"
                  class="w-[140px] h-[36px]"
                  alt="Icon"
                />
              </div>
              <div
                class="flex items-center justify-center py-7 px-4 bg-white rounded-lg border border-[#EAECF0]"
              >
                <img
                  src="../assets/img/sushi.svg"
                  class="w-[140px] h-[36px]"
                  alt="Icon"
                />
              </div>
            </div>
          </div>
        </div>
        <!-- SECTION 7 -->
        <div
          class="flex flex-col justify-start flex-1 mx-auto w-full max-w-[1200px] z-10 bg-white rounded-[10px] mt-[104px]"
        >
          <div
            class="flex flex-col items-start justify-between w-full mb-6 md:items-center md:flex-row"
          >
            <h3
              class="text-[22px] md:text-[32px] leading-9 text-[#042925] font-light"
            >
              فعاليات الابتكار التجاري
            </h3>
          </div>
          <div class="grid w-full grid-cols-1 gap-4">
            <div
              class="py-5 px-4 bg-white rounded-lg border border-[#EAECF0] flex flex-col md:flex-row items-start md:items-center justify-between hover:bg-[#EAF1F7] cursor-pointer"
            >
              <div class="flex items-center">
                <div
                  class="bg-[#E1F2E8] border border-[#027A48] text-center py-4 px-2 rounded-lg ml-4"
                >
                  <p
                    class="text-[#158456] text-[28px] leading-[26px] font-extralight"
                  >
                    28
                  </p>
                  <p
                    class="text-[#158456] text-[16px] leading-[18px] font-extralight"
                  >
                    مارس
                  </p>
                </div>
                <div class="flex flex-col items-start justify-center space-y-3">
                  <p
                    class="text-[#3F3F3F] text-[24px] leading-[18px] font-normal"
                  >
                    كيف اختبر فكرتي؟
                  </p>
                  <p class="text-[#3F3F3F] text-[16px] leading-[18px]">
                    ورشة عمل<span class="text-[#158456] font-light"
                      >(قادمة)</span
                    >
                  </p>
                  <p
                    class="text-[#3F3F3F] text-[16px] leading-[18px] font-normal"
                  >
                    ورشة عمل مجانية لمدة ساعة في جدة بعنون “ابحث عن صحة فكرتك
                    قبل اللإطلاق”
                  </p>
                </div>
              </div>
              <button
                class="text-[16px] text-[#307094] hover:underline mt-3 md:mt-0"
              >
                سجل الآن
              </button>
            </div>
            <div
              class="py-5 px-4 bg-white rounded-lg border border-[#EAECF0] flex flex-col md:flex-row items-start md:items-center justify-between hover:bg-[#EAF1F7] cursor-pointer"
            >
              <div class="flex items-center">
                <div
                  class="bg-[#E1F2E8] border border-[#027A48] text-center py-4 px-2 rounded-lg ml-4"
                >
                  <p
                    class="text-[#158456] text-[28px] leading-[26px] font-extralight"
                  >
                    04
                  </p>
                  <p
                    class="text-[#158456] text-[16px] leading-[18px] font-extralight"
                  >
                    مارس
                  </p>
                </div>
                <div class="flex flex-col items-start justify-center space-y-3">
                  <p
                    class="text-[#3F3F3F] text-[24px] leading-[18px] font-normal"
                  >
                    ورشة ذكاء: انترنت الأشياء في صناعة المستقبل
                  </p>
                  <p class="text-[#3F3F3F] text-[16px] leading-[18px]">
                    ورشة عمل<span class="text-[#158456] font-light"
                      >(قادمة)</span
                    >
                  </p>
                  <p class="text-[#3F3F3F] text-[16px] leading-[18px]">
                    ورشة عمل مجانية لمدة ساعة في جدة بعنون “ابحث عن صحة فكرتك
                    قبل اللإطلاق”
                  </p>
                </div>
              </div>
              <button
                class="text-[16px] text-[#307094] hover:underline mt-3 md:mt-0"
              >
                سجل الآن
              </button>
            </div>
            <div
              class="py-5 px-4 bg-white rounded-lg border border-[#EAECF0] flex flex-col md:flex-row items-start md:items-center justify-between hover:bg-[#EAF1F7] cursor-pointer"
            >
              <div class="flex items-center">
                <div
                  class="bg-[#FEF3F2] border border-[#FDA29B] text-center py-4 px-2 rounded-lg ml-4"
                >
                  <p
                    class="text-[#912018] text-[28px] leading-[26px] font-light"
                  >
                    17
                  </p>
                  <p
                    class="text-[#912018] text-[16px] leading-[18px] font-light"
                  >
                    فبراير
                  </p>
                </div>
                <div class="flex flex-col items-start justify-center space-y-3">
                  <p
                    class="text-[#3F3F3F] text-[24px] leading-[18px] font-normal"
                  >
                    استشارات للشركات الناشئة
                  </p>
                  <p class="text-[#3F3F3F] text-[16px] leading-[18px]">
                    دورة تدريبية<span class="text-[#FF3A46]">(أنتهت)</span>
                  </p>
                  <p class="text-[#3F3F3F] text-[16px] leading-[18px]">
                    تبدأ عملية اختيار الفكرة بعد وضع الاساسيات واختبارها مع
                    مجموعة من العملاء بطرق متنوعة ومختلفة.
                  </p>
                </div>
              </div>
              <button
                class="text-[16px] text-[#FF3A46] hover:underline mt-3 md:mt-0"
              >
                التسجيل مغلق
              </button>
            </div>
            <button
              class="py-5 bg-[#EAECF0] rounded-lg outline outline-[#EAECF0] hover:outline-1 hover:outline-primary"
            >
              <p class="text-[16px] text-center w-full text-[#307094]">
                عرض جميع الفعاليات
              </p>
            </button>
          </div>
        </div>
        <!-- SECTION 8 Courasael -->
        <div
          class="flex flex-col justify-start flex-1 mx-auto max-w-[1200px] w-full z-10 bg-white rounded-[10px] border-t border-t-[#F5F5F7] mt-20 pt-20"
        >
          <div class="flex items-center justify-between w-full mb-6">
            <h3 class="text-[20px] md:text-[32px] leading-9 text-[#042925]">
              مكتبة الابتكار
            </h3>
            <router-link
              to="/library"
              class="text-[14px] md:text-[16px] px-4 py-2 text-center bg-white border rounded-full md:px-6 text-primary border-primary hover:bg-[#EAF1F8] hover:border-[#307094] hover:text-[#307094]"
            >
              عرض محتويات المكتبة
            </router-link>
          </div>
          <Carousel
            :items-to-show="1"
            dir="rtl"
            :breakpoints="{
              768: {
                itemsToShow: 2,
              },
              1130: {
                itemsToShow: 3,
              },
            }"
          >
            <template #addons>
              <Navigation />
            </template>
            <Slide v-for="item in carouselItems" :key="item.title">
              <router-link
                :to="`/article/${item.id}`"
                class="carousel__item hover:bg-[#EAF1F7] cursor-pointer group transition-all overflow-hidden rounded-lg"
              >
                <div class="relative">
                  <div
                    class="text-[16px] leading-[22px] py-1 px-3 top-5 right-5 absolute bg-[#FFFFFFCC] rounded-xl"
                  >
                    {{ item.category.name }}
                  </div>
                  <img
                    :src="item.featured_image"
                    :alt="item.title"
                    class="rounded-t-lg"
                  />
                  <div
                    class="border rounded-b-lg border-[#EAECF0] p-4 text-right"
                  >
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
                </div>
              </router-link>
            </Slide>
          </Carousel>
        </div>
        <!-- SECTION 9 -->
        <div
          class="flex items-center justify-center max-w-[1200px] mx-auto w-full z-10 bg-[#2A6490] rounded-[10px] mt-20 overflow-hidden"
        >
          <img
            src="../assets/img/IntrestedIndividual.png"
            alt="Coin In Hand"
            class="hidden mx-3 -mb-1 md:block h-[302px]"
          />
          <div
            class="flex flex-col items-start justify-between max-w-[1200px] mx-3 w-[85%] md:w-[50%] py-14"
          >
            <h3 class="text-[22px] md:text-[36px] leading-10 text-white mb-8">
              هل لديك اهتمام بالاستثمار في الشركات الابتكارية؟ لدينا مجموعة من
              الفرص المتاحة..
            </h3>
            <button
              type="button"
              class="px-4 py-2 mx-1 text-center text-white border border-white rounded-full hover:bg-white hover:text-[#2A6490] duration-300"
            >
              شاهد ماهي بوابة فكرة
            </button>
          </div>
        </div>
        <!-- SECTION 10 -->
        <div
          class="flex flex-col justify-start flex-1 max-w-[1200px] mx-auto w-full xl:w-[72.5%] z-10 bg-white rounded-[10px] mt-24"
        >
          <div
            class="flex flex-col items-start justify-between w-full mb-6 md:items-center md:flex-row"
          >
            <h3 class="text-[22px] md:text-[36px] leading-9 text-[#042925]">
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
    </div>
  </div>
</template>

<script setup>
import { Carousel, Slide, Navigation } from "vue3-carousel";
import { ref } from "vue";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

// const carouselItems = [
//   {
//     title: "كيف اختبر فكرتي؟",
//     desc: "تبدأ عملية اختيار الفكرة بعد وضع الأساسيات واختبارها مع مجموعة من العملاء بطرق مختلفة ومتنوعة",
//     date: "28 فبراير 2022",
//     img: "https://images.pexels.com/photos/1314410/pexels-photo-1314410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     category: "مرحلة الفكرة",
//   },
//   {
//     title: "كيف اختار الشركة المناسبة؟",
//     desc: "من أهم المقومات لنجاح الفكرة هو اختيار الشركة المناسبة لتنفيذ وتصميم الفكرة",
//     date: "28 فبراير 2022",
//     img: "https://images.pexels.com/photos/207607/pexels-photo-207607.jpeg?auto=compress&cs=tinysrgb&w=1600",
//     category: "تأسيس الشركات",
//   },
//   {
//     title: "ما أهمية التدريب؟",
//     desc: "لبناء فكرة معينة فأنت بحاجة إلى مجموعة من المهارات الي بدورها ستساعدك في بناء الفكرة",
//     date: "28 فبراير 2022",
//     img: "https://images.pexels.com/photos/45718/pexels-photo-45718.jpeg?auto=compress&cs=tinysrgb&w=1600",
//     category: "التوجيه والارشاد",
//   },
//   {
//     title: "ما أهمية التدريب؟",
//     desc: "لبناء فكرة معينة فأنت بحاجة إلى مجموعة من المهارات الي بدورها ستساعدك في بناء الفكرة",
//     date: "28 فبراير 2022",
//     img: "https://images.pexels.com/photos/3153207/pexels-photo-3153207.jpeg?auto=compress&cs=tinysrgb&w=1600",
//     category: "مرحلة الفكرة",
//   },
//   {
//     title: "ما أهمية التدريب؟",
//     desc: "لبناء فكرة معينة فأنت بحاجة إلى مجموعة من المهارات الي بدورها ستساعدك في بناء الفكرة",
//     date: "28 فبراير 2022",
//     img: "https://images.pexels.com/photos/3183190/pexels-photo-3183190.jpeg?auto=compress&cs=tinysrgb&w=1600",
//     category: "تأسيس الشركات",
//   },
// ];

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
const carouselItems = ref([]);

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
    carouselItems.value = data.getLibraryArticles.data;

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
  } else {
    console.warn("Unexpected data structure:", data);
  }
});

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

let isLoggedIn = ref(false);

const openIndex = ref(null);

function toggleFaq(index) {
  if (openIndex.value !== index) return (openIndex.value = index);
  openIndex.value = null;
}

function truncateString(str) {
  return str.length > 80 ? str.slice(0, 80) + "..." : str;
}
</script>
