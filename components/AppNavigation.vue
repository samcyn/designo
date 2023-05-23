<script setup lang="ts">
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
				<AppBrandLogo
					class="logo"
					aria-label="audioPhile"
				/>

				<div
					class="flex text-black ml-auto md:hidden"
				>
					{ expandClass ? (
					<AppIconButton
						icon="close"
						width="16"
						height="15"
						viewBox="0 0 16 15"
						color="none"
						onClick="{onExpand}"
					/>
					) : (
					<AppIconButton
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
							<AppLink
								to="/stories"
								class="flex text-black text-xs font-bold uppercase tracking-2px m-0 hover:text-black/30 py-1.5px"
								activeclass="!text-orange"
								>Stories</AppLink
							>
						</li>
						<li
							class="flex justify-center text-center basis-full md:basis-auto"
						>
							<AppLink
								to="/features"
								class="flex text-black text-xs font-bold uppercase tracking-2px m-0 hover:text-black/30 py-1.5px"
								activeclass="!text-orange"
								>Features</AppLink
							>
						</li>
						<li
							class="flex justify-center text-center basis-full md:basis-auto"
						>
							<AppLink
								to="/pricing"
								class="flex text-black text-xs font-bold uppercase tracking-2px m-0 hover:text-black/30 py-1.5px"
								activeclass="!text-orange"
								>Pricing</AppLink
							>
						</li>
					</ul>
					{/* action button
					*/}
					<div
						class="md:flex"
					>
						<AppButton
							class="uppercase w-full justify-center"
						>
							Get An Invite
						</AppButton>
					</div>
				</div>
			</nav>
		</div>
	</header>
</template>
<style scoped></style>
