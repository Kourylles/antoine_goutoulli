<script setup lang="ts">
import { useParcoursStore } from "#imports";

const parcoursStore = useParcoursStore().data.parcours;
</script>

<template>
  <div
    class="flex flex-col md:flex-row mt-16 md:gap-x-5 gap-y-20 md:flex-wrap md:place-content-evenly"
  >
    <div
      v-for="etape in parcoursStore"
      :key="etape.periode"
      class="w-full lg:w-4/12 border-4 h-[500px] border-orange-500 p-1 flex flex-col gap-1 rounded-xl"
      id="card"
    >
      <div class="w-full -mt-12 flex place-content-center">
        <NuxtImg
          densities="x1"
          format="webp"
          :src="etape.photo"
          height="120"
          width="120"
          class="rounded-full text-center"
          alt=""
        />
      </div>
      <div
        class="flex flex-row items-center w-full h-20 p-2 place-content-evenly"
        id="card-header"
      >
        <div
          class="flex flex-col items-center place-content-center text-center"
        >
          <span class="text-3xl text-orange-500">{{ etape.periode }}</span>
          <span class="font-bold capitalize font-silkscreen text-cyan-300">{{
            etape.ville
          }}</span>
        </div>
      </div>
      <div
        id="card-content"
        class="flex items-center w-full p-4 border-t-2 border-dotted h-5/6 border-orange-500"
      >
        <ul class="list-disc list-inside">
          <li v-for="liste in etape.faits">{{ liste.description }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
