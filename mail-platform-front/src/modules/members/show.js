import * as React from 'react';
import {DateField, ReferenceField, Show, SimpleShowLayout, TextField} from 'react-admin';
import Role from "./role";

export const MemberShow = (props) => {
    console.info('MemberShow:', props);
    return (
        <Show {...props} >
            <SimpleShowLayout>
                <TextField label={'用户名'} source="username"/>
                {Role}
                <ReferenceField reference="members" source="creatorId" link={'show'}>
                    <TextField source="username"/>
                </ReferenceField>
                <DateField source="createdTime" showTime/>
                <ReferenceField reference="members" source="modifierId" link={'show'}>
                    <TextField source="username"/>
                </ReferenceField>
                <DateField source="modifiedTime" showTime/>
            </SimpleShowLayout>
        </Show>
    );
};
