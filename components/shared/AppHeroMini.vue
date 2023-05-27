<script setup lang="ts">
interface Props {
	title: string;
	description: string;
}

defineProps<Props>();
</script>
<template>
	<div class="container">
		<div
			class="card relative -mx-6 md:mx-0 px-6 bg-peach flex justify-center items-center overflow-hidden group"
		>
			<div
				class="text-center text-white relative z-10"
			>
				<p
					class="card__title font-medium mb-6 capitalize"
				>
					{{ title }}
				</p>
				<p
					class="card__description font-normal m-auto"
				>
					<slot>
						{{ description }}
					</slot>
				</p>
			</div>
			<!-- overlays -->
			<div
				class="overlays absolute grid grid-cols-3 transition group-hover:translate-x-2"
			>
				<div
					class="overlays__circle -rotate-90"
				></div>
				<div
					class="overlays__circle -rotate-180"
				></div>
				<div
					class="overlays__circle rotate-90"
				></div>
				<div
					class="overlays__circle col-start-2 -rotate-180"
				></div>
				<div
					class="overlays__circle rotate-90"
				></div>
			</div>
		</div>
	</div>
</template>
<style scoped lang="css">
.card {
	padding-top: 105px;
	padding-bottom: 105px;
}

.card__title {
	font-size: 32px;
	line-height: 36px;
}
.card__description {
	font-size: 15px;
	line-height: 25px;
}

.overlays {
	height: 584px;
	width: 876px;
	right: 0px;
	top: 0px;
}
.overlays__circle {
	width: 292px;
	height: 292px;
	border-radius: 100%;
	background: linear-gradient(
		90deg,
		rgba(93, 2, 2, 0.0001) 0%,
		rgba(93, 2, 2, 0.497569) 100%
	);
	mix-blend-mode: normal;
	opacity: 0.31;
}

@media (min-width: 768px) {
	.card {
		padding-top: 64px;
		padding-bottom: 64px;
	}
	.card {
		border-radius: 15px;
	}
	.card__title {
		font-size: 48px;
		line-height: 48px;
	}
	.card__description {
		font-size: 16px;
		line-height: 26px;
		max-width: 445px;
	}
	.overlays {
		top: -166px;
		right: -166px;
	}
}

@media (min-width: 1440px) {
  .overlays {
		top: -166px;
		right: 0;
	}
}
</style>
