import * as React from 'react';
import {Resource} from "react-admin";

//TODO 从后端查询
let enums = ["goodsDisplay", "orderNode", "tense", "finalState"];
export const EnumResources = enums.map((item) => <Resource name={`enums/${item}`}/>);
