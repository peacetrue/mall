import React from 'react';
import {
    DateTimeInput,
    Edit,
    maxLength,
    NumberInput,
    ReferenceInput,
    required,
    SelectInput,
    SimpleForm,
    TextField,
    TextInput
} from 'react-admin';

export const OrderEdit = (props) => {
    console.info('OrderEdit:', props);
    return (
        <Edit {...props} undoable={false}>
            <SimpleForm>
                <TextField source="code"/>
                <ReferenceInput source="goodsId" reference="goods" validate={[required(),]}>
                    <SelectInput optionText="name" resettable/>
                </ReferenceInput>
                <NumberInput source="goodsCount" validate={[required()]} min={1}/>
                <ReferenceInput source="shippingAddressId" reference="contact-addresses" validate={[required(),]}>
                    <SelectInput optionText="contactName" resettable/>
                </ReferenceInput>
                <NumberInput source="amount" validate={[required()]} min={0} step={0.01}/>
                <NumberInput source="paymentAmount" validate={[required()]} min={0} step={0.01}/>
                <DateTimeInput source="paymentTime" validate={[required()]}/>
                <ReferenceInput source="node" reference="enums/orderNode" validate={[required(),]}>
                    <SelectInput source="code" optionText="name" resettable/>
                </ReferenceInput>
                <ReferenceInput source="tenseState" reference="enums/tense" validate={[required(),]}>
                    <SelectInput source="code" optionText="name" resettable/>
                </ReferenceInput>
                <ReferenceInput source="finalState" reference="enums/finalState" validate={[required(),]}>
                    <SelectInput source="code" optionText="name" resettable/>
                </ReferenceInput>
                <TextInput source="remark" validate={[maxLength(255)]} resettable fullWidth/>
            </SimpleForm>
        </Edit>
    );
};
