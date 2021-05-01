import * as React from 'react';
import {Datagrid, EditButton, Filter, ListProps, TextField, TextInput} from 'react-admin';
import ExporterBuilder from "../../PeaceExporter";
import UserMessages from "./Messages";
import ResetPasswordButton from "./ResetPasswordButton";
import {UserCreatedTimeFilter} from "./UserCommon";
import PeaceDeleteButton from "../../PeaceDeleteButton";
import PeaceList from "../../PeaceList";
import {UserCreateModifyFields} from "./index";

const Filters = (props: any) => (
  <Filter {...props}>
    <TextInput source="username" resettable allowEmpty alwaysOn/>
    {UserCreatedTimeFilter}
  </Filter>
);

export const UserList = (props: ListProps) => {
  console.info('UserList:', props);
  const {permissions, ...rest} = props;
  return (
    <PeaceList {...rest}
               filters={<Filters/>}
               exporter={ExporterBuilder(UserMessages.resources.users, ['id', 'username', 'createdTime'])}
    >
      <Datagrid rowClick="show">
        <TextField source="username"/>
        {UserCreateModifyFields}
        {permissions && permissions.isManager && <ResetPasswordButton/>}
        {permissions && permissions.isManager && <EditButton/>}
        {permissions && permissions.isManager && <PeaceDeleteButton/>}
      </Datagrid>
    </PeaceList>
  )
};
