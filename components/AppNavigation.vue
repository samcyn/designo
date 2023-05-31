<script setup lang="ts">
import AppBrandLogo from "~/components/shared/AppBrandLogo.vue";
import AppIconButton from "~/components/shared/AppIconButton.vue";

const route = useRoute();

const expandClass = ref(false);

const onExpand = () => {
	expandClass.value = !expandClass.value;
};
// close when route changes
watch(() => route.path, () => {
	expandClass.value = false;
});
</script>

<template>
	<header class="relative bg-white z-50">
		<div class="container relative">
			<nav
				class="header__nav flex flex-wrap md:flex-nowrap items-center lg:items-center py-9 md:py-16 xl:px-0"
				aria-label="Main navigation"
			>
				<app-brand-logo
					class="logo hover:text-orange-100"
					aria-label="designo logo"
				/>

				<div
					class="flex text-black ml-auto md:hidden"
				>
					<app-icon-button
						v-if="expandClass"
						icon="close"
						width="20"
						height="20"
						class-name="text-black border-0 outline-0"
						@click="onExpand"
					/>
					<app-icon-button
						v-else
						icon="hamburger"
						width="24"
						height="20"
						class-name="text-black border-0 outline-0"
						@click="onExpand"
					/>
				</div>

				<div
					:class="`${
						expandClass
							? 'md:flex'
							: 'hidden md:flex'
					} basis-full md:basis-auto 
						px-6 py-12
          	md:px-0 md:py-0 
						flex-grow items-center justify-between
						bg-black md:bg-white
						absolute md:relative
						left-0 right-0 top-24 md:inset-auto w-full md:w-auto
						`"
				>
					<ul
						class="flex flex-wrap flex-row md:flex-grow md:justify-end p-0 m-0 list-none gap-8 md:gap-10"
					>
						<app-navigation-menu
							to="/about"
							class="justify-start md:justify-center basis-full md:basis-auto"
							link-class-name="text-white md:text-dark-grey text-24px md:text-14px leading-25px md:leading-14px tracking-2px font-normal uppercase m-0"
						>
							Our Company
						</app-navigation-menu>
						<app-navigation-menu
							to="/locations"
							class="justify-start md:justify-center basis-full md:basis-auto"
							link-class-name="text-white md:text-dark-grey text-24px md:text-14px leading-25px md:leading-14px tracking-2px font-normal uppercase m-0"
						>
							Locations
						</app-navigation-menu>
						<app-navigation-menu
							to="/contact"
							class="justify-start md:justify-center basis-full md:basis-auto"
							link-class-name="text-white md:text-dark-grey text-24px md:text-14px leading-25px md:leading-14px tracking-2px font-normal uppercase m-0"
						>
							Contact
						</app-navigation-menu>
					</ul>
				</div>
			</nav>
		</div>
	</header>
</template>
<style scoped></style>
