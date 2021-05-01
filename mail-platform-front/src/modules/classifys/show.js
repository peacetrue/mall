import * as React from 'react';
import {BooleanField, DateField, ReferenceField, Show, SimpleShowLayout, TextField} from 'react-admin';

export const ClassifyShow = (props) => {
    console.info('classifyshow:', props);
    return (
        <Show {...props}>
            <SimpleShowLayout>
                <ReferenceField source="parentId" reference="classifys">
                    <TextField source="name"/>
                </ReferenceField>
                <TextField source="code"/>
                <TextField source="name"/>
                <TextField label={'层级'} source="level"/>
                <BooleanField source="leaf"/>
                <TextField source="serialNumber"/>
                <TextField source="remark"/>
                <ReferenceField reference="users" source="creatorId" link="show">
                    <TextField source="username"/>
                </ReferenceField>
                <DateField source="createdTime" showTime/>
                <ReferenceField reference="users" source="modifierId" link="show">
                    <TextField source="username"/>
                </ReferenceField>
                <DateField source="modifiedTime" showTime/>
            </SimpleShowLayout>
        </Show>
    );
};
