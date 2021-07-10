<template>
  <div class="text-lg px-2">
    <div class="mb-2" v-for="(example, index) in examples" :key="index">
      <p class="sentence-es">{{ example.example }}</p>
      <p class="sentence-en text-gray-700">{{ example.exampleTranslation }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Example',
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
