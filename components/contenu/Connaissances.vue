<script setup lang="ts">
import { useConnaissancesStore } from "#imports";

const connaissancesStore = useConnaissancesStore().data.connaissances;
</script>

<template>
  <div
    class="container flex lg:flex-row mt-5 gap-10 justify-around place-item-center"
  >
    <div
      class="lg:w-[800px] lg:h-[700px] border-4 border-orange-500 rounded-3xl"
      v-for="(item, index) in connaissancesStore"
      :key="index"
    >
      <div class="p-2">
        <Icon :name="item.icone" size="60" />
        <div
          class="font-silkscreen font-extrabold text-cyan-300 text-2xl lg:text-4xl mt-5 mb-5"
        >
          {{ item.valeur }}
        </div>
        <Icon :name="item.icone" size="60" />
        <ul class="text-left p-5 list-disc list-inside my-24">
          <li v-for="(liste, index) in item.liste">{{ liste.description }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
