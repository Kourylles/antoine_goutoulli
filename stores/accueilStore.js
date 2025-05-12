import { defineStore } from "pinia";
import data from "../stores/data/accueilData.json";
export const useAccueilStore = defineStore("accueilStore", {
  state: () => ({
    data,
  }),
});
