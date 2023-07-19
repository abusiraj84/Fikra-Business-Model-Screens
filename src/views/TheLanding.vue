<template>
  <div
    v-if="!loading"
    class="flex flex-col items-center justify-center h-auto mx-auto px-2 lg:px-0"
  >
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
            class="flex items-center md:flex-row flex-col gap-5 justify-center max-w-[1200px] lg:w-[23%]"
          >
            <button
              type="submit"
              class="w-fit py-[12px] whitespace-nowrap px-[32px] text-center text-white rounded-full bg-primary hover:bg-[#307094] transition-all duration-300 font-light"
            >
              ابدأ رحلتك في عالم الابتكار التجاري
            </button>
            <button
              @click="openModal"
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
          class="z-0 flex items-center justify-center px-6 bm_img h-[200px] md:h-[400px] md:-mt-2 relative"
        >
          <div
            class="hero_img h-[420px] w-[430px] md:h-[620px] md:w-[630px]"
          ></div>
          <div>
            <img
              src="/images/arrow.svg"
              alt=""
              class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
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
              class="flex items-center justify-around p-2 bg-white rounded-lg md:p-5 hover:bg-[#f1f1f1] transition-all"
            >
              <div class="flex flex-col items-start">
                <p class="text-[#042925] text-3xl md:text-4xl">100+</p>
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
              class="flex items-center justify-around p-2 bg-white rounded-lg md:p-5 hover:bg-[#f1f1f1] transition-all"
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
              class="flex items-center justify-around p-2 bg-white rounded-lg md:p-5 hover:bg-[#f1f1f1] transition-all"
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
              class="flex items-center justify-around p-2 bg-white rounded-lg md:p-5 hover:bg-[#f1f1f1] transition-all"
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
          class="flex flex-col justify-start flex-1 py-8 max-w-[1200px] w-full mx-auto z-10 bg-white rounded-[10px] mt-10 mb-8"
        >
          <h3 class="mb-6 text-[32px] leading-9 text-[#042925] font-light">
            قصص نجاح في بوابة فكرة
          </h3>
          <div
            class="grid w-full grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
          >
            <a
              href="https://www.foodics.com/"
              target="_blank"
              class="flex items-center justify-center p-5 bg-white rounded-lg border border-[#EAECF0] hover:bg-[#f1f1f1] transition-all"
            >
              <img
                src="../assets/img/fodex.svg"
                class="w-[140] h-[36px]"
                alt="Icon"
              />
            </a>
            <a
              href="https://www.jahez.net/"
              target="_blank"
              class="flex items-center justify-center p-5 bg-white rounded-lg border border-[#EAECF0] hover:bg-[#f1f1f1] transition-all"
            >
              <img
                src="../assets/img/jahez.svg"
                class="w-[140] h-[36px]"
                alt="Icon"
              />
            </a>
            <a
              href="https://www.hyperpay.com"
              target="_blank"
              class="flex items-center justify-center p-5 bg-white rounded-lg border border-[#EAECF0] hover:bg-[#f1f1f1] transition-all"
            >
              <img
                src="../assets/img/highberbary.svg"
                class="w-[140] h-[36px]"
                alt="Icon"
              />
            </a>
            <a
              href="https://marn.io/"
              target="_blank"
              class="flex items-center justify-center p-5 bg-white rounded-lg border border-[#EAECF0] hover:bg-[#f1f1f1] transition-all"
            >
              <img
                src="../assets/img/marn.svg"
                class="w-[140] h-[36px]"
                alt="Icon"
              />
            </a>
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
            <RouterLink
              to="/services"
              type="button"
              class="px-4 py-2 text-center bg-white border rounded-full md:px-6 text-primary border-primary hover:bg-[#EAF1F8]"
            >
              عرض جميع الخدمات
            </RouterLink>
          </div>
          <!-- List of Services categories -->
          <div
            class="grid w-full grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-4"
          >
            <RouterLink
              to="/services"
              v-for="(card, index) in cards"
              :key="index"
              class="py-3 px-3 bg-gradient-to-b hover:from-[#4882AE] hover:to-[#4882AE] group rounded-lg border border-[#BACDDB] cursor-pointer transition-all duration-300"
              :class="
                card.selected && !isShowAllItems
                  ? 'from-[#407ead] to-[#589ed3d5] text-white'
                  : 'from-[#BED8ED] to-[#ECF6FF]'
              "
            >
              <p
                class="text-[14px] text-left w-full font-extralight group-hover:text-white"
                :class="{ 'text-white': card.selected && !isShowAllItems }"
              >
                {{ card.title }}
              </p>
              <div class="flex items-start gap-2">
                <img
                  :src="card.imgUrl"
                  class="w-[36px] h-[36px] ml-1 group-hover:text-white"
                  :class="{ 'text-white': card.selected && !isShowAllItems }"
                  :alt="card.title"
                />
                <div>
                  <p
                    class="text-[22px] text-[#042925] font-normal group-hover:text-white"
                    :class="{ 'text-white': card.selected && !isShowAllItems }"
                  >
                    {{ card.subtitle }}
                  </p>
                  <p
                    class="text-[15px] text-[#78787A] font-light group-hover:text-white"
                    :class="{ 'text-white': card.selected && !isShowAllItems }"
                  >
                    {{ card.description }}
                  </p>
                </div>
              </div>
            </RouterLink>
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
                class="md:text-[22px] leading-[26px] text-[19px] w-full font-light"
              >
                هل تمثل منشأة صغيرة أو متوسطة نجحت في تنفيذ ابتكار أو تقنية
                صاعدة؟!
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
                class="flex items-center justify-center py-7 px-4 bg-white rounded-lg border border-[#EAECF0 hover:bg-[#f1f1f1] transition-all"
              >
                <img
                  src="../assets/img/dell.svg"
                  class="w-[140px] h-[36px]"
                  alt="Icon"
                />
              </div>
              <div
                class="flex items-center justify-center py-7 px-4 bg-white rounded-lg border border-[#EAECF0] hover:bg-[#f1f1f1] transition-all"
              >
                <img
                  src="../assets/img/huwawai.svg"
                  class="w-[140px] h-[36px]"
                  alt="Icon"
                />
              </div>
              <div
                class="flex items-center justify-center py-7 px-4 bg-white rounded-lg border border-[#EAECF0] hover:bg-[#f1f1f1] transition-all"
              >
                <img
                  src="../assets/img/jahez.svg"
                  class="w-[140px] h-[36px]"
                  alt="Icon"
                />
              </div>
              <div
                class="flex items-center justify-center py-7 px-4 bg-white rounded-lg border border-[#EAECF0] hover:bg-[#f1f1f1] transition-all"
              >
                <img
                  src="../assets/img/highberbary.svg"
                  class="w-[140px] h-[36px]"
                  alt="Icon"
                />
              </div>
              <div
                class="flex items-center justify-center py-7 px-4 bg-white rounded-lg border border-[#EAECF0] hover:bg-[#f1f1f1] transition-all"
              >
                <img
                  src="../assets/img/marn.svg"
                  class="w-[140px] h-[36px]"
                  alt="Icon"
                />
              </div>
              <div
                class="flex items-center justify-center py-7 px-4 bg-white rounded-lg border border-[#EAECF0] hover:bg-[#f1f1f1] transition-all"
              >
                <img
                  src="../assets/img/tyme.svg"
                  class="w-[140px] h-[36px]"
                  alt="Icon"
                />
              </div>
              <div
                class="flex items-center justify-center py-7 px-4 bg-white rounded-lg border border-[#EAECF0] hover:bg-[#f1f1f1] transition-all"
              >
                <img
                  src="../assets/img/sushi.svg"
                  class="w-[140px] h-[36px]"
                  alt="Icon"
                />
              </div>
              <div
                class="flex items-center justify-center py-7 px-4 bg-white rounded-lg border border-[#EAECF0] hover:bg-[#f1f1f1] transition-all"
              >
                <img
                  src="../assets/img/fodex.svg"
                  class="w-[140px] h-[36px]"
                  alt="Icon"
                />
              </div>
              <div
                class="flex items-center justify-center py-7 px-4 bg-white rounded-lg border border-[#EAECF0] hover:bg-[#f1f1f1] transition-all"
              >
                <img
                  src="../assets/img/dyson.svg"
                  class="w-[140px] h-[36px]"
                  alt="Icon"
                />
              </div>
              <div
                class="flex items-center justify-center py-7 px-4 bg-white rounded-lg border border-[#EAECF0] hover:bg-[#f1f1f1] transition-all"
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
              @click="pushToPage(item.id)"
              v-for="item in filteredEvents.slice(0, 5)"
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
                  <p
                    class="text-[#3F3F3F] text-[24px] leading-[18px] font-bold"
                  >
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
                      {{
                        item.status === "upcoming" ? item.duration : " (انتهت)"
                      }}
                    </span>
                  </p>
                  <div
                    class="text-[#3F3F3F] text-[16px] leading-[18px]"
                    v-html="truncateString2(item.desc, 150)"
                  />
                </div>
              </div>
              <button
                v-if="item.status === 'upcoming'"
                class="text-[16px] text-[#307094] font-medium group-hover:underline mt-3 md:mt-0 whitespace-nowrap"
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

            <router-link
              to="/events"
              class="flex items-center justify-center bg-[#F5F5F5] border border-[#EAECF0] rounded-[15px] py-[20px] px-[30px] mt-[10px] cursor-pointer hover:bg-[#EAF1F8]"
            >
              عرض جميع الفعاليات
            </router-link>
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
                class="carousel__item hover:bg-[#EAF1F7] cursor-pointer group transition-all overflow-hidden rounded-lg border border-[#EAECF0] w-full"
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
                    class="rounded-t-lg w-full max-h-[372px] md:max-h-[246px]"
                  />
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
            class="flex flex-col items-start justify-between max-w-[1200px] mx-3 md:w-[50%] py-14"
          >
            <h3 class="text-[22px] md:text-[36px] leading-10 text-white mb-8">
              هل لديك اهتمام بالاستثمار في الشركات الابتكارية؟ لدينا مجموعة من
              الفرص المتاحة..
            </h3>
            <a
              href="/project-investment"
              class="px-4 py-2 mx-1 text-center text-white border border-white rounded-full hover:bg-white hover:text-[#2A6490] duration-300"
            >
              المزيد من المعلومات
            </a>

            <div
              v-if="showModal"
              class="fixed z-10 inset-0 overflow-y-auto"
              aria-labelledby="modal-title"
              role="dialog"
              aria-modal="true"
            >
              <div
                class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
              >
                <div
                  class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                  aria-hidden="true"
                  @click="showModal = false"
                ></div>

                <div
                  class="inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full"
                  style="width: 916px; height: 516px"
                >
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/xHywEra-_KQ"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- SECTION 10 -->
        <div
          class="flex flex-col justify-start flex-1 max-w-[1200px] mx-auto w-full z-[8] bg-white rounded-[10px] mt-24"
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
                class="text-[16px] leading-[22px] font-extralight w-[85%] text-justify"
              >
                {{ item.answer }}
              </p>
            </div>
          </div>
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
import { Carousel, Slide, Navigation } from "vue3-carousel";
import { ref } from "vue";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { useRoute, useRouter } from "vue-router";
import { LottieAnimation } from "lottie-web-vue";
import LoadingJson from "../assets/loading.json";

