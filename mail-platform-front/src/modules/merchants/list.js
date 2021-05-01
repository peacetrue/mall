import * as React from 'react';
import {
    Button,
    Datagrid,
    DateField,
    DateInput,
    Filter,
    List,
    ReferenceField,
    TextField,
    TextInput,
    useDataProvider,
    useNotify
} from 'react-admin';
import role from "./role";
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import {PeaceBulkActionButtons} from "../../PeaceBulkActionButtons";

const Filters = (props) => (
    <Filter {...props}>
        <TextInput label={'用户名'} source="username" resettable allowEmpty alwaysOn/>
        <DateInput label={'创建时间起始值'} source="createdTime.lowerBound" allowEmpty alwaysOn/>
        <DateInput label={'创建时间结束值'} source="createdTime.upperBound" allowEmpty alwaysOn/>
    </Filter>
);

const ResetPasswordButton = (props) => {
    let dataProvider = useDataProvider(), notify = useNotify();
    let onClick = (e) => {
        e.stopPropagation();
        let params = {id: props.record.id, data: {id: props.record.id}};
        dataProvider.update('merchants/password/reset', params)
            .then(data => notify('密码重置成功!', 'info', {}, false, 100000));
    };
    return (<Button label={'重置密码'} onClick={onClick}><RotateLeftIcon/></Button>)
}

export const MerchantList = ({permissions, ...props}) => {
    console.info('MerchantList:', props);
    return (
        <List {...props}
              filters={<Filters/>}
              bulkActionButtons={<PeaceBulkActionButtons/>}
              exporter={false}
        >
            <Datagrid rowClick="show">
                <TextField label={'用户名'} source="username"/>
                {role}
                <ReferenceField reference="members" source="creatorId" link="show">
                    <TextField source="username"/>
                </ReferenceField>
                <DateField source="createdTime" showTime/>
                <ReferenceField reference="members" source="modifierId" link="show">
                    <TextField source="username"/>
                </ReferenceField>
                <DateField source="modifiedTime" showTime/>
                {/*<EditButton/>*/}
                <ResetPasswordButton/>
            </Datagrid>
        </List>
    )
};
