<template>
  <div class="bg-gray-200 p-2 mb-2 text-lg text-gray-800 shadow-sm rounded">
    <span class="definition font-bold pr-2">{{ pos }}</span>
    <span>{{ sense }}</span>
  </div>
</template>

<script>
export default {
 name: 'Definition',
 props: {
   pos: String,
   sense: String
 }
}
</script>

<style scoped>
.definition::before {
  content: '◼ '
}
</style>
