<script setup lang="ts">
import Header from "@/components/Header.vue";
import { useJobsStore } from "@/stores/jobs";
import JobCard from "@/components/JobCard.vue";
import RemoveIcon from "@/components/RemoveIcon.vue";
import JobListTransition from "@/transitions/JobListTransition.vue";

const jobs = useJobsStore();
</script>

<template>
  <Header />
  <main class="mx-auto w-full max-w-6xl px-4">
    <Transition name="filters">
      <div
        v-if="jobs.hasFilters()"
        class="-mt-9 flex items-center justify-between rounded-md bg-white p-5 lg:px-10"
      >
        <ul class="flex flex-wrap items-center gap-4">
          <li
            v-for="filter in jobs.getFilters()"
            :key="filter"
            class="flex h-8 items-center justify-center"
          >
            <span
              class="flex h-full items-center justify-center rounded bg-neutral-lightcyan px-2 text-sm font-bold text-primary-cyan"
              >{{ filter }}</span
            >
            <button
              type="button"
              :aria-label="`remove ${filter} filter`"
              class="flex h-full w-8 items-center justify-center rounded-r bg-primary-cyan text-white transition-colors hover:bg-neutral-darkcyan"
              @click="jobs.removeFilter(filter)"
            >
              <RemoveIcon />
            </button>
          </li>
        </ul>
      </div>
    </Transition>
    <ul class="mt-14 space-y-10">
      <JobListTransition>
        <li v-for="job in jobs.getJobs()" :key="job.id">
          <JobCard :job="job" />
        </li>
      </JobListTransition>
    </ul>
  </main>
</template>

<style>
.filters-enter-active,
.filters-leave-active {
  transition: all 0.2s ease-in-out;
}

.filters-enter-from,
.filters-leave-to {
  opacity: 0;
}
</style>
