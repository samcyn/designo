<script setup lang="ts">
interface Props {
	title: string;
	description?: string;
	source?: string;
	imgAlt?: string;
	type?: "standard" | "custom";
	reverse?: boolean;
}
withDefaults(defineProps<Props>(), {
	type: "standard",
});
</script>
<template>
	<div
		class="card relative flex flex-col overflow-hidden group transition"
		:class="
			reverse
				? 'xl:flex-row-reverse'
				: 'xl:flex-row'
		"
	>
		<figure
			class="card__figure h-80 xl:h-full overflow-hidden relative z-10"
		>
			<slot>
				<img :src="source" :alt="imgAlt" />
			</slot>
		</figure>
		<!-- card body begins -->
		<div
			class="card__body w-full xl:flex-1 relative py-20 px-6"
			:class="
				type === 'standard'
					? 'card__bodyStandard bg-peach'
					: 'card__bodyCustom bg-pale'
			"
		>
			<div class="text-center xl:text-left z-10">
				<p
					class="card__title capitalize font-medium mb-6"
					:class="
						type === 'standard'
							? 'text-white md:mb-8'
							: 'text-peach md:mb-6'
					"
				>
					{{ title }}
				</p>
				<div
					class="card__description text-dark-grey font-normal"
					:class="
						type === 'standard'
							? 'text-white'
							: 'text-dark-grey'
					"
				>
					<slot name="description">
						{{ description }}
					</slot>
				</div>
			</div>
			<!-- overlay starts -->
			<div
				class="absolute grid transition z-1 group-hover:scale-105"
				:class="
					type === 'standard'
						? 'overlay__standard'
						: 'overlay__custom grid-cols-2'
				"
			>
				<div
					v-if="type === 'standard'"
					class="overlaysApp__circle md:w-160 md:h-160"
				/>
				<template v-else>
					<div
						class="overlaysApp__circle opacity-[0.06]"
					/>
					<div
						class="overlaysApp__circle opacity-[0.06] col-start-1"
					/>
					<div
						class="overlaysApp__circle opacity-[0.06]"
					/>
				</template>
			</div>
		</div>
		<!-- card body ends -->
	</div>
</template>
<style scoped lang="css">
.card {
	border-radius: 0;
}
.card__figure {
	width: 100%;
}

.card__title {
	font-size: 32px;
	line-height: 36px;
}
.card__description {
	font-size: 15px;
	line-height: 25px;
}
.overlay__standard {
	top: -140px;
	right: 0;
}

.overlay__custom {
	width: 584px;
	top: 0;
	left: 0;
}


@media (min-width: 768px) {
	.card {
		border-radius: 15px;
	}
	.card__bodyStandard {
		padding: 64px 58px;
	}
	.card__bodyCustom {
		padding: 68px 58px;
	}
	
	.card__title {
		font-size: 48px;
		/* 40px custom */
		line-height: 48px;
	}
	.card__description {
		font-size: 16px;
		line-height: 26px;
	}
	.overlay__standard {
		top: auto;
		right: 170px;
		bottom: 101px;
	}
	.overlay__custom {
		top: -212px;
		left: 94px;
	}
}

@media (min-width: 1440px) {
	.card__figure {
		width: 476px;
	}
	.card__bodyStandard {
		padding-top: 135px;
		padding-bottom: 135px;
		padding-left: 95px;
		padding-right: 82px;
	}
	.card__bodyCustom {
		padding: 154px 96px;
	}
	
	.overlay__standard {
		bottom: 0;
		right: 0;
	}
	.overlay__custom {
		top: auto;
		bottom: 0;
		left: -146px;
	}
}
</style>
