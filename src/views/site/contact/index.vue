<template>
  <section class="section" style="padding-top: 60px">
    <div class="container">
      <app-text
        :size="isMobile ? 26 : 64"
        :line-height="isMobile ? 30 : 78"
        weight="500"
        class="mb-30 mx-auto text-center"
        maxWidth="680"
        data-aos="fade-up"
        data-aos-duration="500"
      >
        Aloqa bo‘limi
      </app-text>
      <app-text
        :size="isMobile ? 16 : 20"
        :line-height="isMobile ? 22 : 32"
        weight="200"
        class="mb-30 mx-auto text-center color-trans-04"
        maxWidth="540"
        data-aos="fade-up"
        data-aos-duration="700"
      >
        Bizga aloqaga chiqing va ozingiz qiziqtiradigan savollarga javob oling;
      </app-text>
      <div data-aos="fade-up" data-aos-duration="900">
        <app-button
          theme="main"
          :font-size="isMobileSmall ? 12 : isMobile ? 14 : 16"
          :sides="isMobileSmall ? '15' : '20'"
          class="mb-30 mx-auto d-flex align-center"
          :height="isMobileSmall ? '40' : '50'"
        >
          <span :class="isMobileSmall ? '' : 'mr-10'"> QABULGA YOZILISH </span>
          <img src="/icons/angle-right.svg" alt="" />
        </app-button>
      </div>
    </div>
    <div style="background: #130024" :class="isMobile ? 'py-30' : 'py-60'">
      <div class="container">
        <app-text
          :size="isMobile ? 22 : 32"
          :line-height="isMobile ? 28 : 44"
          weight="500"
          class="color-violet"
          max-width="500"
          :class="isMobile ? 'mb-20' : 'mb-40'"
          data-aos="fade-right"
        >
          Biz bilan farzandingizni kelajagini mustahkam quring
        </app-text>
        <div class="location">
          <div
            style="background-color: #ececec; border-radius: 16px"
            class="pa-20"
            v-for="(item, i) in 3"
            :key="i"
          >
            <app-text
              :size="isMobile ? 16 : 24"
              :line-height="isMobile ? 22 : 32"
              weight="600"
              class="mb-20"
            >
              Toshkent
            </app-text>
            <app-text
              :size="16"
              :line-height="16"
              weight="400"
              class="mb-15 d-flex align-center"
            >
              <img src="/svg/chart.svg" alt="" class="mr-10" />
              Dush - Shan, 09:00 - 18:00
            </app-text>
            <app-text
              :size="16"
              :line-height="16"
              weight="400"
              class="mb-15 d-flex align-center"
            >
              <img src="/svg/chart.svg" alt="" class="mr-10" />
              +998 95 334 14 42
            </app-text>
            <app-text
              :size="16"
              :line-height="16"
              weight="400"
              class="mb-15 d-flex align-center"
            >
              <img src="/svg/chart.svg" alt="" class="mr-10" />
              yuksalish.t@gmail.com
            </app-text>
            <app-text
              :size="16"
              :line-height="16"
              weight="400"
              class="d-flex align-center"
            >
              <img src="/svg/chart.svg" alt="" class="mr-10" />
              Toshkent, Ozbekiston
            </app-text>
          </div>
        </div>
      </div>
    </div>
    <div
      style="background-color: #660448"
      :class="isMobileSmall ? 'py-30' : isMobile ? 'py-60' : 'py-100'"
    >
      <div class="container">
        <div class="section__top">
          <app-text
            :size="isMobile ? 24 : 32"
            :line-height="isMobile ? 28 : 44"
            weight="500"
            max-width="330"
            class="color-red"
            data-aos="fade-up"
          >
            Biz haqimizda ko‘proq ma’lumot
          </app-text>
          <div class="section__top-details" data-aos="fade-up">
            <app-text
              :size="isMobile ? 16 : 24"
              :line-height="isMobile ? 24 : 32"
              weight="400"
              max-width="550"
              class="color-red mb-20"
            >
              Maktab haqida barcha ma’lumotlarni pdf katalog orqali oling
            </app-text>
            <router-link class="section__top-link" to="/">
              <AppButton
                theme="red"
                :font-size="isMobileSmall ? 12 : isMobile ? 14 : 16"
                sides="20"
                :height="isMobileSmall ? '40' : '50'"
              >
                <span class="mr-10">PDF KATALOG</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.44 8.8999C20.04 9.2099 21.51 11.0599 21.51 15.1099V15.2399C21.51 19.7099 19.72 21.4999 15.25 21.4999H8.73998C4.26998 21.4999 2.47998 19.7099 2.47998 15.2399V15.1099C2.47998 11.0899 3.92998 9.2399 7.46998 8.9099"
                    stroke="#660448"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 2V14.88"
                    stroke="#660448"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.3499 12.6499L11.9999 15.9999L8.6499 12.6499"
                    stroke="#660448"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </AppButton>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="py-60">
      <div class="container">
        <app-text
          :size="isMobile ? 22 : 32"
          :line-height="isMobile ? 28 : 44"
          weight="500"
          :class="isMobile ? 'mb-20' : 'mb-40'"
          data-aos="fade-right"
        >
          Kop beriladigan savollar
        </app-text>
        <accordion>
          <accordion-item
            class="m-20"
            v-for="(sectionContent, sectionContentIndex) in list"
            :key="sectionContentIndex"
          >
            <template slot="accordion-trigger">
              <div
                class="question__accordion-header"
                @click="listItem(sectionContent.id)"
              >
                <app-text
                  :size="isMobile ? 20 : 24"
                  :line-height="isMobile ? 24 : 32"
                  weight="500"
                >
                  {{ sectionContent.name }}
                </app-text>
              </div>
              <img src="/icons/plus.svg" alt="" />
            </template>
            <template slot="accordion-content">
              <div
                style="padding: 15px 0"
                v-for="(content, contentIndex) in sectionContent.contentList"
                :key="contentIndex"
              >
                <div class="question__accordion-item">
                  <app-text
                    :size="isMobile ? 16 : 18"
                    :line-height="isMobile ? 22 : 26"
                    weight="400"
                    max-width="760"
                    class="color-trans-04"
                  >
                    {{ content.name }}
                  </app-text>
                </div>
              </div>
            </template>
          </accordion-item>
        </accordion>
      </div>
    </div>
  </section>
