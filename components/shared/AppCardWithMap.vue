<script setup lang="ts">
import { VNodeRef } from "nuxt/dist/app/compat/capi";

interface Props {
	title: string;
	reverse?: boolean;
	latitude: number;
	longitude: number;
}
const mapRef: VNodeRef | undefined = ref();

const props = withDefaults(
	defineProps<Props>(),
	{}
);
const { $leaflet } = useNuxtApp();

const { latitude, longitude } = toRefs(props);

onMounted(() => {
	if (
		mapRef.value &&
		latitude.value &&
		longitude.value
	) {
		const map = $leaflet
			.map(mapRef.value)
			.setView(
				[latitude.value, longitude.value],
				13
			);
		$leaflet
			.tileLayer(
				"https://tile.openstreetmap.org/{z}/{x}/{y}.png",
				{
					maxZoom: 19,
					attribution:
						'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
				}
			)
			.addTo(map);
	}
});
</script>
<template>
	<div
		class="card flex flex-col justify-center items-center md:gap-6 xl:gap-30px"
		:class="
			reverse
				? 'xl:flex-row-reverse'
				: 'xl:flex-row'
		"
	>
		<!-- map -->
		<div
			class="card__map w-full h-80 overflow-hidden z-0"
			ref="mapRef"
		></div>

		<div
			class="card__body relative overflow-hidden w-full text-center md:text-left px-6 py-20 bg-pale xl:flex-1 group"
		>
			<div class="relative z-10">
				<p
					class="card__title text-peach font-medium mb-6"
				>
					{{ title }}
				</p>
				<ul
					class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-30px"
				>
					<li
						class="card__description text-dark-grey"
					>
						<slot name="address">
							<span class="font-bold"
								>Designo Central Office</span
							><br />
							3886 Wellington Street
							<br />Toronto, Ontario M9C 3J5
						</slot>
					</li>
					<li
						class="card__description text-dark-grey"
					>
						<slot name="contact">
							<span class="font-bold"
								>Contact</span
							><br />
							P: +1 253-863-8967<br />
							M: contact@designo.co
						</slot>
					</li>
				</ul>
			</div>
			<!-- overlays -->
			<div
				class="overlays absolute grid grid-cols-2 transition z-1 group-hover:scale-105"
			>
				<div
					class="overlaysApp__circle opacity-[0.06]"
				/>
				<div
					class="overlaysApp__circle opacity-[0.06] col-start-1"
				/>
				<div
					class="overlaysApp__circle opacity-[0.06]"
				/>
			</div>
			<!-- overlays ends -->
		</div>
	</div>
</template>
<style scoped lang="css">
.card__title {
	font-size: 32px;
	line-height: 36px;
}
.card__description {
	font-size: 15px;
	line-height: 25px;
}

.overlays {
	width: 584px;
	left: 0;
	bottom: -190px;
}

@media (min-width: 768px) {
	.card__body,
	.card__map {
		border-radius: 15px;
	}
	.card__body {
		padding: 88px 74px;
	}
	.card__title {
		font-size: 40px;
		line-height: 48px;
	}
	.card__description {
		font-size: 16px;
		line-height: 26px;
	}
	.overlays {
		left: 0;
		bottom: 0;
	}
}
@media (min-width: 1440px) {
	.card__map {
		width: 350px;
	}
}
</style>
