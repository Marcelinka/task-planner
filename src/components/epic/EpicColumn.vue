<script lang="ts" setup>
import EpicDescription from './EpicDescription.vue';

import type { TEpic } from '@/db/scheme';

const props = defineProps<{
  epic: TEpic;
}>();
</script>

<template>
  <div class="border border-grey-500 w-500 rounded-10 shadow-md h-full p-20">
    <h3 class="font-medium text-lg mb-4">{{ props.epic.title }}</h3>

    <EpicDescription v-bind="epic" />
  </div>
</template>
