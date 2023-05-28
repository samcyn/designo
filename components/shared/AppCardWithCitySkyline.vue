<script setup lang="ts">
import { Events } from "vue";
import AppCardWithIlustration from "~/components/shared/AppCardWithIlustration.vue";
import AppButton from "./AppButton.vue";

interface Props {
	matrix?: "octa" | "semi" | "deca";
	title?: string;
	src?: string;
	alt?: string;
}

// set defaults props
withDefaults(defineProps<Props>(), {
	matrix: "semi",
});

const emit = defineEmits(["click"]);

const onClick = (e: Events["onClick"]) => {
	emit("click", e);
};
</script>
<template>
	<app-card-with-ilustration
		class="flex-col items-center justify-center gap-12"
		:matrix="matrix"
	>
		<template v-slot="imgProps">
			<slot v-bind="imgProps">
				<img
					:src="src"
					:alt="alt"
					v-bind="imgProps"
				/>
			</slot>
		</template>
		<template #body>
			<div class="text-center">
				<p
					class="card__title text-dark-grey text-center uppercase font-medium mb-8 md:mb-4 xl:mb-8"
				>
					{{ title }}
				</p>
				<app-button @click="onClick"
					>See Locations</app-button
				>
			</div>
		</template>
	</app-card-with-ilustration>
</template>
<style scoped lang="css">
.card__title {
	font-size: 20px;
	line-height: 26px;
	letter-spacing: 5px;
}
</style>
