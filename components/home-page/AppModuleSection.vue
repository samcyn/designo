<script setup lang="ts">
import AppCardWithOverlay from "~/components/shared/AppCardWithOverlay.vue";
</script>
<template>
	<div class="container">
		<div class="pt-30 xl:pt-40">
			<div class="flex flex-wrap -m-3">
				<div
					class="basis-full p-3 xl:basis-1/2 xl:w-1/2"
				>
					<AppCardWithOverlay
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
				</div>

				<div
					class="basis-full p-3 xl:basis-1/2 xl:w-1/2"
				>
					<div class="flex flex-wrap -m-3">
						<div class="basis-full p-3">
							<AppCardWithOverlay
								class="w-full"
								to="/app-design"
								title="App design"
								sub-title="view projects"
							>
								<img
									src="~/assets/home/mobile/image-app-design.jpg"
									alt="alt"
									class="object-cover w-full h-full md:hidden"
								/>
								<img
									src="~/assets/home/tablet/image-app-design.jpg"
									alt="alt"
									class="object-cover w-full h-full hidden md:block xl:hidden"
								/>
								<img
									src="~/assets/home/desktop/image-app-design.jpg"
									alt="alt"
									class="object-cover w-full h-full hidden md:hidden xl:block"
								/>
							</AppCardWithOverlay>
						</div>
						<div class="basis-full p-3">
							<AppCardWithOverlay
								class="w-full"
								to="/graphic-design"
								title="Graphic design"
								sub-title="view projects"
							>
								<img
									src="~/assets/home/mobile/image-graphic-design.jpg"
									alt="alt"
									class="object-cover w-full h-full md:hidden"
								/>
								<img
									src="~/assets/home/tablet/image-graphic-design.jpg"
									alt="alt"
									class="object-cover w-full h-full hidden md:block xl:hidden"
								/>
								<img
									src="~/assets/home/desktop/image-graphic-design.jpg"
									alt="alt"
									class="object-cover w-full h-full hidden md:hidden xl:block"
								/>
							</AppCardWithOverlay>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
