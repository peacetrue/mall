import * as React from 'react';
import {Create, CreateProps, PasswordInput, SimpleForm, TextInput,} from 'react-admin';
import {userRules} from "./UserCommon";

export const UserCreate = (props: CreateProps) => {
  console.info('UserCreate:', props);
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="username" validate={userRules.username} resetable/>
        <PasswordInput source="password" validate={userRules.password} resetable/>
      </SimpleForm>
    </Create>
  );
};
