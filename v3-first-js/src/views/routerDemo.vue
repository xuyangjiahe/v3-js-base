<template>
<div>
  this is a text of  vue Router demo !
</div>
</template>
<script>
import { useRoute, useRouter } from 'vue-router'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Module',
  components: {},
  setup() {
    const route = useRoute()
    const router = useRouter()
    // 路由参数
    const params = route.params
    console.log('route:', route)
    console.log('router:', router)
    console.log('params:', params)
    // router.push({
    //   path: '/'
    // })
  },
  props: {},
  data() {
    return {
    }
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {}
})
</script>
<style lang='less' scoped>
</style>
