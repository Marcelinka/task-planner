<script lang="ts" setup>
import MainHeader from './components/MainHeader.vue';
import EpicColumn from './components/EpicColumn.vue';

import { useEpicService } from '@/services/EpicService';

const epicService = useEpicService();
</script>

<template>
  <MainHeader />
  <EpicColumn v-if="epicService.epics.length" :epic="epicService.epics[0]" />
</template>
