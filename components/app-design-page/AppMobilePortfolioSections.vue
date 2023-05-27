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
					to="/app-design"
					title="AIRFILTER"
					description="Solving the problem of poor indoor air quality by filtering the air"
				>
					<img
						src="~/assets/app-design/desktop/image-airfilter.jpg"
						alt=""
						class="w-full h-full"
					/>
				</app-card-with-poster>
				<app-card-with-poster
					to="/app-design"
					title="eyecam"
					description="Product that lets you edit your favorite photos and videos at any time"
				>
					<img
						src="~/assets/app-design/desktop/image-eyecam.jpg"
						alt=""
						class="w-full h-full"
					/>
				</app-card-with-poster>
				<app-card-with-poster
					to="/app-design"
					title="faceit"
					description="Get to meet your favorite internet superstar with the faceit app"
				>
					<img
						src="~/assets/app-design/desktop/image-faceit.jpg"
						alt=""
						class="w-full h-full"
					/>
				</app-card-with-poster>
				<app-card-with-poster
					to="/app-design"
					title="todo"
					description="A todo app that features cloud sync with light and dark mode"
				>
					<img
						src="~/assets/app-design/desktop/image-todo.jpg"
						alt=""
						class="w-full h-full"
					/>
				</app-card-with-poster>
				<app-card-with-poster
					to="/app-design"
					title="LOOPSTUDIOS"
					description="A VR experience app made for Loopstudios"
				>
					<img
						src="~/assets/app-design/desktop/image-loopstudios.jpg"
						alt=""
						class="w-full h-full"
					/>
				</app-card-with-poster>
			</div>
		</div>
	</div>
</template>
