import React from 'react';
import {Admin, Resource} from "react-admin";
import {PeaceSpringDataProviderBuilder} from "peacetrue-react-admin";
import {PeaceAuthProviderBuilder} from "./PeaceAuthProviderBuilder";
import {AuthProviderHttpClient, DataProviderHttpClient} from "./PeaceHttpClient";
import {MemberResource} from "peacetrue-member"
import {OrderResource} from "peacetrue-order";
import {GoodsResource} from "peacetrue-goods";
import {EnumResources} from "./PeaceEnum";

function App() {
  let url = process.env.REACT_APP_BASE_URL as string;
  return (
    <Admin title="抖音商城"
           authProvider={PeaceAuthProviderBuilder({url, httpClient: AuthProviderHttpClient})}
           dataProvider={PeaceSpringDataProviderBuilder(url, DataProviderHttpClient)}
    >
      {GoodsResource}
      <Resource name={"merchants"}/>
      {OrderResource}
      {MemberResource}
      {EnumResources}
    </Admin>
  );
}

export default App;
