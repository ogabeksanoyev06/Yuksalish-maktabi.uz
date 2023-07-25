<template>
  <div>
    <header
      class="header greyBg"
      :class="{
        header__shadow: $route.path !== '/',
      }"
    >
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
                  {{ $t(item.title) }}
                </router-link>
              </li>
              <li class="header__menu-item">
                <a href="" class="header__menu-link">
                  {{ $t("Online test") }}
                </a>
              </li>
            </ul>
          </div>

          <div class="header__right">
            <div
              class="header__language"
              :class="isMobileMedium ? '' : 'mr-20'"
              @click="languageDropdown = !languageDropdown"
              v-on-click-outside:excludedClass="hideLanguageDropdown"
            >
              <div class="header__language-icon">
                <img src="/icons/globe.svg" alt="" />
              </div>
              <transition name="slide">
                <div class="header__dropdown" v-if="languageDropdown">
                  <ul class="header__dropdown-wrap shadowed radius overflow">
                    <li
                      class="header__dropdown-item"
                      @click="changeLanguage('uz')"
                    >
                      <span class="header__dropdown-link pa-10">
                        <AppText size="14" line-height="18" weight="700">
                          Uzbek
                        </AppText>
                      </span>
                    </li>

                    <li
                      class="header__dropdown-item"
                      @click="changeLanguage('ru')"
                    >
                      <span class="header__dropdown-link pa-10">
                        <AppText size="14" line-height="18" weight="700">
                          Russian
                        </AppText>
                      </span>
                    </li>
                    <li
                      class="header__dropdown-item"
                      @click="changeLanguage('en')"
                    >
                      <span class="header__dropdown-link pa-10">
                        <AppText size="14" line-height="18" weight="700">
                          English
                        </AppText>
                      </span>
                    </li>
                  </ul>
                </div>
              </transition>
            </div>
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
import i18n from "@/locales/i18n";
import { mapGetters } from "vuex";

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
          title: "O'qituvchilar",
          link: "/teachers",
        },
        {
          id: 5,
          title: "Media",
          link: "/media",
        },
        {
          id: 6,
          title: "Yangiliklar",
          link: "/news",
        },
        {
          id: 7,
          title: "Qabul",
          link: "/acceptance",
        },
        {
          id: 8,
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
      lang: "",
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
    showNavigationDrawer() {
      this.navigationDrawer = !this.navigationDrawer;
    },
    hideAccountDropdown() {
      this.accountDropdown = false;
    },
    hideLanguageDropdown() {
      this.languageDropdown = false;
    },
    changeLanguage(lang) {
      localStorage.setItem("lang", lang);
      i18n.locale = lang;
      this.lang = lang;
    },
  },
  async mounted() {},
  created() {
    if (!localStorage.getItem("lang")) {
      localStorage.setItem("lang", "uz");
    }
    i18n.locale = localStorage.getItem("lang");
    this.lang = localStorage.getItem("lang");
  },
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
