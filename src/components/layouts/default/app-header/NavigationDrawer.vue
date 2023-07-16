<template>
  <div class="navigation-drawer">
    <div class="mobile-logo">
      <img src="/images/logo.png" alt="" class="w-100" />
    </div>
    <ul class="mobile-menu-wrap" v-on-click-outside:excludedClass="hideMenus">
      <li
        v-for="(item, index) in menu"
        :key="index"
        @click="clickMenu(item.link)"
        class="mobile-menu__item"
      >
        <span class="mobile-menu__link">
          {{ item.title }}
        </span>
      </li>
    </ul>
    <div class="footer__socials-wrap">
      <a
        href="https://www.facebook.com/yuksalishmaktablari"
        target="_blank"
        class="footer__socials-item"
      >
        <img src="/icons/facebook.svg" alt="" />
      </a>

      <a
        href="https://www.instagram.com/yuksalish_maktablari/"
        class="footer__socials-item"
        target="_blank"
      >
        <img src="/icons/instagram.svg" alt="" />
      </a>

      <a
        href="https://t.me/yuksalish_maktablari"
        class="footer__socials-item"
        target="_blank"
      >
        <img src="/icons/telegram.svg" alt="" />
      </a>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "NavigationDrawer",
  components: {},
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
    };
  },
  computed: {
    ...mapGetters([]),
  },
  methods: {
    ...mapActions([]),
    clickMenu(link) {
      this.$emit("closeNavigationDrawer");
      this.$router.push({ path: link });
    },

    hideMenus() {
      this.activeId = false;
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
@import "../../../../assets/styles/abstracts/variables";

.navigation-drawer {
  position: fixed;
  top: 0;
  left: 0;
  max-width: 600px;
  width: 100%;
  height: 100vh;
  background: rgb(8, 15, 70);
  z-index: 50;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 20px;

  &__close {
    background-color: #00d06c;
  }
}
.mobile-logo {
}
.mobile-menu {
  &-wrap {
    width: 100%;
    flex: 1;
  }
  &__item {
    margin-bottom: 10px;
    border-radius: 10px;
    background-color: rgba(49, 101, 203, 0.1);
    cursor: pointer;
  }

  &__link {
    font-size: 16px;
    font-family: "Gilroy", sans-serif;
    font-weight: 700;
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 10px;
    transition: 0.3s;
    color: #fff;

    &:hover {
      // color: $color-main;
    }
  }
}

.mobile-submenu {
  padding: 0 0 10px;

  &__item {
  }

  &__link {
    font-size: 14px;
    font-weight: 700;
    display: flex;
    width: 100%;
    padding: 10px 20px;
    transition: 0.3s;

    &:hover {
      color: $color-main;
    }
  }
}

@media (max-width: 768px) {
  .navigation-drawer {
    max-width: 85% !important;
  }
}
</style>
