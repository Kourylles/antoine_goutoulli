<script setup lang="ts">
import { useTimeAgo } from "@vueuse/core";
import { useAccueilStore } from "#imports";

const contenusStore = useAccueilStore().data;

/* useTimeAgo retourne "20 time ago", on a besoin que du 20 donc on ne prend que
  les deux premiers caractères grace à la fonction slice */
const timeAgo = ref(useTimeAgo(new Date(2004, 12, 31)).value.slice(0, 2));
</script>

<template>
  <div class="container lg:w-2/3 text-xl lg:text-3xl text-justify lg:mt-40">
    <NuxtImg
      class="float-left mb-5 mr-5 lg:mr-10 rounded-2xl"
      :src="contenusStore.photo"
      sizes="140px lg:350px"
    />
    <div>
      <p
        class="indent-12 first-letter:text-4xl lg:first-letter:text-6xl first-letter:text-orange-500"
      >
        Bonjour, je suis Antoine et j'ai {{ timeAgo }} ans.
      </p>
      <p
        class="indent-12 first-letter:text-4xl lg:first-letter:text-6xl first-letter:text-orange-500"
        v-for="liste in contenusStore.contenu"
      >
        {{ liste.paragraphe }}
      </p>
    </div>
  </div>
</template>
