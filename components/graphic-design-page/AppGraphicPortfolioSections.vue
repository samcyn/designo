<script setup lang="ts">
import AppCardWithPoster from "~/components/shared/AppCardWithPoster.vue";
</script>
<template>
	<div class="container">
		<div class="py-24 md:py-30 xl:py-40">
			<div
				class="grid grid-cols-1 xl:grid-cols-3 gap-10 md:gap-8 xl:gap-x-30px xl:gap-y-8"
			>
				<app-card-with-poster
					to="/graphic-design"
					title="TIM BROWN"
					description="A book cover designed for Tim Brown’s new release, ‘Change’"
				>
					<img
						src="~/assets/graphic-design/desktop/image-change.jpg"
						alt=""
						class="w-full h-full"
					/>
				</app-card-with-poster>
				<app-card-with-poster
					to="/graphic-design"
					title="BOXED WATER"
					description="A simple packaging concept made for Boxed Water"
				>
					<img
						src="~/assets/graphic-design/desktop/image-boxed-water.jpg"
						alt=""
						class="w-full h-full"
					/>
				</app-card-with-poster>
				<app-card-with-poster
					to="/graphic-design"
					title="SCIENCE!"
					description="A poster made in collaboration with the Federal Art Project"
				>
					<img
						src="~/assets/graphic-design/desktop/image-science.jpg"
						alt=""
						class="w-full h-full"
					/>
				</app-card-with-poster>
			</div>
		</div>
	</div>
</template>
