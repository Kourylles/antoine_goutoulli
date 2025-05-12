<script setup>
// Import de la gestion du scrolling depuis la librairie VueUse
import { useWindowScroll } from "@vueuse/core";

// Si la valeur du scroll vertical est positive, on affichera le bouton de retour en haut de page
const { y } = useWindowScroll();

/**
 * Remonter en haut de l'écran
 * @description None
 * @param None
 * @returns Nothing
 * @author Lionel
 */
const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};
</script>

<template>
  <button
    class="fixed flex items-center justify-center w-12 h-12 font-bold bg-orange-500 rounded-full text-neutral-200 right-3 bottom-11 hover:scale-125"
    v-if="y > 0"
    @click="scrollToTop"
  >
    <Icon name="ic:baseline-arrow-upward" class="size-10" />
  </button>
</template>

<style>
.showScrollButton {
  display: block;
}
</style>
