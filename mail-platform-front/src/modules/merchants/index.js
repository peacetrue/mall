import React from "react";
import {Resource} from "react-admin";

import {MerchantList} from './list';
import {MerchantCreate} from './create';
import {MerchantShow} from './show';
import MerchantIcon from '@material-ui/icons/People';

export const Merchant = {list: MerchantList, create: MerchantCreate, /*edit: MerchantEdit,*/ show: MerchantShow};
export const MerchantResource = <Resource icon={MerchantIcon} name="merchants" {...Merchant} />;
export default MerchantResource;
