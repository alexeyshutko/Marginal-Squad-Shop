<script setup>
defineProps({
  id: Number,
  imageUrl: String,
  title: String,
  price: Number,
  isAdded: Boolean,
  isFavorite: Boolean,
  onClickAdd: Function,
  onClickFavorite: Function,
});
</script>
<template>
  <div
    class="p-4 cursor-pointer hover:-translate-y-2 hover:shadow-xl transition bg-opacity-75"
  >
    <!-- <img
      @click="onClickFavorite"
      :src="!isFavorite ? '../../public/image/like_black.svg' : '../../public/image/like_red.svg'"
      alt="Like_Item"
      width="50"
      height="50"
      class="absolute top-8 left-8"
    /> -->
    <img
      :src="'../../public/image/' + imageUrl"
      alt="Marginis"
    />
    <p class="mt-2 text-red-700">{{ title }}</p>
    <div class="flex justify-between mt-5">
      <div class="flex flex-col">
        <span class="text-red-700">Цена:</span>
        <b class="text-red-700">{{ price }} ₽</b>
      </div>

      <img
        @click="onClickAdd"
        :src="
          !isAdded
            ? '../../public/image/add_no_activ.svg'
            : '../../public/image/add.svg'
        "
        alt="Add"
        class="item_image"
      />
    </div>
  </div>
</template>
<style>
.item_image {
  width: 50px !important;
  height: 50px !important;
  object-fit: contain !important;
}
</style>
