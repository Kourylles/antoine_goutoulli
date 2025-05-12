<script setup lang="ts">
import { useNavigationStore } from "#imports";
const navigationStore = useNavigationStore().data;
</script>
<template>
  <div
    class="mx-auto w-full mb-16 md:mb-24 lg:mb-32 font-silkscreen text-cyan-300"
  >
    <div
      class="flex flex-row justify-center fixed top-0 left-0 right-0 py-2 border-b-2 lg:border-b-4 border-orange-500 bg-cyan-800 lg:py-4"
    >
      <div class="lg:flex items-center lg:container lg:space-x-96 mx-5 hidden">
        <NuxtLink :to="navigationStore.to" class="flex items-center gap-1">
          <NuxtImg
            densities="x1"
            format="webp"
            :src="navigationStore.photo"
            :alt="navigationStore.alt"
            class="rounded-full ml-0 sm:h-[50px] sm:w-[50px] md:h-[95px] md:w-[95px]"
          />
          <span
            class="text-xl mr-6 lg:pl-2 font-bold lg:text-4xl hover:text-orange-400 lg:ml-5"
            >{{ navigationStore.nom }}
          </span>
        </NuxtLink>
      </div>
      <div class="mx-5">
        <ul
          class="flex gap-3 text-xs font-light lg:font-bold capitalize lg:gap-x-10 md:text-lg xl:text-2xl"
        >
          <li v-for="(lien, index) in navigationStore.rubriques" :key="index">
            <NuxtLink
              :to="lien.to"
              class="flex flex-col items-center capitalize hover:text-orange-400 text-justify"
            >
              <span>{{ lien.texte.ligne1 }}</span>
              <span class="text-nowrap">{{ lien.texte.ligne2 }}</span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
