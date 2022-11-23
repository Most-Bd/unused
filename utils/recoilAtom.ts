import { atom } from "recoil";

export const categoryTypeState = atom<string>({
  key: "categoryTypeState",
  default: "all",
});
