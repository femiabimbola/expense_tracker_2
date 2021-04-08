import React from 'react';
import { List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide} from "@material-ui/core";
import { Delete, MoneyOff } from '@material-ui/core';

import useStyles from './styles';


const List = () => {
  const styles = useStyles();

  const transactions = [
    {id: 1 }
  ];

  return (
    <MUIList dense={false} className={styles.list}>
      { transactions.map((transaction) => (
        <Slide direction='down' in mountOnEnter unmountOnExit key={transaction.id}>

        </Slide>
       ))}
    </MUIList>
  )
}

export default List