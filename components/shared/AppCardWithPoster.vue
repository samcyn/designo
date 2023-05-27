<script setup lang="ts">
import { NuxtLinkProps } from 'nuxt/app';
import AppLink from './AppLink.vue';

interface Props {
	to?: NuxtLinkProps["to"];
	title: string
  description: string
  source?: string
  imgAlt?: string
}

defineProps<Props>();
</script>
<template>
  <app-link :to="to" class="card overflow-hidden flex flex-col md:flex-row xl:flex-col group transition cursor-pointer">
    <figure class="card__figure w-full h-80 md:flex-1 md:h-auto xl:flex-none xl:h-80 overflow-hidden">
      <slot>
        <img :src="source" :alt="imgAlt" />
      </slot>
    </figure>
    <div class="card__body bg-[#FDF3F0] w-full group-hover:bg-peach md:flex-1 xl:flex-none">
      <p class="card__title uppercase text-peach text-center font-medium mb-4 group-hover:text-white">
        {{ title }}
      </p>
      <p class="card__description text-center text-dark-grey font-normal group-hover:text-white">
        {{ description }}
      </p>
    </div>
  </app-link>
</template>
<style scoped lang="css">
.card {
  border-radius: 15px;
}
.card__body {
  padding: 32px 30px;
}
.card__title {
  letter-spacing: 5px;
  font-size: 20px;
  line-height: 26px;
}
.card__description {
  font-size: 16px;
  line-height: 26px;
}

@media (min-width: 768px) {
  .card__body {
    padding: 108px 32px;
  }
}

@media (min-width: 1440px) {
  .card__body {
    padding: 32px;
  }
}
</style>