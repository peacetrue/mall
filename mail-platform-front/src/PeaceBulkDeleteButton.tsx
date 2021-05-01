import * as React from "react";
import {BulkDeleteButtonProps} from "ra-ui-materialui/lib/button/BulkDeleteButton";
import {BulkDeleteButton} from "react-admin";

/** default to undoable, this to confirm */
export const PeaceBulkDeleteButton = (props: BulkDeleteButtonProps) => {
  const {undoable = false, ...rest} = props;
  return (<BulkDeleteButton undoable={undoable} {...rest}/>);
};

export default PeaceBulkDeleteButton;
