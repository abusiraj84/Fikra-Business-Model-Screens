<template>
	<header>
		<nav class="bg-white border-gray-200 px-6 py-2.5">
			<div class="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
				<a href="https://flowbite.com" class="flex items-center">
					<img src="../assets/img/logo.svg" class="h-16 xl:h-20" alt="Logo" />
				</a>
				<div class="flex items-center lg:order-2">
					<a href="#" class="px-5 py-2 text-white rounded-full linearBG">تسجيل الدخول</a>
					<button
						data-collapse-toggle="mobile-menu-2"
						type="button"
						class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
						aria-controls="mobile-menu-2"
						aria-expanded="false">
						<span class="sr-only">Open main menu</span>
						<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
							<path
								fill-rule="evenodd"
								d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
								clip-rule="evenodd"></path>
						</svg>
						<svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
							<path
								fill-rule="evenodd"
								d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
								clip-rule="evenodd"></path>
						</svg>
					</button>
				</div>
				<div class="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
					<ul class="flex flex-col mt-4 font-medium text-grey lg:flex-row-reverse lg:items-start lg:space-x-7">
						<li>
							<a href="#" class="block pb-4">جائزة ابتكر</a>
						</li>
						<li>
							<a href="#" class="block pb-4">خدمات منظومة الابتكار</a>
						</li>
						<li>
							<a href="#" class="block pb-4">شهادة المنشأة الابتكارية</a>
						</li>
						<li>
							<a href="#" class="block pb-4">رحلة المبتكر التجاري</a>
						</li>
						<li>
							<router-link to="/" class="block pb-4">الرئيسية</router-link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</header>
</template>

<style scoped>
	.linearBG {
		background: linear-gradient(90deg, #007598 21.23%, #019390 75.88%);
	}
</style>
