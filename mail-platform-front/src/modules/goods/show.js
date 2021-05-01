import React from 'react';
import {DateField, ReferenceField, RichTextField, Show, SimpleShowLayout, TextField} from 'react-admin';
import {PeaceLabeledFileField} from "../../PeaceFileField";
import {PeaceLabeledImageField} from "../../PeaceImageField";

export const GoodsShow = (props) => {
    console.info('GoodsShow:', props);
    return (
        <Show {...props}>
            <SimpleShowLayout>
                <PeaceLabeledImageField source="coverImageUrls"/>
                <PeaceLabeledFileField source="coverVideoUrls"/>
                {/*<PeaceLabeledFileField2 source="coverImageUrls"/>*/}
                {/*<FileField source="coverVideo" title="name"/>*/}
                {/*<CustomFileField source="coverVideo"/>*/}
                <TextField source="name"/>
                <RichTextField source="detail"/>
                <ReferenceField source="display" reference="enums/goodsDisplay" link={false}>
                    <TextField source={'name'}/>
                </ReferenceField>
                <TextField source="price"/>
                <TextField source="remark"/>
                <TextField source="serialNumber"/>
                <ReferenceField reference="members" source="creatorId" link={'show'}>
                    <TextField source="username"/>
                </ReferenceField>
                <DateField source="createdTime" showTime/>
                <ReferenceField reference="members" source="modifierId" link={'show'}>
                    <TextField source="username"/>
                </ReferenceField>
                <DateField source="modifiedTime" showTime/>
            </SimpleShowLayout>
        </Show>
    );
};