const showModal = ref(false);
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
const { result, onError, onResult, refetch, loading } = useQuery(
  gql`
    query getLibraryArticles(
      $first: Int!
      $page: Int
      $keyword: String
      $category_id: Int
      $content_type_id: Int
    ) {
      getLibraryArticles(
        first: $first
        page: $page
        keyword: $keyword
        category_id: $category_id
        content_type_id: $content_type_id
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
    content_type_id: 7,
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
      "هي منشأة صغيرة أو متوسطة استفادت مالي ا من تبني تقنية صاعدة أو ابتكار، سوا ء في المنتجات والخدمات، أم نموذج عملها التجاري، أم في بيئة عملها وعملياتها الداخلية.",
  },
  {
    question: "ماهي الابتكارات؟",
    answer: `المنشأة الابتكارات (Innovations) هي ما يقدمه الكيان من سلع (منتجات أو خدمات) أو عمليات (نموذج عمل تجاري أو بيئة عمل أو عمليات داخلية) أو مزيج من السلع والعمليات، بحيث تكون جديدة أو مطورة بشكل ملحوظ، وتكون جاهزة أو شبه جاهزة للاستخدام من قبل الكيان نفسه أو من خلال عملائه.`,
  },
  {
    question: "ماهي التقنيات الصاعدة؟",
    answer:
      "لوريم التقنيات الصاعدة (Emerging Technologies) هي التقنيات الحديثة الواعدة التي لا تزال استخداماتها وفوائدها التجارية والاجتماعية تظهر يوماً بعد يوم، مثل تقنية الذكاء الاصطناعي وتقنية الحوسبة السحابية وتقنية النمذجة السريعة والتقنية الحيوية وغيرها.",
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
function truncateString2(str, num) {
  return str.length > num ? str.slice(0, num) + "..." : str;
}

function openModal() {
  showModal.value = true;
}

function formatDate(date) {
  let d = new Date(date);
  let month = d.toLocaleString("ar-EG", { month: "long" });
  let day = d.getDate();
  let year = d.getFullYear();
  return `${day} ${month} ${year}`;
}
const categoryID = ref(0);

let events = ref([]);
let filteredEvents = ref([]);
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
        categoryID: event.category.id,
        duration: durationSecToMin(event.duration),
      };
    });
    relatedEvents(); // filter events initially after fetching
  } else {
    console.warn("Unexpected data structure:", data);
  }
});

function relatedEvents() {
  // category
  if (categoryID.value !== 0) {
    filteredEvents.value = events.value.filter(
      (event) => event.categoryID === categoryID.value
    );
    console.log(filteredEvents.value, "filteredEvents" + categoryID.value);
  } else {
    filteredEvents.value = events.value;
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

function formatDate2(date) {
  let d = new Date(date);
  let month = d.toLocaleString("ar-EG", { month: "long" });
  let day = d.getDate();
  let year = d.getFullYear();
  return `${day} ${month} ${year}`;
}

let cards = ref([]);
async function fetchCards() {
  // Fetch your data from the server and set the cards array
  // Replace with the actual server call
  const response = await fetch("/services.json");
  cards = await response.json();
}
fetchCards();
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
