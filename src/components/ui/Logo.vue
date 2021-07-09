<template>
  <span class="block logo text-center text-5xl py-20 text-gray-600 underline">
    {{ text.toUpperCase() }}
  </span>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    text: String
  }
}
</script>

