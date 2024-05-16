<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

import ItemList from '../components/ItemList.vue'

const favorites = ref([])
onMounted(async () => {
  try {
    const { data } = await axios.get('https://e9b03337b16fcf1d.mokky.dev/favorites')

    favorites.value = data.map(obj => obj.item)
  } catch (err) {
    console.log(err)
  }
})
</script>

<template>
  <h1 class="text-red-600">Закладки</h1>
  <ItemList :items="favorites" @add-to-favorite="addToFavorite" @add-to-cart="onClickAddPlus" />
</template>
