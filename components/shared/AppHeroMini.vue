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
			<slot name="overlays"></slot>
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
}
</style>
