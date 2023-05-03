<template>
	<div
		class="flex flex-col justify-start flex-1 p-8 mx-auto w-[95%] md:w-[90%] xl:w-[70%] z-10 bg-white rounded-[10px] mt-4 mb-8">
		<div class="flex flex-col items-start justify-between w-full mb-6 md:items-center md:flex-row">
			<h3 class="text-[22px] md:text-[32px] leading-9 text-[#042925]">مكتبة الريادة و الإبتكار</h3>
		</div>
		<div class="flex items-center justify-between w-full mb-6">
			<div class="relative w-full ml-4">
				<BaseInput type="text" name="search" placeholder="البحث عن مقال" v-model="search" :icon="true" label=""> </BaseInput>
				<button class="absolute bg-white top-[10px] left-4" @click="searchArticles">
					<img src="../assets/img/arrow-left.svg" alt="Arrow" />
				</button>
			</div>
			<button type="button" class="flex items-center justify-center px-4 py-[11px] text-center bg-[#F2F2F2] rounded-lg">
				<img src="../assets/img/filter.svg" alt="Filter" />
				<p class="mr-2 text-[20px] leading-5">فرز</p>
			</button>
		</div>
		<div
			class="flex items-start mb-6 border-b border-b-[#F2F2F2] -w-full overflow-x-scroll snap-x snap-proximity disable-scrollbars">
			<div
				class="text-[16px] text-[#1e1e1e] cursor-pointer ml-10 pb-3 min-w-max snap-center"
				:class="{ selected: selectedTab === 0 }"
				@click="changeTab(0)">
				عرض الجميع (74)
			</div>
			<div
				class="text-[16px] text-[#1e1e1e] cursor-pointer ml-10 pb-3 min-w-max snap-center"
				:class="{ selected: selectedTab === 1 }"
				@click="changeTab(1)">
				أسرار الريادة
			</div>
			<div
				class="text-[16px] text-[#1e1e1e] cursor-pointer ml-10 pb-3 min-w-max snap-center"
				:class="{ selected: selectedTab === 2 }"
				@click="changeTab(2)">
				سوق الابتكار السعودي
			</div>
			<div
				class="text-[16px] text-[#1e1e1e] cursor-pointer pb-3 min-w-max snap-center"
				:class="{ selected: selectedTab === 3 }"
				@click="changeTab(3)">
				استطلاعات منظومة الإبتكار
			</div>
		</div>
		<div class="grid w-full grid-cols-1 gap-4 md:grid-cols-3 xl:grid-cols-4">
			<div class="relative" v-for="item in articles" :key="item.id">
				<div class="text-[16px] leading-[22px] py-1 px-3 top-5 right-5 absolute bg-[#FFFFFFCC] rounded-xl">
					{{ item.category }}
				</div>
				<img :src="item.img" :alt="item.title" class="rounded-t-lg" />
				<div class="border rounded-b-lg border-[#EAECF0] p-4 text-right">
					<p class="text-[22px] leading-[26px] text-[#042925] mb-1">{{ item.title }}</p>
					<p class="text-[16px] leading-[22px] mb-7">
						{{ truncateString(item.desc) }}
					</p>
					<div class="flex items-center justify-between">
						<p class="text-[18px] leading-[22px] text-[#00000046]">{{ item.date }}</p>
						<a href="#" class="text-[16px] leading-[22px] text-primary underline">قراءة المقال</a>
					</div>
				</div>
			</div>
		</div>
		<div class="flex items-center justify-center w-full mt-12">
			<button class="py-2 px-4 border-[1.5px] border-black rounded-full hover:bg-[#afafaf13] leading-[20px] hover:font-bold">
				<p>تحميل المزيد</p>
			</button>
		</div>
	</div>
</template>

