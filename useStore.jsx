// src/useStore.js
import { create } from "zustand";

const useStore = create((set) => ({
  data: [],
  fetchData: async () => {
    try {
      const response = await fetch("/data/jobs.json");
      const jsonData = await response.json();
      set({ data: jsonData });
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  },
}));

export default useStore;
