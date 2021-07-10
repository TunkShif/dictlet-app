<template>
  <div class="relative lg:w-4/5 mx-auto">
    <input
      type="text" v-model="query"  @keyup.enter="submit"
      class="search-bar block mx-auto w-full text-2xl text-gray-600 border-0 border-b-2 border-gray-500 bg-transparent focus:ring-0 focus:border-gray-400">
    <button
      @click="submit"
      class="absolute text-2xl inset-y-0 right-0 text-gray-600 hover:text-gray-500 focus:text-gray-500"><i class="fas fa-search"></i></button>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data: function() {
    return {
      query: ''
    }
  },
  methods: {
    submit: function() {
      this.$router.push(`/esdict/${this.query}`)
    }
  }
}
</script>

