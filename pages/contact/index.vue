<script setup lang="ts">
import AppCitySkyline from '~/components/shared/AppCitySkyline.vue';
import AppContactForm from '~/components/contact-page/AppContactForm.vue';
</script>
<template>
	<app-contact-form />
	<!-- skylines -->
	<AppCitySkyline />
</template>
<style scoped lang="css">
.overlay {
	height: 640px;
	width: 640px;
	border-radius: 100%;
	background: linear-gradient(
		90deg,
		rgba(93, 2, 2, 0.0001) 0%,
		rgba(93, 2, 2, 0.497569) 100%
	);
	mix-blend-mode: normal;
	opacity: 0.31;
	transform: matrix(0, 1, 1, 0, 0, 0);
}
</style>
