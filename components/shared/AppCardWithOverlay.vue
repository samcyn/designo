<script setup lang="ts">
import { NuxtLinkProps } from "nuxt/app";

import AppLink from "./AppLink.vue";
import AppIcon from "./AppIcon.vue";

type Props = {
	to: NuxtLinkProps["to"];
	title: string;
	subTitle: string;
	imgMobile?: string;
	imgTablet?: string;
	imgDesktop?: string;
	alt?: string;
};

defineProps<Props>();
</script>
<template>
	<app-link
		:to="to"
		class="card flex relative items-center justify-center overflow-hidden group"
	>
		<figure class="absolute h-full w-full">
			<slot>
				<img
					:src="imgMobile"
					:alt="alt"
					class="object-cover w-full h-full md:hidden"
				/>
				<img
					:src="imgTablet"
					:alt="alt"
					class="object-cover w-full h-full hidden md:block xl:hidden"
				/>
				<img
					:src="imgDesktop"
					:alt="alt"
					class="object-cover w-full h-full hidden md:hidden xl:block"
				/>
			</slot>
		</figure>

		<div
			class="flex flex-col items-center z-20 relative text-center"
		>
			<p class="title">{{ title }}</p>
			<small
				v-if="subTitle"
				class="subTitle inline-flex items-center gap-4 mb-0 text-peach"
			>
				<span class="text-white">{{
					subTitle
				}}</span>
				<app-icon
					icon="arrow-forward-right"
					width="7px"
					height="10px"
				/>
			</small>
		</div>

		<!-- overlay -->
		<div
			class="transition z-10 bg-black/50 group-hover:bg-peach/75 absolute inset-0 w-full h-full"
		></div>
	</app-link>
</template>
<style scoped lang="css">
.card {
	border-radius: 15px;
	padding: 90px 16px;
}
.title {
	font-style: normal;
	font-weight: 500;
	font-size: 28px;
	line-height: 36px;
	text-align: center;
	letter-spacing: 1.4px;
	color: #ffffff;
	margin-bottom: 12px;
	text-transform: uppercase;
}
.subTitle {
	font-style: normal;
	font-weight: 500;
	font-size: 15px;
	line-height: 22px;
	letter-spacing: 5px;
	text-transform: uppercase;
}

@media (min-width: 768px) {
	.card {
		padding: 53px 16px;
	}
	.title {
		font-size: 40px;
		line-height: 48px;
		letter-spacing: 2px;
		margin-bottom: 24px;
	}
}

@media (min-width: 1440px) {
	.card {
		padding: 107px 16px;
	}
}
</style>
