import React from 'react';
import Detail from "./components/Details/Detail";
import Main from "./components/Main/Main"
import { Grid } from "@material-ui/core"

import useStyles from "./styles";

const App = () => {

  const styles = useStyles();

  return (
    <div>
      <Grid container className={styles.grid}  spacing={2} alignItems="center" justify="center" style={{height: "95vh"}}>
        <Grid item xs={12} sm={4}>
          <Detail title="Income"/>
        </Grid>
        <Grid item xs={12} sm={3}>
         <Main />
        </Grid>
        <Grid item xs={12} sm={4}> 
          <Detail title="Expense" />
        </Grid>

      </Grid>

    </div>
  )
}

export default App;