import { DATABASE } from './mockDatabase'

export const queryPortfolio = () => {
  return DATABASE.transactionsTable.filter((transaction) => !transaction.sellDate)
}

const groupTransactions = (transactions) => {
  const tickers = new Map()
  transactions.forEach((transaction) => {
    if (tickers.has(transaction.ticker)) {
      const transactionsHistory = tickers.get(transaction.ticker)
      tickers.set(transaction.ticker, [...transactionsHistory, transaction])
    } else {
      tickers.set(transaction.ticker, [transaction])
    }
  })

  return tickers
}
const addUpTransactions = (tickersMap) => {
  const portfolioMap = new Map()
  for (const [ticker, transactionHistory] of tickersMap.entries()) {
    const count = transactionHistory.length
    let totalCost = 0
    let sumExchangeRate = 0
    let currency
    transactionHistory.forEach((transaction) => {
      totalCost += transaction.buyPrice
      sumExchangeRate += transaction.buyExchangeRate
      currency = transaction.currency
    })
    const averagePrice = totalCost / count
    const averageExchangeRate = sumExchangeRate / count
    portfolioMap.set(ticker, { transactionHistory, quantity: count, averagePrice, averageExchangeRate, currency })
  }
  return portfolioMap
}

export const getPortfolioView = () => {
  const transactions = queryPortfolio()
  const tickers = groupTransactions(transactions)
  const entries = addUpTransactions(tickers)

  return entries
}
