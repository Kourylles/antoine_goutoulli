import { defineStore } from "pinia";
import data from "../stores/data/parcoursData.json";
export const useParcoursStore = defineStore("parcoursStore", {
  state: () => ({
    data,
  }),
});
