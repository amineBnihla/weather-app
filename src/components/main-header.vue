<script setup>
import { ref } from "vue";

let activeNav = ref(false);
function openNav() {
  activeNav.value = !activeNav.value;
}
</script>
<template>
  <header class="absolute top-0 left-0 w-full h-20">
    <div class="container relative h-full flex items-center justify-between">
      <a href="#" class="text-base font-bold text-white">MABWeather</a>
      <button
        class="toggle_btn bg-transparent border-none block md:hidden"
        @click="openNav"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 11H4C3.4 11 3 11.4 3 12C3 12.6 3.4 13 4 13H20C20.6 13 21 12.6 21 12C21 11.4 20.6 11 20 11ZM4 8H20C20.6 8 21 7.6 21 7C21 6.4 20.6 6 20 6H4C3.4 6 3 6.4 3 7C3 7.6 3.4 8 4 8ZM20 16H4C3.4 16 3 16.4 3 17C3 17.6 3.4 18 4 18H20C20.6 18 21 17.6 21 17C21 16.4 20.6 16 20 16Z"
            fill="white"
          />
        </svg>
      </button>
      <ul class="nav" :class="{ active: activeNav }">
        <li class="nav-item">
          <a
            href="#todayForecast"
            class="text-black px-7 py-2 md:p-0 block md:text-white text-sm"
            >Today Forecast</a
          >
        </li>
        <li class="nav-item">
          <a
            href="#nextForecast"
            class="text-black px-7 py-2 md:p-0 block md:text-white text-sm"
            >Next ForeCast</a
          >
        </li>
      </ul>
    </div>
  </header>
</template>
<style scoped>
.nav {
  display: flex;
  gap: 2rem;
}
@media (max-width: 768px) {
  .nav {
    display: none;
    position: absolute;
    top: 100%;
    right: 2rem;
    gap: 0;
    z-index: 100;
    border-radius: 20px;
    padding: 10px 0;
  }
  .nav.active {
    display: flex;
    flex-direction: column;
    background-color: #fff;
  }
}
</style>
