<template>
  <div class="relative mx-4 lg:mx-0">
    <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
      <svg class="h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none">
        <path
          d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </span>

    <input
      class="form-input w-32 sm:w-64 rounded-md pl-10 pr-4 focus:border-indigo-600"
      type="text"
      placeholder="Search"
    />
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
});
</script>