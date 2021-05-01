import * as React from 'react';
import {ShowProps, SimpleShowLayout, TextField} from 'react-admin';
import {UserCreateModifyFields} from "../users";
import PeaceShow from "../../PeaceShow";

export const MerchantShow = (props: ShowProps) => {
  console.info('MerchantShow:', props);
  return (
    <PeaceShow {...props} >
      <SimpleShowLayout>
        <TextField source="username"/>
        {UserCreateModifyFields}
      </SimpleShowLayout>
    </PeaceShow>
  );
};
