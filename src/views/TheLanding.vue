<template>
	<div class="w-full flex flex-col p-3">
		<div class="bg-white rounded-lg shadow-sm overflow-hidden flex-1 flex flex-col">
			<div class="bm_img flex items-center justify-start px-6">
				<h1 class="w-96 text-[48px] font-medium text-center text-grey">أداة اختيار نموذج العمل التجاري</h1>
			</div>
			<div class="flex-1 flex flex-col justify-start p-8">
				<h3 class="mb-8 text-lg">
					هذه الخدمة تتيح لك معرفة نموذج العمل التجاري الأقرب لفكرتك الابتكارية عن طريق الإجابة عن بعض الأسئلة الخاصة بفكرة مشروعك
					و مساعدتك على التطور و الاطلاع على الرواد في مجالك، تعد نماذج الأعمال مهمة لكل من الشركات الجديدة والقائمة؛ فهي تساعدهم
					على جذب الاستثمار وتوظيف المواهب وتحفيز الإدارة والموظفين.
				</h3>
				<div class="mb-8 w-full max-w-lg flex flex-col items-start justify-center space-y-4">
					<h3 class="text-lg font-bold text-grey">خطوات العمل</h3>
					<div class="flex items-center justify-center">
						<div class="hidden h-12 w-12 rounded-full bg-secondary mx-1 md:flex items-center justify-center">
							<img src="../assets/img/icon_1.svg" class="h-7 w-7" alt="Icon" />
						</div>
						<p class="md:hidden text-secondary">●</p>
						<div class="text-lg font-medium text-grey mx-3">الإجابة على الأسئلة الاستكشافية</div>
					</div>
					<div class="flex items-center justify-center">
						<div class="hidden h-12 w-12 rounded-full bg-secondary mx-1 md:flex items-center justify-center">
							<img src="../assets/img/icon_2.svg" class="h-7 w-7" alt="Icon" />
						</div>
						<p class="md:hidden text-secondary">●</p>
						<div class="text-lg font-medium text-grey mx-3">الحصول على نماذج الأعمال المقترحة</div>
					</div>
					<div class="flex items-center justify-center">
						<div class="hidden h-12 w-12 rounded-full bg-secondary mx-1 md:flex items-center justify-center">
							<img src="../assets/img/icon_3.svg" class="h-7 w-7" alt="Icon" />
						</div>
						<p class="md:hidden text-secondary">●</p>
						<div class="text-lg font-medium text-grey mx-3">التعرف على تفاصيل كل نموذج عمل</div>
					</div>
					<div class="flex items-center justify-center">
						<div class="hidden h-12 w-12 rounded-full bg-secondary mx-1 md:flex items-center justify-center">
							<img src="../assets/img/icon_4.svg" class="h-7 w-7" alt="Icon" />
						</div>
						<p class="md:hidden text-secondary">●</p>
						<div class="text-lg font-medium text-grey mx-3">الاستفادة من المقترحات في خطتك التجارية القادمة</div>
					</div>
				</div>
				<router-link to="/create" class="bg-secondary w-1/2 text-white text-center py-2 rounded-full">ابدأ</router-link>
			</div>
		</div>
	</div>
</template>
