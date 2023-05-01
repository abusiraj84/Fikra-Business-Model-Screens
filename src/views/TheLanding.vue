<template>
	<div class="flex flex-col items-center justify-center h-auto">
		<div class="flex flex-col w-full">
			<div class="flex flex-col flex-1 overflow-hidden">
				<!-- SECTION 1 -->
				<div class="flex flex-col items-center justify-center bg-[#BED8ED] pt-20 pb-28">
					<div class="w-[25%] text-center text-[62px] leading-[68px] font-medium text-[#1E1E1E]">
						<h1><span class="text-[#307094]">فكـرة</span> لديك نحوّلها إلى كيان تجاري ابتكاري قـائـم وفعّـال</h1>
					</div>
					<p class="text-[24px] leading-[32px] text-[#1E1E1E] mt-4 mb-7">من خلال تسخير خدمات أكثر من 100 جهة حكومية وخاصة</p>
					<div class="flex items-center justify-between w-[23%]">
						<button type="submit" class="w-full py-2 mx-1 text-center text-white rounded-full bg-primary">التالي</button>
						<button type="button" class="w-full py-2 mx-1 text-center border border-black rounded-full text-balck">
							شاهد ماهي بوابة فكرة
						</button>
					</div>
				</div>
				<!-- SECTION 2 -->
				<div class="z-0 flex items-center justify-center px-6 bm_img">
					<div class="hero_img"></div>
				</div>
				<!-- SECTION 3 -->
				<div
					class="flex flex-col justify-start flex-1 p-8 mx-auto w-[70%] z-10 bg-[#96B2C8] rounded-[10px] mt-4 border-r-transparent">
					<h3 class="mb-3 text-[32px] leading-9 text-white">ماهي بوابة فكرة؟</h3>
					<p class="mb-4 text-[20px] leading-8 text-white">
						لكون الابتكار التجاري لا ينشأ أو ينمو إلا على قاعدة معرفية رصينة وشبكة علاقات فعالة. تأتي بوابة الابتكار التجاري الوطنية
						“فكرة” لتقدم لك من خلال أقسامها المختلفة مجموعة من الأدوات غير المسبوقة في السوق السعودي. أدواتنا ستساند أفكارك
						الابتكارية في رحلة الازدهار أينما كان موقعك الجغرافي في المملكة.
					</p>
					<div class="flex items-center w-full justify-evenly">
						<div class="flex items-center justify-around w-64 p-5 bg-white rounded-lg">
							<div class="flex flex-col items-start">
								<p class="text-[#042925] text-4xl">60+</p>
								<p class="text-black font-bold text-xl leading-[20px]">جهة</p>
							</div>
							<img src="../assets/img/reward.svg" class="w-[50px] h-[50px]" alt="Icon" />
						</div>
						<div class="flex items-center justify-around w-64 p-5 bg-white rounded-lg">
							<div class="flex flex-col items-start">
								<p class="text-[#042925] text-4xl">220+</p>
								<p class="text-black font-bold text-xl leading-[20px]">ريادي</p>
							</div>
							<img src="../assets/img/businessman.svg" class="w-[50px] h-[50px]" alt="Icon" />
						</div>
						<div class="flex items-center justify-around w-64 p-5 bg-white rounded-lg">
							<div class="flex flex-col items-start">
								<p class="text-[#042925] text-4xl">150+</p>
								<p class="text-black font-bold text-xl leading-[20px]">الخدمات المنفذة</p>
							</div>
							<img src="../assets/img/event.svg" class="w-[50px] h-[50px]" alt="Icon" />
						</div>
						<div class="flex items-center justify-around w-64 p-5 bg-white rounded-lg">
							<div class="flex flex-col items-start">
								<p class="text-[#042925] text-4xl">20+</p>
								<p class="text-black font-bold text-xl leading-[20px]">قصص النجاح</p>
							</div>
							<img src="../assets/img/rocket.svg" class="w-[50px] h-[50px]" alt="Icon" />
						</div>
					</div>
				</div>
				<!-- SECTION 4 -->
				<div class="p-10">
					<div
						class="flex flex-col justify-start flex-1 p-8 mx-auto w-[70%] z-10 bg-white rounded-[10px] mt-4 border-r-transparent">
						<h3 class="mb-6 text-[32px] leading-9 text-[#042925]">قصص نجاح في بوابة فكرة</h3>
						<div class="flex items-center justify-between w-full">
							<div class="flex items-center justify-center w-64 p-5 bg-white rounded-lg border border-[#EAECF0]">
								<img src="../assets/img/fodex.svg" class="w-[140] h-[36px]" alt="Icon" />
							</div>
							<div class="flex items-center justify-center w-64 p-5 bg-white rounded-lg border border-[#EAECF0]">
								<img src="../assets/img/jahez.svg" class="w-[140] h-[36px]" alt="Icon" />
							</div>
							<div class="flex items-center justify-center w-64 p-5 bg-white rounded-lg border border-[#EAECF0]">
								<img src="../assets/img/highberbary.svg" class="w-[140] h-[36px]" alt="Icon" />
							</div>
							<div class="flex items-center justify-center w-64 p-5 bg-white rounded-lg border border-[#EAECF0]">
								<img src="../assets/img/marn.svg" class="w-[140] h-[36px]" alt="Icon" />
							</div>
						</div>
					</div>
				</div>
				<!-- SECTION 5 -->
				<div>
					<div
						class="flex flex-col justify-start flex-1 p-8 mx-auto w-[95%] xl:w-[70%] z-10 bg-white rounded-[10px] mt-4 border-r-transparent">
						<div class="flex flex-col items-start justify-between w-full mb-6 md:items-center md:flex-row">
							<h3 class="text-[22px] md:text-[32px] leading-9 text-[#042925]">خدمات منظومة الابتكار</h3>
							<button
								type="button"
								class="px-4 md:px-6 py-2 text-center bg-white border rounded-full max-w-[140px] text-primary border-primary">
								عرض كل الخدمات
							</button>
						</div>
						<div class="flex flex-wrap items-start justify-start w-full gap-2">
							<div class="min-w-full md:min-w-[340px] lg:min-w-[24.5%] py-3 px-6 bg-[#E8F1F8] rounded-lg border border-[#BACDDB]">
								<p class="text-[14px] text-left w-full">10 جهات</p>
								<div class="flex items-start justify-between">
									<img src="../assets/img/training_icon.svg" class="w-[37px] h-[37px] ml-1" alt="Icon" />
									<div>
										<p class="text-[22px] text-[#042925] font-bold">التدريب</p>
										<p class="text-[16px] text-[#78787A]">يهدف اكتساب مهارات لبناء فكرتك</p>
									</div>
								</div>
							</div>
							<div class="min-w-full md:min-w-[340px] lg:min-w-[24.5%] py-3 px-6 bg-[#E8F1F8] rounded-lg border border-[#BACDDB]">
								<p class="text-[14px] text-left w-full">10 جهات</p>
								<div class="flex items-start justify-between">
									<img src="../assets/img/training_icon.svg" class="w-[37px] h-[37px] ml-1" alt="Icon" />
									<div>
										<p class="text-[22px] text-[#042925] font-bold">التدريب</p>
										<p class="text-[16px] text-[#78787A]">يهدف اكتساب مهارات لبناء فكرتك</p>
									</div>
								</div>
							</div>
							<div class="min-w-full md:min-w-[340px] lg:min-w-[24.5%] py-3 px-6 bg-[#E8F1F8] rounded-lg border border-[#BACDDB]">
								<p class="text-[14px] text-left w-full">10 جهات</p>
								<div class="flex items-start justify-between">
									<img src="../assets/img/training_icon.svg" class="w-[37px] h-[37px] ml-1" alt="Icon" />
									<div>
										<p class="text-[22px] text-[#042925] font-bold">التدريب</p>
										<p class="text-[16px] text-[#78787A]">يهدف اكتساب مهارات لبناء فكرتك</p>
									</div>
								</div>
							</div>
							<div class="min-w-full md:min-w-[340px] lg:min-w-[24.5%] py-3 px-6 bg-[#E8F1F8] rounded-lg border border-[#BACDDB]">
								<p class="text-[14px] text-left w-full">10 جهات</p>
								<div class="flex items-start justify-between">
									<img src="../assets/img/training_icon.svg" class="w-[37px] h-[37px] ml-1" alt="Icon" />
									<div>
										<p class="text-[22px] text-[#042925] font-bold">التدريب</p>
										<p class="text-[16px] text-[#78787A]">يهدف اكتساب مهارات لبناء فكرتك</p>
									</div>
								</div>
							</div>
							<div class="min-w-full md:min-w-[340px] lg:min-w-[24.5%] py-3 px-6 bg-[#E8F1F8] rounded-lg border border-[#BACDDB]">
								<p class="text-[14px] text-left w-full">10 جهات</p>
								<div class="flex items-start justify-between">
									<img src="../assets/img/training_icon.svg" class="w-[37px] h-[37px] ml-1" alt="Icon" />
									<div>
										<p class="text-[22px] text-[#042925] font-bold">التدريب</p>
										<p class="text-[16px] text-[#78787A]">يهدف اكتساب مهارات لبناء فكرتك</p>
									</div>
								</div>
							</div>
							<div class="min-w-full md:min-w-[340px] lg:min-w-[24.5%] py-3 px-6 bg-[#E8F1F8] rounded-lg border border-[#BACDDB]">
								<p class="text-[14px] text-left w-full">10 جهات</p>
								<div class="flex items-start justify-between">
									<img src="../assets/img/training_icon.svg" class="w-[37px] h-[37px] ml-1" alt="Icon" />
									<div>
										<p class="text-[22px] text-[#042925] font-bold">التدريب</p>
										<p class="text-[16px] text-[#78787A]">يهدف اكتساب مهارات لبناء فكرتك</p>
									</div>
								</div>
							</div>
							<div class="min-w-full md:min-w-[340px] lg:min-w-[24.5%] py-3 px-6 bg-[#E8F1F8] rounded-lg border border-[#BACDDB]">
								<p class="text-[14px] text-left w-full">10 جهات</p>
								<div class="flex items-start justify-between">
									<img src="../assets/img/training_icon.svg" class="w-[37px] h-[37px] ml-1" alt="Icon" />
									<div>
										<p class="text-[22px] text-[#042925] font-bold">التدريب</p>
										<p class="text-[16px] text-[#78787A]">يهدف اكتساب مهارات لبناء فكرتك</p>
									</div>
								</div>
							</div>
							<div class="min-w-full md:min-w-[340px] lg:min-w-[24.5%] py-3 px-6 bg-[#E8F1F8] rounded-lg border border-[#BACDDB]">
								<p class="text-[14px] text-left w-full">10 جهات</p>
								<div class="flex items-start justify-between">
									<img src="../assets/img/training_icon.svg" class="w-[37px] h-[37px] ml-1" alt="Icon" />
									<div>
										<p class="text-[22px] text-[#042925] font-bold">التدريب</p>
										<p class="text-[16px] text-[#78787A]">يهدف اكتساب مهارات لبناء فكرتك</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
