import * as React from 'react';
import {Show, SimpleShowLayout, TextField} from 'react-admin';
import {UserCreateModifyFields} from "./UserCommon";
import PeaceShowActions from "../../PeaceShowActions";

export const UserShow = (props) => {
    console.info('UserShow:', props);
    return (
        <Show actions={<PeaceShowActions/>} {...props} >
            <SimpleShowLayout>
                <TextField source="username"/>
                {UserCreateModifyFields}
            </SimpleShowLayout>
        </Show>
    );
};
