<template>
  <component
    :is="type"
    :to="to"
    class="hover:bg-secondary_color hover:shadow-lg hover:-translate-y-1 shadow-md translate border outline-none transition-all duration-200 inline-flex items-center px-3 py-2 border-transparent focus:ring cursor-pointer rounded-lg bg-main_color text-white"
    v-on="{ click }">
    <slot />
  </component>
</template>

<script>
export default ({
  props: {
    type: {
      type: String,
      default: "button"
    },
    to: {
      type: String
    }
  },
  methods: {
    click() {
      this.$emit('click')
    },
  },
})
</script>

<style>

</style>
