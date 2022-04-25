<template>
  <section :class="background + ' w-full'">
    <div class="max-w-screen-lg xl:max-w-screen-xl px-4 py-8 sm:py-12 md:py-16 lg:py-20 w-full mx-auto">
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  name: "Container",
  props:{
    background:{
      type: String,
      default: "bg-gray-900"
    }
  },
  data() {
    return {
    }
  }
};
</script>
