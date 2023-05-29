<script setup lang="ts">
import AppCardWithMap from "~/components/shared/AppCardWithMap.vue";
</script>
<template>
	<div class="container">
		<div class="-mx-6 md:mx-0 mb-30 xl:mb-40">
			<div
				class="grid grid-cols-1 gap-10 md:gap-30 xl:gap-8"
			>
				<app-card-with-map
					title="Canada"
					:latitude="43.648233"
					:longitude="-79.375602"
					reverse
				>
					<template #address>
						<span class="font-bold"
							>Designo Central Office</span
						><br />
						3886 Wellington Street <br />Toronto,
						Ontario M9C 3J5
					</template>
					<template #contact>
						<span class="font-bold">Contact</span
						><br />
						P: +1 253-863-8967<br />
						M: contact@designo.co
					</template>
				</app-card-with-map>
				<app-card-with-map
					title="Australia"
					:latitude="-30.32953"
					:longitude="149.78819"
				>
					<template #address>
						<span class="font-bold"
							>Designo Central Office</span
						><br />
						19 Balonne Street<br />New South Wales
						2443
					</template>
					<template #contact>
						<span class="font-bold">Contact</span
						><br />
						P: (02) 6720 9092<br />
						M: contact@designo.co
					</template>
				</app-card-with-map>
				<app-card-with-map
					title="United Kingdom"
					:latitude="51.14153"
					:longitude="1.29764"
					reverse
				>
					<template #address>
						<span class="font-bold"
							>Designo Central Office</span
						><br />
						13 Colorado Way<br />Rhyd-y-fro SA8
						9GA
					</template>
					<template #contact>
						<span class="font-bold">Contact</span
						><br />
						P: 078 3115 1400<br />
						M: contact@designo.co
					</template>
				</app-card-with-map>
			</div>
		</div>
	</div>
</template>
