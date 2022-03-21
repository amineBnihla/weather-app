<script setup>
import { watch } from "vue";

const props = defineProps({
  source: String,
  alternative: String,
});

const vLazy = {
  mounted: (el) => {
    function handleImg(entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          el.src = el.dataset.url;
          observer.unobserve(el);
        }
      });
    }
    watch(
      () => props.source,
      () => {
        observer.observe(el);
      }
    );
    const options = {
      root: null,
      threshold: "0",
    };
    const observer = new IntersectionObserver(handleImg, options);
    observer.observe(el);
  },
};
</script>
<template>
  <img
    v-lazy
    ref="img"
    :data-url="props.source"
    :alt="props.alternative"
    class="w-10 h-10"
  />
</template>