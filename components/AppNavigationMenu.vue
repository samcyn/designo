<script setup lang="ts">
import type { RouteLocationRaw } from "#vue-router";

import AppLink from "./shared/AppLink.vue";

type Props = {
	to?: RouteLocationRaw;
};

defineProps<Props>();
</script>

<template>
	<li
		class="flex justify-start md:justify-center basis-full md:basis-auto"
	>
		<app-link
			:to="to"
			class="flex text-white md:text-dark-grey text-24px md:text-14px leading-25px md:leading-14px tracking-2px font-normal uppercase m-0"
			activeclass="!text-orange"
			><slot
		/></app-link>
	</li>
</template>
