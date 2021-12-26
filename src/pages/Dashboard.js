import React, { useState } from "react";
import PropTypes from "prop-types";
import Portfolio from "./Portfolio";
import WalletsList from "../components/WalletsList";
import { Grid } from "@mui/material";

const Dashboard = props => {
  const [selectedWallet, setSelectedWallet] = useState([]);
  
  return (
    <Grid container>
      <Grid xs={8}>
        <WalletsList onChange={wallets => setSelectedWallet(wallets)} />
        <Portfolio walletId={selectedWallet} />
      </Grid>
      <Grid xs={4}>
        Siemka
      </Grid>
    </Grid>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
