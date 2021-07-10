<template>
  <div class="animate-pulse">
    <div class="flex justify-between pt-8 pb-6">
      <div class="text-4xl w-2/3 h-8 mr-4 bg-gray-300 shadow-sm rounded"></div>
      <div class="text-2xl w-1/3 h-8 ml-3 bg-gray-200 shadow-sm rounded"></div>
    </div>
    <div>
      <div class="bg-gray-300 h-8 mb-6 text-lg shadow-sm rounded"></div>
      <div class="bg-gray-200 h-8 mb-6 text-lg shadow-sm rounded"></div>
      <div class="bg-gray-200 h-8 text-lg shadow-sm rounded"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadingSkeleton'
}
</script>

