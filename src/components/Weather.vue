<template>
    <transition name="bounce">
        <div v-if="dataWeather" class="flex items-center justify-center  h-screen">
            <Details
                :cloud="dataWeather.current.cloud"
                :humidity="dataWeather.current.humidity"
                :windKph="dataWeather.current.wind_kph"
                :feelslikeC="dataWeather.current.temp_c"
            />
            <div
                class="relative flex flex-col items-center gap-2 font-medium text-center text-gray-500 bg-gray-100 shadow-xl p-14 rounded-2xl main-container justify-beetwen -left-5"
            >
                <h1>{{ dataWeather.location.name }}</h1>
                <span class="text-4xl temp">{{ dataWeather.current.temp_c }}°C</span>
                <figure class="flex flex-col condition">
                    <img
                        :src="dataWeather.current.condition.icon"
                        alt="Imagem demonstrativa do clima atual"
                        class="self-center"    
                    >
                    <figcaption>{{ dataWeather.current.condition.text }}</figcaption>
                </figure>
            </div>
        </div>
    </transition>
</template>

<script>
import axios from 'axios'

import Details from './Details'

export default {
    components: {
        Details,
    },
    data() {
        return {
            key: '4ee720518e2947c3b41142248211404',
            dataWeather: null,
            forecastday: null,
            city: this.cityProp
        }
    },
    name: 'App',
    created() {
        this.newRequestAPI()
    },
    methods: {
        newRequestAPI() {
            if (this.city == '') {
                alert('Digite uma cidade válida.')
            } else {
                axios
                    .get(`https://api.weatherapi.com/v1/forecast.json?key=${this.key}&q=${this.city}&days=1&aqi=no&alerts=no&lang=pt`)
                    .then(response => {
                        const data = response.data
                        this.dataWeather = data
                        
                        const forecastday = this.dataWeather.forecast.forecastday[0]
                        this.forecastday = forecastday
                    })
                }
            }
    },
    props: ['cityProp'],
    watch: {
        cityProp() {
            this.city = this.cityProp
            this.newRequestAPI()
        }
    }
}
</script>
