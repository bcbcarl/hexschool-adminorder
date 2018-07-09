import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import BaseFaIcon from '../internal/BaseFaIcon';
import Typography from './Typography';

const OrderItem = ({ image, name, time, customer }) => (
  <Card style={{ display: 'flex' }}>
    <CardMedia style={{ width: '100px', height: '100px' }} image={image} />
    <CardContent style={{ padding: '0 1rem' }}>
      <Typography variant="subheading" component="h3">
        {name}
      </Typography>
      <div>
        <span style={{ marginRight: '0.5rem' }}>
          <BaseFaIcon icon="clock" size="xs" />
        </span>
        {time}
      </div>
      <div>
        <span style={{ marginRight: '0.5rem' }}>
          <BaseFaIcon icon="male" />
        </span>
        {customer}
      </div>
    </CardContent>
  </Card>
);

export default OrderItem;
