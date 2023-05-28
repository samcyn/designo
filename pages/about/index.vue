<script setup lang="ts">
import AppCardWithCitySkyline from "~/components/shared/AppCardWithCitySkyline.vue";
import AppCardWithBanner from "~/components/shared/AppCardWithBanner.vue";
</script>
<template>
	<div class="container">
		<!--  -->
		<app-card-with-banner
			title="About Us"
			description="
        Founded in 2010, we are a creative agency that produces lasting results for 
        our clients. We’ve partnered with many startups, corporations, 
        and nonprofits alike to craft designs that make real impact. 
        We’re always looking forward to creating brands, 
        products, and digital experiences that connect with our clients’ audiences.
      "
		>
			<img
				class="h-full w-full object-cover"
				src="~/assets/about/desktop/image-about-hero.jpg"
				alt="about us"
			/>
		</app-card-with-banner>
		<br />
		<app-card-with-banner
			title="World-class talent"
			type="custom"
		>
			<img
				class="h-full w-full object-cover"
				src="~/assets/about/desktop/image-world-class-talent.jpg"
				alt="world-class-talent"
			/>
			<template #description>
				We are a crew of strategists, problem-solvers, and technologists. 
				Every design is thoughtfully crafted from concept to launch, 
				ensuring success in its given market. We are constantly updating 
				our skills in a myriad of platforms.
				<br /><br />
				Our team is multi-disciplinary and we are not merely interested 
				in form — content and meaning are just as important. 
				We give great importance to craftsmanship, service, and prompt delivery. 
				Clients have always been impressed with our high-quality outcomes 
				that encapsulates their brand’s story and mission.
			</template>
		</app-card-with-banner>
		<!--  -->
		<div
			class="grid grid-cols-1 xl:grid-cols-3 gap-10 md:gap-8 xl:gap-x-30px xl:gap-y-15"
		>
			<app-card-with-city-skyline
				title="Canada"
				matrix="semi"
			>
				<img
					src="~/assets/shared/desktop/illustration-canada.svg"
					alt="canada skyline"
				/>
			</app-card-with-city-skyline>
			<app-card-with-city-skyline
				title="Australia"
				matrix="deca"
			>
				<img
					src="~/assets/shared/desktop/illustration-australia.svg"
					alt="canada skyline"
				/>
			</app-card-with-city-skyline>
			<app-card-with-city-skyline
				title="United Kingdom"
				matrix="octa"
			>
				<img
					src="~/assets/shared/desktop/illustration-united-kingdom.svg"
					alt="canada skyline"
				/>
			</app-card-with-city-skyline>
		</div>
	</div>
</template>
