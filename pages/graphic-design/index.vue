<script setup lang="ts">
import AppHeroMini from "~/components/shared/AppHeroMini.vue";
import AppGraphicPortfolioSections from "~/components/graphic-design-page/AppGraphicPortfolioSections.vue";
import AppOtherAppSection from "~/components/shared/AppOtherAppSection.vue";
</script>
<template>
	<app-hero-mini
		title="Graphic Design"
		description="
      We deliver eye-catching branding materials that are 
      tailored to meet your business objectives.
    "
	/>
	<!-- portfolios -->
	<app-graphic-portfolio-sections />
	<!-- other apps -->
	<app-other-app-section />
</template>
