<script setup>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/carousel.css'
import banner from '../assets/banner.jpg'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const carouselConfig = {
  itemsToShow: 1,
  wrapAround: true
}
</script>

<template>
  <Carousel v-bind="carouselConfig">
    <Slide v-for="slide in 10" :key="slide">
      <div class="carousel__item"><img :src="banner" alt="" class=" rounded-lg"></div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>