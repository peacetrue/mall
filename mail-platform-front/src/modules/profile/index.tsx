import * as React from "react";
import {Box, Typography} from '@material-ui/core';
import {
  DateField,
  Edit,
  Loading,
  PasswordInput,
  SaveButton,
  SimpleForm,
  SimpleShowLayout,
  TextField,
  Toolbar,
  useGetIdentity
} from "react-admin";
import Paper from '@material-ui/core/Paper';
import {UserRules} from "@peace/user";

const EditToolbar = (props: any) => (
  <Toolbar {...props} >
    <SaveButton/>
  </Toolbar>
);

export const Profile = (props: any) => {
  const {staticContext, ...rest} = props;
  const {loading: identityLoading, identity} = useGetIdentity();
  if (identityLoading) {
    return (<Loading loadingPrimary="ra.page.loading" loadingSecondary="ra.message.loading"/>);
  }
  return (
    <Box p="1em">
      <Box display="flex">
        <Box flex={2} mr="1em">
          <Paper>
            <Box p='1em'><Typography variant="h6">用户信息</Typography></Box>
            <SimpleShowLayout resource={'users'} record={identity}>
              <TextField source="username"/>
              <DateField source="createdTime" showTime/>
              <DateField source="modifiedTime" showTime/>
            </SimpleShowLayout>
          </Paper>
        </Box>
        <Box flex={2} ml="1em">
          <Paper>
            <Box p='1em'><Typography variant="h6">密码修改</Typography></Box>
            <Edit id="profile"
                  basePath="/profile"
                  resource='profile'
                  title={`个人资料`}
                  undoable={false}
                  transform={data => ({...data, id: null, _query: {_type: 'password'}})}
                  {...rest}
            >
              <SimpleForm toolbar={<EditToolbar/>}>
                <PasswordInput label={'原密码'} source="oldPassword" validate={UserRules.password} fullWidth/>
                <PasswordInput label={'新密码'} source="newPassword" validate={UserRules.password} fullWidth/>
              </SimpleForm>
            </Edit>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}
export default Profile;
