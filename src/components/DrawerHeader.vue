<script setup>
import { inject } from 'vue'

const { closeDrawer } = inject('cart')
</script>
<template>
  <div class="flex items-center gap-5 mb-5">
    <img
      @click="closeDrawer"
      class="opacity-60 cursor-pointer hover:opacity-100 hover:-translate-x-1 transition"
      src="../../public/image/left_arrow.svg"
      width="50"
      height="50"
    />
    <h2 class="text-2xl font-bold text-red-600">Cart</h2>
  </div>
</template>
