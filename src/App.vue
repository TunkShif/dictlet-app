<template>
  <div id="app" class="w-full h-full p-10 mx-auto md:w-2/3 lg:w-2/5">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from './components/layout/Header.vue'

export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>
