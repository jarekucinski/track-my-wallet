import React from "react";
import StickyHeadTable from "../components/StickyHeadTable";

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
    id: 'averagePurchasePrice',
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
];

const currencies = {
  PLN: 1,
  USD: 4.11,
  GBP: 5.4328,
}

function createData(ticker, quantity, currentPrice, currency, averagePurchasePrice) {
  const quotation = quantity * currentPrice;
  const profitLoss = (quantity * currentPrice) / (quantity * averagePurchasePrice);
  const quotationPLN = quotation * currencies[currency];

  return { ticker, quantity, currentPrice, currency, averagePurchasePrice, quotation, profitLoss, quotationPLN };
}

const Portfolio = props => {
  const rows = props.stocks.map(item => createData(item.ticker, item.quantity, item.currentPrice, item.currency, item.averagePurchasePrice))

  return (
    <div>
      <StickyHeadTable columns={columns} rows={rows} />
    </div>
  );
};

Portfolio.propTypes = {};

export default Portfolio;
