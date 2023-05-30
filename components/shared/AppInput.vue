<script setup lang="ts">
import AppIconButton from "./AppIconButton.vue";

interface AppButtonProps {
	label?: string;
	errorMessage?: string;
	hasError?: boolean;
	variant?: "default" | "custom";
	ariaLabel?: string;
  type?: string
  required?: boolean
}

const props = withDefaults(defineProps<AppButtonProps>(), {
	hasError: false,
	errorMessage: "can't be empty",
  variant: 'default',
  type: 'input',
  required: true
});

</script>
<template>
	<label class="block font-medium relative">
		<input
      v-if="type === 'input'"
			type="text"
			:aria-label="ariaLabel || label"
			required
			class="bg-transparent border-0 outline-none transition duration-300 w-full leading-[inherit] font-medium peer"
			:class="{
				input__error: hasError,
				'text-dark-grey': variant === 'default',
				'text-white': variant === 'custom',
			}"
		/>
		<div
			class="label-text absolute cursor-text capitalize transition duration-300 mix-blend-normal leading-[inherit] font-medium peer-focus:text-dark-grey/40"
			:class="{
				'text-dark-grey/50':
					variant === 'default',
				'text-white/50': variant === 'custom',
        '-translate-y-10 peer-focus:-translate-y-18 peer-valid:-translate-y-18': type === 'input'
			}"
		>
			{{ label }}
		</div>
		<div
			v-if="hasError"
			class="input__error-container absolute bottom-3 right-0 font-normal flex items-center gap-2"
			:class="{
				'text-dark-grey': variant === 'default',
				'text-white': variant === 'custom',
			}"
		>
			<span>{{ errorMessage }}</span>
			<app-icon-button
				icon="caution"
				:class-name="`w-5 h-5 rounded-full inline-flex items-center justify-center ${
					variant === 'default'
						? 'text-white bg-dark-grey'
						: 'text-peach bg-white'
				}`"
				width="20px"
				height="20px"
			/>
		</div>
	</label>
</template>
<style scoped lang="css">
label {
	padding-top: 26px;
	font-size: 15px;
	line-height: 26px;
}
label .label-text {
	font-size: inherit;
}
label input {
	padding: 8px 14px 12px 14px;
	font-size: inherit;
	--tw-shadow: 0 1px 0px 0px rgba(51, 49, 54, 1);
	--tw-shadow-colored: 0 1px 0px 0px
		var(--tw-shadow-color);
	box-shadow: var(
			--tw-ring-offset-shadow,
			0 0 #0000
		),
		var(--tw-ring-shadow, 0 0 #0000),
		var(--tw-shadow);
}

label input:focus,
label input:valid {
	--tw-shadow: 0 3px 0px 0px rgba(51, 49, 54, 1);
	--tw-shadow-colored: 0 1px 0px 0px
		var(--tw-shadow-color);
	box-shadow: var(
			--tw-ring-offset-shadow,
			0 0 #0000
		),
		var(--tw-ring-shadow, 0 0 #0000),
		var(--tw-shadow);
}

label input:focus + .label-text {
	font-size: 13px;
}
.input__error {
	padding-right: 103px;
}
.input__error-container {
	font-size: 12px;
	line-height: 26px;
}
</style>
