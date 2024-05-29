<script setup>
import { ref, watch, provide, computed, onMounted, onUnmounted } from "vue";
import axios from "axios";

import Header from "./components/Header.vue";
import Drawer from "./components/Drawer.vue";
import Scene from "./components/Scene.vue";

const showScene = ref(true);
const cart = ref([]);

const isCreatingOrder = ref(false);

const drawerOpen = ref(false);

const totalPrice = computed(() =>
  cart.value.reduce((acc, item) => acc + item.price, 0)
);

const cartIsEmpty = computed(() => cart.value.length === 0);

const cartButtonDisabled = computed(
  () => isCreatingOrder.value || cartIsEmpty.value
);

const openDrawer = () => {
  drawerOpen.value = true;
};

const closeDrawer = () => {
  drawerOpen.value = false;
};

const addToCart = (item) => {
  cart.value.push(item);
  item.isAdded = true;
};

const removeFromCart = (item) => {
  cart.value.splice(cart.value.indexOf(item), 1);
  item.isAdded = false;
};

const createOrder = async () => {
  try {
    isCreatingOrder.value = true;
    const { data } = await axios.post(
      "https://e9b03337b16fcf1d.mokky.dev/orders",
      {
        items: cart.value,
        totalPrice: totalPrice.value,
      }
    );

    cart.value = [];
    return data;
  } catch (err) {
    console.log(err);
  } finally {
    isCreatingOrder.value = false;
  }
};

watch(
  cart,
  () => {
    localStorage.setItem("cart", JSON.stringify(cart.value));
  },
  { deep: true }
);

provide("cart", {
  cart,
  closeDrawer,
  openDrawer,
  addToCart,
  removeFromCart,
});

const dragging = ref(false);
const startY = ref(0);

const onMouseDown = (event) => {
  dragging.value = true;
  startY.value = event.clientY;
};

const onMouseMove = (event) => {
  if (dragging.value) {
    const deltaY = event.clientY - startY.value;
    if (deltaY < -100) {
      showScene.value = false;
      dragging.value = false;
    }
  }
};

const onMouseUp = () => {
  dragging.value = false;
};

onMounted(() => {
  window.addEventListener("mousemove", onMouseMove);
  window.addEventListener("mouseup", onMouseUp);
});

onUnmounted(() => {
  window.removeEventListener("mousemove", onMouseMove);
  window.removeEventListener("mouseup", onMouseUp);
});
</script>

<template>
  <div id="app">
    <div v-if="showScene" class="scene-wrapper" @mousedown="onMouseDown">
      <Scene />
    </div>
    <div v-else>
      <div class="video-bg">
        <video
          src="../public/videos/marginal_ss_19.mp4"
          type="video/mp4"
          autoplay
          muted
          loop
        ></video>
        <div class="effects"></div>
        <div class="video-bg__content">
          <Drawer
            v-if="drawerOpen"
            :total-price="totalPrice"
            @create-order="createOrder"
            :button-disabled="cartButtonDisabled"
          />
          <div class="w-4/5 m-auto home rounded-xl shadow-2xl mt-14 scrollmenu">
            <Header :total-price="totalPrice" @open-drawer="openDrawer" />
            <div>
              <router-view></router-view>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.home {
  background: linear-gradient(
    135deg,
    rgba(100, 43, 115, 0.5),
    rgba(198, 66, 110, 0.5)
  );
}
.scene-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #800000; /* Бардовый цвет */
  cursor: grab;
  z-index: 3;
}

.video-bg {
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.video-bg video {
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  z-index: 1;
}
.video-bg__content {
  z-index: 2;
}
.effects {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100vh;
  background-color: rgb(0, 0, 0, 0.6);
}
</style>
