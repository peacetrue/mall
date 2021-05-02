import {RegionMessages} from "peacetrue-region";
import {UserMessages} from "peacetrue-user";
import {ClassifyMessages} from "./modules/classifys/Messages";
import {FileMessages} from "peacetrue-file";
import {AttachmentMessages} from "peacetrue-attachment";
import {DictionaryTypeMessages, DictionaryValueMessages} from "peacetrue-dictionary";
import {MemberMessages} from "peacetrue-member";
import {MerchantMessages} from "peacetrue-merchant";
import {ContactAddressMessages} from "peacetrue-contact-address";
import {GoodsMessages} from "peacetrue-goods";
import {OrderMessages} from "peacetrue-order";
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
