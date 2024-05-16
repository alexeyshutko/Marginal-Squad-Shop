<script setup>
import { computed } from 'vue'
import DrawerHeader from './DrawerHeader.vue'
import CartItemList from './CartItemList.vue'

import InfoBlock from './InfoBlock.vue'

const emit = defineEmits(['createOrder'])

defineProps({
  totalPrice: Number,
  isCreatingOrder: Boolean,
  buttonDisabled: Boolean
})
</script>
<template>
  <!-- <div class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-70"></div> -->
  <div class="w-96 bg-black h-full fixed right-0 top-0 z-20 p-8">
    <DrawerHeader />
    <div v-if="!totalPrice" class="flex h-full items-center">
      <InfoBlock
        :title="'Корзина пустая'"
        :description="'Здесь будут Ваши товары'"
        :imgUrl="'../../public/image/logo_marginal.jpeg'"
      />
    </div>
    <div v-else>
      <CartItemList v-if="totalPrice" />
    <div v-if="totalPrice" class="flex flex-col gap-4 my-7">
      <div class="flex gap-2">
        <span class="text-red-600">Итог:</span>
        <div class="flex-1 border-b border-dashed border-red-600"></div>
        <b class="text-red-600">{{ totalPrice }} ₽</b>
      </div>
      <button
        :disabled="buttonDisabled"
        @click="() => emit('createOrder')"
        class="my-4 transition bg-lime-500 w-full rounded-xl py-3 text-white hover:bg-lime-600 activ:bg-lime-700 disabled:bg-slate-300 cursor-pointer"
      >
        Оплатить
      </button>
    </div>
    </div>
  </div>
</template>
