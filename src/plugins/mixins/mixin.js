import Vue from "vue";
import { mapGetters } from "vuex";
import { baseURL } from "../../service/apiService";

Vue.mixin({
  data() {
    return {
      baseURL,
    };
  },
  computed: {
    ...mapGetters([]),
  },
  methods: {
    successNotification(message) {
      this.$notify({
        group: "admin",
        title: "Muvaffaqiyatli!",
        text: message,
        closeOnClick: true,
        duration: 10000,
      });
    },
    errorNotification(message, title = "Hatolik yuz berdi") {
      this.$notify({
        group: "admin",
        title: title,
        text: message,
        type: "error",
        closeOnClick: true,
        duration: 10000,
      });
    },
  },
});
