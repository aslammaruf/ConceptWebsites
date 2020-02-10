<template>
  <div id="concept1">
    <Navbar></Navbar>
    <Article></Article>
    <ArticleFooter></ArticleFooter>
    <ArticleRelated></ArticleRelated>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from '../components/concept1/Navbar'
import Article from '../components/concept1/Article'
import ArticleFooter from '../components/concept1/ArticleFooter'
import ArticleRelated from '../components/concept1/ArticleRelated'
import Footer from '../components/concept1/Footer.vue'

export default {
  name: 'concept1',
  components: {
    Navbar,
    Article,
    ArticleFooter,
    ArticleRelated,
    Footer
  }
}
</script>

<style lang="scss">

</style>
