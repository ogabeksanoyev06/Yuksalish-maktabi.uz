<template>
  <div>
    <header class="header">
      <div class="container">
        <div class="header__inner">
          <div class="header__left">
            <router-link to="/" class="logo">
              <img src="/svg/logo1.svg" alt="logo" />
            </router-link>
            <ul class="header__menu" v-if="!isDesktopMedium">
              <li
                class="header__menu-item"
                v-for="(item, index) in menu"
                :key="index"
              >
                <router-link :to="item.link" class="header__menu-link">
                  {{ item.title }}
                </router-link>
              </li>
            </ul>
          </div>

          <div class="header__right">
            <a
              href="tel:+998951010600"
              style="
                font-size: 14px;
                font-weight: 400;
                color: #000;
                position: relative;
                line-height: 24px;
                transition: 0.3s;
                cursor: pointer;
              "
              v-if="!isDesktopMedium"
            >
              +998 (95) 101 06 00
            </a>
            <AppButton
              v-if="isDesktopMedium"
              sides="10"
              class="hamburger__menu"
              @click="showNavigationDrawer"
            >
              <img src="/icons/hamburger.svg" alt="" />
            </AppButton>
          </div>
        </div>
      </div>
    </header>
    <transition name="slide-right">
      <NavigationDrawer
        v-if="navigationDrawer"
        @closeNavigationDrawer="closeDrawer"
      />
    </transition>

    <transition name="fade">
      <div
        class="overlay"
        v-if="navigationDrawer"
        @click="navigationDrawer = false"
      ></div>
    </transition>
  </div>
</template>

<script>
import "./header.scss";
import NavigationDrawer from "./NavigationDrawer";
import AppButton from "../../../shared-components/AppButton";
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "AppHeader",
  components: { AppButton, NavigationDrawer },
  data() {
    return {
      activeId: null,
      subActiveId: null,
      menu: [
        {
          id: 1,
          title: "Bosh sahifa",
          link: "/",
        },
        {
          id: 2,
          title: "Maktab haqida",
          link: "/about-us",
        },
        {
          id: 3,
          title: "O'quv dasturi",
          link: "/study-program",
        },
        {
          id: 4,
          title: "Qabul",
          link: "/acceptance",
        },
        {
          id: 4,
          title: "Aloqa",
          link: "/contact",
        },
      ],
      search: "",
      searchPackage: [],
      navigationDrawer: false,
      showDropdown: false,
      accountDropdown: false,
      languageDropdown: false,
    };
  },
  props: {
    headerShadow: {
      type: Boolean,
      default: false,
    },
    headerGreyBg: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapGetters([]),
  },
  methods: {
    closeDrawer() {
      this.navigationDrawer = false;
    },
    ...mapMutations([]),
    ...mapActions([]),
    showNavigationDrawer() {
      this.navigationDrawer = !this.navigationDrawer;
    },
    hideAccountDropdown() {
      this.accountDropdown = false;
    },
    hideLanguageDropdown() {
      this.languageDropdown = false;
    },
  },
  async mounted() {},
  watch: {},
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #ffffff96;
  z-index: 49;
}
</style>
