import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {
  render() {
    const { stocks, removeStock } = this.props
    const stocksList = stocks.map(stock => {
      return <Stock key={stock.id} stock={stock} updatePortfolio={removeStock} />
    })
    return (
      <div>
        <h2>My Portfolio</h2>
        {stocks.length ? stocksList : null}
      </div>
    );
  }
}

export default PortfolioContainer;
