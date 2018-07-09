import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';

import BaseFaIcon from '../internal/BaseFaIcon';
import Typography from './Typography';

import vintageTshirtImg from '../assets/vintage-tshirt.jpg';
import cowboyJacketImg from '../assets/cowboy-jacket.jpg';
import coachCoatImg from '../assets/coach-coat.jpg';

const OrderCard = () => (
  <Paper>
    <Typography variant="headline" component="h2">
      Latest Orders
    </Typography>
    <ul>
      <li>
        <Typography variant="subheading" component="h3">
          Vintage T-shirt
        </Typography>
        <CardMedia
          style={{ width: '100px', height: '100px' }}
          image={vintageTshirtImg}
          title="Live from space album cover"
        />
        <div>
          <BaseFaIcon icon="clock" size="sm" />
          2018/6/13 13:42
        </div>
        <div>
          <BaseFaIcon icon="male" />
          Belle Willis
        </div>
      </li>
      <li>
        <Typography variant="subheading" component="h3">
          Cowboy Jacket
        </Typography>
        <CardMedia
          style={{ width: '100px', height: '100px' }}
          image={cowboyJacketImg}
          title="Live from space album cover"
        />
        <div>
          <BaseFaIcon icon="clock" size="sm" />
          2018/6/13 10:45
        </div>
        <div>
          <BaseFaIcon icon="male" />
          Adrian Cummings
        </div>
      </li>
      <li>
        <Typography variant="subheading" component="h3">
          Coach Coat
        </Typography>
        <CardMedia
          style={{ width: '100px', height: '100px' }}
          image={coachCoatImg}
          title="Live from space album cover"
        />
        <div>
          <BaseFaIcon icon="clock" size="sm" />
          2018/6/13 8:26
        </div>
        <div>
          <BaseFaIcon icon="male" />
          Lura Holland
        </div>
      </li>
    </ul>
  </Paper>
);

export default OrderCard;
