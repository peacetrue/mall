import React, {useEffect} from 'react';
import {
    Button,
    Datagrid,
    DateField,
    DateInput,
    DeleteButton,
    EditButton,
    Filter,
    List,
    ReferenceField,
    ReferenceInput,
    SelectInput,
    TextField,
    TextInput,
    useNotify,
    useRefresh,
    useUpdate
} from 'react-admin';
import BuildIcon from "@material-ui/icons/Build";

const Filters = (props) => (
    <Filter {...props}>
        <TextInput source="name" allowEmpty alwaysOn resettable/>
        <ReferenceInput source="display" reference="enums/goodsDisplay" allowEmpty alwaysOn>
            <SelectInput source="code" optionText="name" resettable/>
        </ReferenceInput>
        <DateInput source="createdTime.lowerBound" allowEmpty alwaysOn/>
        <DateInput source="createdTime.upperBound" allowEmpty alwaysOn/>
    </Filter>
);

export const DisplayButton = ({resource, record, ...rest}) => {
    let notify = useNotify(), refresh = useRefresh();
    let url = `${resource}/${record.id}/display/${record.display ? 0 : 1}`;
    const [update, {data, loading, loaded, error}] = useUpdate(url, record.id);
    useEffect(() => {
        if (error) notify(error.message, 'error', false, null, null);
        if (loaded) refresh();
    }, [error, loaded])
    const onClick = (e) => e.stopPropagation() || update();
    return (
        <Button label={record.display ? '下架' : '上架'} disabled={loading} onClick={onClick}>
            <BuildIcon/>
        </Button>
    )
}

export const GoodsList = props => {
    console.info('GoodsList:', props);
    return (
        <List {...props} filters={<Filters/>} sort={{field: 'serialNumber', order: 'DESC'}}>
            <Datagrid rowClick="show">
                <TextField source="name"/>
                <ReferenceField source="display" reference="enums/goodsDisplay" link={false}>
                    <TextField source={'name'}/>
                </ReferenceField>
                <TextField source="price"/>
                <TextField source="serialNumber"/>
                <ReferenceField reference="members" source="creatorId" link="show">
                    <TextField source="username"/>
                </ReferenceField>
                <DateField source="createdTime" showTime/>
                {/*<ReferenceField reference="members" source="modifierId" link="show">
                    <TextField source="username"/>
                </ReferenceField>
                <DateField source="modifiedTime" showTime/>*/}
                <EditButton/>
                <DisplayButton/>
                <DeleteButton mutationMode={'pessimistic'}/>
            </Datagrid>
        </List>
    )
};
