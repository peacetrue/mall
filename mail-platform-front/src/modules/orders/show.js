import React from 'react';
import {DateField, NumberField, ReferenceField, Show, SimpleShowLayout, TextField} from 'react-admin';

export const OrderShow = (props) => {
    console.info('OrderShow:', props);
    return (
        <Show {...props}>
            <SimpleShowLayout>
                <TextField source="code"/>
                <ReferenceField source="goodsId" reference="goods" link={'show'}>
                    <TextField source="name"/>
                </ReferenceField>
                <TextField source="goodsCount"/>
                <ReferenceField source="shippingAddressId" reference="contact-addresses" link={'show'}>
                    <TextField source="contactName"/>
                </ReferenceField>
                <NumberField source="amount"/>
                <NumberField source="paymentAmount"/>
                <DateField source="paymentTime" showTime/>
                <ReferenceField source="node" reference="enums/orderNode" link={false}>
                    <TextField source="name"/>
                </ReferenceField>
                <ReferenceField source="tenseState" reference="enums/tense" link={false}>
                    <TextField source="name"/>
                </ReferenceField>
                <ReferenceField source="finalState" reference="enums/finalState" link={false}>
                    <TextField source="name"/>
                </ReferenceField>
                <TextField source="remark"/>
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
