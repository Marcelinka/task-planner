<script lang="ts" setup>
import EpicTag from './EpicTag.vue';
import OwnerLink from './OwnerLink.vue';

// part of TEpic
const props = defineProps<{
  owner?: {
    name: string;
    link?: string;
  };
  projects?: string[];
  estimate: number;
}>();
</script>

<template>
  <div class="flex gap-x-16 flex-wrap">
    <EpicTag v-if="props.owner"
      >• Created By
      <OwnerLink :link="props.owner?.link">{{
        props.owner?.name
      }}</OwnerLink></EpicTag
    >

    <template v-if="props.projects?.length">
      <EpicTag v-for="project in props.projects" :key="project">
        {{ project }}
      </EpicTag>
    </template>

    <EpicTag>{{ props.estimate }}h</EpicTag>
  </div>
</template>
