import * as React from 'react';
import {FileFieldProps} from "ra-ui-materialui/lib/field/FileField";

/** 文件信息 */
export type FileInfo = {
  name: string;
  url: string;
  [rest: string]: any
};

/** http://host:port/path/name.png */
export function toFileInfo(value: string): FileInfo {
  return {
    name: value.split("/").pop() || 'undefined',
    // url: `${value}?dispositionType=inline`,
    url: value,
  }
}

export function toFileInfos(values: Array<string>): Array<FileInfo> {
  return values.map(item => toFileInfo(item));
}

export function formatFileFieldProps(props: FileFieldProps): FileFieldProps {
  let {source, src, title = 'name', target = '_blank', record, ...rest} = props;
  if (record == null || source == null) return {source, src, title, record, target, ...rest};

  let value = record[source];
  if (value instanceof Array) {
    record = {id: record.id, [source]: toFileInfos(value)};
    src = 'url';
  } else {
    record = {id: record.id, ...toFileInfo(value)};
    source = 'url';
  }
  return {source, src, title, record, target, ...rest};
}


/*
export const LabeledBuilder = (BaseComponent: ComponentType) => {
  let LabeledBaseComponent: typeof Labeled = ({label, translate, ...rest}: LabeledProps) => {
    debugger
    label = label || translate(`resources.${rest.resource}.fields.${rest.source}`);
    return (
      <Labeled label={label}>
        <BaseComponent {...rest}/>
      </Labeled>
    );
  };
  return withTranslate(LabeledBaseComponent)
}
export const PeaceLabeledFileField2 = LabeledBuilder(PeaceFileField);
*/
