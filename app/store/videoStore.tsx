import { create } from 'zustand';

interface VideoState {
  videoUrl: string | null;
  loading: boolean;
  error: string | null;
  setVideoUrl: (url: string | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

const useVideoStore = create<VideoState>((set) => ({
  videoUrl: null,
  loading: false,
  error: null,
  setVideoUrl: (url) => set({ videoUrl: url }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}));

export default useVideoStore;
