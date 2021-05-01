import * as React from 'react';
import {formDataBuilder} from "../files/utils";

export const transform = formDataBuilder;

export const transformFactory = (dataProvider, name) => {
    return data => {
        console.info("transform.data:", data);
        return dataProvider.create('attachments', {data: formDataBuilder(data[name].rawFile)})
            .then(response => {
                return {...data, [name]: response.data.id};
            });
    };
}

export default transformFactory;
