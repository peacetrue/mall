import React, {MouseEventHandler} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import {CardContent, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  }),
);

export interface GoodsProps {
  cover: string;
  name: string;
  price: number;
  onClick?: MouseEventHandler
}

export default function Goods(props: GoodsProps) {
  const classes = useStyles();
  return (
    <Card className={classes.root} onClick={props.onClick}>
      <CardMedia
        component="img"
        image={props.cover}
        title={props.name}
      />
      <CardContent>
        <Typography variant={"subtitle1"}>{props.name}&nbsp;
          <Typography variant={"subtitle1"} color={"error"} display={"inline"}>${props.price}</Typography>
        </Typography>
      </CardContent>
    </Card>
  );
}
