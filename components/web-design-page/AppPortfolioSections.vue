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
					to="/web-design"
					title="EXPRESS"
					description="A multi-carrier shipping website for ecommerce businesses"
				>
					<img
						src="~/assets/web-design/desktop/image-express.jpg"
						alt=""
						class="w-full h-full"
					/>
				</app-card-with-poster>
				<app-card-with-poster
					to="/web-design"
					title="transfer"
					description="Site for low-cost money transfers and sending money within seconds"
				>
					<img
						src="~/assets/web-design/desktop/image-transfer.jpg"
						alt=""
						class="w-full h-full"
					/>
				</app-card-with-poster>
				<app-card-with-poster
					to="/web-design"
					title="Photon"
					description="A state-of-the-art music player with high-resolution audio and DSP effects"
				>
					<img
						src="~/assets/web-design/desktop/image-photon.jpg"
						alt=""
						class="w-full h-full"
					/>
				</app-card-with-poster>
				<app-card-with-poster
					to="/web-design"
					title="builder"
					description="Connects users with local contractors based on their location"
				>
					<img
						src="~/assets/web-design/desktop/image-builder.jpg"
						alt=""
						class="w-full h-full"
					/>
				</app-card-with-poster>
				<app-card-with-poster
					to="/web-design"
					title="blogr"
					description="Blogr is a platform for creating an online blog or publication"
				>
					<img
						src="~/assets/web-design/desktop/image-blogr.jpg"
						alt=""
						class="w-full h-full"
					/>
				</app-card-with-poster>
				<app-card-with-poster
					to="/web-design"
					title="camp"
					description="Get expert training in coding, data, design, and digital marketing"
				>
					<img
						src="~/assets/web-design/desktop/image-camp.jpg"
						alt=""
						class="w-full h-full"
					/>
				</app-card-with-poster>
			</div>
		</div>
	</div>
</template>
