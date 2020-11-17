<template>
  <div>
    <app-header :funds="funds"></app-header>
    <div class="container-fluid">
      <div class="row">
        <div class="col-xs-12">
          <transition name="slide" mode="out-in">
            <router-view @funds="setFunds(spent)" :funds="funds"></router-view>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  methods: {},
  created() {
    this.$store.dispatch("initStocks");
  },
  components: { appHeader: Header },
};
</script>

<style>
.slide-enter-active {
  animation: slide-in 200ms ease-out forwards;
}
.slide-leave-active {
  animation: slide-out 200ms ease-out forwards;
}
@keyframes slide-in {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-30px);
    opacity: 0;
  }
}
</style>
