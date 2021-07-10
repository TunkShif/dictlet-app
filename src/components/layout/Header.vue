<template>
  <div class="flex justify-between text-3xl">
    <div class="flex justify-start">
      <button class="button pr-2" @click="toHome">🌎</button>
      <button class="button pr-2"
        v-for="lang in langs"
        :key="lang.name"
        :class="lang.isActive ? 'underline' : ''"
        @click="changeLang(lang)">
      {{lang.icon}}
      </button>
    </div>
    <div>
      <button class="button">⚙️</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data: function() {
    return {
      currentActive: 'es',
      langs: {
        es: {
          name: 'es',
          icon: '🇪🇸',
          isActive: true
        },
        en: {
          name: 'en',
          icon: '🇺🇸',
          isActive: false
        },
        /* tr: { */
        /*   name: 'tr', */
        /*   icon: '🇹🇷', */
        /*   isActive: false */
        /* } */
      }
    }
  },
  methods: {
    toHome: function() {
      this.$router.push('/')
    },
    changeLang: function(lang) {
      this.langs[this.currentActive].isActive = false
      this.currentActive = lang.name
      this.langs[lang.name].isActive = true
    }
  }
}
</script>

<style scoped>
.button:hover {
  @apply underline text-gray-500 outline-none;
}
.button:focus {
  @apply underline text-gray-800 outline-none;
}
</style>
