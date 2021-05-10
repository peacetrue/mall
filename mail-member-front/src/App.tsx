import React from 'react';
import '@fontsource/roboto';
import {Container, CssBaseline} from "@material-ui/core";

function App() {
  return (
    <React.Fragment>
      <CssBaseline/>
      <Container maxWidth="sm">
        Hello React
      </Container>
    </React.Fragment>
  );
}

export default App;
