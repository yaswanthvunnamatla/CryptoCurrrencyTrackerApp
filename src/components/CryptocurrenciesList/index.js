import {Component} from 'react'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  renderTable = () => (
    <div className="list-header">
      <p className="list-coin-type-heading">Coin Type</p>
      <div className="usd-and-euro-values-container">
        <p className="list-coin-value-heading">USD</p>
        <p className="list-coin-value-heading">EURO</p>
      </div>
    </div>
  )

  renderCyrptocurrencyTable = () => {
    const {currencyData} = this.props

    return (
      <div className="cryptocurrencies-list-container">
        {this.renderTable()}
        <ul className="cryptocurrencies-list">
          {currencyData.map(eachCryptocurrency => (
            <CryptocurrencyItem
              key={eachCryptocurrency.id}
              cryptocurrencyDetails={eachCryptocurrency}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="cryptocurrencies-container">
        <h1 className="heading">CryptoCurrency Tracker</h1>
        <img
          className="cryptocurrency-img"
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        {this.renderCyrptocurrencyTable()}
      </div>
    )
  }
}

export default CryptocurrenciesList
