import React from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

import Typography from './Typography';
import ActivityChart from './ActivityChart';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 3
  }
});

const ActivityCard = ({ classes }) => (
  <Paper className={classes.paper}>
    <Typography variant="headline" component="h2">
      Activity
    </Typography>
    <ActivityChart />
  </Paper>
);

export default withStyles(styles)(ActivityCard);
