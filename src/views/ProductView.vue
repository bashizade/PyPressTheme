<script setup>
import CountProduct from '../components/CountProduct.vue';
import ProductGallery from '../components/ProductGallery.vue';
import ProductsRelated from '../components/ProductsRelated.vue';


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
        <div class="mt-10">
            <h2 class=" font-bold">Product Description</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit ut laboriosam natus vel a sapiente et
                reiciendis, odio deleniti tempora officia, totam consequuntur, aliquid quo. Fugit tempore quasi ipsum
                nemo.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit consequatur voluptas, eveniet
                voluptatibus facere doloremque inventore, et amet veniam voluptatum, enim ducimus a esse similique.
                Corrupti iure similique tempore ipsum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus autem deleniti quae sapiente, cupiditate
                vero consectetur eaque impedit exercitationem error dolorem eum, sit aut nihil similique est mollitia ea
                at?
            </p>
        </div>
        <div class="mt-10">
            <h2 class="font-bold">Comments</h2>
            <div class=" grid grid-cols-2 gap-2">
                <div class="">
                    <form action="">
                        <div class="mb-2">
                            <input type="text" class="input w-full" placeholder="subject">
                        </div>
                        <div class="mb-2">
                            <textarea name="" id="" placeholder="Message" class="textarea w-full"></textarea>
                        </div>
                        <div>
                            <button class="btn btn-accent">Send</button>
                        </div>
                    </form>
                </div>
                <div>
                    <div class=" h-96 overflow-y-auto">
                        <div class="chat chat-start">
                            <div class="chat-bubble">
                                <h6>Username</h6>
                                <p class="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta recusandae porro modi odit assumenda, eius quasi illo natus ipsa vero temporibus illum vitae deserunt! Culpa similique sed maxime eligendi ullam!</p>
                            </div>
                        </div>
                        <div class="chat chat-start">
                            <div class="chat-bubble">
                                <h6>Username</h6>
                                <p class="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta recusandae porro modi odit assumenda, eius quasi illo natus ipsa vero temporibus illum vitae deserunt! Culpa similique sed maxime eligendi ullam!</p>
                            </div>
                        </div>
                        <div class="chat chat-start">
                            <div class="chat-bubble">
                                <h6>Username</h6>
                                <p class="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta recusandae porro modi odit assumenda, eius quasi illo natus ipsa vero temporibus illum vitae deserunt! Culpa similique sed maxime eligendi ullam!</p>
                            </div>
                        </div>
                        <div class="chat chat-start">
                            <div class="chat-bubble">
                                <h6>Username</h6>
                                <p class="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta recusandae porro modi odit assumenda, eius quasi illo natus ipsa vero temporibus illum vitae deserunt! Culpa similique sed maxime eligendi ullam!</p>
                            </div>
                        </div>
                        <div class="chat chat-start">
                            <div class="chat-bubble">
                                <h6>Username</h6>
                                <p class="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta recusandae porro modi odit assumenda, eius quasi illo natus ipsa vero temporibus illum vitae deserunt! Culpa similique sed maxime eligendi ullam!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-10">
            <h6 class="mb-4 text-center font-bold text-3xl">Relations Products</h6>
            <ProductsRelated />
        </div>
    </div>
</template>