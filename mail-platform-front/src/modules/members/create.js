import * as React from 'react';
import {Create, PasswordInput, SimpleForm, TextInput,} from 'react-admin';
import rules from "./rules";

export const MemberCreate = (props) => {
    console.info('MemberCreate:', props);
    return (
        <Create {...props}>
            <SimpleForm>
                <TextInput label={'用户名'} source="username" validate={rules.username}/>
                <PasswordInput label={'密码'} source="password" validate={rules.password}/>
            </SimpleForm>
        </Create>
    );
};
