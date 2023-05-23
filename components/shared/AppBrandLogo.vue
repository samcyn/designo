<script
	setup
	lang="ts"
>
import AppLink from '~/components/shared/AppLink.vue';
import AppIcon from '~/components/shared/AppIcon.vue';


</script>

<template>
	<app-link
		class="transition p-0 mr-0 inline-flex items-center hover:text-orange-100"
		to="/"
		aria-label="designo logo"
	>
		<AppIcon
			icon="logo"
			width="196"
			height="24"
			viewBox="0 0 196 24"
			color="none"
		/>
	</app-link>
</template>
