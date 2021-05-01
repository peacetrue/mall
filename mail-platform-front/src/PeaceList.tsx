import React, {ReactElement} from 'react';
import {List, ListProps} from "react-admin";
import {PeaceBulkActionButtons} from "./PeaceBulkActionButtons";

export const PeaceList = (props: ListProps & { children: ReactElement; }) => {
  console.info('PeaceList:', props);
  const {
    permissions, children,
    bulkActionButtons = <PeaceBulkActionButtons/>,
    ...rest
  } = props;
  return (
    <List bulkActionButtons={bulkActionButtons}
          sort={{field: 'createdTime', order: 'DESC'}}
          {...rest}
    >
      {children}
    </List>
  )
};

export default PeaceList;
