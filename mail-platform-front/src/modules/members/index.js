import React from "react";
import {Resource} from "react-admin";

import {MemberList} from './list';
import {MemberCreate} from './create';
import {MemberShow} from './show';
import MemberIcon from '@material-ui/icons/People';

export const Member = {list: MemberList, create: MemberCreate, /*edit: MemberEdit,*/ show: MemberShow};
export const MemberResource = <Resource icon={MemberIcon} name="members" {...Member} />;
export default MemberResource;
