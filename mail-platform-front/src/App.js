// in src/App.js
import * as React from 'react';
import {Admin, mergeTranslations, Resource} from 'react-admin';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import chineseMessages from 'ra-language-chinese';
import {authProvider, dataProvider2 as dataProvider} from "./instances";
import customRoutes from './customRoutes';
import messages from "./messages";
import CustomLayout from "./CustomLayout";
import Dashboard from "./Dashboard";
import DictionaryValueResource from "./modules/dictionary-values";
import ClassifyResource from "./modules/classifys";
import FileResource from "./modules/files";
import DictionaryTypeResource from "./modules/dictionary-types";
import RegionResource from "./modules/regions";
import MemberResource from "./modules/members";
import MerchantResource from "./modules/merchants";
import UserResource from "./modules/users";
import ContactAddressResource from "./modules/contact-addresses";
import GoodsResource from "./modules/goods";
import OrderResource from "./modules/orders";

const i18nProvider = polyglotI18nProvider(() => mergeTranslations(chineseMessages, messages), 'cn');

const App = () => (
    <Admin title="抖音商城"
           dashboard={Dashboard}
           dataProvider={dataProvider}
           authProvider={authProvider}
           i18nProvider={i18nProvider}
           customRoutes={customRoutes}
           appLayout={CustomLayout}
    >
        {permissions => {
            let resources = [
                UserResource,
                MerchantResource,
                MemberResource,
                GoodsResource,
                OrderResource,
                ContactAddressResource,
                ClassifyResource,
                DictionaryTypeResource,
                DictionaryValueResource,
                FileResource,
                RegionResource,
            ];
            resources.push(<Resource name={'enums/goodsDisplay'}/>);
            resources.push(<Resource name={'enums/orderNode'}/>);
            resources.push(<Resource name={'enums/tense'}/>);
            resources.push(<Resource name={'enums/finalState'}/>);
            resources.push(<Resource name={'enums'}/>);
            // resources.push(<Resource name={'dictionary-types'} show={DictionaryTypeShow}/>);
            resources.push(<Resource name={'profile'}/>);
            resources.push(<Resource name={'static-contents'}/>);
            return resources;
        }}
    </Admin>
);

export default App;
