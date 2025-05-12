import { defineStore } from "pinia";
import data from "../stores/data/galerieData.json";
export const useGalerieStore = defineStore("galerieStore", {
  state: () => ({
    data,
  }),
});
