<template>
  <div id="concept1">
    <navbar></navbar>
    <articles></articles>
    <articletags></articletags>
    <relatedarticles></relatedarticles>
    <footerComponent></footerComponent>
  </div>
</template>

<script>
import navbar from './navbar.vue'
import footerComponent from './footer.vue'
import relatedarticles from './RelatedArticles.vue'
import articletags from './articletag.vue'
import articles from './article.vue'

export default {
  name: 'concept1',
  components: {
    navbar,
    footerComponent,
    relatedarticles,
    articletags,
    articles
  }
}
</script>

<style lang="scss">

</style>
