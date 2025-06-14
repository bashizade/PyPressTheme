<script setup>

</script>

<template>
    <div class="card bg-base-100 shadow-lg">
        <figure class=" relative">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW1yhlTpkCnujnhzP-xioiy9RdDQkKLMnMSg&s"
                alt="Shoes" class="w-full" />
            <span class=" absolute top-1 right-1 bg-base-100 rounded-lg p-1">🔥</span>
        </figure>
        <div class="card-body">
            <h2 class="card-title">Card Title</h2>
            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <div class="card-actions justify-between items-center">
                <router-link :to="{ name: 'product', params: { id: 1 } }">
                    <button class="btn btn-primary btn-sm">Details</button>
                </router-link>
                <span><span class="line-through text-red-500">200$</span> - <span class=" font-bold">150$</span></span>
            </div>
        </div>
    </div>
</template>