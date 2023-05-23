<script setup lang="ts">
// import type { NuxtLinkProps } from 'nuxt/app';
import type { RouteLocationRaw } from '#vue-router';

interface Props {
  to?: RouteLocationRaw;
  href?: RouteLocationRaw;
  external?: boolean;
  replace?: boolean;
  custom?: boolean;
  target?: '_blank' | '_parent' | '_self' | '_top' | (string & {}) | null;
  rel?: string | null;
  noRel?: boolean;
  prefetch?: boolean;
  noPrefetch?: boolean;
  activeClass?: string;
  exactActiveClass?: string;
  ariaCurrentValue?: string;
}
// set defaults props
const props = withDefaults(defineProps<Props>(), {});

</script>
<template>
  <NuxtLink v-bind="props">
    <slot />
  </NuxtLink>
</template>