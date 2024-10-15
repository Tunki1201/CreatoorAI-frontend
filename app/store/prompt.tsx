import { create } from "zustand";

export const promptStore = create((set) => ({
  prompt: {
    result: "",
  },
  updatePrompt: (newResult: any) =>
    set((state: any) => ({
      prompt: {
        ...state.result, ...newResult
      },
    })),

      setLoading: (loading: boolean) => set({ isLoading: loading }), // Add function to update loading state
}));
