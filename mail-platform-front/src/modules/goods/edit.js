import React from 'react';
import {
    Edit,
    FileField,
    FileInput,
    ImageField,
    ImageInput,
    maxLength,
    NumberInput,
    ReferenceInput,
    required,
    SelectInput,
    SimpleForm,
    TextInput,
    useDataProvider
} from 'react-admin';
import {fileParamBuilder, fileTransformBuilder, multipleInputFormatter} from "../../PeaceFileInfo";
import RichTextInput from "ra-input-rich-text";
import {richTextInputOptions, richTextInputUtils} from "../../Components";
import {TransformDataReducer} from "peacetrue-react-admin";

export const GoodsEdit = (props) => {
    console.info('GoodsEdit:', props);
    let dataProvider = useDataProvider();
    let date = new Date();
    let coverImage = fileParamBuilder('coverImages', `/goods/cover/image/${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`, false);
    let coverVideo = fileParamBuilder('coverVideos', `/goods/cover/video/${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`, false);
    let transformDataArray = [
        fileTransformBuilder(dataProvider, [coverImage, coverVideo]),
        richTextInputUtils.transformBuilder('detail')
    ];
    return (
        <Edit {...props} undoable={false} transform={TransformDataReducer(transformDataArray)}
        >
            <SimpleForm>
                <ImageInput source="coverImages" accept='image/*' multiple
                            minSize={1} maxSize={5 * 1024 * 1024} validate={[required(),]}
                            placeholder={'点击或拖拽上传，支持最大 5M 的图片文件'}
                            format={multipleInputFormatter}
                >
                    <ImageField source="src" title="title"/>
                </ImageInput>
                <FileInput source="coverVideos" accept={'video/*'} multiple
                           minSize={1} maxSize={5 * 1024 * 1024} validate={[required(),]}
                           placeholder={'点击或拖拽上传，支持最大 5M 的视频文件'}
                           format={multipleInputFormatter}
                >
                    <FileField source="src" title="title" target={'_blank'}/>
                </FileInput>
                <TextInput source="name" validate={[required(), maxLength(255)]} resettable fullWidth/>
                <RichTextInput source="detail" {...richTextInputOptions}
                               validate={[required(), maxLength(Math.pow(1024, 4) - 1)]}
                               resettable fullWidth/>
                <NumberInput source="price" min={0} max={Math.pow(10, 10) - 0.01} step={0.01}
                             validate={[required()]}/>
                <ReferenceInput source="display" reference="enums/goodsDisplay" validate={[required(),]}>
                    <SelectInput source="code" optionText="name" resettable/>
                </ReferenceInput>
                <TextInput source="remark" validate={[maxLength(255)]} resettable fullWidth/>
                <NumberInput source="serialNumber" min={1} max={Number.MAX_VALUE} step={1}/>
            </SimpleForm>
        </Edit>
    );
};
