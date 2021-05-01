import {Button, useListContext} from "react-admin";
import React from "react";

export const ChildrenButton = ({record}) => {
    const {
        filterValues,
        setFilters,
    } = useListContext();
    return record.leaf ? null : (
        <Button label='下级' onClick={e => {
            e.stopPropagation();
            setFilters({...filterValues, parentId: record.id})
        }}>
            <ExpandMoreSharpIcon/>
        </Button>
    );
}

export default ChildrenButton;
