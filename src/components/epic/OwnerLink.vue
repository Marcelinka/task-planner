<script lang="ts" setup>
// part of TEpic
const props = defineProps<{
  link?: string;
}>();
</script>

<template>
  <span class="text-blue-purple">
    <a
      v-if="props.link"
      :href="props.link"
      title="Ссылка для связи"
      target="_blank"
      noopener
      noreferer
    >
      <slot />
    </a>
    <template v-else>
      <slot />
    </template>
  </span>
</template>
