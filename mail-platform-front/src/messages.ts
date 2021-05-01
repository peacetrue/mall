import regionMessages from "./modules/regions/messages";
import userMessages from "./modules/users/messages";
import classifyMessages from "./modules/classifys/messages";
import fileMessages from "./modules/files/messages";
import attachmentMessages from "./modules/attachments/messages";
import dictionaryTypeMessages from "./modules/dictionary-types/messages";
import dictionaryValueMessages from "./modules/dictionary-values/messages";
import memberMessages from "./modules/members/messages";
import merchantMessages from "./modules/merchants/messages";
import contactAddressMessages from "./modules/contact-addresses/messages";
import goodsMessages from "./modules/goods/messages";
import orderMessages from "./modules/orders/messages";
import {mergeTranslations} from "react-admin";

export default mergeTranslations(
  userMessages,
  memberMessages,
  merchantMessages,
  goodsMessages,
  orderMessages,
  contactAddressMessages,
  dictionaryTypeMessages,
  dictionaryValueMessages,
  classifyMessages,
  regionMessages,
  fileMessages,
  attachmentMessages,
  {
    ra: {
      messages: {Forbidden: "没有操作权限"}
    }
  }
)
