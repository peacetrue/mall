import React from "react";

export const parentIdReferenceProps = {
    source: 'parentId',
    reference: "classifys",
    perPage: 200,
    sort: {field: 'code', order: 'ASC'}
};

export const referencePropsBuilder = (source) => ({
    source: `${source}Id`,
    reference: "classifys",
    filter: {typeCode: source},
    perPage: 200,
    sort: {field: 'id', order: 'ASC'}
});

export const textFormatter = record => `${record.code}(${record.name})`;

