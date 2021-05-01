import * as React from "react";
import {Button, ButtonProps, Record, useDataProvider, useNotify, useTranslate} from "react-admin";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";

export const ResetPasswordButton = (props: ButtonProps) => {
  const record = props.record as Record;
  const translate = useTranslate();
  let dataProvider = useDataProvider(), notify = useNotify();
  let onClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    let params = {id: record.id, data: {id: record.id}, previousData: record};
    dataProvider.update(`${props.resource}/password/reset`, params)
      .then(data => notify('ra.message.reset_password_success', 'info', {}, false, 10 * 1000));
  };
  return (<Button label={translate('ra.action.reset_password')} onClick={onClick}><RotateLeftIcon/></Button>)
}
export default ResetPasswordButton;
