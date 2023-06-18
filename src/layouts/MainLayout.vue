<template>
  <div>
    <div class="preloader" v-if="loading">
      <div class="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div v-else>
      <AppHeader v-if="$route.path !== '/'" />

      <div class="page__wrap">
        <router-view />
      </div>

      <AppFooter />
    </div>
  </div>
</template>

<script>
import AppFooter from "../components/layouts/default/app-footer/AppFooter";
import AppHeader from "../components/layouts/default/app-header/AppHeader";
import { mapMutations } from "vuex";

export default {
  name: "MainLayout",
  components: { AppHeader, AppFooter },
  data() {
    return {
      loading: true,
    };
  },
  methods: {
    ...mapMutations(["setWindowWidth"]),
    setWidth() {
      this.setWindowWidth(document.documentElement.clientWidth);
    },
  },

  mounted() {
    this.setWidth();
    window.addEventListener("resize", this.setWidth);
    this.$nextTick(() => {
      // DOM elementlari yuklandi
      console.log("DOM elementlari yuklandi");
      this.loading = false;
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.setWidth);
  },
};
</script>

<style lang="scss" scoped>
.page {
  &__wrap {
    min-height: calc(100vh - 402px);
  }
}
.preloader {
  background: linear-gradient(0deg, #f2f4f6, #f2f4f6),
    linear-gradient(0deg, #f9f9f9, #f9f9f9), #fff;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 9999999;
  display: flex;
  justify-content: center;
  align-items: center;
  .lds-roller {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    div {
      -webkit-animation: lds-roller-ad9c6d34 1.2s cubic-bezier(0.5, 0, 0.5, 1)
        infinite;
      animation: lds-roller-ad9c6d34 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      transform-origin: 40px 40px;
    }
    div:nth-child(1) {
      -webkit-animation-delay: -36ms;
      animation-delay: -36ms;
    }
    div:nth-child(2) {
      -webkit-animation-delay: -72ms;
      animation-delay: -72ms;
    }
    div:nth-child(3) {
      -webkit-animation-delay: -108ms;
      animation-delay: -108ms;
    }
    div:nth-child(4) {
      -webkit-animation-delay: -144ms;
      animation-delay: -144ms;
    }
    div:nth-child(5) {
      -webkit-animation-delay: -180ms;
      animation-delay: -180ms;
    }
    div:nth-child(6) {
      -webkit-animation-delay: -216ms;
      animation-delay: -216ms;
    }
    div:nth-child(7) {
      -webkit-animation-delay: -252ms;
      animation-delay: -252ms;
    }
    div:nth-child(8) {
      -webkit-animation-delay: -288ms;
      animation-delay: -288ms;
    }
    div::after {
      content: " ";
      display: block;
      position: absolute;
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: #00a795;
      margin: -4px 0 0 -4px;
    }

    div:nth-child(1)::after {
      top: 63px;
      left: 63px;
    }
    div:nth-child(2)::after {
      top: 68px;
      left: 56px;
    }
    div:nth-child(3)::after {
      top: 71px;
      left: 48px;
    }
    div:nth-child(4)::after {
      top: 72px;
      left: 40px;
    }
    div:nth-child(5)::after {
      top: 71px;
      left: 32px;
    }
    div:nth-child(6)::after {
      top: 68px;
      left: 24px;
    }
    div:nth-child(7)::after {
      top: 63px;
      left: 17px;
    }
    div:nth-child(8)::after {
      top: 56px;
      left: 12px;
    }
  }
}

@keyframes lds-roller-ad9c6d34 {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
