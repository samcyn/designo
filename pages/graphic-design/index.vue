<script setup lang="ts">
import AppHeroMini from "~/components/shared/AppHeroMini.vue";
import AppGraphicPortfolioSections from "~/components/graphic-design-page/AppGraphicPortfolioSections.vue";
import AppOtherAppSection from "~/components/shared/AppOtherAppSection.vue";
</script>
<template>
	<div class="relative">
		<div class="relative z-10">
			<app-hero-mini
				title="Graphic Design"
				description="
      We deliver eye-catching branding materials that are 
      tailored to meet your business objectives.
    "
			>
				<template #overlays>
					<div
						class="overlaysApp absolute grid grid-cols-3 transition group-hover:translate-x-2"
					>
						<div
							class="overlaysApp__circle md:-rotate-90 xl:rotate-0"
						></div>
						<div
							class="overlaysApp__circle xl:hidden md:-rotate-180 xl:rotate-0"
						></div>
						<div
							class="overlaysApp__circle xl:col-start-3 md:rotate-90 xl:rotate-0"
						></div>
						<div
							class="overlaysApp__circle md:col-start-2 xl:col-start-auto md:-rotate-180 xl:rotate-0"
						></div>
						<div
							class="overlaysApp__circle md:rotate-90 xl:rotate-0"
						></div>
					</div>
				</template>
			</app-hero-mini>
			<!-- portfolios -->
			<app-graphic-portfolio-sections />
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
	top: 0px;
	right: 0px;
}

@media (min-width: 768px) {
	.overlaysApp {
		top: -166px;
		left: -21px;
		right: auto;
	}
}

@media (min-width: 1440px) {
	.overlaysApp {
		top: -166px;
		left: -58px;
		right: auto;
	}
}
</style>
