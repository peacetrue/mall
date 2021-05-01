import React from "react";

export const referencePropsBuilder = (source, dictionaryTypeCode) => ({
    source: `${source}Id`,
    reference: "dictionary-values",
    filter: {dictionaryTypeCode: dictionaryTypeCode},
    perPage: 200,
    sort: {field: 'serialNumber', order: 'ASC'}
});

export default referencePropsBuilder;
