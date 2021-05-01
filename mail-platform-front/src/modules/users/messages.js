import {Messages} from "./UserCommon";

export const userMessages = {
    resources: {
        users: {
            name: '用户',
            fields: {
                'id': '主键',
                'username': '用户名',
                'password': '密码',
                ...Messages,
            }
        },
    },
    ra: {
        action: {
            reset_password: '重置密码'
        },
        message: {
            reset_password_success: '密码重置成功!'
        }
    }
}

export default userMessages;
