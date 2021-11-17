import React, { useState } from "react";
import PropTypes from "prop-types";
import Portfolio from "./Portfolio";
import WalletsList from "../components/WalletsList";
import { Grid } from "@mui/material";
import { DATABASE } from "../utils/mockDatabase";

const Dashboard = props => {
  const [stocks, setStocks] = useState(DATABASE.stocks);
  const [selectedWallets, setSelectedWallets] = useState([]);
  
  const filteredStocks = stocks.filter(stock => !selectedWallets.length || selectedWallets.map(wallet => wallet.key).includes(stock.walletId));

  return (
    <Grid container>
      <Grid xs={8}>
        <WalletsList onChange={wallets => setSelectedWallets(wallets)} />
        <Portfolio stocks={filteredStocks} />
      </Grid>
      <Grid xs={4}>
        Siemka
      </Grid>
    </Grid>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
