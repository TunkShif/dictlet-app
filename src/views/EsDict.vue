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

      <EsItem
        v-for="definition in result.definitions"
        :key="definition.sense"
        :item="definition"/>
    </div>
    <LoadingSkeleton v-else/>
  </div>
</template>

<script>
import EsItem from '@/components/ui/esdict/Item.vue'
import LoadingSkeleton from '@/components/ui/LoadingSkeleton.vue'

export default {
  name: 'EsDict',
  data: function() {
    return {
      result: null
    }
  },
  components: {
    EsItem,
    LoadingSkeleton
  },
  mounted: function() {
    let query = this.$route.params.query
    fetch(`https://dictlet.herokuapp.com/spanishdict/query/${query}?isPosAbbr=false`)
      .then(response => response.json())
      .then(data => this.result = data.result)
  },
  methods: {
    playAudio: function() {
      this.$refs.audio.play()
    }
  }
}
</script>
