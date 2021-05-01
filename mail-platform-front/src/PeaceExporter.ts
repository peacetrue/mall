import jsonExport from "jsonexport/dist";

import {downloadCSV} from 'react-admin';
import {Exporter} from "ra-core";
import {values} from "peacetrue-core";

type Resource = {
  name: string,
  fields: {
    [key: string]: string
  }
}

export function fromPartial(
  object: Record<string, any>,
  fields: string[]
): Record<string, any> {
  return Object.fromEntries(fields.map((name) => [name, object[name]]));
}

export const ExporterBuilder = (resources: Resource, headerFields?: string[]): Exporter => {
  let fields = resources.fields;
  return (records, fetchRelatedRecords, dataProvider, resource) => {
    let record = records[0];
    if (headerFields) {
      records = records.map((item: Record<string, any>) => fromPartial(item, headerFields as string[]));
    } else {
      headerFields = Object.keys(record);
    }
    let rename = values(fields, headerFields);
    jsonExport(records, {
      headers: headerFields,
      rename: rename
    }, (err, csv) => {
      downloadCSV('\uFEFF' + csv, resources.name);
    });
  }
}

export default ExporterBuilder;
