<script setup lang="ts">
import { useSyndromeStore } from "#imports";

const syndromeStore = useSyndromeStore().data;
</script>
<template>
  <div v-for="(item, index) in syndromeStore.description" :key="index">
    <div v-if="item.texteDroite">
      <div
        class="flex flex-col md:flex-row items-center gap-x-10 md:mt-5 mt-10"
      >
        <div class="w-full md:w-3/6">
          <NuxtLink :to="item.link" target="_blank">
            <NuxtImg
              :src="item.photo"
              alt="ADN"
              class="rounded-2xl"
              format="webp"
            />
          </NuxtLink>
        </div>
        <div
          class="w-full indent-12 first-letter:text-4xl md:first-letter:text-6xl first-letter:text-orange-500 text-justify"
        >
          {{ item.paragraphe }}
        </div>
      </div>
    </div>
    <div v-else>
      <div
        class="flex flex-col md:flex-row-reverse items-center gap-x-10 md:mt-5"
      >
        <div class="w-full md:w-3/6">
          <NuxtLink :to="item.link" target="_blank">
            <NuxtImg
              :src="item.photo"
              alt="ADN"
              format="webp"
              class="rounded-2xl"
            />
          </NuxtLink>
        </div>
        <div
          class="w-full indent-12 first-letter:text-4xl md:first-letter:text-6xl first-letter:text-orange-500 text-justify"
        >
          {{ item.paragraphe }}
        </div>
      </div>
    </div>
  </div>
  <div class="mt-5 sm:mt-0">
    <h1
      class="w-full indent-12 first-letter:text-4xl md:first-letter:text-6xl first-letter:text-orange-500 text-justify"
    >
      {{ syndromeStore.phraseIntro }}
    </h1>
    <br />
    <ul>
      <li
        class="list-disc text-left list-inside"
        v-for="(symptome, index) in syndromeStore.mesSymptomes"
        :key="index"
      >
        {{ symptome.symptome }}
      </li>
    </ul>
  </div>
</template>
