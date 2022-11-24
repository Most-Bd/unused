import { atom } from "recoil";

export const categoryTypeState = atom<string>({
  key: "categoryTypeState",
  default: "all",
});

export const modalState = atom<boolean>({
  key: "modalState",
  default: false,
});
