import { defineStore } from "pinia";
import data from "../stores/data/connaissancesData.json";
export const useConnaissancesStore = defineStore("hobbiconnaissancesStore", {
  state: () => ({
    data,
  }),
});
