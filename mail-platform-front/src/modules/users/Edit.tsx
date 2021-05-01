import * as React from 'react';
import {EditProps, PasswordInput, SimpleForm, TextField} from 'react-admin';
import {UserCreateModifyFields} from "./index";
import PeaceEdit from "../../PeaceEdit";
import {userRules} from "./UserCommon";

export const UserEdit = (props: EditProps) => {
  console.info('UserEdit:', props);
  return (
    <PeaceEdit  {...props}>
      <SimpleForm>
        <TextField source="username"/>
        <PasswordInput source="password" validate={userRules.password}/>
        {UserCreateModifyFields}
      </SimpleForm>
    </PeaceEdit>
  );
};
