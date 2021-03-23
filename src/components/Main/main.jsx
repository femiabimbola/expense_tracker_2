import React from 'react';
import { Card, CardHeader, CardContent, Grid, Typography, Divider} from '@material-ui/core'
import useStyles from "./styles"


const Main = () => {

  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}> 
        <CardHeader title="Expense Tracker" />
        <CardContent>
          <Typography align="center" variant="h5"> Total Balance N100</Typography>
          <Typography variant="subtitle1" style ={{lineHeight:"1.5em", marginTop:"20px"}}> 
            Speechly Sentence 
          </Typography>
          <Divider />
          {/* Form */}
        </CardContent> 
        <CardContent className={classes.cardContent}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {/* List Component */}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  )
}

export default Main;