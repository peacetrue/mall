import * as React from 'react';
import {Datagrid, EditButton, Filter, ListProps, TextField, TextInput} from 'react-admin';
import PeaceList from "../../PeaceList";
import ResetPasswordButton from "../users/ResetPasswordButton";
import ExporterBuilder from "../../PeaceExporter";
import PeaceDeleteButton from "../../PeaceDeleteButton";
import MerchantMessages from "./Messages";
import {UserCreatedTimeFilter} from "../users/UserCommon";
import {UserCreateModifyFields} from "../users";

const Filters = (props: ListProps) => (
  <Filter {...props}>
    <TextInput source="username" resettable allowEmpty alwaysOn/>
    {UserCreatedTimeFilter}
  </Filter>
);

export const MerchantList = (props: ListProps) => {
  const {permissions, ...rest} = props;
  console.info('MerchantList:', rest);
  return (
    <PeaceList {...rest}
               filters={<Filters/>}
               exporter={ExporterBuilder(MerchantMessages.resources.merchants, ['id', 'username', 'createdTime'])}
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
