import React from "react";
import {Resource} from "react-admin";

import {ClassifyList} from './list';
import {ClassifyCreate} from './create';
import {ClassifyEdit} from './edit';
import {ClassifyShow} from './show';
import BusinessIcon from '@material-ui/icons/Business';

export const Classify = {
    list: ClassifyList,
    create: ClassifyCreate,
    edit: ClassifyEdit,
    show: ClassifyShow
};
const ClassifyResource = <Resource icon={BusinessIcon} name="classifys" {...Classify} />;
export default ClassifyResource;
