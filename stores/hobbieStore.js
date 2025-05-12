import { defineStore } from "pinia";
import data from "../stores/data/hobbiesData.json";
export const useHobbieStore = defineStore("hobbieStore", {
  state: () => ({
    data,
  }),
});
