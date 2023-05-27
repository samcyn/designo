<script setup lang="ts">
import AppHeroMini from "~/components/shared/AppHeroMini.vue";
import AppPortfolioSections from "~/components/web-design-page/AppPortfolioSections.vue";
import AppOtherAppSection from "~/components/shared/AppOtherAppSection.vue";
</script>
<template>
	<app-hero-mini
		title="Web Design"
		description="We build websites that serve as powerful marketing tools and bring memorable brand experiences."
	/>
	<!-- portfolios -->
	<app-portfolio-sections />
	<!-- other apps -->
	<app-other-app-section />
</template>
