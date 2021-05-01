import * as React from 'react';
import {
    BooleanField,
    DateField,
    Edit,
    maxLength,
    minValue,
    NumberInput,
    ReferenceField,
    required,
    SimpleForm,
    TextField,
    TextInput
} from 'react-admin';

export const ClassifyEdit = (props) => {
    console.info('ClassifyEdit:', props);
    return (
        <Edit undoable={false} {...props}>
            <SimpleForm>
                <ReferenceField source="parentId" reference="classifys" link={'show'}>
                    <TextField source="name"/>
                </ReferenceField>
                <TextField source="code"/>
                <TextInput source="name" validate={[required(), maxLength(32)]}/>
                <TextField label={'层级'} source="level"/>
                <BooleanField source="leaf"/>
                <NumberInput source="serialNumber" validate={[required(), minValue(1)]} min={1}/>
                <TextInput source="remark" validate={[maxLength(255)]} fullWidth multiline/>
                <ReferenceField reference="users" source="creatorId" link={'show'}>
                    <TextField source="username"/>
                </ReferenceField>
                <DateField source="createdTime" showTime/>
            </SimpleForm>
        </Edit>
    );
};
