<template>
  <NuxtLink
    :to="`/blog/${article.slug}/`"
    class="p-4 transition duration-200 ease-in-out bg-white shadow-md rounded-xl hover:shadow-lg hover:-translate-y-1"
  >
    <div class="aspect-w-16 aspect-h-9">
      <NuxtImg :src="article.thumbnail !== '' ? article.thumbnail : 'image-not-found.png'"/>
    </div>
    <div class="mt-3">
      <h3 class="text-lg font-semibold leading-tight text-gray-800 md:text-xl">
        {{ article.title }}
      </h3>
      <p class="text-gray-700">
        {{ formatDate(article.updatedAt) }}
      </p>
      <p class="mt-3 leading-snug text-gray-500 md:text-lg">
        {{ article.description }}
      </p>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    article: {}
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('fr', options)
    },
  }
}
</script>

<style>

</style>
