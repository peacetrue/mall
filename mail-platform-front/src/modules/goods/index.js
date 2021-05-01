import React from "react";
import {Resource} from "react-admin";

import {GoodsList} from './list';
import {GoodsCreate} from './create';
import {GoodsEdit} from './edit';
import {GoodsShow} from './show';

export const Goods = {list: GoodsList, create: GoodsCreate, edit: GoodsEdit, show: GoodsShow};
const GoodsResource = <Resource name="goods" {...Goods} />;
export default GoodsResource;
