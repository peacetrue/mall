import React from 'react';
import '@fontsource/roboto';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    search: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    },
    goodsItems: {
      paddingTop: theme.spacing(1),
    },
    goods: {
      paddingBottom: theme.spacing(1),
    }
  }),
);

export default function () {
  /*
    return (<Box className={classes.goodsItems}>
      <Goods
        cover={"http://localhost:8202/files/goods/cover/image/2021/4/3/976-__(4).png"}
        name={"仙女裙"}
        price={100}
      />
      {/!*{_.range(0, 100).map((item) => <Box key={item}>{item}</Box>)}*!/}
    </Box>);
  */
  return '';
}
