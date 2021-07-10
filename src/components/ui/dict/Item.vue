<template>
  <div>
    <Definition
      :pos="item.pos"
      :sense="item.sense"
      />
    <Example
      :examples="item.examples"
      />
  </div>
</template>

<script>
import Definition from '@/components/ui/dict/Definition.vue'
import Example from '@/components/ui/dict/Example.vue'

export default {
  name: 'Item',
  props: {
    item: Object
  },
  components: {
    Definition,
    Example
  }
}
</script>
