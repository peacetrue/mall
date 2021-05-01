import * as React from "react";
import {Button, useDataProvider, useNotify, useRefresh} from "react-admin";
import ReorderIcon from '@material-ui/icons/Reorder';

export const RearrangeButton = (props) => {
    let dataProvider = useDataProvider(),
        notify = useNotify(),
        refresh = useRefresh();
    let onClick = (e) => {
        e.stopPropagation();
        dataProvider.update('classifys/rearrange', {id: 1, data: {id: 1}})
            .then(data => {
                notify('操作成功!');
                refresh();
            });
    };
    return (<Button label={'排序'} onClick={onClick}><ReorderIcon/></Button>)
}

export default RearrangeButton;
