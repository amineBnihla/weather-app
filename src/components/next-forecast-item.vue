<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
import { getDate, getIcon } from "../helpers";
import ImgLoad from "../components/img-load.vue";
const store = useStore();
const daily = computed(() => store.getters.daily);
console.log(daily);
</script>
<template>
  <ul class="list-none" v-if="daily">
    <li
      class="flex justify-between items-center py-4 px-5 border-b text-white"
      v-for="(day, index) in daily"
      :key="index"
    >
      <span class="text-sm min-w-[112px]">{{ getDate(day.dt, false) }}</span>
      <ImgLoad
        :source="getIcon(day.weather[0].main)"
        :alternative="day.weather[0].description"
      />
      <span class="text-base">{{ Math.round(day.temp.day) }}°</span>
    </li>
  </ul>
</template>