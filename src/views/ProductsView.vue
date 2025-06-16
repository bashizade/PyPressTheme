<script setup>
import ProductCard from '../components/ProductCard.vue';


</script>

<template>
    <div>
        <div class=" grid grid-cols-4 gap-4">
            <ProductCard v-for="(item, index) in 28" />
        </div>
        <div class="flex justify-center mt-10">
            <div class="join">
                <button class="join-item btn">1</button>
                <button class="join-item btn btn-active">2</button>
                <button class="join-item btn">3</button>
                <button class="join-item btn">4</button>
            </div>
        </div>
    </div>
</template>