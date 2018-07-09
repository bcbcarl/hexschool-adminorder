import React from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

import BaseFaIcon from '../internal/BaseFaIcon';
import Typography from './Typography';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 3,
    textAlign: 'center'
  }
});

const Card = ({ classes, icon, primary, secondary, color }) => {
  const primaryIcon = icon ? (
    <span style={{ marginRight: '0.5rem' }}>
      <BaseFaIcon icon={icon} size="lg" />
    </span>
  ) : null;

  return (
    <Paper className={classes.paper}>
      <Typography variant="subheading" transform="uppercase" component="h2">
        {primaryIcon}
        {primary}
      </Typography>
      <Typography variant="display1" color={color} component="span">
        {secondary}
      </Typography>
    </Paper>
  );
};

export default withStyles(styles)(Card);
