import * as React from 'react';
import {
    BooleanField,
    Button,
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
    TextInput,
    useListContext
} from 'react-admin';
import ExpandMoreSharpIcon from '@material-ui/icons/ExpandMoreSharp';
import ExporterBuilder from "../../PeaceExporter";
import regionMessages from "./messages";
import {PeaceBulkActionButtons} from "../../PeaceBulkActionButtons";

const Filters = (props) => (
    <Filter {...props}>
        <ReferenceInput source="parentId" reference="regions" allowEmpty alwaysOn>
            <SelectInput source="name" resettable/>
        </ReferenceInput>
        <TextInput source="code" allowEmpty alwaysOn resettable/>
        <TextInput source="name" allowEmpty alwaysOn resettable/>
        <DateInput source="createdTime.lowerBound" allowEmpty/>
        <DateInput source="createdTime.upperBound" allowEmpty/>
    </Filter>
);

const ChildrenButton = ({record}) => {
    const {
        filterValues,
        setFilters,
    } = useListContext();
    return record.leaf ? null : (
        <Button label={'下级'} onClick={e => {
            e.stopPropagation();
            setFilters({...filterValues, parentId: record.id})
        }}>
            <ExpandMoreSharpIcon/>
        </Button>
    );
}

export const RegionList = props => {
    console.info('RegionList:', props);
    return (
        <List {...props}
              filters={<Filters/>}
              bulkActionButtons={<PeaceBulkActionButtons/>}
              exporter={ExporterBuilder(regionMessages.resources.regions)}
        >
            <Datagrid rowClick="show">
                <ReferenceField source="parentId" reference="regions">
                    <TextField source="name"/>
                </ReferenceField>
                <TextField source="code"/>
                <TextField source="name"/>
                <TextField source="level"/>
                <BooleanField source="leaf"/>
                <TextField source="serialNumber"/>
                <ReferenceField reference="users" source="creatorId" link="show">
                    <TextField source="username"/>
                </ReferenceField>
                <DateField source="createdTime" showTime/>
                <ChildrenButton/>
                <EditButton/>
            </Datagrid>
        </List>
    )
};
