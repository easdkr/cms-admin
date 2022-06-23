import { atom } from "recoil";
import keys from "utils/constants/keys";

export const tokenState = atom({
    key: keys.AUTH,
    default: '',
});