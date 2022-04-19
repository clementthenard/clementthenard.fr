<template>
  <CthContainer>
    <CthTitle :mainTitle="'Erreur ' + error.statusCode" :subTitle="error.message" />

  </CthContainer>
</template>

<script>
export default {
  head () {
    return {
      title: 'Erreur ' + this.statusCode + ' - ' + this.message,
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
        }
      ]
    }
  },
  computed: {
    statusCode () {
      return this.error.statusCode
    },
    message () {
      return this.error.message
    }
  },
  props: ['error']
}
</script>
