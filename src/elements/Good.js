import React from 'react';
import propTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

function Good (props) {
  const {good, classes, onBuy} = props;
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} >
          {good.name}
        </Typography>
        <Typography variant="headline" component="h2" className={classes.pos}>
          {good.description}
        </Typography>
        <Typography color="textSecondary">
          {good.price}$
        </Typography>
      </CardContent>
      <CardActions>
        {good.quantity > 0 ? <Button size="small" onClick={() => onBuy(good.id, 1)}>Buy</Button>
          : <Typography color="textSecondary">sold</Typography>
        }

      </CardActions>
    </Card>
  );
}
const styles = {
  card: {
    minWidth: 275,
    margin: 15
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

Good.propTypes = {
  good: propTypes.object,
  classes: propTypes.object,
  onBuy: propTypes.func
};

export default withStyles(styles)(Good);
