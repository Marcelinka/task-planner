<script lang="ts" setup>
import MainHeader from './components/MainHeader.vue';
import { EpicColumn } from './components/epic';

import { useEpicService } from '@/services/EpicService';

const epicService = useEpicService();
</script>

<template>
  <div class="h-screen flex flex-col">
    <MainHeader class="flex-none" />
    <main class="flex flex-1 gap-x-30 py-30 overflow-x-auto">
      <EpicColumn
        data-test-id="epic"
        class="first:ml-80 last:mr-80 flex-none"
        v-for="epic in epicService.epics"
        :key="epic.id"
        :epic="epic"
      />
    </main>
  </div>
</template>
