<template>
  <div class="home">
    <Logo text="Dictlet" />
    <SearchBar />
  </div>
</template>

<script>
import Logo from '@/components/ui/Logo.vue'
import SearchBar from '@/components/ui/SearchBar.vue'

export default {
  name: 'Home',
  components: {
    Logo,
    SearchBar
  }
}
</script>

