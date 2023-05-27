<script setup lang="ts">
import AppCardWithOverlay from "~/components/shared/AppCardWithOverlay.vue";
const route = useRoute();
</script>
<template>
	<div class="container">
		<div class="pb-24 md:pb-30 xl:pb-40">
			<div
				class="grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8 xl:gap-30px"
			>
				<AppCardWithOverlay
					v-if="route.path !== '/web-design'"
					class="w-full h-full"
					to="/web-design"
					title="Web design"
					sub-title="view projects"
				>
					<img
						src="~/assets/home/mobile/image-web-design.jpg"
						alt="alt"
						class="object-cover w-full h-full md:hidden"
					/>
					<img
						src="~/assets/home/tablet/image-web-design.jpg"
						alt="alt"
						class="object-cover w-full h-full hidden md:block xl:hidden"
					/>
					<img
						src="~/assets/home/desktop/image-web-design-large.jpg"
						alt="alt"
						class="object-cover w-full h-full hidden md:hidden xl:block"
					/>
				</AppCardWithOverlay>
				<AppCardWithOverlay
					v-if="route.path !== '/app-design'"
					class="w-full"
					to="/app-design"
					title="App design"
					sub-title="view projects"
				>
					<img
						src="~/assets/home/mobile/image-web-design.jpg"
						alt="alt"
						class="object-cover w-full h-full md:hidden"
					/>
					<img
						src="~/assets/home/tablet/image-web-design.jpg"
						alt="alt"
						class="object-cover w-full h-full hidden md:block xl:hidden"
					/>
					<img
						src="~/assets/home/desktop/image-web-design-large.jpg"
						alt="alt"
						class="object-cover w-full h-full hidden md:hidden xl:block"
					/>
				</AppCardWithOverlay>
				<AppCardWithOverlay
					v-if="route.path !== '/graphic-design'"
					class="w-full"
					to="/graphic-design"
					title="Graphic design"
					sub-title="view projects"
				>
					<img
						src="~/assets/home/mobile/image-web-design.jpg"
						alt="alt"
						class="object-cover w-full h-full md:hidden"
					/>
					<img
						src="~/assets/home/tablet/image-web-design.jpg"
						alt="alt"
						class="object-cover w-full h-full hidden md:block xl:hidden"
					/>
					<img
						src="~/assets/home/desktop/image-web-design-large.jpg"
						alt="alt"
						class="object-cover w-full h-full hidden md:hidden xl:block"
					/>
				</AppCardWithOverlay>
			</div>
		</div>
	</div>
</template>