</template>
<script>
import AppButton from "@/components/shared-components/AppButton.vue";
import Accordion from "@/components/shared-components/Accordion.vue";
import AccordionItem from "@/components/shared-components/AccordionItem.vue";
export default {
  name: "AppContact",
  components: { AppButton, Accordion, AccordionItem },
  data() {
    return {
      list: [
        {
          id: 0,
          name: "Qoshimcha kurslar bormi?",
          contentList: [
            {
              name: "Darslarimiz haftada 5 kun yani Dushambadan Jumagacha bolib otadi. Darslarimiz ertalab soat 9:00 dan 17:30 gacha bolgan vaqt oraligida bolib otadi",
            },
          ],
        },
        {
          id: 1,
          name: "Qoshimcha kurslar bormi?",
          contentList: [
            {
              name: "Darslarimiz haftada 5 kun yani Dushambadan Jumagacha bolib otadi. Darslarimiz ertalab soat 9:00 dan 17:30 gacha bolgan vaqt oraligida bolib otadi",
            },
          ],
        },
        {
          id: 2,
          name: "Qoshimcha kurslar bormi?",
          contentList: [
            {
              name: "Darslarimiz haftada 5 kun yani Dushambadan Jumagacha bolib otadi. Darslarimiz ertalab soat 9:00 dan 17:30 gacha bolgan vaqt oraligida bolib otadi",
            },
          ],
        },
      ],
      activeListItem: null,
    };
  },
  methods: {
    listItem(id) {
      this.activeListItem == id;
    },
  },
};
</script>
<style lang="scss" scoped>
.location {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}

@media (max-width: 991px) {
  .location {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 576px) {
  .location {
    grid-template-columns: 1fr;
  }
}
</style>
