<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

</script>
<template>
  <Header />

  <div class="flex flex-col justify-center items-center">
    <div class="my-4 max-w-5xl">
      <router-view />
    </div>
  </div>

  <Footer />
</template>