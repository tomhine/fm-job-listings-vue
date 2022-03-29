<script setup lang="ts">
import { useJobsStore } from "@/stores/jobs";
import type { Job } from "@/data";

const { job } = defineProps<{ job: Job }>();
const jobs = useJobsStore();
</script>

<template>
  <article
    class="relative flex w-full flex-col gap-4 rounded-md border-l-4 bg-white px-6 pt-8 pb-6 shadow-2xl shadow-primary-cyan/40 lg:static lg:flex-row lg:justify-between lg:border-l-[5px]"
    :class="{ 'border-primary-cyan': job.featured, 'border-white': !job.featured }"
  >
    <div class="flex gap-8">
      <img
        :src="job.logo"
        :alt="`${job.company} logo`"
        class="absolute -top-6 left-6 h-12 w-12 lg:static lg:h-22 lg:w-22"
      />
      <div class="flex flex-col gap-2">
        <div class="flex items-center gap-4">
          <h3 class="text-sm font-bold text-primary-cyan">{{ job.company }}</h3>
          <div class="flex items-center gap-2">
            <span
              v-if="job.new"
              class="flex items-center rounded-full bg-primary-cyan py-1 px-2 text-[10px] font-bold uppercase text-white"
              >new!</span
            >
            <span
              v-if="job.featured"
              class="flex items-center rounded-full bg-neutral-darkcyan py-1 px-2 text-[10px] font-bold uppercase text-white"
              >featured</span
            >
          </div>
        </div>
        <h2
          class="cursor-pointer font-bold text-neutral-darkcyan transition-colors hover:text-primary-cyan"
        >
          {{ job.position }}
        </h2>
        <ul class="flex list-disc items-center gap-6 text-sm text-neutral-cyan">
          <li class="list-none">{{ job.postedAt }}</li>
          <li>{{ job.contract }}</li>
          <li>{{ job.location }}</li>
        </ul>
      </div>
    </div>
    <div class="h-[1px] w-full bg-neutral-cyan/60 lg:hidden"></div>
    <ul class="flex flex-wrap items-center gap-4">
      <li
        v-for="tag in [job.role, job.level, ...job.languages, ...job.tools]"
        :key="tag"
        class="cursor-pointer rounded bg-neutral-lightcyan px-2 py-1 text-sm font-bold text-primary-cyan transition-colors hover:bg-primary-cyan hover:text-white"
        @click="jobs.addFilter(tag)"
      >
        {{ tag }}
      </li>
    </ul>
  </article>
</template>
