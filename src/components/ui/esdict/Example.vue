<template>
  <div class="text-lg px-2">
    <div class="mb-2" v-for="example in examples" :key="example.example">
      <p class="sentence-es">{{ example.example }}</p>
      <p class="sentence-en text-gray-700">{{ example.exampleTranslation }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EsExample',
  props: {
    examples: Array
  }
}
</script>

<style scoped>
.sentence-es::before {
  content: '• '
}

.sentence-en::before {
  content: '- '
}
</style>
