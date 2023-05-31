<script setup lang="ts">
import { Events } from 'vue';
import AppInput from "~/components/shared/AppInput.vue";
import AppButton from "~/components/shared/AppButton.vue";

type FormType = {
  name: boolean;
  email: boolean;
  phone: boolean;
  message: boolean;
}
const errorBag = reactive({
  name: false,
  email: false,
  phone: false,
  message: false
});

const form = reactive({
	name: "",
	email: "",
  phone: '',
  message: ''
});

const onSubmit = (e: Events['onSubmit']) => {
  e.preventDefault();
	for (const key in form) {
		if (!form[key as keyof FormType]) {
			errorBag[key as keyof FormType] = true;
		}
	}
  console.log('submitting...')
}

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
          @submit="onSubmit"
					class="mt-6 md:mt-4 xl:mt-0 xl:w-[380px]"
				>
					<div
						class="flex flex-col mb-10 md:mb-6"
					>
						<AppInput
						  v-model="form.name"
							name="name"
							variant="custom"
							placeholder="Name"
              :has-error="errorBag.name"
						/>
						<AppInput
							v-model="form.email"
							name="email"
							variant="custom"
							placeholder="Email"
              :has-error="errorBag.email"
						/>
						<AppInput
							v-model="form.phone"
							name="phone"
							variant="custom"
							placeholder="Phone"
              :has-error="errorBag.phone"
						/>
						<AppInput
							v-model="form.message"
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
