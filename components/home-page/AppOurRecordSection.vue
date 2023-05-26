<script setup lang="ts">
import AppCardWithIlustration from "~/components/shared/AppCardWithIlustration.vue";
</script>
<template>
	<div class="container">
		<div class="py-30 md:pb-17 xl:py-40">
			<div
				class="grid grid-cols-1 xl:grid-cols-3 gap-20 md:gap-8 xl:gap-30px"
			>
				<app-card-with-ilustration
					title="PASSIONATE"
					description="
            Each project starts with an in-depth brand research to 
            ensure we only create products that serve a purpose. 
            We merge art, design, and technology into exciting new solutions.
          "
					matrix="deca"
				>
					<template v-slot="imgProps">
						<img
							src="~/assets/home/desktop/illustration-passionate.svg"
							alt="illustrstions"
							v-bind="imgProps"
						/>
					</template>
				</app-card-with-ilustration>
				<app-card-with-ilustration
					title="RESOURCEFUL"
					description="
            Everything that we do has a strategic purpose. 
            We use an agile approach in all of our projects 
            and value customer collaboration. It guarantees 
            superior results that fulfill our clients’ needs.
          "
					matrix="octa"
				>
					<template v-slot="imgProps">
						<img
							src="~/assets/home/desktop/illustration-resourceful.svg"
							alt="illustrstions"
							v-bind="imgProps"
						/>
					</template>
				</app-card-with-ilustration>
				<app-card-with-ilustration
					title="FRIENDLY"
					description="
            We are a group of enthusiastic folks 
            who know how to put people first. 
            Our success depends on our customers, 
            and we strive to give them the 
            best experience a company can provide.
          "
					matrix="semi"
				>
					<template v-slot="imgProps">
						<img
							src="~/assets/home/desktop/illustration-friendly.svg"
							alt="illustrstions"
							v-bind="imgProps"
						/>
					</template>
				</app-card-with-ilustration>
			</div>
		</div>
	</div>
</template>
