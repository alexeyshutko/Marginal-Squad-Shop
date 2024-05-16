<script setup>
defineProps({
  title: String,
  description: String,
  imgUrl: String
})
</script>

<template>
  <div class="flex flex-col items-center text-center w-72 mx-auto">
    <img class="opacity-90 rounded-md" height="100" width="100" :src="imgUrl" alt="Info image" />
    <h2 class="mt-4 text-2xl font-medium text-red-600">{{ title }}</h2>
    <p class="text-red-600">{{ description }}</p>
  </div>
</template>
