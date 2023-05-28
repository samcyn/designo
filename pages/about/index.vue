<script setup lang="ts">
import AppCardWithCitySkyline from "~/components/shared/AppCardWithCitySkyline.vue";
</script>
<template>
	<div class="container">
		<div
			class="grid grid-cols-1 xl:grid-cols-3 gap-10 md:gap-8 xl:gap-x-30px xl:gap-y-15"
		>
			<app-card-with-city-skyline title="Canada" matrix="semi">
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
