<template>

	
  <div class="section-inner">

    <div 
      id="posts" 
      ref="posts" 
  
      class="posts load-more-target"
      aria-live="polite">

      <div class="grid-sizer"/>


      <Waterfall :length="post_res.length" >
        <PreviewPost 
          v-for="(item,index) in post_res" 
          :key="index"
          :post-id="item.id"
          :content="item.content.rendered"
          :detail="item"
        />
         
      </Waterfall>
  
    </div><!-- .posts -->

		
  </div><!-- .section-inner -->
</template>

<script>
import Logo from '~/components/Logo.vue'
import PreviewPost from '~/components/Preview-post.vue'
import Waterfall from '~/components/Waterfall.vue'
import { getPostList } from '~/api'

export default {
  layout: 'default',
  asyncData({ params, error }) {
    return getPostList()
      .then(res => {
        return { post_res: res.data }
      })
      .catch(e => {
        error({ statusCode: 404, message: 'Post not found' + e })
      })
  },
  components: {
    Logo,
    PreviewPost,
    Waterfall
  },
  data() {
    return {
      postsHeight: 90000
    }
  },
  computed: {
    info() {
      return this.$store.state.info
    }
  },
  mounted() {}
}
</script>
<style lang="scss">
#posts {
  padding: 3rem 0;
  @include min-screen(600px) {
    margin-right: -3rem;
  }
  @include min-screen(1200px) {
    margin-right: -4rem;
  }
}
</style>
