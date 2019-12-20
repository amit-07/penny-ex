import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';

const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: '#03bff7',
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      backgroundColor: '#03bff7'
    },
  },
}))(InputBase);

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default (props)  => {
  const classes = useStyles();
  return (
    <div>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="currency">Currency</InputLabel>
        <NativeSelect
          id="currency"
          value={props.currency}
          onChange={props.changeCurr}
          input={<BootstrapInput />}
        >
          {
            props.currencies.map((item,idx) => {
              return <option key="idx" value={item}>{item}</option>
            })
          }
        </NativeSelect>
      </FormControl>
    </div>
  );
}
