import React from 'react';
import Paper from '@material-ui/core/Paper';

import BaseFaIcon from '../internal/BaseFaIcon';
import Typography from './Typography';

const TransactionCard = () => (
  <Paper>
    <Typography variant="headline" component="h2">
      Transaction Website
    </Typography>
    <ul>
      <li>
        <BaseFaIcon icon={['fab', 'facebook']} size="lg" />
        facebook.com
        <BaseFaIcon icon="arrow-up" />
        20%
      </li>
      <li>
        <BaseFaIcon icon={['fab', 'google']} size="lg" />
        google.com
        <BaseFaIcon icon="arrow-up" />
        12%
      </li>
      <li>
        <BaseFaIcon icon="shopping-bag" size="lg" />
        shopify.com
        <BaseFaIcon icon="arrow-down" />
        15%
      </li>
      <li>
        <BaseFaIcon icon={['fab', 'wordpress']} size="lg" />
        wordpress.com
        <BaseFaIcon icon="arrow-down" />
        30%
      </li>
    </ul>
  </Paper>
);

export default TransactionCard;
