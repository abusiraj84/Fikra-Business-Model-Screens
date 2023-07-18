<template>
  <div
    class="flex flex-col justify-start flex-1 z-10 bg-white rounded-[10px] mt-4 mb-8 w-full h-full"
  >
    <div
      class="h-[308px] relative bg-gradient-to-b from-[#BED8ED] to-[#ECF6FF] w-full flex justify-center items-center text-center"
    >
      <div class="absolute">
        <div class="w-[1200px] relative h-[200px]">
          <img
            src="/images/image-42.png"
            alt=""
            class="absolute left-[-70px] top-[-55px] bottom-0"
          />
        </div>
      </div>
    </div>
    <div class="flex flex-col w-full px-[10px] xl:px-0">
      <div
        class="bg-[#F5F5F7] rounded-[12px] p-8 w-full flex-1 max-w-[587px] mx-auto translate-y-[-90px] h-[304px]"
      >
        <div class="flex items-start gap-2">
          <div class="flex flex-col w-full items-center">
            <LottieAnimation
              style="width: 108px; height: 108px"
              ref="anim"
              :animation-data="success"
              :loop="false"
              :auto-play="true"
              :speed="1"
              @loopComplete="loopComplete"
              @complete="complete"
              @enterFrame="enterFrame"
              @segmentStart="segmentStart"
              @stopped="stopped"
            />

            <div
              class="mt-[32px] flex flex-col items-center justify-center text-center"
            >
              <span class="text-[22px] mb-[32px]"
                >شكرًا لك <br />تم إرسال الطلب بنجاح</span
              >
              <div class="text-[#676767] text-[18px]">
                سنتواصل معك عبر البريد الالكتروني في حال اعتماد حسابك
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { LottieAnimation } from "lottie-web-vue";
import success from "../assets/success.json";
</script>
