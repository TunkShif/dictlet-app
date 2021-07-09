<template>
  <div class="flex justify-between text-3xl">
    <div class="flex justify-start">
      <button class="button pr-2"><span>🇪🇸</span></button>
      <button class="button"><span>🇺🇸</span></button>
      <!-- <button class="">🇹🇷</button> -->
    </div>
    <div>
      <button class="button"><span>⚙️</span></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  components: {
  }
}
</script>

<style scoped>
.button:hover {
  @apply underline text-gray-500;
}
.button:focus {
  @apply underline text-gray-800;
}
</style>
