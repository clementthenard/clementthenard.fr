<template>
  <CthContainer>
    <CthTitle mainTitle="Mon blog" subTitle="J'essaye d'écrire des articles, en voici la liste" />
    <div class="w-full">
      <template v-if="articles.length > 0">
        <div class="grid gap-6 mt-10 sm:mt-12 md:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          <BlogCard
            v-for="article of articles"
            :key="article.slug"
            :article="article"
          />
        </div>
      </template>
      <template v-else>
        <p class="max-w-xl mx-auto text-sm sm:mt-5 md:mt-10 sub-title text-gray-200 text-italic text-center">Aucun article encore écrit.</p>
      </template>
    </div>
  </CthContainer>
</template>

<script>
export default {
  data() {
    return {
      articles: []
    }
  },
  head: {
      title: 'Blog - Clément Thénard',
      meta: [
          {
              name: 'description',
              content: 'blog Clément Thénard'
          }
      ]
  },
  async asyncData({ $content, params }) {
    const articles = await $content('blog')
      .only(['title', 'description', 'thumbnail', 'slug', 'createdAt', 'updatedAt'])
      .sortBy('updatedAt', 'asc')
      .fetch()

    return {
      articles
    }
  }
}
</script>

<style>

</style>
