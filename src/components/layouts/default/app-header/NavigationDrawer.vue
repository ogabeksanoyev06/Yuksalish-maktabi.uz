<template>
  <div class="navigation-drawer"></div>
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
          title: "Yo'nalishlar",
          link: "/categories",
        },
        {
          id: 2,
          title: "Fanlar",
          link: "/subjects",
        },
        {
          id: 3,
          title: "Konkurs natijalari",
          link: "/top-50",
        },
        {
          id: 4,
          title: "Testlar",
          link: "/choose-test",
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
    clickMenu() {
      this.$emit("closeNavigationDrawer");
    },
    hideMenus() {
      this.activeId = false;
    },
    prepareSkillCourseTree(data, menu) {
      data.forEach((d) => {
        let parentMenuModel = {
          id: d.id,
          title: d.name,
          link: "",
          children: [],
        };
        let childrenMenus = [];
        if (d.courseList) {
          d.courseList.forEach((children) => {
            let childrenMenuModel = {
              id: children.id,
              title: children.name,
              link: "",
            };
            childrenMenus.push(childrenMenuModel);
          });
          parentMenuModel.children = childrenMenus;
        }
        menu.push(parentMenuModel);
      });
    },
  },
  async mounted() {
    if (this.userIsLoggedOn) {
      await this.getUser();
    }
    await this.getSkillTree();
    await this.getSubjectTree();
    this.menu[0].children = [];
    this.prepareSkillCourseTree(this.skillTree, this.menu[0].children);
    this.menu[1].children = [];
    this.prepareSkillCourseTree(this.subjectTree, this.menu[1].children);
  },
  watch: {
    skillTree() {
      this.menu[0].children = [];
      this.prepareSkillCourseTree(this.skillTree, this.menu[0].children);
    },
    subjectTree() {
      this.menu[1].children = [];
      this.prepareSkillCourseTree(this.subjectTree, this.menu[1].children);
    },
    async isLoggedOn() {
      if (this.userIsLoggedOn) {
        await this.getUser();
      }
    },
  },
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
  background: linear-gradient(279.37deg, #008ae4 0%, #a6dcff 158.68%);
  z-index: 100;
  overflow-y: auto;
  padding: 30px;

  &__close {
    background-color: #00d06c;
  }

  .header__search {
    margin-right: 0;

    .input__holder {
      max-width: 100%;
    }
  }
}

.mobile-menu {
  &__link {
    background-color: white;
    margin-bottom: 10px;
    border-radius: 10px;
    font-size: 16px;
    font-family: "Inter", sans-serif;
    font-weight: 700;
    display: flex;
    width: 100%;
    padding: 10px;
    transition: 0.3s;

    &:hover {
      color: $color-main;
    }
  }
}

@media (max-width: 768px) {
  .navigation-drawer {
    max-width: 100% !important;
  }
}
</style>
