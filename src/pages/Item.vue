<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

const id = route.query.id;
const imageUrl = route.query.imageUrl;
const title = route.query.title;
const price = route.query.price;
const isAdded = route.query.isAdded === "true";
const isFavorite = route.query.isFavorite === "true";
</script>

<template>
  <div
    class="p-1 cursor-pointer hover:-translate-y-2 hover:shadow-xl transition bg-opacity-75 w-full flex gap-4"
  >
    <img :src="'../../public/image/' + imageUrl" alt="Marginis" />
    <div class="flex flex-col">
      <h1 class="mt-2 text-red-400">{{ title }}</h1>
      <div class="flex justify-between mt-5">
        <div class="">
          <span class="text-red-600">Price:</span>
          <h1 class="text-red-400">{{ price }} ₽</h1>
        </div>
      </div>
    </div>
  </div>
</template>
