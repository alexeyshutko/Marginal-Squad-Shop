<script setup>
defineProps({
  totalPrice: Number
})
const emit = defineEmits(['openDrawer'])
</script>

<template>
  <header class="flex justify-between border-b border-red-700 px-8">
    <router-link to="/"
      ><div class="flex items-center">
        <img
          src="../../public/image/logo.jpeg"
          alt="Logo"
          width="150"
          height="100"
          class="mr-4 rounded-full border-double border-4 border-red-600 mt-2 mb-2"
        />
        <div>
          <h1 class="text-2xl font-bold uppercase">MARGINIS</h1>
          <h2 class="text-red-600 text-center font-bold">WORLDWIDE</h2>
        </div>
      </div></router-link
    >

    <ul class="flex items-center m-4">
      <li
        @click="() => emit('openDrawer')"
        class="flex items-center mr-4 text-black-600 cursor-pointer hover:text-red-600"
      >
        <img src="../../public/image/cart.svg" alt="Cart" width="50" height="50" />
        <b>{{ totalPrice }} ₽</b>
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
  <marquee behaivor="alternate" direction="left" class="font-bold text-center bg-opacity-75 text-red-300 shadow-2xl bg-black border-b border-red-700 italic">
   (от лат. margo, marginis — край, межа) в искусстве: автор, придерживающийся резко
    индивидуальной, отличающейся от общепринятой, творческой стратегии; смесь талантливого чудака и
    (не)добровольного изгоя; мастер неподражаемой своеобразности; художник, чье наследие всей своей
    сутью противостоит официозу.
  </marquee>
</template>
