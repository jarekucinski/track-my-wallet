import React from 'react'
import StickyHeadTable from '../components/StickyHeadTable'
import { getPortfolioView } from '../utils/api'
import { fetchExchangeRate, fetchStockInfo } from '../utils/stocksApiMock'

const USERS_CURRENCY = 'PLN'

const columns = [
  { id: 'ticker', label: 'Ticker', minWidth: 80 },
  { id: 'quantity', label: 'Quantity', minWidth: 50 },
  {
    id: 'currentPrice',
    label: 'Price',
    minWidth: 80,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'averagePrice',
    label: 'Average price',
    minWidth: 80,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'quotation',
    label: 'Quotation',
    minWidth: 80,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'profitLoss',
    label: 'Profit/Loss',
    minWidth: 80,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'quotationPLN',
    label: 'Quotation PLN',
    minWidth: 80,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'profitLossPLN',
    label: 'Profit/Loss PLN',
    minWidth: 80,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
]

function createRowData(
  ticker,
  quantity,
  currentPrice,
  currency,
  averagePrice,
  currencyConversionRate,
  averageExchangeRate
) {
  const quotation = quantity * currentPrice
  const profitLoss = (quantity * currentPrice) / (quantity * averagePrice)
  const quotationPLN = quotation * currencyConversionRate
  const profitLossPLN = (profitLoss * currencyConversionRate) / averageExchangeRate

  return { ticker, quantity, currentPrice, currency, averagePrice, quotation, profitLoss, quotationPLN, profitLossPLN }
}

const Portfolio = (props) => {
  const stocks = getPortfolioView()
  let rows = []

  for (const [ticker, value] of stocks.entries()) {
    const currentInfo = fetchStockInfo(ticker)
    const currencyConversionRate = fetchExchangeRate(value.currency, USERS_CURRENCY)
    rows.push(
      createRowData(
        ticker,
        value.quantity,
        currentInfo.price,
        value.currency,
        value.averagePrice,
        currencyConversionRate,
        value.averageExchangeRate
      )
    )
  }

  return (
    <div>
      <StickyHeadTable columns={columns} rows={rows} />
    </div>
  )
}

export default Portfolio
