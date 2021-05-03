import React from 'react';
import {Admin, Resource} from "react-admin";
import {PeaceEnv, PeaceSpringDataProviderBuilder} from "peacetrue-react-admin";
import {PeaceAuthProviderBuilder} from "./PeaceAuthProviderBuilder";
import {AuthProviderHttpClient, DataProviderHttpClient} from "./PeaceHttpClient";
import {MemberResource} from "peacetrue-member"
import {OrderResource} from "peacetrue-order";
import {GoodsResource} from "./modules/goods";
// import {GoodsResource} from "/Users/xiayx/Documents/Projects/peacetrue-goods/peacetrue-goods-react-admin/src/modules/goods";
import {EnumResources} from "./PeaceEnum";
import {Messages} from "./Messages";
import polyglotI18nProvider from "ra-i18n-polyglot"

function App() {
  return (
    <Admin title="抖音商城"
           authProvider={PeaceAuthProviderBuilder({url: PeaceEnv.apiUrl, httpClient: AuthProviderHttpClient})}
           dataProvider={PeaceSpringDataProviderBuilder(PeaceEnv.apiUrl, DataProviderHttpClient)}
           i18nProvider={polyglotI18nProvider(() => Messages, 'cn')}
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
