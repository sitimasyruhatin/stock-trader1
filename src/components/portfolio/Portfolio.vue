<template>
  <div class="row">
    <stock v-for="stock in stocks" :key="stock.id" :stock="stock">
      {{ stock }}</stock
    >
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Stock from "./Stock.vue";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      stocks: "stockPortfolio",
    }),
  },
  components: { Stock },
};
</script>

<style>
</style>