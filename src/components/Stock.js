import React from 'react'

const Stock = (props) => {
  const { name, price, ticker } = props.stock
  return (
    <div>

      <div className="card" onClick={() => props.updatePortfolio(props.stock)}>
        <div className="card-body">
          <h5 className="card-title">
            {name}
          </h5>
          <p className="card-text">
            {ticker}: {price}
          </p>
        </div>
      </div>


    </div>
  );
}
export default Stock
