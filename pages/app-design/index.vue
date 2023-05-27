<script setup lang="ts">
import AppHeroMini from "~/components/shared/AppHeroMini.vue";
import AppMobilePortfolioSections from "~/components/app-design-page/AppMobilePortfolioSections.vue";
import AppOtherAppSection from "~/components/shared/AppOtherAppSection.vue";
</script>
<template>
	<app-hero-mini
		title="App Design"
		description="
      Our mobile designs bring intuitive digital solutions
      to your customers right at their fingertips.
    "
	/>
	<!-- portfolios -->
	<app-mobile-portfolio-sections />
	<!-- other apps -->
	<app-other-app-section />
</template>
