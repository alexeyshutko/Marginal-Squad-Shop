<script setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
  id: Number,
  imageUrl: String,
  title: String,
  price: Number,
  isAdded: Boolean,
  isFavorite: Boolean,
  onClickAdd: Function,
  onClickFavorite: Function,
});

const router = useRouter();

const onClickAdd = (event) => {
  event.stopPropagation();
  props.onClickAdd();
  router.push({
    path: '/item',
    query: {
      id: props.id,
      imageUrl: props.imageUrl,
      title: props.title,
      price: props.price,
      isAdded: props.isAdded,
      isFavorite: props.isFavorite,
    },
  });
};
</script>
<template>
  <div class="p-1 cursor-pointer hover:-translate-y-2 hover:shadow-xl transition bg-opacity-75 w-full">
    <router-link :to="{ path: '/item', query: { id: props.id, imageUrl: props.imageUrl, title: props.title, price: props.price, isAdded: props.isAdded, isFavorite: props.isFavorite } }">
      <img :src="'../../public/image/' + imageUrl" alt="Marginis" />
    </router-link>
    <h1 class="mt-2 text-red-400">{{ title }}</h1>
    <div class="flex justify-between mt-5">
      <div class="flex flex-col">
        <span class="text-red-600">Price:</span>
        <h1 class="text-red-400">{{ price }} ₽</h1>
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