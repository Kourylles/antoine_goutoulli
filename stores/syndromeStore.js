import { defineStore } from "pinia";
import data from "../stores/data/syndromeData.json";
export const useSyndromeStore = defineStore("syndromeSTore", {
  state: () => ({
    data,
  }),
});
