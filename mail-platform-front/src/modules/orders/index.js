import React from "react";
import {Resource} from "react-admin";

import {OrderList} from './list';
import {OrderCreate} from './create';
import {OrderEdit} from './edit';
import {OrderShow} from './show';

export const Order = {list: OrderList, create: OrderCreate, edit: OrderEdit, show: OrderShow};
const OrderResource = <Resource name="orders" {...Order} />;
export default OrderResource;
