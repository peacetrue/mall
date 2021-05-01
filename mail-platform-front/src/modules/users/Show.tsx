import * as React from 'react';
import {ShowProps, SimpleShowLayout, TextField} from 'react-admin';
import {UserCreateModifyFields} from "./index";
import PeaceShow from "../../PeaceShow";

export const UserShow = (props: ShowProps) => {
  console.info('UserShow:', props);
  return (
    <PeaceShow {...props} >
      <SimpleShowLayout>
        <TextField source="username"/>
        {UserCreateModifyFields}
      </SimpleShowLayout>
    </PeaceShow>
  );
};
