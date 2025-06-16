<script setup>
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import ProductCard from './ProductCard.vue'

const images = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  url: `https://picsum.photos/seed/${Math.random()}/800/600`,
}))

const carouselConfig = {
  itemsToShow: 3,
  wrapAround: false,
  gap: 10,
  autoplay: 4000,
}
</script>

<template>
  <Carousel v-bind="carouselConfig">
    <Slide v-for="(item, index) in 6" :key="index">
      <ProductCard />
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>
