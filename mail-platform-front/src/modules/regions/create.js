import * as React from 'react';
import {Create, maxLength, ReferenceInput, required, SelectInput, SimpleForm, TextInput} from 'react-admin';

export const RegionCreate = (props) => {
    console.info('RegionCreate:', props);
    return (
        <Create {...props}>
            <SimpleForm>
                <ReferenceInput source="parentId" reference="regions">
                    <SelectInput source="name"/>
                </ReferenceInput>
                <TextInput source="code" validate={[required(),]}/>
                <TextInput source="name" validate={[required(), maxLength(32)]}/>
                <TextInput source="remark" validate={[maxLength(255)]} multiline fullWidth/>
            </SimpleForm>
        </Create>
    );
};
