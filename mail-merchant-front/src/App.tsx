import React from 'react';
import {Admin, Resource} from "react-admin";
import {
  AuthProviderHttpClient,
  DataProviderHttpClient,
  EnumResources,

PeaceAuthProviderBuilder,
  PeaceEnv,
  PeaceSpringDataProviderBuilder
} from "@peace/react-admin";
import {OrderResource} from "@peace/order";
import {Goods, GoodsResource} from "@peace/goods";
import {Messages} from "./Messages";
import {Member} from "@peace/member";
import {ContactAddress} from "@peace/contact-address";
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
      <Resource name={"goods"} show={Goods.show}/>
      <Resource name={"members"} show={Member.show}/>
      <Resource name={"contact-addresses"} show={ContactAddress.show}/>
      {EnumResources}
    </Admin>
  );
}

export default App;
