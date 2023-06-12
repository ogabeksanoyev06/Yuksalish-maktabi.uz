<template>
  <section>
    <div class="slider">
      <swiper :modules="modules" :pagination="{ clickable: true }">
        <swiper-slide
          >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
          itaque ratione et eius obcaecati, ipsa dolor odit facilis cum,
          eligendi quidem accusamus tempora fugit. Aliquid recusandae quas id
          dolorum sit minima soluta debitis cum cupiditate aperiam quae
          voluptatum dicta sequi eum earum odit commodi, est dolore illum
          aliquam. Molestias vitae, ipsam officia voluptatem aut nemo laborum
          excepturi reprehenderit optio accusamus veritatis consequuntur et
          dolores ducimus minus nobis aspernatur necessitatibus, doloribus dicta
          fuga sequi asperiores fugit animi laudantium. Assumenda eos labore
          dolorum, fugit necessitatibus odit voluptas, eum asperiores placeat
          natus minima, illum enim commodi pariatur harum nisi adipisci dicta.
          Illo, provident!</swiper-slide
        >
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
      </swiper>
    </div>
  </section>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
export default {
  name: "AppSlider",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped></style>
