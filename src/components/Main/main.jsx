import React from 'react';
import { Card, CardHeader, CardContent, Grid, Typography, Divider} from '@material-ui/core'


const Main = () => {

  return (
    <div>
      <Card className={classes.root}> 
        <CardHeader title="Expense Tracker" />
      </Card>
    </div>
  )
}

export default Main;