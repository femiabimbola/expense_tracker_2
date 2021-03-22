import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
// import { Doughnut } from "react-chartjs-2";

import useStyles from './styles';

const Detail = ({title}) => {
  const styles = useStyles()

 return (
   <Card className={title === "Income" ? styles.income: styles.expense}>
     <CardHeader title={title} />
     <CardContent>
        <Typography variant= 'h5'> N50 </Typography>
        {/* <Doughnut /> */}
     </CardContent>
   </Card>
 )
}

export default Detail;