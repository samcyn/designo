<script setup lang="ts">
import AppHero from "~/components/shared/AppHero.vue";
import AppModuleSection from "~/components/home-page/AppModuleSection.vue";
import AppOurRecordSection from "~/components/home-page/AppOurRecordSection.vue";
import AppIcon from "~/components/shared/AppIcon.vue";
</script>
<template>
	<div class="relative overflow-hidden">
		<div class="relative z-10">
			<app-hero />
			<!-- modules -->
			<app-module-section />
			<!-- our attitude and records -->
			<app-our-record-section />
		</div>

		<div
			class="absolute w-full top-80 z-1 hidden xl:block"
		>
			<div class="container">
				<div class="rectangle-overlay rectangle-overlayLeft"></div>
			</div>
		</div>
		<div
			class="absolute w-full -bottom-[146px] z-1 hidden xl:block"
		>
			<div class="container">
				<div class="rectangle-overlay rectangle-overlayRight rotate-180"></div>
			</div>
		</div>
	</div>
</template>
<style scoped lang="css">
</style>