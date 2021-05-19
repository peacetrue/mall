import {RegionMessages} from "@peace/region";
import {UserMessages} from "@peace/user";
import {ClassifyMessages} from "@peace/classify";
import {FileMessages} from "@peace/file";
import {AttachmentMessages} from "@peace/attachment";
import {DictionaryTypeMessages, DictionaryValueMessages} from "@peace/dictionary";
import {MemberMessages} from "@peace/member";
import {MerchantMessages} from "@peace/merchant";
import {ContactAddressMessages} from "@peace/contact-address";
import {GoodsMessages} from "@peace/goods";
import {OrderMessages} from "@peace/order";
import {mergeTranslations} from "react-admin";

export const Messages = mergeTranslations(
  UserMessages,
  MemberMessages,
  MerchantMessages,
  GoodsMessages,
  OrderMessages,
  ContactAddressMessages,
  DictionaryTypeMessages,
  DictionaryValueMessages,
  ClassifyMessages,
  RegionMessages,
  FileMessages,
  AttachmentMessages,
  {
    ra: {
      messages: {Forbidden: "没有操作权限"}
    }
  }
);
export default Messages
