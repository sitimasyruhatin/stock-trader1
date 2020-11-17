import Vue from 'vue';

export const loadData = ({ commit }) => {
  Vue.http.get('data.json')
    .then(response => response.json())
    .then(data => {
      if (data) {
        console.log(data);
        const stocks = data.stocks;
        const funds = data.funds;
        const stockPortfolio = data.stockPortfolio;

        const portfolio = {
          stocks, funds, stockPortfolio
        }

        commit('SET_STOCKS', stocks);
        commit('SET_PORTFOLIO', portfolio);
      }
    })
}