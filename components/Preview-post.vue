<template>
  <article 
    :id="'post-'+postId" 
    class="preview preview-post " 
  >

    <div 
      ref="wrapper" 
      class="preview-wrapper">
      <a 
        :href="'post/'+postDetail.id" 
        class="preview-image">

        <img 
          :src="postDetail.featured_image&&postDetail.featured_image.url||require('~/assets/images/default-fallback-image.png')" 
          :srcset="postDetail.featured_image_srcset" 
          :width="postDetail.featured_image&&postDetail.featured_image.width" 
          :height="postDetail.featured_image&&postDetail.featured_image.height" 
          class="attachment-koji_preview_image_high_resolution size-koji_preview_image_high_resolution wp-post-image" 
          alt="" 
          sizes="(max-width: 800px) 100vw, 800px">				
      </a>
		
      <div class="preview-inner">
        <h2 class="preview-title"><a :href="'post/'+postDetail.id">{{ postDetail.title.rendered }}</a></h2>
        <div class="post-meta-wrapper post-meta-preview">
          <ul class="post-meta">
            <li class="post-date">
              <a 
                :href="'post/'+postDetail.id" 
                class="meta-wrapper" 
                title="test">
                <span class="screen-reader-text">Post date</span>
                <div class="meta-icon"><img 
                  aria-hidden="true" 
                  src="~/assets/icons/calendar.svg"></div>
                <span class="meta-content">{{ postDetail.date }}</span>
              </a>
            </li>
          </ul><!-- .post-meta -->
        </div><!-- .post-meta-wrapper -->			
      </div><!-- .preview-inner -->
    </div><!-- .preview-wrapper -->


  </article>
</template>
<script>
import { formatPostDetail } from '~/plugins/util/post'
export default {
  props: {
    postId: { type: Number, default: 0 },
    content: { type: String, default: '' },
    detail: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      postDetail: {}
    }
  },
  created() {
    this.postDetail = formatPostDetail(this.detail)
  },
  mounted() {
    this.$refs.wrapper.style.opacity = 1
    this.$refs.wrapper.style.transform = 'translateY(0)'
  },
  methods: {}
}
</script>


<style lang="scss" scoped >
.preview {
  position: absolute;

  @include min-screen(600px) {
    width: 50%;
  }
  @include min-screen(1200px) {
    width: 33.333%;
  }
  @include min-screen(1500px) {
    width: 25%;
  }
}
.preview-wrapper {
  background: #fff;
  border-radius: 0.8rem;
  box-shadow: 0 0.3rem 1.2rem 0 rgba(5, 10, 15, 0.05);
  overflow: hidden;
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
  margin-bottom: 3rem;
  @include min-screen(600px) {
    margin-bottom: 4rem;
    margin-right: 3rem;
  }
  @include min-screen(1200px) {
    margin-bottom: 5rem;
    margin-right: 4rem;
  }
}

.preview-inner {
  padding: 2rem;
}
.preview-title {
  color: #4b555f;
  font-size: 2rem;
  margin-bottom: 1rem;
  line-height: 1.3;
  word-break: break-word;
}
.meta-content {
  line-height: 2.1rem;
}
</style>
