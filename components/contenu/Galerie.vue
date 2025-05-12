<script setup lang="ts">
import { useGalerieStore } from "#imports";

const imagesStore = useGalerieStore().data;
</script>

<template>
  <div class="container columns-2 md:columns-4 space-y-5 md:space-y-6">
    <NuxtImg
      v-for="(image, index) in imagesStore"
      :key="index"
      :src="image.photo"
      class="rounded-2xl w-full hover:scale-110 hover:border-2 hover:border-orange-500"
    />
  </div>
</template>
