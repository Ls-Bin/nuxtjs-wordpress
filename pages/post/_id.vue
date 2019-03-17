<template>
  <section class="site-wrapper">
    <article 
      id="post-25" 
      class="single-container bg-color  post type-post status-publish format-standard has-post-thumbnail hentry category-uncategorized has-thumbnail">

	
      <div class="featured-media">

        <img 
          :src="(postDetail.featured_image&&postDetail.featured_image.url)||require('~/assets/images/default-fallback-image.png')" 
          :srcset="postDetail.featured_image_srcset" 
     
          :width="postDetail.featured_image&&postDetail.featured_image.width" 
          :height="postDetail.featured_image&&postDetail.featured_image.height" 
          class="attachment-post-thumbnail size-post-thumbnail wp-post-image" 
          alt="" 
          sizes="(max-width: 1639px) 100vw, 1639px">
      </div><!-- .featured-media -->

      <div class="post-inner section-inner">
        <header class="post-header">
          <h1 class="post-title">{{ post_res.title && post_res.title.rendered }}</h1>
        </header><!-- .post-header -->

        <div 
          class="entry-content" 
          v-html="postDetail.content.rendered"/><!-- .entry-content -->
        <div class="post-meta-wrapper post-meta-single">
          <ul class="post-meta stack-mobile">
            <li class="post-date">
              <a 
                :title="post_res.title && post_res.title.rendered" 
                class="meta-wrapper" 
              >
                <span class="screen-reader-text">Post date</span>
                <div class="meta-icon"><img 
                  aria-hidden="true" 
                  src="~/assets/icons/calendar.svg"></div>
                <span class="meta-content">{{ postDetail.date }}</span>
              </a>
            </li>
          </ul><!-- .post-meta -->
        </div><!-- .post-meta-wrapper -->
      </div><!-- .post-inner -->

    </article>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import { getPostDetail } from '~/api'
import { formatPostDetail } from '~/plugins/util/post'
export default {
  layout: 'default',
  asyncData({ params, error }) {
    return getPostDetail(params.id)
      .then(res => {
        return { post_res: res.data }
      })
      .catch(e => {
        error({ statusCode: 404, message: 'Post not found' + e })
      })
  },
  validate({ params }) {
    if (/^\d+$/.test(params.id)) {
      return true
    } else {
      // 抛出错误
      throw new Error(JSON.stringify(params))
      return false
    }
  },
  components: {
    Logo
  },
  head() {
    return {
      title: `${this.post_res.title && this.post_res.title.rendered} `
    }
  },
  data() {
    return {
      postDetail: {}
    }
  },
  created() {
    this.postDetail = formatPostDetail(this.post_res)
  }
}
</script>
<style lang="scss" >
.site-wrapper {
  @include min-screen(600px) {
    margin-bottom: 10rem;
  }
}
.single-container {
  @include min-screen(1000px) {
    border-radius: 0.8rem;
    box-shadow: 0 0.3rem 1.8rem rgba(5, 10, 15, 0.07);
    overflow: hidden;
  }
}

.post-inner {
  max-width: 52rem;
  margin: 0 auto;
  padding-top: 4rem;
  padding-bottom: 8rem;
  @include min-screen(600px) {
    padding-top: 6rem;
  }
  @include min-screen(1000px) {
    padding-top: 0;
  }
}

.post-header {
  margin-bottom: 2rem;
  @include min-screen(600px) {
    padding-top: 4.5rem;
  }
  h1 {
    font-size: 2.8rem;
    font-weight: 600;
    line-height: 1.3;
    word-break: break-word;
    @include min-screen(600px) {
      font-size: 4rem;
    }
  }
}
.post-meta-single {
  margin-top: 4rem;
}

// meta--------------------------
.meta-content {
  line-height: 2.1rem;
}
</style>
