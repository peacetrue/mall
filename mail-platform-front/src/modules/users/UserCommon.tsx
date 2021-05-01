import {DateField, DateInput, ReferenceField, TextField} from "react-admin";
import * as React from "react";

export const UserCreateFields = [
  <ReferenceField key={'user.creatorId'} reference="users" source="creatorId" link="show">
    <TextField source="username"/>
  </ReferenceField>,
  <DateField key={'user.createdTime'} source="createdTime" showTime/>,
];

export const UserModifyFields = [
  <ReferenceField key={'user.modifierId'} reference="users" source="modifierId" link="show">
    <TextField source="username"/>
  </ReferenceField>,
  <DateField key={'user.modifiedTime'} source="modifiedTime" showTime/>,
];

export const UserCreateModifyFields = [...UserCreateFields, ...UserModifyFields];

export const UserCreatedTimeFilter = [
  <DateInput key={'user.createdTime.lowerBound'} source="createdTime.lowerBound" allowEmpty alwaysOn/>,
  <DateInput key={'user.createdTime.upperBound'} source="createdTime.upperBound" allowEmpty alwaysOn/>
];

export const UserModifiedTimeFilter = [
  <DateInput key={'user.modifiedTime.lowerBound'} source="modifiedTime.lowerBound" allowEmpty alwaysOn/>,
  <DateInput key={'user.modifiedTime.upperBound'} source="modifiedTime.upperBound" allowEmpty alwaysOn/>
];

export const Messages: Record<string, string> = {
  'creatorId': '创建者',
  'createdTime': '创建时间',
  'modifierId': '修改者',
  'modifiedTime': '修改时间',
  'createdTime.lowerBound': "创建时间起始值",
  'createdTime.upperBound': "创建时间结束值",
  'modifiedTime.lowerBound': "修改时间起始值",
  'modifiedTime.upperBound': "修改时间结束值",
};

export default {
  UserCreateFields,
  UserModifyFields,
  UserCreateModifyFields,
  UserCreatedTimeFilter,
  UserModifiedTimeFilter,
  Messages
}
