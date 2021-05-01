import {maxLength, minLength, required} from "react-admin";

export const usernameRule = [required(), minLength(6), maxLength(32)];
export const passwordRule = usernameRule;
export const passwordLooseRule = passwordRule;
export const userRules = {
    username: usernameRule,
    password: passwordRule,
    passwordLoose: passwordLooseRule
}

export default userRules;
