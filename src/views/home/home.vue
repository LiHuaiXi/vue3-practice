<template>
  <div>
    <div class="cs">
      vue3首页
    </div>
    <div class="text-25px text-#ff6700 bg-#ccc ">你好Unocss</div>
  </div>
</template>
  <script setup>
import { ref } from 'vue';
 </script>
<style lang='scss' scoped>
.cs {
  @apply bg-blue-400 text-sm text-white font-mono font-light py-2 px-4 rounded border-2 border-blue-200;
  @apply hover:bg-blue-500;
  @apply dark:bg-blue-500 dark:hover:bg-blue-600;
}
</style>