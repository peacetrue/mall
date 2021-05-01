import * as React from 'react';
import {Datagrid, Filter, TextField, TextInput} from 'react-admin';
import ExporterBuilder from "../../PeaceExporter";
import userMessages from "./messages";
import ResetPasswordButton from "./ResetPasswordButton";
import {UserCreatedTimeFilter, UserCreateModifyFields} from "./UserCommon";
import PeaceDeleteButton from "../../PeaceDeleteButton";
import PeaceList from "../../PeaceList";

const Filters = (props) => (
    <Filter {...props}>
        <TextInput source="username" resettable allowEmpty alwaysOn/>
        {UserCreatedTimeFilter}
    </Filter>
);

export const UserList = (props) => {
    console.info('UserList:', props);
    const {permissions, ...rest} = props;
    return (
        <PeaceList {...rest}
                   filters={<Filters/>}
                   exporter={ExporterBuilder(userMessages.resources.users, ['id', 'username', 'createdTime'])}
        >
            <Datagrid rowClick="show">
                <TextField source="username"/>
                {UserCreateModifyFields}
                {permissions && permissions.isManager && <ResetPasswordButton/>}
                {permissions && permissions.isManager && <PeaceDeleteButton/>}
            </Datagrid>
        </PeaceList>
    )
};
