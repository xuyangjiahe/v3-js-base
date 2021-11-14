<template>
  <div class="home">
    text demo
    <router-demo></router-demo>
  </div>
</template>

<script>
// import myInterface from '@/api/http'
// import { httpServe, httpServeNew } from '@/api/index.js'
import { httpServeNew } from '@/api/index.js'
import { useStore, mapState, mapMutations } from 'vuex'
import { getStore } from '@/utils/storage.js'
import { getLocalCacheByKey } from '@/utils/cacheHelper'
import routerDemo from './routerDemo'

export default {
  name: 'Home',
  setup() {
    const store = useStore()
    console.log('store:', store)
    return {
      store
    }
  },
  components: {
    routerDemo
  },
  props: {
  },
  created() {
    console.log('this.store:', this.$store)
    // this.getTestFun()
    this.$store.commit('setText', {
      a: '2',
      b: '3'
    })
    this.$store.commit('setTestStorage', {
      key: 'test',
      value: '测试'
    })
    // 异步清除用户信息
    this.$store.dispatch('handleLogOut')
  },
  mounted() {
    console.log('testStorage:', this.testStorage)
    console.log('testStorage:', this.testStorage.key)
    console.log('getStore:', getStore({ name: 'testStorage' }))
    console.log('getLocalCacheByKey:', getLocalCacheByKey('testStorage'))
  },
  computed: {
    // one methods
    ...mapState({
      // testStorage: state => state.testStorage
    }),
    // testStorage() {
    //   return this.$store.state.testStorage
    // }
    ...mapState(['testStorage'])
  },
  methods: {
    ...mapMutations(['testStorage']),
    async getTestFun() {
      const params = {
        size: 10,
        current: 1,
        name: 'LNG-80-W'
      }

      // httpServe({ data: params }).then(res => {
      //   console.log('res:', res)
      // })

      const response = await httpServeNew({
        url: 'http://10.106.16.110:30315/api/muyuan-slc-comprehensive/mySlcGasSchedulingTankType/list',
        method: 'get',
        data: {
          ...params
        }
      })

      console.log('response111 :', response)
    }
  }
}

</script>
