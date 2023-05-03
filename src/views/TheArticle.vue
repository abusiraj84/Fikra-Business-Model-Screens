<template>
	<!-- SECTION 5 -->
	<div
		class="flex flex-col justify-start flex-1 p-8 mx-auto w-[95%] md:w-[90%] xl:w-[70%] z-10 bg-white rounded-[10px] mt-4 mb-8">
		<div class="flex flex-col items-start justify-between w-full mb-6">
			<h3 class="text-[22px] md:text-[32px] leading-9 text-[#042925] mb-5">
				{{ article.title }}
			</h3>
			<div class="flex items-center">
				<div class="flex items-start justify-center ml-12">
					<img src="../assets/img/calendar.svg" alt="Calendar" class="w-6 h-6 ml-2" />
					<p class="text-[20px] text-[#191A1F]">{{ article.date }}</p>
				</div>
				<div class="rounded-full bg-[#FABE2C66] py-1 px-2">
					<p class="text-[16px] text-[#191A1F]">{{ article.category }}</p>
				</div>
			</div>
		</div>
		<div class="flex flex-col items-start justify-between w-full mb-6">
			<img
				:src="article.img"
				alt="test"
				class="w-full aspect-square md:aspect-[12/4] object-cover max-h-[372px] rounded-2xl" />
			<div class="text-[18px] leading-7 mt-6 mb-8" v-html="article.body" />
			<div class="flex flex-col items-start justify-between mb-6">
				<p class="text-[18px] mb-2">و بالأمان الحصول على ملف التقرير من خلال الضغط أدناه:</p>
				<div class="flex items-center justify-center border border-[#EAECF0] py-2 px-5 rounded-lg cursor-pointer">
					<div class="flex items-center justify-center px-2 py-3 bg-[#F6C4C7] rounded-lg ml-3">
						<p class="text-[18px] text-[#FF1818]">PDF</p>
					</div>
					<div class="text-[#3F3F3F] space-y-1">
						<p class="text-[16px] font-bold">تقرير فرص المنشآت الابتكارية السعودية في سوق تقنية البلوك تشين</p>
						<p class="text-[14PX]">اضغط هنا لتحميل الملف</p>
					</div>
				</div>
			</div>
		</div>
		<div class="grid w-full grid-cols-1 gap-4 md:grid-cols-3">
			<div class="relative" v-for="item in similarArticles" :key="item.id">
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
	</div>
</template>

<script setup>
	import { useRoute } from "vue-router";
	const route = useRoute();
	let articleID = route.params.id;

	const article = {
		title: "فرص المنشآت الابتكارية السعودية في سوق تقنية البلوكتشين",
		date: "28 فبراير 2022",
		img: "https://images.pexels.com/photos/5980926/pexels-photo-5980926.jpeg?auto=compress&cs=tinysrgb&w=1600",
		category: "أسرار الريادة",
		body:
			'<p>أصدر مشروع تفعيل منظومة الابتكار التجاري الوطنية بالهيئة العامة للمنشآت الصغيرة والمتوسطة "منشآت" تقريراً عن فرص المنشآت الابتكارية السعودية في سوق تقنية "البلوك تشين"، وفيما يلي ملخص التقرير:<br>البيانات الرقمية في الوقت الحالي لا تخلو من أي جهة أو منظمة فعالة على مستوى العالم، حيث تشكل عصب الحياة لكثير من القطاعات في منظومة الأعمال بشكل خاص، ومن أكبر التحديات هو تتبع تلك البيانات وتنظيمها وربطها بنظام متين يضمن المرونة في العمل بين المستخدمين لقاعدة البيانات تلك.<br><br>وهنا يأتي دور تقنية البلوك تشين في ربط وتسجيل سلسلة التحركات بين مرسل ومستلم لتلك البيانات بشكل سهل يمكن تتبعه ومعرفة معلومات تفصيلية عن تدفق البيانات بين طرفين.</p><p>في هذا التقرير نتناول شرح مبسط لتقنية البلوك تشين من المنظور النظري والعملي للتقنية، وتحديد ما هي أبرز القطاعات المستهدفة والمستفيدة من تقنية البلوك تشين، بالإضافة إلى تحليل الأسواق العالمية وسوق المملكة العربية السعودية من حيث دراسة شاملة لسوق تقنية البلوك تشين لتوضح التوجه العام للأسواق في هذا المجال.حيث توصّل التقرير إلى أن القطاع المالي والمصرفي هو من أبرز مستفيدين من تقنية البلوك تشين على المستوى العالم، وتشير الإحصاءات لإمكانية تقنية البلوك تشين تقليل تكاليف البنية التحتية للمصارف بنسبة 30%.</p><br><p>في هذا التقرير نتناول شرح مبسط لتقنية البلوك تشين من المنظور النظري والعملي للتقنية، وتحديد ما هي أبرز القطاعات المستهدفة والمستفيدة من تقنية البلوك تشين، بالإضافة إلى تحليل الأسواق العالمية وسوق المملكة العربية السعودية من حيث دراسة شاملة لسوق تقنية البلوك تشين لتوضح التوجه العام للأسواق في هذا المجال.حيث توصّل التقرير إلى أن القطاع المالي والمصرفي هو من أبرز مستفيدين من تقنية البلوك تشين على المستوى العالم، وتشير الإحصاءات لإمكانية تقنية البلوك تشين تقليل تكاليف البنية التحتية للمصارف بنسبة 30%.</p><br>ومن ناحية أخرى يقدر حجم سوق تقنية البلوك تشين على مستوى العالم في عام 2021 بـ 5.92 مليار دولار أمريكي، ومن المتوقع أن يرتفع بمعدل نمو تراكمي بنسبة 84%.<br>يوضح التقرير أيضاً اتجاهات سوق لتقنية البلوك تشين في المملكة العربية السعودية حيث من المتوقع نمو سوق تقنية البلوك تشين محلياً بوتيرة متسارعة من عام 2021 وحتى العام 2025، بنسبة تتجاوز 41%، ومن أبرز الفرص لتقنية البلوك تشين على المستوى المحلي هو احتياج السوق المتزايد بشكل ملحوظ على بعض خدمات هذه التقنية في قطاع الخدمات اللوجستية وإدارية البيانات.</p><p><br>في هذا التقرير نتناول شرح مبسط لتقنية البلوك تشين من المنظور النظري والعملي للتقنية، وتحديد ما هي أبرز القطاعات المستهدفة والمستفيدة من تقنية البلوك تشين، بالإضافة إلى تحليل الأسواق العالمية وسوق المملكة العربية السعودية من حيث دراسة شاملة لسوق تقنية البلوك تشين لتوضح التوجه العام للأسواق في هذا المجال.حيث توصّل التقرير إلى أن القطاع المالي والمصرفي هو من أبرز مستفيدين من تقنية البلوك تشين على المستوى العالم، وتشير الإحصاءات لإمكانية تقنية البلوك تشين تقليل تكاليف البنية التحتية للمصارف بنسبة 30%.</p>',
		file: "https://google.com/donloadURL",
	};

	let similarArticles = [
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
	];

	function truncateString(str) {
		return str.length > 80 ? str.slice(0, 80) + "..." : str;
	}
</script>
