import {DateField, DateInput, maxLength, minLength, ReferenceField, required, TextField} from "react-admin";
import * as React from "react";

export function buildUserCreateFields(reference: string) {
  return [
    <ReferenceField key={`${reference}.creatorId`} reference={reference} source="creatorId" link="show">
      <TextField source="username"/>
    </ReferenceField>,
    <DateField key={`${reference}.createdTime`} source="createdTime" showTime/>,
  ];
}

export function buildUserModifyFields(reference: string) {
  return [
    <ReferenceField key={`${reference}.modifierId`} reference={reference} source="modifierId" link="show">
      <TextField source="username"/>
    </ReferenceField>,
    <DateField key={`${reference}.modifiedTime`} source="modifiedTime" showTime/>,
  ]
}

export function buildUserCreateModifyFields(reference: string) {
  return [...buildUserCreateFields(reference), ...buildUserModifyFields(reference)];
}

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

export const usernameRule = [required(), minLength(6), maxLength(32)];
export const passwordRule = usernameRule;
export const userRules = {
  username: usernameRule,
  password: passwordRule,
}

export default {
  buildUserCreateFields,
  buildUserModifyFields,
  buildUserCreateModifyFields,
  UserCreatedTimeFilter,
  UserModifiedTimeFilter,
  Messages,
  userRules
}