<script setup>
	import BaseInput from "../components/Base/Input.vue";
	import { ref } from "vue";
	window.scroll(0, 0);

	let articles = [
		{
			id: 1,
			title: "كيف اختبر فكرتي؟",
			desc: "تبدأ عملية اختيار الفكرة بعد وضع الأساسيات واختبارها مع مجموعة من العملاء بطرق مختلفة ومتنوعة",
			date: "28 فبراير 2022",
			img: "https://images.pexels.com/photos/1314410/pexels-photo-1314410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			category: "مرحلة الفكرة",
		},
		{
			id: 2,
			title: "كيف اختار الشركة المناسبة؟",
			desc: "من أهم المقومات لنجاح الفكرة هو اختيار الشركة المناسبة لتنفيذ وتصميم الفكرة",
			date: "28 فبراير 2022",
			img: "https://images.pexels.com/photos/207607/pexels-photo-207607.jpeg?auto=compress&cs=tinysrgb&w=1600",
			category: "تأسيس الشركات",
		},
		{
			id: 3,
			title: "ما أهمية التدريب؟",
			desc: "لبناء فكرة معينة فأنت بحاجة إلى مجموعة من المهارات الي بدورها ستساعدك في بناء الفكرة",
			date: "28 فبراير 2022",
			img: "https://images.pexels.com/photos/45718/pexels-photo-45718.jpeg?auto=compress&cs=tinysrgb&w=1600",
			category: "التوجيه والارشاد",
		},
		{
			id: 4,
			title: "ما أهمية التدريب؟",
			desc: "لبناء فكرة معينة فأنت بحاجة إلى مجموعة من المهارات الي بدورها ستساعدك في بناء الفكرة",
			date: "28 فبراير 2022",
			img: "https://images.pexels.com/photos/3153207/pexels-photo-3153207.jpeg?auto=compress&cs=tinysrgb&w=1600",
			category: "مرحلة الفكرة",
		},
		{
			id: 5,
			title: "ما أهمية التدريب؟",
			desc: "لبناء فكرة معينة فأنت بحاجة إلى مجموعة من المهارات الي بدورها ستساعدك في بناء الفكرة",
			date: "28 فبراير 2022",
			img: "https://images.pexels.com/photos/3183190/pexels-photo-3183190.jpeg?auto=compress&cs=tinysrgb&w=1600",
			category: "تأسيس الشركات",
		},
		{
			id: 6,
			title: "كيف اختبر فكرتي؟",
			desc: "تبدأ عملية اختيار الفكرة بعد وضع الأساسيات واختبارها مع مجموعة من العملاء بطرق مختلفة ومتنوعة",
			date: "28 فبراير 2022",
			img: "https://images.pexels.com/photos/1314410/pexels-photo-1314410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			category: "مرحلة الفكرة",
		},
		{
			id: 7,
			title: "كيف اختار الشركة المناسبة؟",
			desc: "من أهم المقومات لنجاح الفكرة هو اختيار الشركة المناسبة لتنفيذ وتصميم الفكرة",
			date: "28 فبراير 2022",
			img: "https://images.pexels.com/photos/207607/pexels-photo-207607.jpeg?auto=compress&cs=tinysrgb&w=1600",
			category: "تأسيس الشركات",
		},
		{
			id: 8,
			title: "ما أهمية التدريب؟",
			desc: "لبناء فكرة معينة فأنت بحاجة إلى مجموعة من المهارات الي بدورها ستساعدك في بناء الفكرة",
			date: "28 فبراير 2022",
			img: "https://images.pexels.com/photos/45718/pexels-photo-45718.jpeg?auto=compress&cs=tinysrgb&w=1600",
			category: "التوجيه والارشاد",
		},
		{
			id: 9,
			title: "ما أهمية التدريب؟",
			desc: "لبناء فكرة معينة فأنت بحاجة إلى مجموعة من المهارات الي بدورها ستساعدك في بناء الفكرة",
			date: "28 فبراير 2022",
			img: "https://images.pexels.com/photos/3153207/pexels-photo-3153207.jpeg?auto=compress&cs=tinysrgb&w=1600",
			category: "مرحلة الفكرة",
		},
		{
			id: 10,
			title: "ما أهمية التدريب؟",
			desc: "لبناء فكرة معينة فأنت بحاجة إلى مجموعة من المهارات الي بدورها ستساعدك في بناء الفكرة",
			date: "28 فبراير 2022",
			img: "https://images.pexels.com/photos/3183190/pexels-photo-3183190.jpeg?auto=compress&cs=tinysrgb&w=1600",
			category: "تأسيس الشركات",
		},
		{
			id: 11,
			title: "كيف اختبر فكرتي؟",
			desc: "تبدأ عملية اختيار الفكرة بعد وضع الأساسيات واختبارها مع مجموعة من العملاء بطرق مختلفة ومتنوعة",
			date: "28 فبراير 2022",
			img: "https://images.pexels.com/photos/1314410/pexels-photo-1314410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			category: "مرحلة الفكرة",
		},
		{
			id: 12,
			title: "ما أهمية التدريب؟",
			desc: "لبناء فكرة معينة فأنت بحاجة إلى مجموعة من المهارات الي بدورها ستساعدك في بناء الفكرة",
			date: "28 فبراير 2022",
			img: "https://images.pexels.com/photos/207607/pexels-photo-207607.jpeg?auto=compress&cs=tinysrgb&w=1600",
			category: "مرحلة الفكرة",
		},
	];

	let selectedTab = ref(0);
	function changeTab(newTab) {
		selectedTab.value = newTab;
	}

	let search = ref("");
	function searchArticles() {
		console.log("PERFORM SEARCH", search.value);
	}

	function truncateString(str) {
		return str.length > 80 ? str.slice(0, 80) + "..." : str;
	}
</script>

<style scoped>
	.selected {
		color: #307094;
		font-weight: bold;
		border-bottom: 2px solid #307094;
	}

	.disable-scrollbars::-webkit-scrollbar {
		display: none;
	}

	.disable-scrollbars {
		scrollbar-width: none; /* Firefox */
		-ms-overflow-style: none; /* IE 10+ */
	}
</style>
