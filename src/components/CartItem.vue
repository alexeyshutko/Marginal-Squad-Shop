<script setup>
const emit = defineEmits(['onClickRemove'])
defineProps({
  id: Number,
  title: String,
  imageUrl: String,
  price: Number
})
</script>
<template>
  <div class="flex blurred-background items-center border border-red-600 p-4 rounded-xl gap-4">
    <img
      class="w-16 h-16"
      :src="'/public/image/' + imageUrl"
      :alt="title"
      width="400"
      height="400"
    />
    <div class="flex flex-col flex-1">
      <p class="text-red-600">{{ title }}</p>
      <div class="flex justify-between mt-2">
        <b class="flex-1 text-red-600">{{ price }} ₽</b>
        <img
          @click="emit('onClickRemove')"
          class="opacity-40 hover:opacity-100 cursor-pointer transition"
          src="/public/image/delete.svg"
          width="20"
          height="20"
        />
      </div>
    </div>
  </div>
</template>
<style scoped>
.blurred-background {
  background-color: rgba(87, 26, 26, 0.5); /* Белый цвет с прозрачностью */
  backdrop-filter: blur(10px); /* Эффект размытия */
}
</style>
