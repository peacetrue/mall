import * as React from 'react';
import {Create, maxLength, required, SimpleForm, TextInput} from 'react-admin';

export const DictionaryTypeCreate = (props) => {
    console.info('DictionaryTypeCreate:', props);
    return (
        <Create {...props}>
            <SimpleForm>
                <TextInput source="code" validate={[required(), maxLength(32)]}/>
                <TextInput source="name" validate={[required(), maxLength(32)]}/>
                <TextInput source="remark" validate={[maxLength(255)]} fullWidth multiline/>
            </SimpleForm>
        </Create>
    );
};
