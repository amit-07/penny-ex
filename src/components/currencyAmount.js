import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export default (props) => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id={`outlined-number ${props.id}`}
          label={`Amount ${props.id}`}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          value={props.amount}
          variant="outlined"
          onChange={props.changeAmt}
        />
      </div>
    </form>
  );
}
