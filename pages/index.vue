<script setup lang="ts">
import AppHero from "~/components/shared/AppHero.vue";
import AppCardWithOverlay from "~/components/shared/AppCardWithOverlay.vue";
import AppCardWithIlustration from "~/components/shared/AppCardWithIlustration.vue";
</script>
<template>
	<app-hero />
	<div class="container">
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
					<div class="basis-full p-3">
						<AppCardWithOverlay
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
		</div>
	</div>
	<div class="container">
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
</template>
