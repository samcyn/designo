<script setup lang="ts">
import AppBrandLogo from "~/components/shared/AppBrandLogo.vue";
import AppButton from "./shared/AppButton.vue";
</script>
<template>
	<footer>
		<div class="container relative">
			<div
				class="footer__top bg-peach py-16 px-6"
			>
				<p
					class="font-normal text-center text-white text-[32px] leading-9 mb-[6px]"
				>
					Let’s talk about your project
				</p>
				<p
					class="text-white text-center text-[15px] leading-25px font-normal mb-8"
				>
					Ready to take it to the next level?
					Contact us today and find out how our
					expertise can help your business grow.
				</p>
				<div class="text-center">
					<app-button
						class="m-auto"
						button-type="secondary"
						>Get In Touch</app-button
					>
				</div>
			</div>
		</div>
		<div class="bg-black">
			<div class="container">
				<!-- menus -->
				<nav
					class="header__nav flex flex-wrap md:flex-nowrap items-center lg:items-center py-9 md:py-16 xl:px-0"
					aria-label="footer navigation"
				>
					<app-brand-logo
						class="logo text-white"
						aria-label="designo logo footer"
					/>

					<div
						class="basis-full md:basis-auto px-6 py-12 md:px-0 md:py-0 flex-grow items-center justify-between bg-black"
					>
						<ul
							class="flex flex-wrap flex-row md:flex-grow md:justify-end p-0 m-0 list-none gap-8 md:gap-10"
						>
							<app-navigation-menu to="/about">
								Our Company
							</app-navigation-menu>
							<app-navigation-menu
								to="/locations"
							>
								Locations
							</app-navigation-menu>
							<app-navigation-menu to="/contact">
								Contact
							</app-navigation-menu>
						</ul>
					</div>
				</nav>
			</div>
		</div>
	</footer>
</template>
<style scoped lang="css">
.footer__top {
	border-radius: 15px;
}
</style>
