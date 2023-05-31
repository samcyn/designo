<script setup lang="ts">
import { Events} from 'vue';
import AppIconButton from "~/components/shared/AppIconButton.vue";

interface AppButtonProps {
	label?: string;
	errorMessage?: string;
	hasError?: boolean;
	variant?: "default" | "custom";
	ariaLabel?: string;
	type?: 'input'|'textarea';
	required?: boolean;
	placeholder?: string;
	rows?: number;
	name: string;
	modelValue?: string
}

const props = withDefaults(
	defineProps<AppButtonProps>(),
	{
		hasError: false,
		errorMessage: "can't be empty",
		variant: "default",
		type: "input",
		required: false,
	}
);

const emit = defineEmits<{
	(event: 'update:modelValue', val: string): void
}>()

const InputElem = defineComponent({
	render() {
		return h(props.type);
	},
});

const onInput = (e: Events['onInput']) => {
	emit('update:modelValue', (e.target as HTMLInputElement).value);
}

</script>
<template>
	<label
		class="flex font-medium relative w-full"
	>
		<InputElem
			:aria-label="ariaLabel || label"
			:required="required"
			class="bg-transparent border-0 outline-none transition duration-300 w-full leading-[inherit] font-medium peer"
			:class="{
				input__error: hasError,
				[`text-dark-grey 
        placeholder:text-dark-grey/50 
        shadow-[0_1px_0_0_rgba(51,49,54,1)]
        focus:shadow-[0_3px_0_0_rgba(51,49,54,1)]
        valid:shadow-[0_3px_0_0_rgba(51,49,54,1)]
      `]: variant === 'default',
				[`text-white
        placeholder:text-white/50 
        shadow-[0_1px_0_0_rgba(255,255,255,1)]
        focus:shadow-[0_3px_0_0_rgba(255,255,255,1)]
        `]: variant === 'custom',
				// 'valid:shadow-[0_3px_0_0_rgba(255,255,255,1)]': type === 'input'
			}"
			:name="name"
			:placeholder="label ? '' : placeholder"
			:rows="rows"
			:value="modelValue"
			@input="onInput"
		/>
		<div
			v-if="label"
			class="label-text absolute cursor-text capitalize transition duration-300 mix-blend-normal leading-[inherit] font-medium peer-focus:text-dark-grey/40"
			:class="{
				'text-dark-grey/50':
					variant === 'default',
				'text-white/50': variant === 'custom',
				'-translate-y-10 peer-focus:-translate-y-16 peer-valid:-translate-y-16':
					type === 'input',
			}"
		>
			{{ label }}
		</div>
		<div
			v-if="hasError && !modelValue"
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
	padding-top: 24px;
	font-size: 15px;
	line-height: 26px;
}
label .label-text {
	font-size: inherit;
}
label input,
label textarea {
	padding: 0px 14px 12px 14px;
	font-size: inherit;
}

label input:focus + .label-text,
label textarea:focus + .label-text {
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
