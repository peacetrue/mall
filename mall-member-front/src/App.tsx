import React from 'react';
import '@fontsource/roboto';
import {AppBar, Container, CssBaseline} from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import Goods from "./components/Goods";

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


function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline/>
      <Container maxWidth={"sm"}>
        <AppBar
          position={"sticky"}
          color={"default"}
          square={false}
        >
          <InputBase
            className={classes.search}
            startAdornment={<SearchIcon/>}
            // endAdornment={<HighlightOffIcon/>}
            // placeholder="搜索商品"
            // inputProps={{'aria-label': '搜索商品'}}
          />
        </AppBar>

        <Goods
          cover={"http://localhost:8202/files/goods/cover/image/2021/4/3/976-__(4).png"}
          name={"仙女裙"}
          price={100}
        />
        <Goods
          cover={"http://localhost:8202/files/goods/cover/image/2021/4/3/976-__(4).png"}
          name={"仙女裙"}
          price={100}
        />
        <Goods
          cover={"http://localhost:8202/files/goods/cover/image/2021/4/3/976-__(4).png"}
          name={"仙女裙"}
          price={100}
        />
        <Goods
          cover={"http://localhost:8202/files/goods/cover/image/2021/4/3/976-__(4).png"}
          name={"仙女裙"}
          price={100}
        />
      </Container>
    </React.Fragment>
  );
}

export default App;
