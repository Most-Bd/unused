import { atom } from "recoil";
import Product from "./types";

export const categoryTypeState = atom<string>({
  key: "categoryTypeState",
  default: "all",
});

export const modalState = atom<boolean>({
  key: "modalState",
  default: false,
});

export const productState = atom<Product>({
  key: "productState",
  default: {
    id: -1,
    title: "",
    description: "",
    price: 0,
    discountPercentage: 0,
    rating: -1,
    stock: -1,
    brand: "",
    category: "",
    thumbnail: "",
    images: [""],
  },
});
