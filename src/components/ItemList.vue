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
  <h1 class="text-center font-bold text-xl">NEW COLLECTION</h1>
  <div class="flex flex-row p-0 item_list_class m-2" v-auto-animate>
    <swiper
      :slides-per-view="3"
      :pagination="{ clicable: true }"
      :scrollbar="{ draggable: true }"
      navigation
      :loop="true"
    >
      <swiper-slide v-for="item in items" :key="item.id">
        <ItemBlock
          :id="item.id"
          :title="item.title"
          :image-url="item.imageUrl"
          :price="item.price"
          :isFavorite="item.isFavorite"
          :onClickFavorite="() => emit('addToFavorite', item)"
          :onClickAdd="() => emit('addToCart', item)"
          :isAdded="item.isAdded"
        />
      </swiper-slide>
    </swiper>
  </div>
  <h1 class="text-center font-bold text-xl">JACKETS</h1>
  <h1 class="text-center font-bold text-xl">HOODY</h1>
  <h1 class="text-center font-bold text-xl m-2">SHIRTS</h1>
  <h1 class="text-center font-bold text-xl m-2">T-SHIRTS</h1>
  <h1 class="text-center font-bold text-xl m-2">JEANS</h1>
  <h1 class="text-center font-bold text-xl m-2">PANTS</h1>
  <h1 class="text-center font-bold text-xl m-2">SHORTS</h1>
  <h1 class="text-center font-bold text-xl m-2">SHOES</h1>
  <h1 class="text-center font-bold text-xl m-2">MARGINIS KIDS</h1>
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
