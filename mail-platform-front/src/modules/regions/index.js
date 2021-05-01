import React from "react";
import {Resource} from "react-admin";

import {RegionList} from './list';
import {RegionCreate} from './create';
import {RegionEdit} from './edit';
import {RegionShow} from './show';
import BusinessIcon from '@material-ui/icons/Business';

export const Region = {list: RegionList, create: RegionCreate, edit: RegionEdit, show: RegionShow};
const RegionResource = <Resource icon={BusinessIcon} name="regions" {...Region} />;
export default RegionResource;
