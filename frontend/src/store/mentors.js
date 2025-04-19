import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useMentorStore = create()(
  devtools((set) => ({
    mentorsData: [], // Initialize with an empty array for mentors
    setMentorsData: (mentors) => set(() => ({ mentorsData: mentors })), // Method to set mentors
  }))
);

export default useMentorStore;
