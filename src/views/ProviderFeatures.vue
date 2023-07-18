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
            class="absolute left-[-150px] top-[-55px] bottom-0"
          />
        </div>
      </div>
      <h2 class="text-[36px] text-[#307093] leading-[45px]">
        ساعد في بناء <br /><span class="font-medium"
          >ونمو الأفكار الريادية</span
        >
      </h2>
    </div>
    <div class="flex flex-col flex-1 w-full px-[10px] xl:px-0">
      <div
        class="bg-white rounded-[12px] border border-[rgba(120, 120, 122, 0.26)] p-8 w-full flex-1 max-w-[1200px] mx-auto translate-y-[-40px]"
      >
        <div class="flex items-start gap-2">
          <img
            src="/images/iconsfeatures.svg"
            class="w-[36px] h-[36px] ml-1 group-hover:text-white"
            alt="card.title"
          />
          <div>
            <div
              class="text-[22px] text-[#042925] font-bold group-hover:text-white"
            >
              مزايا التسجيل كمقدم خدمة
            </div>
            <div
              class="text-[18px] text-[#78787A] font-light group-hover:text-white text-justify"
            >
              مزايا التسجيل كمزود خدمة لدى

              <span class="text-black"
                >بوابة الإبتكار التجاري الوطنية “فكرة”</span
              >

              تساعد على تمكين مزود الخدمة من مساعدة الشركات الناشئة في بناء ونمو
              الأفكار الريادية في مجالات متعددة.
              <br />
              <br />
              إليك بعض هذه المزايا:
              <br />
              <ul
                class="text-[16px] flex flex-col gap-y-5 text-[#7E7E7E] text-justify"
              >
                <li class="list-disc">
                  الوصول إلى شبكة واسعة من العملاء المحتملين: بتسجيلك كمزود خدمة
                  لدى
                  <span class="text-black"
                    >بوابة الإبتكار التجاري الوطنية “فكرة”</span
                  >
                  ، ستكون لديك فرصة للوصول إلى شركات ناشئة في مختلف المجالات.
                  ستتمكن من توفير خدماتك وخبرتك لعدد أكبر من العملاء المحتملين،
                  مما يعزز فرصك في التعاون مع أصحاب الأفكار الواعدة.
                </li>
                <li class="list-disc">
                  توفير خبرة متخصصة: كمزود خدمة، يمكنك تقديم المشورة والدعم في
                  مجالات متنوعة مثل التدريب، ودراسة السوق، واختبار الأفكار،
                  والتصميم والتنفيذ، والتسويق، ومساحات العمل، والتمويل،
                  والاستشارات. ستكون لديك الفرصة لمشاركة خبرتك ومعرفتك الخاصة مع
                  المبتكرين ورواد الأعمال وتمكينهم من تطوير وتنفيذ أفكارهم بشكل
                  أكثر فعالية.
                </li>
                <li class="list-disc">
                  تبادل المعرفة والتعلم المستمر: من خلال التفاعل مع الشركات
                  الناشئة، ستتعرف على أفكار جديدة وابتكارات مثيرة في مجالات
                  مختلفة. هذا سيمكنك من توسيع معرفتك وتطوير مهاراتك في مجال
                  عملك. بالإضافة إلى ذلك، يمكنك أيضًا تبادل المعلومات والخبرات
                  مع المبتكرين ورواد الأعمال الآخرين، مما يؤدي إلى تحسين مستوى
                  الخدمات التي تقدمها واكتساب رؤى جديدة.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <RouterLink
          to="/service-form"
          class="w-fit py-2 px-12 mx-1 text-center text-white rounded-full bg-primary hover:bg-[#307094] transition-all duration-300 font-light cursor-pointer mt-5 float-left"
        >
          سجل كمقدم خدمة
        </RouterLink>
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
