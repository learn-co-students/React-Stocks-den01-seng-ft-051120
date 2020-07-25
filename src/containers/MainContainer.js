import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  state = {
    stocks: [],
    portfolio: [],
    filter: ""
  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
      .then(response => response.json())
      .then(stocks => this.setState({ stocks }))
  }

  addStock = (stock) => {
    const updatedStocks = this.state.stocks.filter(oldStock => {
      return oldStock !== stock
    })
    this.setState({
      stocks: updatedStocks,
      portfolio: [...this.state.portfolio, stock]
    })
  }

  removeStock = (stock) => {
    const updatedStocks = this.state.portfolio.filter(oldStock => {
      return oldStock !== stock
    })

    this.setState({
      stocks: [...this.state.stocks, stock],
      portfolio: updatedStocks
    })
  }

  sortStocksAlpha = e => {
    console.log('sort')
    const alpha = this.state.stocks.sort((a, b) => {
      if (a.ticker < b.ticker) {
        return -1
      }
      if (a.ticker > b.ticker) {
        return 1
      }
      return 0
    })
    this.setState({
      ...this.state,
      stocks: alpha
    })
  }

  sortStocksPrice = e => {
    const price = this.state.stocks.sort((a, b) => {
      return a.price - b.price
    })
    this.setState({
      ...this.state,
      stocks: price
    })
  }

  filterStocks = e => {
    const filterString = e.target.value
    this.setState({
      ...this.state,
      filter: filterString
    })
  }

  render() {
    const { stocks, portfolio, filter } = this.state

    const filteredStocks = (filter) => {
      if (filter !== "") {
        return stocks.filter(stock => {
          return stock.type === filter
        })
      }
      return stocks
    }
    return (
      <div>
        <SearchBar alpha={this.sortStocksAlpha} price={this.sortStocksPrice} filter={this.filterStocks} />

        <div className="row">
          <div className="col-8">

            <StockContainer stocks={filteredStocks(filter)} addStock={this.addStock} />

          </div>
          <div className="col-4">

            <PortfolioContainer stocks={portfolio} removeStock={this.removeStock} />

          </div>
        </div>
      </div>
    );
  }

}

export default MainContainer;
