import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

import Typography from './Typography';
import Card from './Card';
import ActivityCard from './ActivityCard';
import TransactionCard from './TransactionCard';
import OrderCard from './OrderCard';

const TotalRevenueCard = () => (
  <Card
    icon="hand-holding-usd"
    primary="Total Revenue"
    secondary="54,540"
    color="#7ed321"
  />
);

const TotalCostCard = () => (
  <Card icon="boxes" primary="Total Cost" secondary="12,660" color="#d0021b" />
);

const NetIncomeCard = () => (
  <Card
    icon="money-bill"
    primary="Net Income"
    secondary="41,880"
    color="#4a90e2"
  />
);

const Main = () => {
  const Wrapper = styled.main`
    margin: 2rem;
  `;

  return (
    <Wrapper>
      <Typography variant="headline" transform="uppercase" component="h1">
        Overview
      </Typography>
      <Grid container spacing={16}>
        <Grid item xs={4}>
          <TotalRevenueCard />
        </Grid>
        <Grid item xs={4}>
          <TotalCostCard />
        </Grid>
        <Grid item xs={4}>
          <NetIncomeCard />
        </Grid>
        <Grid item xs={12}>
          <ActivityCard />
        </Grid>
        <Grid item xs={6}>
          <TransactionCard />
        </Grid>
        <Grid item xs={6}>
          <OrderCard />
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default Main;
