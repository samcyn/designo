<script setup lang="ts">
import type { RouteLocationRaw } from "#vue-router";

import AppLink from "./shared/AppLink.vue";

type Props = {
	to?: RouteLocationRaw;
	activeclass?: string
	linkClassName?: string
};

defineProps<Props>();
</script>

<template>
	<li
		class="flex"
	>
		<app-link
			:to="to"
			class="flex"
			:class="linkClassName"
			:active-class="activeclass"
			><slot
		/></app-link>
	</li>
</template>
