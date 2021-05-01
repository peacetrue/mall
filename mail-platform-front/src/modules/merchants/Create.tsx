import * as React from 'react';
import {Create, CreateProps, PasswordInput, SimpleForm, TextInput,} from 'react-admin';
import {userRules} from "../users/UserCommon";

export const MerchantCreate = (props: CreateProps) => {
  console.info('MerchantCreate:', props);
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="username" validate={userRules.username}/>
        <PasswordInput source="password" validate={userRules.password}/>
      </SimpleForm>
    </Create>
  );
};
