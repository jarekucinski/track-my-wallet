const copyObject = (object, n) => {
  return new Array(n).fill(object)
}

export const DATABASE = {
  wallets: [
    { key: 1, label: 'Retirement' },
    { key: 2, label: 'Longterm' },
    { key: 3, label: 'Speculative' },
    { key: 4, label: 'Model' },
  ],
  transactionsTable: [
    ...copyObject(
      {
        ticker: 'EMIM LN ETF',
        walletId: 1,
        buyPrice: 27.35,
        buyExchangeRate: 5.192,
        buyDate: '08/06/21 15:52:57',
        buyComission: 0.0039,
        sellPrice: null,
        sellDate: null,
        sellExchangeRate: null,
        sellComission: null,
        currency: 'GBP',
      },
      35
    ),
    ...copyObject(
      {
        ticker: 'SGLN LN ETF',
        walletId: 1,
        buyPrice: 24.03,
        buyExchangeRate: 5.3471,
        buyDate: '12/03/21 15:01:09',
        buyComission: 0.0039,
        sellPrice: null,
        sellDate: null,
        sellExchangeRate: null,
        sellComission: null,
        currency: 'GBP',
      },
      40
    ),
    ...copyObject(
      {
        ticker: 'ALIBABA GROUP HLDG ADR',
        walletId: 1,
        buyPrice: 156.235,
        buyExchangeRate: 4.08,
        buyDate: '01/12/2021 16:22:58',
        buyComission: 0.0039,
        sellPrice: null,
        sellDate: 118.66,
        sellExchangeRate: null,
        sellComission: 0.0039,
        currency: 'USD',
      },
      5
    ),
    ...copyObject(
      {
        ticker: 'ALIBABA GROUP HLDG ADR',
        walletId: 1,
        buyPrice: 156.235,
        buyExchangeRate: 4.08,
        buyDate: '01/12/2021 16:22:58',
        buyComission: 0.0039,
        sellPrice: null,
        sellDate: null,
        sellExchangeRate: null,
        sellComission: null,
        currency: 'USD',
      },
      15
    ),
  ],
}
