<template>
  <div class="max-w-screen-md w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12 lg:py-16">
    <NuxtLink class="block mb-8" to="/blog"><font-awesome-icon :icon="['fas', 'fa-arrow-left']" /> Retour à la liste</NuxtLink>

    <CthTitle theme="dark" :mainTitle="article.title" :subTitle="subTitle" />

    <p>{{article.description}}</p>


    <NuxtImg v-if="article.thumbnail" class="object-cover w-full border shadow-lg rounded-xl my-4" :src="article.thumbnail"/>

    <nuxt-content :document="article" />
  </div>

</template>

<script>
export default {
  data() {
    return {
      article: []
    }
  },
  async asyncData({ $content, params, error }) {
    const article = await $content('blog', params.slug).fetch()

    if(!article){
      error({ statusCode: 404, message: 'Article non trouvé' })
    }

    return { article }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('fr', options)
    },
  },
  computed:{
    subTitle: function () {
      var createdAt = this.formatDate(this.article.createdAt)
      var updatedAt = this.formatDate(this.article.updatedAt)
      var subTitleText = "";

      if(createdAt === updatedAt){
        subTitleText = 'créé le ' + createdAt
      } else {
        subTitleText = 'créé le ' + createdAt + '- modifié le ' + updatedAt
      }

      return subTitleText
    }
  }
}
</script>

<style>
  .nuxt-content h2{
    border: 1px solid red;
  }
</style>
