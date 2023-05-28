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
			class="card__figure w-full xl:w-[476px] h-80 xl:h-full overflow-hidden relative z-10"
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
					? 'bg-peach md:py-16 md:px-[58px] xl:py-[135px] xl:pl-[95px] xl:pr-[82px]'
					: 'bg-[#FDF3F0] md:py-17 md:px-[58px] xl:py-[154px] xl:px-24'
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
				class="absolute grid transition z-[1] group-hover:scale-105"
				:class="
					type === 'standard'
						? '-top-[140px] right-0 md:right-[170px] md:bottom-[101px] md:top-auto xl:bottom-0 xl:right-0'
						: 'grid-cols-2 top-0 left-0 md:-top-[212px] xl:top-auto xl:bottom-0 xl:-left-[146px] md:left-[94px] w-[584px]'
				"
			>
				<div
					v-if="type === 'standard'"
					class="overlaysApp__circle md:w-[640px] md:h-[640px]"
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
		border-radius: 15px;
	}
	.card__body {
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
}

@media (min-width: 1440px) {
	.card__body {
	}
}
</style>
