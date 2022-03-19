<script setup>
defineProps({
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
  <img v-lazy :data-url="source" :alt="alternative" class="w-10 h-10" />
</template>