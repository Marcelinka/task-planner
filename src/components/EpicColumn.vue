<script lang="ts" setup>
import type { TEpic } from '@/db/scheme';

const props = defineProps<{
  epic: TEpic;
}>();
</script>

<template>
  <div>
    <h3>{{ props.epic.title }}</h3>
    <div class="flex gap-x-16">
      <span v-if="props.epic.owner">Created By {{ props.epic.owner }}</span>

      <template v-if="props.epic.projects?.length">
        <span v-for="project in props.epic.projects" :key="project">
          {{ project }}
        </span>
      </template>

      <span>{{ props.epic.estimate }}h</span>
    </div>
  </div>
</template>
