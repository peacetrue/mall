// in src/App.js
import * as React from 'react';
import {Admin, mergeTranslations, Resource} from 'react-admin';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import chineseMessages from 'ra-language-chinese';
import {authProvider, dataProvider2 as dataProvider} from "./instances";
import customRoutes from './customRoutes';
import {Messages} from "./Messages";
import CustomLayout from "./CustomLayout";
import {Dashboard} from "./Dashboard";
import {DictionaryTypeResource, DictionaryValueResource} from "@peace/dictionary";
import {ClassifyResource} from "@peace/classify";
import {FileResource} from "@peace/file";
import {RegionResource} from "@peace/region";
import {MemberResource} from "@peace/member";
import {MerchantResource} from "@peace/merchant";
import {UserResource} from "@peace/user";
import {ContactAddressResource} from "@peace/contact-address";
import {GoodsResource} from "@peace/goods";
import {OrderResource} from "@peace/order";
import {AttachmentResource} from "@peace/attachment";

console.info("process.env:", process.env);
const i18nProvider = polyglotI18nProvider(() => mergeTranslations(chineseMessages, Messages), 'cn');

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
                AttachmentResource,
                RegionResource,
            ];
            resources.push(<Resource name={'enums/goodsDisplay'}/>);
            resources.push(<Resource name={'enums/orderNode'}/>);
            resources.push(<Resource name={'enums/tense'}/>);
            resources.push(<Resource name={'enums/finalState'}/>);
            resources.push(<Resource name={'enums'}/>);
            // resources.push(<Resource name={'dictionary-types'} show={DictionaryTypeShow}/>);
            resources.push(<Resource name={'profile'}/>);
            return resources;
        }}
    </Admin>
);

export default App;
