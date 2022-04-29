<template>
    <div class="flex flex-col w-64 px-5 py-12 pr-10 font-medium text-white bg-indigo-400 shadow-xl rounded-2xl ">
        <h1>Detalhes do tempo</h1>
        <ul>
            <li>
                <div class="flex justify-between">
                    <span>Chuva</span>
                    <span>{{ cloud }} %</span>
                </div>
            </li>
            <li>
                <div class="flex justify-between">
                    <span>Umidade</span>
                    <span>{{ humidity }} %</span>
                </div>
            </li>
            <li>
                <div class="flex justify-between">
                    <span>Vento</span>
                    <span>{{ windKph }} %</span>
                </div>
            </li>
            <li>
                <div class="flex justify-between">
                    <span>Sensação Térmica</span>
                    <span>{{ feelslikeC }} °C</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        cloud: Number,
        humidity: Number,
        windKph: Number,
        feelslikeC: Number,
    }
}
</script>
