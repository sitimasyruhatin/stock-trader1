<template>
  <div class="col-xs-12 col-md-4">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{ stock.name }}
          <small>(Price: {{ stock.price }}</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <div class="form-group" :class="{ 'has-error': insufficientFunds }">
            <input
              type="number"
              class="form-control"
              placeholder="Quantity"
              v-model.number="quantity"
            />
            {{ disabled }}
          </div>
        </div>
        <div class="pull-right">
          <button
            class="btn btn-success"
            @click="buyStock"
            :disabled="
              insufficientFunds || quantity <= 0 || !Number.isInteger(quantity)
            "
          >
            {{ insufficientFunds ? "Insufficient Funds" : "Buy" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0,
      disabled: "",
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    insufficientFunds() {
      return this.quantity * this.stock.price > this.funds;
    },
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };
      this.$store.dispatch("buyStock", order);
      console.log(order);
      console.log(typeof this.quantity);
      this.quantity = 0;
    },
  },
  watchers: {
    insufficientFunds() {
      console.log(this.insufficientFunds);
    },
  },
};
</script>

<style>
</style>