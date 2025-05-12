import { defineStore } from "pinia";
import data from "../stores/data/navigationData.json";
export const useNavigationStore = defineStore("navigationStore", {
  state: () => ({
    data,
  }),
});
