<script lang="ts" setup>
import EpicTag from './EpicTag.vue';
import OwnerLink from './OwnerLink.vue';

import ProjectIcon from '@/assets/svg/project.svg?component';
import EstimateIcon from '@/assets/svg/estimate.svg?component';

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
    <EpicTag v-if="props.owner" title="Постановщик задачи"
      >• Created By
      <OwnerLink :link="props.owner?.link">{{
        props.owner?.name
      }}</OwnerLink></EpicTag
    >

    <template v-if="props.projects?.length">
      <EpicTag
        v-for="project in props.projects"
        :key="project"
        title="Связанный проект"
      >
        <ProjectIcon /> {{ project }}
      </EpicTag>
    </template>

    <EpicTag title="Предварительная оценка"
      ><EstimateIcon /> {{ props.estimate }}h</EpicTag
    >
  </div>
</template>
