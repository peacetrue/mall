import React from "react";
import {Resource} from "react-admin";

import UserIcon from '@material-ui/icons/People';
import {UserList} from './List';
import {UserCreate} from './Create';
import {UserShow} from './Show';
import {UserEdit} from "./Edit";
import {buildUserCreateFields, buildUserCreateModifyFields, buildUserModifyFields} from "./UserCommon";

const resource = "users";
export const UserCreateFields = buildUserCreateFields(resource);
export const UserModifyFields = buildUserModifyFields(resource);
export const UserCreateModifyFields = buildUserCreateModifyFields(resource);
export const User = {list: UserList, create: UserCreate, edit: UserEdit, show: UserShow};
export const UserResource = <Resource icon={UserIcon} name={resource} {...User} />;
export default UserResource;
