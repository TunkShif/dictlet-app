<template>
  <div class="relative lg:w-4/5 mx-auto">
    <input
      type="text" v-model="query"  @keyup.enter="submit"
      class="search-bar block mx-auto w-full text-2xl text-gray-600 border-0 border-b-2 border-gray-500 bg-transparent focus:ring-0 focus:border-gray-400 focus:outline-none">
    <button
      @click="submit"
      class="absolute text-2xl inset-y-0 right-0 text-gray-600 hover:text-gray-500 focus:text-gray-500 focus:outline-none">
      <i class="fas fa-search"></i>
    </button>
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
  computed: {
    lang: function() {
      return this.$store.state.lang
    }
  },
  methods: {
    submit: function() {
      if (this.query.trim().length != 0) {
        this.$router.push(`/dict/${this.query}?lang=${this.lang}`)
      }
    }
  }
}
</script>

