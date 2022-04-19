<template>
  <section :class="background + ' w-full'">
    <div class="max-w-screen-lg xl:max-w-screen-xl px-4 py-10 sm:py-14 md:py-20 lg:py-28 w-full mx-auto">
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
