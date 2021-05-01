import React from "react";
import {Resource} from "react-admin";

import {DictionaryValueList} from './list';
import {DictionaryValueCreate} from './create';
import {DictionaryValueEdit} from './edit';
import {DictionaryValueShow} from './show';
import BookIcon from '@material-ui/icons/Book';

export const DictionaryValue = {
    list: DictionaryValueList,
    create: DictionaryValueCreate,
    edit: DictionaryValueEdit,
    show: DictionaryValueShow
};
const DictionaryValueResource = <Resource icon={BookIcon} name="dictionary-values" {...DictionaryValue} />;
export default DictionaryValueResource;
