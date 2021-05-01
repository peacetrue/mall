import * as React from 'react';
import {BooleanField, FunctionField, Show, SimpleShowLayout, TextField, TopToolbar} from 'react-admin';
import {DownloadButton} from "./DownloadButton";
import prettyBytes from "pretty-bytes";

const FileActions = ({basePath, data, resource}) => (
    <TopToolbar>
        {/*<ListButton basePath={basePath} record={data}/>*/}
        <DownloadButton filePath={data.path}/>
    </TopToolbar>
);

export const FileShow = (props) => {
    console.info('FileShow:', props);
    return (
        <Show actions={<FileActions/>} {...props} >
            <SimpleShowLayout>
                <BooleanField source="folder"/>
                <TextField source="name"/>
                <TextField source="path"/>
                <FunctionField source='size' render={record => `${prettyBytes(record.sizes)}`}/>
            </SimpleShowLayout>
        </Show>
    );
};
