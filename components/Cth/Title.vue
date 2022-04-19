<template>
  <div class="relative text-center mb-8">
    <h2 class="text-4xl font-semibold tracking-tight md:text-5xl main-title relative z-10 before:bg-main_color"
        :class="theme === 'dark' ? 'text-gray-750' : 'text-gray-50'">
      {{ mainTitle }}.
    </h2>
    <p class="max-w-xl mx-auto mt-2 text-sm sm:mt-1 md:mt-2 sub-title"
      :class="theme === 'dark' ? 'text-gray-900' : 'text-gray-200'">
      {{ subTitle }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    mainTitle: "",
    subTitle: "",
    theme: {
      type: String,
      Default: 'light'
    }
  },
  methods: {
  }
}
</script>

<style scoped>
  .main-title::before{
    content: '';
    width: 100px;
    position: absolute;
    top: 25px;
    height: 20px;
    z-index: -1;
  }
</style>
