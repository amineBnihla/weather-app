<script setup>
</script>
<template>
  <div class="card flex flex-col items-center gap-5">
    <div class="w-24 h-3 city"></div>
    <div class="date w-12 h-3"></div>
    <h2 class="w-16 h-16 degree"></h2>
    <span class="w-14 h-3 forecast"></span>
    <div class="forecast__list flex flex-col items-center gap-2">
      <div class="forecast__item w-44 h-6"></div>
      <div class="forecast__item w-44 h-6"></div>
    </div>
  </div>
</template>
<style scoped>
.city,
.date,
.degree,
.forecast,
.forecast__item {
  border-radius: 8px;
  animation: pulse-loading 0.4s linear infinite alternate;
}
@keyframes pulse-loading {
  0% {
    background-color: rgba(231, 231, 231, 0.753);
  }
  100% {
    background-color: rgba(231, 231, 231, 0.39);
  }
}
</style>