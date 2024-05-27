<script setup>
defineProps({
  totalPrice: Number,
});
const emit = defineEmits(["openDrawer"]);
</script>

<template>
  <header class="flex justify-between px-8">
    <router-link to="/"
      ><div class="flex items-center">
        <img
          src="../../public/image/logo.jpeg"
          alt="Logo"
          width="150"
          height="100"
          class="mr-4 rounded-full border-double border-4 border-red-400 mt-2 mb-2"
        />
        <div>
          <h1 class="text-2xl font-bold uppercase text-red-600">MARGINIS</h1>
          <h2 class="text-red-400 text-center font-bold">WORLDWIDE</h2>
        </div>
      </div></router-link
    >

    <ul class="flex items-center">
      <li
        @click="() => emit('openDrawer')"
        class="flex items-center mr-4 text-black-600 cursor-pointer hover:text-red-600"
      >
        <img
          class="mr-4"
          src="../../public/image/cart.svg"
          alt="Cart"
          width="30"
          height="30"
        />
        <b class="text-red-400">{{ totalPrice }} ₽</b>
      </li>

      <!-- <router-link to="/favorites"
        ><li class="flex items-center mr-4 text-black-600 cursor-pointer hover:text-red-600">
          <img
            src="../../public/image/like_black.svg"
            alt="Like"
            width="35"
            height="35"
            class="pt-3"
          />
          <b class="ml-2">Закладки</b>
        </li></router-link
      >

      <router-link to="/profile"
        ><li class="flex items-center mr-4 text-black-600 cursor-pointer hover:text-red-600">
          <img src="../../public/image/profile.svg" alt="Profile" width="50" height="50" />
          <b>Профиль</b>
        </li></router-link -->
      <!-- > -->
    </ul>
  </header>
  <marquee
    behaivor="alternate"
    direction="left"
    class="font-bold text-center bg-opacity-75 text-red-400 shadow-2xl"
  >
    <h1>
      (from Latin margo, marginis — edge, border) in art: an author who adheres
      to a sharply individual, distinctive creative strategy that differs from
      the mainstream; a mix of a talented eccentric and an (in)voluntary
      outcast; a master of inimitable uniqueness; an artist whose legacy
      fundamentally opposes the officialdom.
    </h1>
  </marquee>
</template>
