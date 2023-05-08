<template>
	<header>
		<nav class="bg-white border-gray-200 px-1 md:px-6 py-2.5">
			<div class="flex flex-wrap items-start justify-between max-w-screen-xl mx-auto">
				<router-link to="/" class="flex items-center">
					<img src="../assets/img/logo.svg" class="h-14 xl:h-20" alt="Logo" />
				</router-link>
				<div class="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
					<ul class="flex flex-col mt-4 font-medium text-grey lg:flex-row-reverse lg:items-center lg:space-x-7">
						<li>
							<router-link v-if="!isLoggedIn" to="/signin" class="hidden px-5 py-2 text-white rounded-full linearBG md:block">
								تسجيل الدخول
							</router-link>
						</li>
						<li>
							<router-link v-if="isLoggedIn" to="/profile" class="flex items-center ml-auto">
								<img src="../assets/img/user.svg" class="h-[50px]" alt="User" />
							</router-link>
						</li>
						<li>
							<router-link to="/prize" class="block pb-4 -mb-4">جائزة ابتكر </router-link>
						</li>
						<li>
							<router-link to="/events" class="block pb-4 -mb-4">الفعاليات</router-link>
						</li>
						<li>
							<router-link to="/library" class="block pb-4 -mb-4">مكتبة الابتكار</router-link>
						</li>
						<li>
							<router-link to="/services" class="block pb-4 -mb-4">الخدمات</router-link>
						</li>
						<li>
							<router-link to="/" class="block pb-4 -mb-4">الرئيسية</router-link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</header>
</template>

<script setup>
	import { ref } from "vue";
	const isLoggedIn = ref(false);
</script>

<style scoped>
	.linearBG {
		background: linear-gradient(90deg, #007598 21.23%, #019390 75.88%);
	}
</style>
