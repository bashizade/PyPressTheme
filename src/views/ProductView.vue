<script setup>
import CountProduct from '../components/CountProduct.vue';
import ProductGallery from '../components/ProductGallery.vue';


</script>

<template>
    <div>
        <div class=" grid grid-cols-12 gap-2">
            <div class="col-span-7 flex flex-col justify-between">
                <div>
                    <div>
                        <h1 class="text-lg">🔥 Title</h1>
                    </div>
                    <div>
                        <h2 class="text-xs text-base-300">Model name</h2>
                    </div>
                    <div class="mt-5">
                        <p class=" text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore vero iure
                            illo, blanditiis harum, quisquam magni, commodi nostrum optio aut libero esse? Architecto
                            expedita numquam quia, tempora quasi tempore! Qui.</p>
                    </div>
                </div>
                <div>
                    <div class="flex items-center gap-3">
                        <div>
                            <p class="text-4xl font-bold">Price</p>
                        </div>
                        <div>
                            <h6 class="line-through text-red-800 text-lg">200 <span class="text-xs">$</span></h6>
                            <h3 class="text-2xl font-bold">150 <span class="text-xs">$</span></h3>
                        </div>
                    </div>
                    <div class="mt-5 flex gap-2">
                        <div>
                            <CountProduct />
                        </div>
                        <div>
                            <button class="btn">Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class=" col-span-5">
                <ProductGallery />
            </div>
        </div>
    </div>
</template>