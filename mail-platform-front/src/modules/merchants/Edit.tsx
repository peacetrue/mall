import * as React from 'react';
import {EditProps, PasswordInput, SimpleForm, TextField} from 'react-admin';
import PeaceEdit from "../../PeaceEdit";
import {MerchantCreateModifyFields} from "./index";
import {userRules} from "../users/UserCommon";
import {UserCreateModifyFields} from "../users";

export const MerchantEdit = (props: EditProps) => {
  console.info('MerchantEdit:', props);
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
