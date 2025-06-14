<script setup>
import { ref } from 'vue';



const count = ref(1)


</script>
<template>
    <div class="join join-vertical lg:join-horizontal">
        <button class="btn join-item" @click="count--">-</button>
        <input type="number" name="count" v-model="count" class="input join-item w-12 text-center" value="1" min="1" id="" readonly>
        <button class="btn join-item" @click="count++">+</button>
    </div>
</template>