import { defineStore } from "pinia";
import { ref } from "vue";
import { jobs as data } from "@/data";
import type { Job } from "@/data";

export const useJobsStore = defineStore("jobs", () => {
  const jobs = ref<Job[]>(data);
  const filters = ref<string[]>([]);

  const getJobs = (): Job[] => {
    if (filters.value.length < 1) return jobs.value;

    return jobs.value.filter(job => {
      const tags = [job.role, job.level, ...job.languages, ...job.tools];
      return filters.value.every(filter => tags.includes(filter));
    });
  };

  const getFilters = (): string[] => filters.value;

  const hasFilters = (): boolean => filters.value.length > 0;

  const addFilter = (filter: string): void => {
    if (filters.value.includes(filter)) return;

    filters.value.push(filter);
  };

  const removeFilter = (filter: string): void => {
    const index = filters.value.findIndex(item => item === filter);

    filters.value.splice(index, 1);
  };

  return { getJobs, getFilters, hasFilters, addFilter, removeFilter };
});
