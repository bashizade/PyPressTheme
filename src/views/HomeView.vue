<script setup>
import BlogCardCarousel from '../components/BlogCardCarousel.vue';
import Carousel from '../components/Carousel.vue';
import ProductCard from '../components/ProductCard.vue'
</script>


<template>

    <div>
        <div class="mb-4">
            <Carousel />
        </div>
        <div class="mb-4">
            <div>
                <h1 class=" text-center text-3xl divider">New Product</h1>
            </div>
            <div class=" grid grid-cols-3 gap-2">
                <ProductCard v-for="(item, index) in 6" />
            </div>
        </div>
        <div class="mb-4">
            <div class="hero min-h-1/3"
                style="background-image: url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp);">
                <div class="hero-overlay"></div>
                <div class="hero-content text-neutral-content text-center">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
                        <p class="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="mb-4">
            <div>
                <h1 class=" text-center text-3xl divider">Blogs</h1>
            </div>
            <BlogCardCarousel />
        </div>
        <div class="mb-4">
            <div class="hero bg-base-200 min-h-1/3">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center lg:text-left">
                        <h1 class="text-5xl font-bold">Contact</h1>
                        <p class="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div class="card-body">
                            <fieldset class="fieldset">
                                <label class="label">Email</label>
                                <input type="email" class="input" placeholder="Email" />
                                <label class="label">text</label>
                                <textarea type="password" class="textarea" placeholder="hello ..."></textarea>
                                <button class="btn btn-neutral mt-4">send</button>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>