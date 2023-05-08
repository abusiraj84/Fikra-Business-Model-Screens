<template>
	<div
		class="flex flex-col justify-start flex-1 p-8 mx-auto w-[95%] md:w-[90%] xl:w-[70%] z-10 bg-white rounded-[10px] mt-4 mb-20">
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
					class="p-14 w-[80%] mx-auto -mt-20 z-10 bg-[#E8EEF2] rounded-lg hidden flex-col md:flex-row items-center justify-center md:flex">
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
		<div class="grid grid-cols-10 gap-8">
			<div class="flex flex-col space-y-5 col-span-full md:col-span-7 h-max">
				<div class="flex flex-col items-start justify-between w-full bg-[#F5F5F7] rounded-[10px] p-8">
					<h3 class="text-[18px] md:text-[24px] leading-[30px] mb-5 font-bold">
						المنشآت الابتكارية التي يمكنها المشاركة بمسابقة ابتكر السنوية
					</h3>
					<div class="grid w-full grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
						<div class="flex flex-col items-center justify-center p-8 space-y-3 text-center bg-white rounded-lg">
							<img src="../assets/img/event.svg" alt="Calendar" />
							<h4 class="text-[22px] text-[#2A6490] leading-6">منشآت متناهية الصغر</h4>
							<p class="text-[18px] leading-6">
								حيث يكون عدد موظفيها الأساسيين – دوام كامل- من 1 إلى 5 وألّا تتجاوز إيراداتها 3 مليون ريال سعودي
							</p>
						</div>
						<div class="flex flex-col items-center justify-center p-6 space-y-3 text-center bg-white rounded-lg">
							<img src="../assets/img/rocket.svg" alt="Calendar" />
							<h4 class="text-[22px] text-[#2A6490] leading-6">منشآت صغيرة</h4>
							<p class="text-[18px] leading-6">
								حيث يكون عدد موظفيها الأساسيين – دوام كامل- من 6 إلى 49 و إيراداتها بين 3 إلى 40 مليون ريال سعودي
							</p>
						</div>
						<div class="flex flex-col items-center justify-center p-6 space-y-3 text-center bg-white rounded-lg">
							<img src="../assets/img/businessman.svg" alt="Calendar" />
							<h4 class="text-[22px] text-[#2A6490] leading-6">منشآت متوسطة</h4>
							<p class="text-[18px] leading-6">
								حيث يكون عدد موظفيها الأساسيين – دوام كامل- من 50 إلى 249 و إيراداتها بين 40 إلى 200 مليون ريال سعودي
							</p>
						</div>
					</div>
				</div>
				<div class="w-full bg-[#F5F5F7] rounded-[10px] p-8 pb-1">
					<div class="px-2 mb-5">
						<h3 class="text-[24px] leading-5 font-bold">أهداف المعرض والجائزة</h3>
						<ul class="p-3 md:p-4 lg:p-5 space-y-1 list-disc text-[18px]">
							<li>المساهمة في نمو الاقتصاد الوطني من خلال تشجيع المنشآت الابتكارية على النمو و التوسع</li>
							<li>دعم وتمكين المنشآت الابتكارية السعودية وتسهيل وصولهم للشركاء في منظومة الابتكار</li>
							<li>نشر ثقافة الابتكار في المملكة وإبراز المنشآت الابتكارية محليًا وعالميً</li>
						</ul>
					</div>
					<div class="px-2">
						<h3 class="text-[24px] leading-5 font-bold">كيف يمكن لمنشأتك الابتكارية أن تشارك؟</h3>
						<ul class="p-3 md:p-4 lg:p-5 space-y-1 list-disc text-[18px]">
							<li>أن يكون مقر المنشأة الرئيسي في المملكة العربية السعودية</li>
							<li>أن يكون للمنشأة سجل تجاري قائم</li>
							<li>أن تكون المنشأة قد استفادت ماليًا من تبني تقنية صاعدة أو ابتكار</li>
						</ul>
					</div>
				</div>
				<div>
					<h1 class="text-[24px] leading-8 mb-4 mt-6 font-bold">مزايا المنشآت الفائزة بجائزة ابتكر</h1>
					<div class="flex flex-col items-start justify-between w-full bg-[#F5F5F7] rounded-[10px] p-8">
						<h3 class="text-[18px] md:text-[24px] leading-[30px] mb-5 font-bold">
							ماذا نقدم للمنشآت الابتكارية الصغيرة ومتناهية الصغر
						</h3>
						<div class="grid w-full grid-cols-2 gap-7 md:grid-cols-3 lg:grid-cols-5">
							<div class="flex flex-col items-center justify-center px-3 py-8 space-y-3 text-center bg-white rounded-lg">
								<img src="../assets/img/Camera.svg" alt="Calendar" />
								<h4 class="text-[18px] leading-5">تطوير و توجيه</h4>
							</div>
							<div class="flex flex-col items-center justify-center px-3 py-8 space-y-3 text-center bg-white rounded-lg">
								<img src="../assets/img/date.svg" alt="Calendar" />
								<h4 class="text-[18px] leading-5">إبراز إعلامي</h4>
							</div>
							<div class="flex flex-col items-center justify-center px-3 py-8 space-y-3 text-center bg-white rounded-lg">
								<img src="../assets/img/training.svg" alt="Calendar" />
								<h4 class="text-[18px] leading-5">دعم وتدريب</h4>
							</div>
							<div class="flex flex-col items-center justify-center px-3 py-8 space-y-3 text-center bg-white rounded-lg">
								<img src="../assets/img/investors.svg" alt="Calendar" />
								<h4 class="text-[18px] leading-5">الوصول للمستثمرين</h4>
							</div>
							<div class="flex flex-col items-center justify-center px-3 py-8 space-y-3 text-center bg-white rounded-lg">
								<img src="../assets/img/oppurtunities.svg" alt="Calendar" />
								<h4 class="text-[18px] leading-5">فرص الانضمام لبرنامج رواد ذكاء</h4>
							</div>
						</div>
						<div class="px-5 mt-20">
							<h3 class="text-[22px] text-[#2A6490] leading-5 font-bold">بالإضافة إلى مزايا أخرى</h3>
							<ul class="p-2 md:p-4 lg:p-5 space-y-1 list-disc text-[18px]">
								<li>الدعاية الإعلامية للمنشأة بكونها ضمن المنشآت الأكثر ابتكارا في السعودية لعام 2022</li>
								<li>الترشح للانضمام لبرنامج رواد ذكاء في مجالات الذكاء الصناعي و تحليل البيانات و إنترنت الأشياء و الأمن السبراني.</li>
								<li>الحصول على فرصة الاختيار ضمن خمس منشآت ابتكارية ناشئة واعدة يتم العمل على تحسين عروضهم و ملفاتهم الاستثمارية</li>
								<li>التأهيل الى مسابقة كاس العالم لريادة الاعمال (EWC)</li>
								<li>تصوير و نشر فيديو تسويقي للمنشأة لجلب مستثمري رأس المال الجريء</li>
								<li>جوائز نقدية تصل الى 300 الف ريال</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="flex flex-col items-start justify-between w-full bg-[#F5F5F7] rounded-[10px] p-8">
					<h3 class="text-[18px] md:text-[24px] leading-[30px] mb-5 font-bold">ماذا نقدم للمنشآت الابتكارية المتوسطة</h3>
					<div class="grid w-full grid-cols-2 gap-10 md:grid-cols-3">
						<div class="flex flex-col items-center justify-center px-3 py-8 space-y-3 text-center bg-white rounded-lg">
							<img src="../assets/img/date.svg" alt="Calendar" />
							<h4 class="text-[18px] leading-5">إبراز إعلامي</h4>
						</div>
						<div class="flex flex-col items-center justify-center px-3 py-8 space-y-3 text-center bg-white rounded-lg">
							<img src="../assets/img/investors.svg" alt="Calendar" />
							<h4 class="text-[18px] leading-5">الوصول للمستثمرين</h4>
						</div>
						<div class="flex flex-col items-center justify-center px-3 py-8 space-y-3 text-center bg-white rounded-lg">
							<img src="../assets/img/oppurtunities.svg" alt="Calendar" />
							<h4 class="text-[18px] leading-5">تميز وطني</h4>
						</div>
					</div>
					<div class="px-5 mt-20">
						<h3 class="text-[22px] text-[#2A6490] leading-5 font-bold">بالإضافة إلى مزايا أخرى</h3>
						<ul class="p-2 md:p-4 lg:p-5 space-y-1 list-disc text-[18px]">
							<li>تسليم درع و شهادة الانتماء إلى قائمة المنشآت المتوسطة الأكثر ابتكارا في السعودية لعام 2022</li>
							<li>الدعاية الإعلامية للمنشأة بكونها ضمن المنشآت الأكثر ابتكارا في السعودية لعام 2022</li>
							<li>الترشح للانضمام لبرنامج المنشآت الابتكارية الواعدة بالتوسع الدولي</li>
							<li>التأهيل الى مسابقة كاس العالم لريادة الاعمال (EWC)</li>
							<li>الترشح للانضمام لبرنامج رواد ذكاء في مجالات الذكاء الصناعي و تحليل البيانات و إنترنيت الأشياء و الأمن السبراني</li>
						</ul>
					</div>
				</div>
			</div>
			<div
				class="h-max col-span-full md:col-span-3 flex flex-col items-center justify-center w-full mb-6 border border-[#F5F5F7] px-4 py-6 rounded-lg">
				<h3 class="text-[22px] md:text-[26px] leading-9 text-[#042925] mb-5 w-full text-right">جائزة ابتكر</h3>
				<div class="flex flex-col items-center justify-center w-full">
					<div
						v-for="video in videos"
						:key="videos.id"
						class="flex flex-col items-start justify-center bg-[#F2F2F2] rounded-lg w-full p-5 mb-5">
						<h3 class="text-[22px] text-primary font-bold mb-4">{{ video.title }}</h3>
						<Youtube :src="video.id" ref="youtube" width="100%" height="200px" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	const videos = [
		{ id: "https://www.youtube.com/watch?v=M3_ZRe7Akp0", title: "شركة ملاdءة" },
		{ id: "https://www.youtube.com/watch?v=QxccbxJU7eo", title: "تطبيق يوما" },
		{ id: "https://www.youtube.com/watch?v=ngRzJY7YCZ0", title: "شركة Ioat" },
		{ id: "https://www.youtube.com/watch?v=lH5ds5bky9M", title: "حاضنة قوام" },
	];
</script>

<style scoped>
	.hide-bg {
		mix-blend-mode: multiply;
		filter: contrast(1);
	}
</style>
