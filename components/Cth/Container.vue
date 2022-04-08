<template>
  <section :class="background">
    <div class="max-w-screen-lg xl:max-w-screen-xl px-4 py-14 sm:py-20 md:py-28 lg:py-32 w-full mx-auto">
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
