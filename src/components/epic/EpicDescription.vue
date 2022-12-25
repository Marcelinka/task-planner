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
  estimate: string;
}>();
</script>

<template>
  <div class="flex gap-x-16 flex-wrap">
    <EpicTag v-if="props.owner" title="Постановщик задачи" data-test-id="owner"
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
        data-test-id="project"
      >
        <ProjectIcon /> {{ project }}
      </EpicTag>
    </template>

    <EpicTag title="Предварительная оценка" data-test-id="estimate"
      ><EstimateIcon /> {{ props.estimate }}</EpicTag
    >
  </div>
</template>
