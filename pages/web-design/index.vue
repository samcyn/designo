<script setup lang="ts">
import AppHeroMini from "~/components/shared/AppHeroMini.vue";
import AppWebPortfolioSections from "~/components/web-design-page/AppWebPortfolioSections.vue";
import AppOtherAppSection from "~/components/shared/AppOtherAppSection.vue";
</script>
<template>
	<div class="relative overflow-hidden">
		<div class="relative z-10">
			<app-hero-mini
				title="Web Design"
				description="We build websites that serve as powerful marketing tools and bring memorable brand experiences."
			>
				<template #overlays>
					<div
						class="overlaysApp absolute grid grid-cols-3 transition group-hover:scale-105"
					>
						<div
							class="overlaysApp__circle -rotate-90"
						></div>
						<div
							class="overlaysApp__circle -rotate-180"
						></div>
						<div
							class="overlaysApp__circle rotate-90"
						></div>
						<div
							class="overlaysApp__circle col-start-2 -rotate-180"
						></div>
						<div
							class="overlaysApp__circle rotate-90"
						></div>
					</div>
				</template>
			</app-hero-mini>
			<!-- portfolios -->
			<app-web-portfolio-sections />
			<!-- other apps -->
			<app-other-app-section />
		</div>
		<!-- overlay -->
		<div
			class="absolute w-full top-[126px] z-1 hidden xl:block"
		>
			<div class="container">
				<div
					class="rectangle-overlay rectangle-overlayLeft"
				></div>
			</div>
		</div>
	</div>
</template>
<style scoped lang="css">
.overlaysApp {
	right: 0px;
	top: 0px;
}

@media (min-width: 768px) {
	.overlaysApp {
		top: -166px;
		right: -166px;
	}
}

@media (min-width: 1440px) {
	.overlaysApp {
		top: -166px;
		right: 0;
	}
}
</style>
