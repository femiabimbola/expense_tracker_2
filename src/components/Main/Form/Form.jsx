import React from 'react';
import { TextField, Typography, Grid, Button, FormControl, Select, InputLabel, MenuItem } from "@material-ui/core";
import useStyles from 'styles';

const Form = () => {

  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography align="center" variant="subtitle2" gutterBottom>
          ....
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullwidth>
          <InputLabel> Type </InputLabel>
          <Select>
            <MenuItem value="Income"> Income </MenuItem>
            <MenuItem value="Expense"> Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  )
}

export default Form;