<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import ItemBlock from "./ItemBlock.vue";

defineProps({
  items: Array,
});

const emit = defineEmits(["addToFavorite", "addToCart"]);
</script>

<template>
  <h1 class="text-center font-bold text-2xl text-red-600 shadow-2xl">
    NEW COLLECTION
  </h1>
  <div class="grid grid-rows-2 grid-flow-col p-0 m-2" v-auto-animate>
    <ItemBlock
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :image-url="item.imageUrl"
      :price="item.price"
      :isFavorite="item.isFavorite"
      :onClickFavorite="() => emit('addToFavorite', item)"
      :onClickAdd="() => emit('addToCart', item)"
      :isAdded="item.isAdded"
    />
  </div>
  <h1 class="text-center font-bold text-2xl text-red-600 shadow-2xl">JACKETS</h1>
  <h1 class="text-center font-bold text-2xl text-red-600 shadow-2xl">HOODY</h1>
  <h1 class="text-center font-bold text-2xl text-red-600 shadow-2xl">SHIRTS</h1>
  <h1 class="text-center font-bold text-2xl text-red-600 shadow-2xl">T-SHIRTS</h1>
  <h1 class="text-center font-bold text-2xl text-red-600 shadow-2xl">JEANS</h1>
  <h1 class="text-center font-bold text-2xl text-red-600 shadow-2xl">PANTS</h1>
  <h1 class="text-center font-bold text-2xl text-red-600 shadow-2xl">SHORTS</h1>
  <h1 class="text-center font-bold text-2xl text-red-600 shadow-2xl">SHOES</h1>
  <h1 class="text-center font-bold text-2xl text-red-600 shadow-2xl">MARGINIS KIDS</h1>
</template>
<style>
.item_list_class {
  overflow-x: scroll;
  width: auto;
}

.swiper {
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  width: 100%;
  height: 100%;
  /* border: 10px solid rgb(114, 0, 0); */
}
.swiper-slide img {
  width: 100%;
  height: 100%;
}
</style>
