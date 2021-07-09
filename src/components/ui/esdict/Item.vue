<template>
  <div>
    <EsDefinition
      :pos="item.pos"
      :sense="item.sense"
      />
    <EsExample
      :examples="item.examples"
      />
  </div>
</template>

<script>
import EsDefinition from '@/components/ui/esdict/Definition.vue'
import EsExample from '@/components/ui/esdict/Example.vue'

export default {
  name: 'EsItem',
  props: {
    item: Object
  },
  components: {
    EsDefinition,
    EsExample
  }
}
</script>
