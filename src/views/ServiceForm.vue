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
      <h2 class="text-[36px] text-[#307093] leading-[45px]">
        نموذج طلب اعتماد <br /><span class="font-medium"
          >ممثل جهة داعمة للإبتكار</span
        >
      </h2>
    </div>
    <div class="flex flex-col flex-1 w-full px-[10px] xl:px-0">
      <div
        class="bg-[#F5F5F7] rounded-[12px] border border-[rgba(120, 120, 122, 0.26)] p-8 w-full flex-1 max-w-[587px] mx-auto translate-y-[-90px]"
      >
        <div class="flex items-start gap-2">
          <div class="flex flex-col w-full">
            <ServiceForm />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ServiceForm from "../components/FormPage/ServiceFromComp.vue";
export default {
  components: {
    ServiceForm,
  },
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
