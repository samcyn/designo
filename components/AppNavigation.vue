<script setup lang="ts">
import AppBrandLogo from "~/components/shared/AppBrandLogo.vue";
import AppIconButton from "~/components/shared/AppIconButton.vue";

const expandClass =
	ref(false);

const onExpand = () => {
	expandClass.value =
		!expandClass.value;
};
</script>

<template>
	<header
		class="relative bg-white z-50"
	>
		<div class="container relative">
			<nav
				class="header__nav flex flex-wrap md:flex-nowrap items-center lg:items-center py-9 md:py-16 xl:px-0"
				aria-label="Main navigation"
			>
				<app-brand-logo
					class="logo"
					aria-label="audioPhile"
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
						`
					"
				>
					<ul
						class="flex flex-wrap flex-row md:flex-grow md:justify-end p-0 m-0 list-none gap-8 md:gap-10"
					>
						<app-navigation-menu to="/about">
							Our Company
						</app-navigation-menu>
						<app-navigation-menu to="/locations">
							Locations
						</app-navigation-menu>
						<app-navigation-menu to="/contact">
							Contact
						</app-navigation-menu>
					</ul>
				</div>
			</nav>
		</div>
	</header>
</template>
<style scoped></style>
