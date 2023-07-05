<template>
  <div data-aos="fade-up" data-aos-duration="500">
    <div class="container">
      <div class="excursion">
        <img
          src="/images/girls.png"
          style="
            width: auto;
            max-width: 100%;
            height: auto;
            border-radius: 24px;
          "
        />
        <a :href="link" target="_blank">
          <div class="icon">
            <svg
              width="50"
              height="50"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.33331 27.9999V19.6932C9.33331 9.37992 16.6366 5.15659 25.5733 10.3133L32.7833 14.4666L39.9933 18.6199C48.93 23.7766 48.93 32.2233 39.9933 37.3799L32.7833 41.5332L25.5733 45.6866C16.6366 50.8433 9.33331 46.6199 9.33331 36.3066V27.9999Z"
                fill="#5B81E6"
              />
            </svg>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
// import AppButton from "../shared-components/AppButton.vue";
export default {
  name: "YoutubeLinkBanner",
  components: {},
  props: {
    topLink: Boolean,
    bgGreen: Boolean,
    content: String,
    photo: String,
    link: String,
    buttonText: String,
  },
};
</script>
<style lang="scss" scoped>
.bgGreen {
  background-color: #091f00;
}
.excursion {
  position: relative;
  .icon {
    position: absolute;
    top: 50%;
    right: 50%;
    width: 90px;
    height: 90px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
    transform: translate(50%, -50%);
  }
}
@media (max-width: 500px) {
  .excursion {
    position: relative;
    .icon {
      width: 50px;
      height: 50px;
      svg {
        width: 18px;
      }
    }
  }
}
</style>
