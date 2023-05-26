<script setup lang="ts">
interface Props {
	matrix?: "octa" | "semi" | "deca";
	title: string;
	description: string;
	src?: string;
	alt?: string;
}

// set defaults props
withDefaults(defineProps<Props>(), {
	matrix: "semi",
});
</script>
<template>
	<div
		class="flex flex-col md:flex-row xl:flex-col items-center justify-center gap-12"
	>
		<figure
			class="card__figure flex justify-center items-center relative overflow-hidden"
		>
			<slot class="z-10 relative">
				<img
					:src="src"
					:alt="alt"
					class="z-10 relative"
				/>
			</slot>
			<div
				class="card__oval absolute inset-0 w-full h-full"
				:class="`${matrix}-matrix`"
			></div>
		</figure>
		<div class="md:grow md:shrink md:basis-0">
			<p
				class="card__title text-dark-grey text-center md:text-left xl:text-center font-medium mb-8 md:mb-4 xl:mb-8"
			>
				{{ title }}
			</p>
			<p
				class="card__description text-dark-grey font-normal text-center md:text-left xl:text-center"
			>
				{{ description }}
			</p>
		</div>
	</div>
</template>
<style scoped lang="css">
.card__figure {
	width: 202px;
	flex: 0 0 202px;
	height: 202px;
}
.card__oval {
	border-radius: 100%;
	background: linear-gradient(
		90deg,
		rgba(93, 2, 2, 0.0001) 0%,
		rgba(93, 2, 2, 0.497569) 100%
	);
	mix-blend-mode: normal;
	opacity: 0.2;
	/* transform: matrix(0, -1, -1, 0, 0, 0);
  transform: matrix(-1, 0, 0, 1, 0, 0);
	transform: matrix(0, 1, 1, 0, 0, 0); */
}
.semi-matrix {
	transform: matrix(0, -1, -1, 0, 0, 0);
}
.octa-matrix {
	transform: matrix(0, 1, 1, 0, 0, 0);
}
.deca-matrix {
	transform: matrix(-1, 0, 0, 1, 0, 0);
}
.card__title {
	font-size: 20px;
	line-height: 26px;
	letter-spacing: 5px;
}
.card__description {
	font-size: 16px;
	line-height: 26px;
}
</style>
