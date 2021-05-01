import * as React from 'react';
import {DateField, ReferenceField, Show, SimpleShowLayout, TextField} from 'react-admin';

export const DictionaryValueShow = (props) => {
    console.info('DictionaryValueShow:', props);
    return (
        <Show {...props} title={`${props.options.label}#${props.id}`}>
            <SimpleShowLayout>
                <ReferenceField reference="dictionary-types" source="dictionaryTypeId" link="show">
                    <TextField source="name"/>
                </ReferenceField>
                <TextField source="code"/>
                <TextField source="name"/>
                <TextField source="remark"/>
                <ReferenceField reference="users" source="creatorId" link={'show'}>
                    <TextField source="username"/>
                </ReferenceField>
                <DateField source="createdTime" showTime/>
                <ReferenceField reference="users" source="modifierId" link={'show'}>
                    <TextField source="username"/>
                </ReferenceField>
                <DateField source="modifiedTime" showTime/>
            </SimpleShowLayout>
        </Show>
    );
};
