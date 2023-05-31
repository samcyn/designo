<script setup lang="ts">
import AppInput from "~/components/shared/AppInput.vue";
import AppButton from "~/components/shared/AppButton.vue";
</script>
<template>
	<div class="container">
		<div class="-mx-6 md:mx-0">
			<div
				class="relative overflow-hidden bg-peach py-18 px-6 md:px-[58px] xl:py-[54px] xl:px-24 md:rounded-[15px] xl:flex xl:gap-[95px] xl:items-center"
			>
				<div
					class="text-center md:text-left text-white xl:flex-1"
				>
					<p
						class="mb-6 md:mb-8 font-medium text-[32px] leading-9 md:text-[48px] md:leading-[48px]"
					>
						Contact Us
					</p>
					<p
						class="text-[15px] leading-25px md:text-[16px] md:leading-26px"
					>
						Ready to take it to the next level?
						Let’s talk about your project or idea
						and find out how we can help your
						business grow. If you are looking for
						unique digital experiences that’s
						relatable to your users, drop us a
						line.
					</p>
				</div>
				<form
					class="mt-6 md:mt-4 xl:mt-0 xl:w-[380px]"
				>
					<div
						class="flex flex-col mb-10 md:mb-6"
					>
						<AppInput
							name="name"
							required
							variant="custom"
							placeholder="Name"
						/>
						<AppInput
							name="email"
							required
							variant="custom"
							placeholder="Email"
						/>
						<AppInput
							name="phone"
							required
							variant="custom"
							placeholder="Phone"
						/>
						<AppInput
							name="message"
							variant="custom"
							type="textarea"
							:rows="3"
							placeholder="Your Message"
						/>
					</div>
					<div class="text-center md:text-right">
						<app-button
							button-type="secondary"
							type="submit"
							>Submit</app-button
						>
					</div>
				</form>
				<!-- overlays -->
				<div
					class="hidden md:block overlay absolute md:-top-[83px] md:-left-[121px] xl:left-0 xl:-top-40"
				></div>
				<div
					class="md:hidden w-[584px] absolute grid grid-cols-2 transition group-hover:translate-x-2 -left-[92px] top-0"
				>
					<div
						class="overlaysApp__circle -rotate-90"
					></div>
					<div
						class="overlaysApp__circle -rotate-180"
					></div>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped lang="css">
.overlay {
	height: 640px;
	width: 640px;
	border-radius: 100%;
	background: linear-gradient(
		90deg,
		rgba(93, 2, 2, 0.0001) 0%,
		rgba(93, 2, 2, 0.497569) 100%
	);
	mix-blend-mode: normal;
	opacity: 0.31;
	transform: matrix(0, 1, 1, 0, 0, 0);
}
</style>
