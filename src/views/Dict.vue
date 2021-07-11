<template>
  <div>
    <div v-if="result">
      <div class="flex justify-between px-2 py-8">
        <span class="text-4xl font-bold text-gray-800">{{ result.word }}</span>
        <span class="text-2xl text-gray-800 hover:text-gray-600">
          <button @click="playAudio">
            <i class="fas fa-play mt-2">
              <audio ref="audio" :src="result.audioUrl"></audio>
            </i>
          </button>
        </span>
      </div>

      <Item
        v-for="(definition, index) in result.definitions"
        :key="index"
        :item="definition"/>
    </div>
    <LoadingSkeleton v-else/>
  </div>
</template>

<script>
import Item from '@/components/ui/dict/Item.vue'
import LoadingSkeleton from '@/components/ui/LoadingSkeleton.vue'

export default {
  name: 'Dict',
  props: {
    query: String
  },
  computed: {
    lang: function() {
      return this.$route.query.lang
    }
  },
  data: function() {
    return {
      result: null
    }
  },
  components: {
    Item,
    LoadingSkeleton
  },
  mounted: function() {
    const apis = {
      es: `https://dictlet.herokuapp.com/spanishdict/query/${this.query}?isPosAbbr=false`,
      en: `https://dictlet.herokuapp.com/youdao-collins/query/${this.query}`,
      tr: `https://dictlet.herokuapp.com/seslisozluk/query/${this.query}`
    }
    fetch(apis[this.lang])
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          this.result = data.result
        } else {
          this.$router.push('/error')
        }
      })
      .catch(() => this.router.push('/error'))
  },
  methods: {
    playAudio: function() {
      this.$refs.audio.play()
    }
  }
}
</script>
