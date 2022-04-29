<template>
  <div id="app">
    <div class="text-8xl font-extrabold text-center ... pt-6 ...">
       <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500">
          clima
      </span>   
  </div>
      <div class="text-1xl font-extrabold text-center">
       <span class="text-white">
          © Walisson Souza, 2022
      </span>   
  </div>

    <div class="relative z-10 flex items-center justify-center gap-3 top-32">
      <input
        type="text"
        placeholder="Digite uma cidade"
        ref="inputCity"
        class="p-4 font-medium text-center text-indigo-400 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent w-96 text-md focus:"
      >
      <button @click="search" class="p-4 text-white bg-indigo-400 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50">
        Enviar
      </button>
    </div>
    <Weather v-if="visible" :cityProp="city"/>
  </div>
</template>
<script>
import Weather from '@/components/Weather.vue'

export default {
  components: {
    Weather
  },
  data() {
    return {
      visible: false,
      city: ''
    }
  },
  title: 'Previsão do Tempo',
  methods: {
    search() {
      if (this.city.value === '') {
        this.visible = false
      } else {
        this.visible = true
        this.city = this.$refs['inputCity'].value
      }
    }
  },
}
</script>

<style lang="postcss">
body, html {
  @apply bg-gradient-to-r from-green-400 to-blue-500 
}
</style>

