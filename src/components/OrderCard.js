import React from 'react';
import Paper from '@material-ui/core/Paper';

import Typography from './Typography';
import OrderItem from './OrderItem';

import vintageTshirtImg from '../assets/vintage-tshirt.jpg';
import cowboyJacketImg from '../assets/cowboy-jacket.jpg';
import coachCoatImg from '../assets/coach-coat.jpg';

const OrderCard = () => (
  <Paper style={{ padding: '1rem 2rem 2rem 2rem' }}>
    <Typography variant="headline" component="h2">
      Latest Orders
    </Typography>
    <OrderItem
      image={vintageTshirtImg}
      name="Vintage T-shirt"
      time="2018/6/13 13:42"
      customer="Belle Willis"
    />
    <hr />
    <OrderItem
      image={cowboyJacketImg}
      name="Cowboy Jacket"
      time="2018/6/13 10:45"
      customer="Adrian Cummings"
    />
    <hr />
    <OrderItem
      image={coachCoatImg}
      name="Coach Coat"
      time="2018/6/13 8:26"
      customer="Lura Holland"
    />
  </Paper>
);

export default OrderCard;
