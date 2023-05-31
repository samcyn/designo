<script setup lang="ts">
import {
	ButtonHTMLAttributes,
	useAttrs,
} from "vue";

// define components models
interface AppButtonProps {
	variant?: "contained" | "text" | "outlined";
	buttonType?:
		| "primary"
		| "secondary"
		| "default";
}

// set defaults props
const props = withDefaults(
	defineProps<AppButtonProps>(),
	{
		variant: "contained",
		buttonType: "primary",
	}
);

// pick attrs
const attrs = useAttrs();

// compute classes base on variant type
const classComputed = computed<string>(() => {
	const variant = props.variant;
	const buttonType = props.buttonType;
	let className =
		"transition inline-flex items-center ";
	if (variant === "contained") {
		if (buttonType === "primary") {
			className +=
				"bg-peach text-white hover:bg-peach-light";
		} else if (buttonType === "secondary") {
			className +=
				"bg-white text-dark-grey hover:bg-peach-light hover:text-white";
		} else {
			className +=
				"bg-grey-100 text-white hover:bg-grey-90";
		}
	}
	if (variant === "outlined") {
		if (buttonType === "primary") {
			className +=
				"bg-transparent hover:bg-peach ring ring-peach ring-inset text-black hover:text-white";
		} else if (buttonType === "secondary") {
			className +=
				"bg-transparent hover:bg-white ring ring-white ring-inset text-dark-grey hover:text-dark-grey";
		} else {
			className +=
				"bg-transparent hover:bg-grey-100 ring ring-grey-100 ring-inset text-black hover:text-black";
		}
	}
	if (variant === "text") {
		if (buttonType === "primary") {
			className +=
				"border-0 bg-none text-peach opacity-50 hover:text-peach/100 hover:opacity-100";
		} else if (buttonType === "secondary") {
			className +=
				"border-0 bg-none text-white opacity-50 hover:text-white hover:opacity-100";
		} else {
			className +=
				"border-0 bg-none text-grey-100 opacity-50 hover:text-black-100 hover:opacity-100";
		}
	}
	return `${className} ${
		attrs.class ||
		"text-[15px] leading-[22px] tracking-[1px] font-medium py-4 px-6 justify-center"
	}`;
});
</script>

<template>
	<button
		class="button"
		:class="classComputed"
		type="button"
	>
		<slot></slot>
	</button>
</template>

<style scoped>
.button {
	font-style: normal;
	text-transform: uppercase;
	border-radius: 8px;
	outline: 0;
	cursor: pointer;
	min-width: 152px;
}
</style>
