const state = {
  funds: 10000,
  myStocks: []
}

const mutations = {
  'BUY_STOCK'(state, { stockId, quantity, stockPrice }) {
    const record = state.myStocks.find(el => el.id === stockId)
    if (record) {
      record.quantity += quantity

      console.log(typeof record.quantity);
    }
    else {
      state.myStocks.push({
        id: stockId,
        quantity: quantity,
        price: stockPrice
      })
    }
    state.funds -= stockPrice * quantity;
  },
  'SELL_STOCK'(state, { stockId, quantity, stockPrice }) {
    const record = state.myStocks.find(element => element.id == stockId);
    if (record.quantity > quantity) {
      record.quantity -= quantity;
    } else {
      state.myStocks.splice(state.myStocks.indexOf(record), 1);
    }
    state.funds += stockPrice * quantity;
  },
  'SET_PORTFOLIO'(state, portfolio) {
    state.funds = portfolio.funds;
    state.myStocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : [];
    console.log(state.myStocks);
  }
}

const actions = {
  sellStock({ commit }, order) {
    commit('SELL_STOCK', order);
  }
}

const getters = {
  stockPortfolio(state, getters) {
    return state.myStocks.map(stock => {
      const record = getters.stocks.find(element => element.id == stock.id);
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price
      }
    })
  },
  funds(state) {
    return state.funds
  }
}

export default { state, mutations, actions, getters };
