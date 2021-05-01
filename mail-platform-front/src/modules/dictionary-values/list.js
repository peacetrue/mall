import * as React from 'react';
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
import ExporterBuilder from "../../PeaceExporter";
import dictionaryValueMessages from "./messages";
import {PeaceBulkActionButtons} from "../../PeaceBulkActionButtons";

const Filters = (props) => (
    <Filter {...props}>
        <ReferenceInput reference="dictionary-types" source="dictionaryTypeId"
                        link="show" allowEmpty alwaysOn>
            <SelectInput source="name" resettable/>
        </ReferenceInput>
        <TextInput source="code" allowEmpty alwaysOn resettable/>
        <TextInput source="name" allowEmpty alwaysOn resettable/>
        <DateInput label={'创建时间起始值'} source="createdTime.lowerBound" allowEmpty/>
        <DateInput label={'创建时间结束值'} source="createdTime.upperBound" allowEmpty/>
    </Filter>
);

export const DictionaryValueList = props => {
    console.info('DictionaryValueList:', props);
    return (
        <List {...props}
              filters={<Filters/>}
              bulkActionButtons={<PeaceBulkActionButtons/>}
              exporter={ExporterBuilder(dictionaryValueMessages.resources["dictionary-values"])}
              sort={{}}
        >
            <Datagrid rowClick="show">
                <ReferenceField reference="dictionary-types" source="dictionaryTypeId" link="show">
                    <TextField source="name"/>
                </ReferenceField>
                <TextField source="code"/>
                <TextField source="name"/>
                <TextField source="serialNumber"/>
                <ReferenceField reference="users" source="creatorId" link="show">
                    <TextField source="username"/>
                </ReferenceField>
                <DateField source="createdTime" showTime/>
                <EditButton/>
            </Datagrid>
        </List>
    )
};
