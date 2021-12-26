export const fetchStockInfo = (ticker) => {
  switch (ticker) {
    case 'EMIM LN ETF':
      return {
        price: 26.92,
        exchange: 'LSE',
        currency: "GBP",
      }
    case 'SGLN LN ETF':
      return {
        price: 26.16,
        exchange: 'LSE',
        currency: "GBP",
      }
    case 'ALIBABA GROUP HLDG ADR':
      return {
        price: 118.66,
        exchange: 'NYSE',
        currency: 'USD',
      }
    default:
      break;
  }
}

export const fetchExchangeRate = (from, to) => {
  switch (from) {
    case 'USD':
      return 4.08;
    case 'GBP': 
      return 5.46;
    case 'PLN':
      return 1;
    default:
      return 1
  }
}