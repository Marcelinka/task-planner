<script lang="ts" setup>
import PlusIcon from '@/assets/svg/plus-icon.svg?component';

import useUserService from '@/services/UserService';

const userService = useUserService();
</script>

<template>
  <div class="h-68 flex flex-row items-center justify-end px-80 gap-x-18">
    <button class="h-36 w-36 rounded-full border-0 bg-medium-grey">
      <PlusIcon class="inline text-center align-sub" />
    </button>
    <div
      class="h-36 w-36 bg-purple-gradient rounded-full font-semibold text-15 text-white text-center leading-36"
    >
      {{ userService.avatar }}
    </div>
  </div>
</template>
