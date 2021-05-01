import {UserMessages} from "../users/Messages";

export const MerchantMessages = {
  resources: {
    merchants: {
      name: '商家',
      fields: {
        ...UserMessages.resources.users.fields
      }
    },
  }
}

export default MerchantMessages;
