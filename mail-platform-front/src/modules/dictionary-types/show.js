import * as React from 'react';
import {DateField, ReferenceField, Show, SimpleShowLayout, TextField} from 'react-admin';

export const DictionaryTypeShow = (props) => {
    console.info('DictionaryTypeShow:', props);
    return (
        <Show {...props}>
            <SimpleShowLayout>
                <TextField source="code"/>
                <TextField source="name"/>
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
