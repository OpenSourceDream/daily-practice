<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <swiper-item :msg="msg" />
        </div>
        <div class="swiper-slide">
          <swiper-item :msg="msg" />
        </div>
        <div class="swiper-slide">
          <swiper-item :msg="msg" />
        </div>
      </div>
    </div>
    <div class="main">
      <p>场景：某一组件需要有左右滑动翻页的效果，且无法提前渲染</p>
      <p>此 demo 实现此场景</p>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import swiperItem from './components/swiperItem'



export default {
  name: 'Swiper',
  components: {
    swiperItem
  },
  data() {
    return {
      swiperContainer: null,
      msg: 0
    }
  },
  mounted() {
    this.swiperContainer = new Swiper('.swiper-container', {
      /* ... */
      loop : true,
      initialSlide: 1,
      loopAdditionalSlides: -1,
      // 当设置（ loop: true 或 initialSlide 不是第一个 ） 会触发 [Transition/SlideChange] [Start/End]
      // 设置 runCallbacksOnInit: false 即可阻止触发
      runCallbacksOnInit: false,
      on: {
        slideNextTransitionStart: () => {
          this.msg = this.msg + 1
        },
        slideNextTransitionEnd: () => {
          // 下一个切换结束了
          this.swiperContainer.slideTo(1, 0, false)
        },
        slidePrevTransitionStart: () => {
          // alert('开始切换');
          this.msg = this.msg - 1
        },
        slidePrevTransitionEnd: () => {
          // alert('切换结束了');
          this.swiperContainer.slideTo(1, 0, false)
        },
      }
    })
  }
}
</script>

<style scoped>
@import '~swiper/dist/css/swiper.min.css';

.swiper-container {
  width: 100%;
  height: 300px;
}
.swiper-slide{
  width: 100%;
}
.swiper-slide {
  background-color: #42b983;
}
</style>
