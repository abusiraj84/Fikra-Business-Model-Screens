<template>
  <footer class="bg-primary">
    <div class="mx-auto w-full max-w-[1200px] py-6 lg:py-8 px-3 xl:px-0">
      <div class="md:flex md:justify-between">
        <div class="mb-6 md:mb-0">
          <router-link to="/" class="flex items-center">
            <img src="../assets/img/logo_white.svg" class="h-20" alt="Logo" />
          </router-link>
        </div>
        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <ul class="text-white font-light">
              <li class="mb-3">
                <a
                  href="https://www.thakaa.sa/"
                  target="_blank"
                  class="hover:text-white hover:underline"
                  >مركز ذكاء</a
                >
              </li>
              <li class="mb-3">
                <a
                  href="http://swin.sa.com/ar/Pages/default.aspx"
                  target="_blank"
                  class="hover:text-white hover:underline"
                  >مركز مياه</a
                >
              </li>
            </ul>
          </div>
          <div>
            <ul class="text-white font-light">
              <li class="mb-3">
                <a
                  target="_blank"
                  href="https://monshaat.gov.sa/about"
                  class="hover:text-white hover:underline"
                  >عن منشآت
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://monshaat.gov.sa/all-services-page"
                  class="hover:text-white hover:underline"
                  >خدمات منشآت
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul class="text-white font-light">
              <li class="mb-3">
                <a
                  target="_blank"
                  href="https://monshaat.gov.sa/media-center"
                  class="hover:text-white hover:underline"
                  >المركز الإعلامي
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white w-full px-3 xl:px-0">
      <div
        class="w-full max-w-[1200px] flex flex-col items-center justify-between space-y-4 mx-auto md:flex-row md:space-y-0 py-6"
      >
        <span class="text-grey sm:text-center font-light text-sm"
          >جميع الحقوق محفوظة للهيئة العامة للمنشآت الصغيرة والمتوسطة © 2023
        </span>
        <div class="flex justify-between items-center">
          <a
            href="https://www.youtube.com/channel/UCajQIzMWeWK9bRQv5Ue3oUQ"
            target="_blank"
          >
            <img src="../assets/img/youtube.svg" class="w-16 h-11" alt="" />
          </a>
          <a
            href="https://www.linkedin.com/company/monshaatsa/"
            target="_blank"
          >
            <img src="../assets/img/linkedin.svg" class="w-16 h-11" alt="" />
          </a>
          <a href="https://twitter.com/MonshaatSA?s=1" target="_blank">
            <img src="../assets/img/twitter.svg" class="w-16 h-11" alt="" />
          </a>
        </div>
        <span class="text-grey sm:text-center font-light text-sm"
          >مركز الاتصال <span class="font-medium">8003018888</span></span
        >
      </div>
    </div>
  </footer>
</template>
<style scoped>
a:hover,
line:hover {
  color: #fff !important;
}
</style>
