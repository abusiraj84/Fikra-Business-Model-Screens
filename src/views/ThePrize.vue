<template>
	<!-- SECTION 5 -->
	<div
		class="flex flex-col justify-start flex-1 p-8 mx-auto w-[95%] md:w-[90%] xl:w-[70%] z-10 bg-white rounded-[10px] mt-4 mb-8">
		<div class="flex flex-col items-start justify-between w-full mb-6">
			<h3 class="text-[22px] md:text-[32px] leading-9 text-[#042925] mb-5">جائزة ابتكر</h3>
			<p class="text-[22px] text-[#042925] leading-7">
				تطلق "منشآت" جائزة "ابتكر" بشكل سنوي، وهي واحدة من المبادرات النوعية التي تعمل على نشر ثقافة الابتكار واكتشاف المنشآت
				الابتكارية، مع تقديم الدعم وتوفير الفرص لهم للارتباط بالجهات الاستثمارية الممكنة، كما تساهم الجائزة في إبراز المنشآت
				الابتكارية على المستوى المحلي والعالمي.
			</p>
		</div>
		<div class="flex flex-col items-start justify-between w-full mb-14">
			<div class="flex flex-col items-center justify-center">
				<img
					src="../assets/img/KSA_FLAG.svg"
					alt="KSA FLAG"
					class="w-full aspect-square md:aspect-[12/4] object-cover max-h-[372px] rounded-2xl" />
				<div
					class="p-14 w-[80%] mx-auto -mt-20 z-10 bg-[#E8EEF2] rounded-lg flex flex-col md:flex-row items-center justify-center">
					<h3 class="text-[20px] md:text-[24px] leading-8 ml-4 w-full text-center mb-5 md:mb-0 md:text-right md:max-w-[270px]">
						المنشآت الابتكارية الفائزة بالنسخ السابقة من جائزة ابتكر السنوية
					</h3>
					<div class="flex items-center justify-evenly">
						<img
							src="../assets/img/PrizeWinningStartups.svg"
							alt="Prize Winners"
							class="w-full md:aspect-[12/4] md:max-h-[100px] hide-bg" />
					</div>
				</div>
			</div>
		</div>
		<div class="grid grid-cols-10 gap-3">
			<div class="flex flex-col space-y-5 br-test col-span-full md:col-span-7 h-max">
				<div class="p-10 br-test">ELEMENT ONE</div>
				<div class="p-10 br-test">ELEMENT ONE</div>
				<div class="p-10 br-test">ELEMENT ONE</div>
				<div class="p-10 br-test">ELEMENT ONE</div>
			</div>
			<div
				class="h-max col-span-full md:col-span-3 flex flex-col items-center justify-center w-full mb-6 border border-[#F5F5F7] px-4 py-6 rounded-lg">
				<h3 class="text-[22px] md:text-[26px] leading-9 text-[#042925] mb-5 w-full text-right">جائزة ابتكر</h3>
				<div class="flex flex-col items-center justify-center w-full">
					<div v-for="video in videos" class="flex flex-col items-start justify-center bg-[#F2F2F2] rounded-lg w-full p-5 mb-5">
						<h3 class="text-[22px] text-primary font-bold mb-4">{{ video.title }}</h3>
						<YouTube :src="video.id" ref="youtube" width="100%" height="200px" class="test" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import YouTube from "vue3-youtube";

	const videos = [
		{ id: "M3_ZRe7Akp0", title: "شركة ملاءة" },
		{ id: "QxccbxJU7eo", title: "تطبيق يوما" },
		{ id: "ngRzJY7YCZ0", title: "شركة IBoat" },
		{ id: "7k4wXfGhGa0", title: "حاضنة قوام" },
	];
</script>

<style scoped>
	.hide-bg {
		mix-blend-mode: multiply;
		filter: contrast(1);
	}
</style>
