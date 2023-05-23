<script setup lang="ts">
import AppButton from '~/components/shared/AppButton.vue';
import AppBrandLogo from '~/components/shared/AppBrandLogo.vue';
import AppLink from '~/components/shared/AppLink.vue';

const expandClass =
	ref(false);
</script>

<template>
	<header
		class="relative bg-white z-10"
	>
		<div class="container">
			<nav
				class="header__nav flex flex-wrap md:flex-nowrap items-center lg:items-center px-2 py-7 md:px-6 md:py-4 xl:px-0"
				aria-label="Main navigation"
			>
				<app-brand-logo
					class="logo"
					aria-label="audioPhile"
				/>

				<div
					class="flex text-black ml-auto md:hidden"
				>
					{ expandClass ? (
					<app-icon-button
						icon="close"
						width="16"
						height="15"
						viewBox="0 0 16 15"
						color="none"
						onClick="{onExpand}"
					/>
					) : (
					<app-icon-button
						icon="hamburger"
						width="20"
						height="6"
						viewBox="0 0 20 6"
						color="none"
						onClick="{onExpand}"
					/>
					) }
				</div>

				<div
					:class="`${
						expandClass
							? 'md:flex'
							: 'hidden md:flex'
					} basis-full md:basis-auto mt-7 md:mt-0 pt-8 pr-2 pb-1
          md:pt-0 md:pr-0 md:pb-0 flex-grow items-center justify-between`"
				>
					<ul
						class="flex flex-wrap md:flex-grow md:justify-center p-0 m-0 list-none flex-row gap-5 md:gap-9 mb-5 md:mb-0"
					>
						<li
							class="flex justify-center text-center basis-full md:basis-auto"
						>
							<app-link
								to="/about"
								class="flex text-black text-xs font-bold uppercase tracking-2px m-0 hover:text-black/30 py-1.5px"
								activeclass="!text-orange"
								>Stories</app-link
							>
						</li>
						<li
							class="flex justify-center text-center basis-full md:basis-auto"
						>
							<app-link
								to="/contact"
								class="flex text-black text-xs font-bold uppercase tracking-2px m-0 hover:text-black/30 py-1.5px"
								activeclass="!text-orange"
								>Features</app-link
							>
						</li>
						<li
							class="flex justify-center text-center basis-full md:basis-auto"
						>
							<app-link
								to="/location"
								class="flex text-black text-xs font-bold uppercase tracking-2px m-0 hover:text-black/30 py-1.5px"
								activeclass="!text-orange"
								>Pricing</app-link
							>
						</li>
					</ul>
					
					<div
						class="md:flex"
					>
						<app-button
							class="uppercase w-full justify-center"
						>
							Get An Invite
						</app-button>
					</div>
				</div>
			</nav>
		</div>
	</header>
</template>
<style scoped></style>
