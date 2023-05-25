<script setup lang="ts">
import AppButton from "./AppButton.vue";
</script>
<template>
	<div class="container">
		<div
			role="banner"
			class="banner relative bg-peach overflow-hidden -mx-6 px-6 md:mx-0 md:px-0"
		>
			<div
				class="relative flex flex-wrap xl:justify-between z-10"
			>
				<div class="banner__left">
					<div class="text-center xl:text-left">
						<p
							class="banner__title font-medium text-white"
						>
							Award-winning custom designs and
							digital branding solutions
						</p>
						<p
							class="banner__description font-normal text-white"
						>
							With over 10 years in the industry,
							we are experienced in creating fully
							responsive websites, app design, and
							engaging brand experiences. Find out
							more about our services.
						</p>
						<app-button button-type="secondary"
							>Learn More</app-button
						>
					</div>
				</div>

				<div class="banner__right basis-full">
					<figure
						class="banner__figure xl:h-full"
					>
						<img
							class="xl:h-full xl:hidden"
							src="~/assets/home/mobile/image-hero-phone.png"
							alt="frame image"
						/>
						<img
							class="xl:h-full hidden xl:inline-block"
							src="~/assets/home/desktop/image-hero-phone.png"
							alt="frame image"
						/>
					</figure>
				</div>
			</div>
			<!-- oval -->
			<div class="banner__oval absolute"></div>
		</div>
	</div>
</template>
<style scoped lang="css">
.banner__left {
	padding: 80px 0;
	flex-basis: 100%;
}
.banner__right {
	padding: 0 22px;
}

.banner__title {
	font-size: 32px;
	line-height: 36px;
	margin-bottom: 14px;
}

.banner__description {
	font-size: 15px;
	line-height: 25px;
	margin-bottom: 24px;
}

.banner__oval {
	width: 640px;
	height: 640px;
	background: linear-gradient(
		90deg,
		rgba(93, 2, 2, 0.0001) 0%,
		rgba(93, 2, 2, 0.497569) 100%
	);
	mix-blend-mode: normal;
	opacity: 0.31;
	transform: matrix(0, -1, -1, 0, 0, 0);
	top: 102px;
	left: 0;
	border-radius: 100%;
	z-index: 1;
}

@media (min-width: 768px) {
	.banner {
		border-radius: 15px;
	}
	.banner__left {
		padding: 60px 58px 69px;
	}
	.banner__title {
		font-size: 48px;
		line-height: 48px;
		margin-bottom: 8px;
	}
	.banner__description {
		font-size: 16px;
		line-height: 26px;
		margin: 0 auto 20px auto;
		max-width: 445px;
	}
	.banner__figure {
		width: 284px;
		margin: 0 auto;
	}
	.banner__oval {
		top: 101.5px;
		left: 170.55px;
	}
}

@media (min-width: 1440px) {
	.banner__left {
		flex-basis: 636px;
		padding: 145px 0 145px 96px;
	}
	.banner__title {
		margin-bottom: 11px;
	}
	.banner__right {
		flex-basis: 380px;
		padding: 140px 96px 0 0;
	}
	.banner__description {
		margin: 0 0 40px 0;
	}
	.banner__oval {
		top: 0;
		bottom: 0;
		left: auto;
		right: 0;
	}
}
</style>
