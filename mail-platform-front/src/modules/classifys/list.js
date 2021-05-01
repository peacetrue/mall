import React, {cloneElement} from 'react';
import {
    CloneButton,
    CreateButton,
    Datagrid,
    DateField,
    DateInput,
    EditButton,
    Filter,
    List,
    ReferenceField,
    sanitizeListRestProps,
    TextField,
    TextInput,
    TopToolbar,
    useListContext
} from 'react-admin';
import RearrangeButton from "./RearrangeButton";
import GenerateButton from "./GenerateButton";
import {useListStyles} from "../../Styles";
import ExporterBuilder from "../../PeaceExporter";
import classifyMessages from "./messages";
import {PeaceBulkActionButtons} from "../../PeaceBulkActionButtons";

const ListActions = (props) => {
    const {
        className,
        exporter,
        filters,
        maxResults,
        ...rest
    } = props;
    const {
        resource,
        basePath,
        displayedFilters,
        filterValues,
        showFilter,
    } = useListContext();
    return (
        <TopToolbar className={className} {...sanitizeListRestProps(rest)}>
            {filters && cloneElement(filters, {
                resource,
                showFilter,
                displayedFilters,
                filterValues,
                context: 'button',
            })}
            <CreateButton resource={resource} basePath={basePath}/>
            <RearrangeButton/>
        </TopToolbar>
    );
};


const Filters = (props) => (
    <Filter {...props}>
        {/*<ReferenceInput source="typeId" reference="dictionary-values"
                        filter={{dictionaryTypeCode: 'classifyType'}}
                        allowEmpty alwaysOn>
            <SelectInput source="name" resettable/>
        </ReferenceInput>*/}
        {/*
        <ReferenceInput {...parentIdReferenceProps} allowEmpty alwaysOn>
            <SelectInput source="name" optionText={textFormatter} resettable/>
        </ReferenceInput>
*/}
        <TextInput source="code" allowEmpty alwaysOn resettable/>
        <TextInput source="name" allowEmpty alwaysOn resettable/>
        <DateInput label={'创建时间起始值'} source="createdTime.lowerBound" allowEmpty/>
        <DateInput label={'创建时间结束值'} source="createdTime.upperBound" allowEmpty/>
    </Filter>
);

export const ClassifyList = props => {
    console.info('ClassifyList:', props);
    let classes = useListStyles();

    return (
        <List {...props}
              actions={<ListActions/>}
              filters={<Filters/>}
              filter={{parentId: 2}}
              bulkActionButtons={<PeaceBulkActionButtons/>}
              exporter={ExporterBuilder(classifyMessages.resources.classifys)}
              sort={{field: 'id', order: 'ASC'}}
        >
            <Datagrid rowClick="show">
                <ReferenceField source="parentId" reference="classifys">
                    <TextField source="name"/>
                </ReferenceField>
                <TextField source="code" cellClassName={classes.width10}/>
                <TextField source="name" cellClassName={classes.width10}/>
                {/*<TextField source="level"/>*/}
                {/*<BooleanField source="leaf"/>*/}
                <TextField source="serialNumber"/>
                <ReferenceField reference="users" source="creatorId" link="show">
                    <TextField source="username"/>
                </ReferenceField>
                <DateField source="createdTime" showTime/>
                {/*<ChildrenButton/>*/}
                <EditButton/>
                <CloneButton/>
                <GenerateButton/>
            </Datagrid>
        </List>
    )
};
