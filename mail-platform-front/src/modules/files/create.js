import * as React from 'react';
import {Create, FileField, FileInput, maxLength, required, SimpleForm, TextInput} from 'react-admin';

import {extractFile, fileFormDataBuilder} from "./utils";

export const FileCreate = (props) => {
    console.info('FileCreate:', props);
    return (
        <Create {...props} transform={data => fileFormDataBuilder({files: extractFile(data.file)})}>
            <SimpleForm>
                <TextInput source={'relativePath'} validate={[maxLength(255)]}/>
                <FileInput label="文件" source="file"
                           minSize={1} maxSize={5000000}
                           validate={[required(),]}
                           placeholder={'点击或拖拽上传，支持最大 5M 的文件'}>
                    <FileField source="src" title="title"/>
                </FileInput>
            </SimpleForm>
        </Create>
    );
};
