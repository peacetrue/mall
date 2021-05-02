import React from 'react';
import {Admin} from "react-admin";
import {PeaceSpringDataProviderBuilder} from "peacetrue-react-admin";

function App() {
  return (
    <Admin title="抖音商城"
           dataProvider={PeaceSpringDataProviderBuilder(process.env.REACT_APP_BASE_URL as string)}>

    </Admin>
  );
}

export default App;
