<script setup>
import ProductCard from '../components/ProductCard.vue';


</script>

<template>
    <div>
        <div class="mb-4">
            <div class="hero bg-base-200 min-h-1/3 rounded-3xl">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center">
                        <h1 class="text-5xl font-bold">Products</h1>
                        <p class="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="mb-5">
            <select name="" id="" class="select">
                <option value="">Select Category</option>
            </select>
        </div>
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