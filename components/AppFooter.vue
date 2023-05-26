<script setup lang="ts">
import AppBrandLogo from "~/components/shared/AppBrandLogo.vue";
import AppButton from "./shared/AppButton.vue";
import AppLink from "./shared/AppLink.vue";
import AppIcon from "./shared/AppIcon.vue";
</script>
<template>
	<footer>
		<div class="footer__top container relative">
			<div
				class="footer__card relative bg-peach py-16 px-6 md:p-14 xl:py-18 xl:px-24 overflow-hidden group"
			>
				<div class="flex flex-col gap-8 xl:flex-row xl:justify-between xl:items-center relative z-10">
					<div>
						<p
							class="footer__cardHeading font-medium text-center xl:text-left text-white leading-9 md:leading-10 mb-4 md:mx-auto xl:mx-0"
						>
							Let’s talk about your project
						</p>
						<p
							class="footer__cardSubheading text-white text-center xl:text-left font-normal md:mx-auto"
						>
							Ready to take it to the next level?
							Contact us today and find out how
							our expertise can help your business
							grow.
						</p>
					</div>

					<div class="text-center">
						<app-button
							class="m-auto"
							button-type="secondary"
							>Get In Touch</app-button
						>
					</div>
				</div>
				<div
					class="overlays absolute grid grid-cols-3 transition group-hover:scale-110"
				>
					<div
						class="overlays__circle col-start-2"
					></div>
					<div
						class="overlays__circle -rotate-90"
					></div>
					<div
						class="overlays__circle rotate-90"
					></div>
					<div class="overlays__circle"></div>
					<div
						class="overlays__circle -rotate-90"
					></div>
				</div>
			</div>
		</div>

		<div
			class="footer__bottom bg-black pb-16 md:pb-20 xl:pb-18"
		>
			<div class="container">
				<!-- menus -->
				<nav
					class="header__nav flex justify-center md:justify-normal flex-wrap md:flex-nowrap items-center lg:items-center mb-10"
					aria-label="footer navigation"
				>
					<app-brand-logo
						class="logo text-white"
						aria-label="designo logo footer"
					/>

					<div
						class="nav__collapse basis-full md:basis-auto flex-grow mt-8 md:mt-0"
					>
						<ul
							class="flex flex-wrap flex-row md:flex-grow md:justify-end list-none pt-8 md:pt-0 gap-8 md:gap-10"
						>
							<app-navigation-menu
								to="/about"
								class="justify-center basis-full md:basis-auto"
								link-class-name="text-white tracking-2px text-14px leading-14px font-normal"
							>
								Our Company
							</app-navigation-menu>

							<app-navigation-menu
								to="/locations"
								class="justify-center basis-full md:basis-auto"
								link-class-name="text-white tracking-2px text-14px leading-14px font-normal"
							>
								Locations
							</app-navigation-menu>

							<app-navigation-menu
								to="/contact"
								class="justify-center basis-full md:basis-auto"
								link-class-name="text-white tracking-2px text-14px leading-14px font-normal"
							>
								Contact
							</app-navigation-menu>
						</ul>
					</div>
				</nav>
				<!-- end menus -->
				<div
					class="footer__baseline flex flex-col md:flex-row md:justify-center md:items-end gap-10 md:gap-50px md:pt-8"
				>
					<div
						class="flex basis-full md:grow md:shrink flex-col md:flex-row gap-10 md:gap-10px xl:gap-30px justify-center md:justify-start items-center"
					>
						<div
							class="panels text-center md:text-left text-white/50 mix-blend-normal font-normal flex-1"
						>
							<span class="font-bold"
								>Designo Central Office</span
							><br />
							3886 Wellington Street<br />
							Toronto, Ontario M9C 3J5
						</div>
						<div
							class="panels text-center md:text-left text-white/50 mix-blend-normal font-normal flex-1"
						>
							<span class="font-bold"
								>Contact Us (Central Office)</span
							>
							<br />P : +1 253-863-8967<br />
							M : contact@designo.co
						</div>
					</div>

					<!-- socials -->
					<ul
						class="socials flex basis-full items-center justify-center gap-4"
					>
						<li>
							<app-link class="text-peach">
								<app-icon
									icon="facebook"
									width="24"
									height="24"
								/>
							</app-link>
						</li>
						<li>
							<app-link class="text-peach">
								<app-icon
									icon="youtube"
									width="24"
									height="24"
								/>
							</app-link>
						</li>
						<li>
							<app-link class="text-peach">
								<app-icon
									icon="twitter"
									width="24"
									height="20"
								/>
							</app-link>
						</li>
						<li>
							<app-link class="text-peach">
								<app-icon
									icon="pinterest"
									width="24"
									height="24"
								/>
							</app-link>
						</li>
						<li>
							<app-link class="text-peach">
								<app-icon
									icon="instagram"
									width="24"
									height="24"
								/>
							</app-link>
						</li>
					</ul>
					<!-- socials end -->
				</div>
			</div>
		</div>
	</footer>
</template>
<style scoped lang="css">
.footer__top {
	margin-bottom: -189px;
}
.footer__card {
	border-radius: 15px;
}
.footer__cardHeading {
	font-size: 32px;
}
.footer__cardSubheading {
	font-size: 15px;
	line-height: 25px;
}
.nav__collapse {
	--tw-shadow: 0 -1px 0px 0px rgba(255, 255, 255, 0.1);
	--tw-shadow-colored: 0 1px 0px 0px
		var(--tw-shadow-color);
	box-shadow: var(
			--tw-ring-offset-shadow,
			0 0 #0000
		),
		var(--tw-ring-shadow, 0 0 #0000),
		var(--tw-shadow);
}

.overlays {
	height: 584px;
	width: 876px;
	right: -309px;
	top: -102px;
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
.footer__bottom {
	padding-top: 253px;
}
.panels {
	font-size: 16px;
	line-height: 26px;
}

@media (min-width: 768px) {
	.footer__top {
		margin-bottom: -86px;
	}
	.footer__cardHeading {
		font-size: 40px;
		max-width: 335px
	}
	.footer__cardSubheading {
		font-size: 16px;
		line-height: 26px;
		max-width: 450px;
	}
	.overlays {
		right: -166px;
		top: -117px;
	}
	.nav__collapse {
		box-shadow: none;
	}
	.footer__bottom {
		padding-top: 166px;
	}

	.footer__baseline {
		--tw-shadow: 0 -1px 0 0 rgba(255, 255, 255, 0.1);
		--tw-shadow-colored: 0 1px 0 0
			var(--tw-shadow-color);
		box-shadow: var(
				--tw-ring-offset-shadow,
				0 0 #0000
			),
			var(--tw-ring-shadow, 0 0 #0000),
			var(--tw-shadow);
	}
	.socials {
		flex-basis: 184px;
	}
}

@media (min-width: 1440px) {
  .footer__top {
		margin-bottom: -72px;
	}
	.footer__cardHeading {
		max-width: 268px; 
	}
	.footer__bottom {
		padding-top: 144px;
	}
	.footer__baseline {
		gap: 196px
	}
}
</style>
