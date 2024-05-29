<script setup>
import { useRoute } from "vue-router";
import { ref } from "vue";
import { inject } from "vue";

const { cart, addToCart, removeFromCart } = inject("cart");

const route = useRoute();
const item = ref({
  id: route.query.id,
  imageUrl: route.query.imageUrl,
  title: route.query.title,
  price: Number(route.query.price),
  isAdded: route.query.isAdded === "true",
  isFavorite: route.query.isFavorite === "true",
});

const ammount = ref(0);

const onClickAdd = () => {
  if (!item.value.isAdded) {
    addToCart(item.value);
    ammount.value++;
  }
};

const onClickDelete = () => {
  if (ammount.value > 0) {
    removeFromCart(item.value);
    ammount.value--;
  }
};
</script>

<template>
  <div
    class="p-1 hover:-translate-y-2 hover:shadow-xl transition bg-opacity-75 w-full flex gap-4"
  >
    <img :src="'../../public/image/' + item.imageUrl" alt="Marginis" />
    <div class="flex flex-col">
      <h1 class="mt-2 text-red-400">{{ item.title }}</h1>
      <div class="flex justify-between mt-5">
        <div class="flex items-center">
          <h1 class="text-red-600">Price:</h1>
          <h1 class="text-red-400 ml-2 text-lg">{{ item.price }} ₽</h1>
        </div>
      </div>
      <div class="flex mt-2">
        <h1 class="text-red-400">Size</h1>
        <select class="ml-5 border border-2 border-red-600">
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
        </select>
      </div>
      <div class="flex items-center mt-2">
        <h1 class="text-red-400">Ammount</h1>
        <div class="ml-2 text-red-400 cursor-pointer" @click="onClickDelete">
          -
        </div>
        <div class="ml-2 text-red-600">{{ ammount }}</div>
        <div class="ml-2 text-red-400 cursor-pointer" @click="onClickAdd">
          +
        </div>
      </div>
      <!-- <div class="flex mt-2">
        <h1 class="text-red-600 cursor-pointer" @click="onClickAdd">
          Add to cart
        </h1>
      </div> -->
    </div>
  </div>
</template>
