import React from 'react';
import {
    Datagrid,
    DateField,
    DateInput,
    EditButton,
    Filter,
    List,
    ReferenceField,
    ReferenceInput,
    SelectInput,
    TextField,
    TextInput
} from 'react-admin';

const Filters = (props) => (
    <Filter {...props}>
        <TextInput source="code" allowEmpty alwaysOn resettable/>
        <ReferenceInput source="finalState" reference="enums/finalState" allowEmpty alwaysOn>
            <SelectInput source="code" optionText="name" resettable/>
        </ReferenceInput>
        <DateInput source="createdTime.lowerBound" allowEmpty alwaysOn/>
        <DateInput source="createdTime.upperBound" allowEmpty alwaysOn/>
    </Filter>
);

export const OrderList = props => {
    console.info('OrderList:', props);
    return (
        <List {...props} filters={<Filters/>}>
            <Datagrid rowClick="show">
                <TextField source="code"/>
                <ReferenceField source="goodsId" reference="goods">
                    <TextField source="name"/>
                </ReferenceField>
                <TextField source="goodsCount"/>
                <TextField source="amount"/>
                <ReferenceField source="shippingAddressId" reference="contact-addresses">
                    <TextField source="contactName"/>
                </ReferenceField>
                <TextField source="paymentAmount"/>
                <DateField source="paymentTime" showTime/>
                <ReferenceField source="node" reference="enums/orderNode">
                    <TextField source="name"/>
                </ReferenceField>
                <ReferenceField source="finalState" reference="enums/finalState">
                    <TextField source="name"/>
                </ReferenceField>
                <ReferenceField reference="members" source="creatorId" link="show">
                    <TextField source="username"/>
                </ReferenceField>
                <DateField source="createdTime" showTime/>
                <EditButton/>
            </Datagrid>
        </List>
    )
};
