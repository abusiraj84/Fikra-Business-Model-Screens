<template>
  <div class="relative inline-block text-left">
    <div class="flex items-center">
      <button
        @click="toggleOpen"
        class="inline-flex justify-center bg-[#FCFCFC] py-1 px-[20px] rounded-[31px]"
      >
        <img
          src="../../assets/img/share.svg"
          alt="share"
          class="w-6 h-6 me-2"
        />
        <p class="text-[20px]">مشاركة</p>
      </button>
    </div>
    <div
      v-if="open"
      class="origin-top-right absolute right-0 mt-2 w-fit rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 whitespace-nowrap"
    >
      <div
        class="py-1"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <a
          href="#"
          @click="shareToLinkedIn"
          class="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex items-center gap-x-[20px] justify-between"
          role="menuitem"
        >
          <p>شارك على</p>
          <img
            src="../../assets/img/linkedin2.svg"
            alt="linkedin"
            class="w-4 me-2"
          />
        </a>
        <a
          href="#"
          @click="shareToTwitter"
          class="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex items-center gap-x-[20px] justify-between"
          role="menuitem"
        >
          <p>شارك على</p>
          <img
            src="../../assets/img/twitter2.svg"
            alt="twitter"
            class="w-4 me-2"
          />
        </a>
        <a
          href="#"
          @click="shareToWhatsApp"
          class="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex items-center gap-x-[20px] justify-between"
          role="menuitem"
        >
          <p>شارك على</p>
          <img
            src="../../assets/img/WhatsApp.svg"
            alt="whatsapp"
            class="w-4 me-2"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "image"],
  data() {
    return {
      open: false,
      titleToShare: this.title,
      urlToShare: `${import.meta.env.VITE_APP_URL}/event/${
        this.$route.params.id
      }`,
    };
  },
  methods: {
    toggleOpen() {
      this.open = !this.open;
    },
    shareToLinkedIn() {
      const url = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
        this.urlToShare
      )}`;
      window.open(url, "_blank");
    },
    shareToTwitter() {
      const text = encodeURIComponent(this.title + " " + this.urlToShare);
      const url = `https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(
        this.image
      )}`;
      window.open(url, "_blank");
    },
    shareToWhatsApp() {
      const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(
        this.title + " " + this.urlToShare
      )}`;
      window.open(url, "_blank");
    },
  },
};
</script>
