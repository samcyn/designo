<template>
  <button :class="className" type="button" :aria-label="icon" @click="onClick">
    <app-icon
      :size="size"
      :color="color"
      :icon="icon"
      :view-box="viewBox"
      :height="height"
      :width="width"
    />
  </button>
</template>

<script lang="ts">
import { CSSProperties, PropType, Events } from 'vue';

import AppIcon from './AppIcon.vue';
import { IconTypes } from '../../lib/iconLibrary';

const IconBaseDefaults = {
  size: {
    type: Number as PropType<number>,
    default: 0,
  },
  color: {
    type: String as PropType<string>,
    default: '',
  },
  className: {
    type: String as PropType<string>,
    default: 'text-white border-0 outline-0 hover:text-orange-100',
  },
  style: {
    type: Object as PropType<CSSProperties>,
    default: () => ({}),
  },
  icon: {
    type: String as PropType<IconTypes>,
    default: '',
  },
  viewBox: {
    type: String as PropType<string>,
    default: undefined,
  },
  height: {
    type: String as PropType<string>,
    default: undefined,
  },
  width: {
    type: String as PropType<string>,
    default: undefined,
  },
};

export default defineComponent({
  name: 'AppIconButton',
  components: {
    AppIcon,
  },
  emits: { click: null },
  props: {
    ...IconBaseDefaults,
  },
  setup(props, context) {
    const onClick = (event: Events['onClick']) => {
      context.emit('click', event);
    };
    return {
      onClick,
    };
  },
});
</script>