import * as React from 'react';
import {
    DateField,
    Edit,
    maxLength,
    maxValue,
    minValue,
    ReferenceField,
    required,
    ShowButton,
    SimpleForm,
    TextField,
    TextInput,
    TopToolbar
} from 'react-admin';
import {DownloadButton} from "../files/DownloadButton";

const AttachmentActions = ({basePath, data, resource}) => (
    <TopToolbar>
        {/*<ListButton basePath={basePath} record={data}/>*/}
        <ShowButton basePath={basePath} record={data}/>
        <DownloadButton filePath={data.path}/>
    </TopToolbar>
);

export const AttachmentEdit = (props) => {
    console.info('AttachmentEdit:', props);
    return (
        <Edit actions={<AttachmentActions/>} undoable={false} {...props} >
            <SimpleForm>
                <TextInput source="name" validate={[required(), maxLength(32)]}/>
                <TextField label={'路径'} source="path" fullWidth/>
                <TextInput label={'大小（字节）'} source="sizes"
                           validate={[required(), minValue(1), maxValue(5000000)]}/>
                {/*<TextInput label={'状态编码'} source="stateId" validate={required()}/>*/}
                <TextInput source="remark" fullWidth multiline validate={[maxLength(255)]}/>
                <ReferenceField reference="users" source="creatorId" link="show">
                    <TextField source="username"/>
                </ReferenceField>
                <DateField source="createdTime" showTime/>
            </SimpleForm>
        </Edit>
    );
};
