import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {
  render() {
    const { stocks, addStock } = this.props
    const stocksList = stocks.map(stock => {
      return <Stock key={stock.id} stock={stock} updatePortfolio={addStock} />
    })
    return (
      <div>
        <h2>Stocks</h2>
        {stocks.length ? stocksList : null}
      </div>
    );
  }

}

export default StockContainer;
