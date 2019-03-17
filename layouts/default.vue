<template>
  <div>
    <Header/>

    <section class="site-wrapper">
      <div>
        <main 
          id="site-content" 
          role="main">
          <nuxt/>
        </main>
      <!-- {{ post_res }} -->
      </div>
    </section>


  </div>
</template>
<script>
import Header from '~/components/Header.vue'
export default {
  components: {
    Header
  }
}
</script>

<style lang="scss" >
body {
  background-color: rgb(246, 247, 248);
}

#site-content {
  @include min-screen(1000px) {
    margin-left: 31%;
    padding: 6rem 6rem 0 0;
  }
  @include min-screen(1440px) {
    margin-left: 44.5rem;
  }
}

// meta ---------------------
.post-meta-preview {
  margin-bottom: 1rem;
}
.post-meta {
  a {
    color: #68717b;
  }
  img {
    opacity: 0.6;
  }

  display: flex;
  flex-wrap: wrap;
  font-size: 1.4rem;
  font-weight: 500;
  list-style: none;
  margin: -0.8rem 0 0 -1.6rem;
  li {
    margin: 0.8rem 0 0 1.6rem;
  }
}
.meta-wrapper {
  display: flex;
  flex-wrap: wrap;
  .meta-icon {
    margin-right: 0.8rem;
  }
}
</style>
