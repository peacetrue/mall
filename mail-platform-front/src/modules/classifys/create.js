import * as React from 'react';
import {Create, maxLength, ReferenceInput, required, SelectInput, SimpleForm, TextInput} from 'react-admin';
import {parentIdReferenceProps, textFormatter} from "./utils";

export const ClassifyCreate = (props) => {
    console.info('ClassifyCreate:', props);
    return (
        <Create {...props}>
            <SimpleForm>
                <ReferenceInput {...parentIdReferenceProps}>
                    <SelectInput source="name" optionText={textFormatter} validate={[required(),]}/>
                </ReferenceInput>
                <TextInput source="code" validate={[required(),]}/>
                <TextInput source="name" validate={[required(), maxLength(32)]}/>
                <TextInput source="remark" validate={[maxLength(255)]} multiline fullWidth/>
            </SimpleForm>
        </Create>
    );
};
