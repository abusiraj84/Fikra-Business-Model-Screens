<template>
  <div
    class="flex flex-col justify-start flex-1 p-8 mx-auto max-w-[1200px] z-10 bg-white rounded-[10px] mt-4 mb-8"
  >
    <header class="flex justify-between items-center h-[45px]">
      <h2 class="text-[32px] font-medium">خدمات منظومة الابتكار</h2>
      <div
        class="rounded-full border-2 border-black px-[20px] py-[10px] leading-4"
      >
        هل انت مزود خدمة؟
      </div>
    </header>
    <h2 class="text-[#78787A] text-[24px] mb-10">
      ماهو تصنيف الخدمة التي ترغب بطلبها؟
    </h2>

    <!-- List of Services categories -->
    <div class="grid w-full grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-4">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="py-3 px-3 bg-gradient-to-b hover:from-[#4882AE] hover:to-[#4882AE] group rounded-lg border border-[#BACDDB] cursor-pointer transition-all duration-300"
        :class="
          card.selected
            ? 'from-[#407ead] to-[#589ed3d5] text-white'
            : 'from-[#BED8ED] to-[#ECF6FF]'
        "
        @click="selectCard(index)"
      >
        <p
          class="text-[14px] text-left w-full font-extralight group-hover:text-white"
          :class="{ 'text-white': card.selected }"
        >
          {{ card.title }}
        </p>
        <div class="flex items-start gap-2">
          <img
            :src="card.imgUrl"
            class="w-[36px] h-[36px] ml-1 group-hover:text-white"
            :class="{ 'text-white': card.selected }"
            :alt="card.title"
          />
          <div>
            <p
              class="text-[22px] text-[#042925] font-normal group-hover:text-white"
              :class="{ 'text-white': card.selected }"
            >
              {{ card.subtitle }}
            </p>
            <p
              class="text-[15px] text-[#78787A] font-light group-hover:text-white"
              :class="{ 'text-white': card.selected }"
            >
              {{ card.description }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-center mt-[40px]">
      <div
        @click="showAllItems"
        v-if="!isShowAllItems"
        class="w-fit py-2 px-12 mx-1 text-center text-white rounded-full bg-primary hover:bg-[#307094] transition-all duration-300 font-light cursor-pointer"
      >
        عرض جميع الجهات
      </div>
    </div>

    <!-- Diveder -->
    <div
      class="bg-[#F7F7F7] h-[1px] w-full my-10"
      v-if="selectedCard !== null"
    ></div>

    <!-- List of services -->

    <div class="bg-[#FCFCFC] p-10" v-if="selectedCard !== null">
      <header class="flex justify-between items-center h-[45px]">
        <h2 class="text-[32px] font-medium">
          {{
            isShowAllItems ? "عرض جميع الخدمات" : cards[selectedCard].subtitle
          }}
        </h2>
        <!-- <div class="rounded-full px-[20px] py-[10px] leading-4">
          تصفية متقدمة
        </div> -->
      </header>
      <h2 class="text-[#78787A] text-[18px] mb-10 font-light">
        {{ cards.length }} جهات تقدم الخدمة
      </h2>
      <!-- list of cards -->
      <div
        class="grid w-full grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 gap-y-[23px] gap-x-[20px]"
      >
        <div
          v-for="(item, index) in items"
          :key="index"
          class="p-[32px] bg-gradient-to-b bg-[#FFF] hover:bg-[#EAF1F8] group rounded-lg border border-[rgba(120, 120, 122, 0.26)] cursor-pointer transition-all duration-300 min-h-[198px]"
          @click="selectitem(index)"
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
              طلب الخدمة
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center items-center mt-[44px]">
        <!-- <div
          class="rounded-full border-2 border-[#307094] text-[#307094] px-[20px] py-[10px] leading-4 w-fit font-normal cursor-pointer hover:bg-[#307094] hover:text-white transition-all duration-300"
        >
          المزيد
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [],
      items: [],
      selectedCard: null, // This will hold the index of the selected card
      isShowAllItems: false,
    };
  },
  created() {
    this.fetchCards();
  },
  methods: {
    async fetchCards() {
      // Fetch your data from the server and set the cards array
      // Replace with the actual server call
      const response = await fetch("/services.json");
      this.cards = await response.json();
    },
    selectCard(index) {
      // Set selectedCard to the index of the card that was clicked
      // If another card was already selected, select the new one
      if (this.selectedCard !== index) {
        this.selectedCard = index;
        this.cards.forEach((card, i) => {
          card.selected = i === this.selectedCard;
        });
        // Fetch items for the selected card
        this.fetchItemsForCard(this.cards[this.selectedCard].id);
        this.isShowAllItems = false;
      }
    },
    async fetchItemsForCard(cardId) {
      // Fetch your items from the server with the given cardId
      // Replace with the actual server call
      const response = await fetch(`/items.json?cardId=${cardId}`);
      this.items = await response.json();
    },
    showAllItems() {
      this.fetchItems();
      this.selectedCard = 1;
      this.isShowAllItems = true;
    },
    async fetchItems() {
      // Fetch your data from the server and set the items array
      // Replace with the actual server call
      const response = await fetch("/items.json");
      this.items = await response.json();
    },
  },
};
</script>
