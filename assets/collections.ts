interface Collection {
  key: number;
  name: string;
  imgUrl: string;
  toUrl: string;
}

const collections: Collection[] = [
  {
    key: 1,
    name: "Men's Shirts",
    imgUrl:
      "https://stylesatlife.com/wp-content/uploads/2020/03/Fancy-Shirts-For-Mens.jpg.webp",
    toUrl: "mens-shirts",
  },
  {
    key: 2,
    name: "Men's Shoes",
    imgUrl:
      "https://static.nike.com/a/images/w_1920,c_limit/4c8bdb53-49a1-4b03-9b3f-5334e257a8bd/how-to-pick-good-shoes-for-travel.jpg",
    toUrl: "mens-shoes",
  },
  {
    key: 3,
    name: "Women's Dresses",
    imgUrl:
      "https://images.pexels.com/photos/2916814/pexels-photo-2916814.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    toUrl: "womens-dresses",
  },
  {
    key: 4,
    name: "Women's Shoes",
    imgUrl:
      "https://sc01.alicdn.com/kf/HTB1WHyCX.GF3KVjSZFoq6zmpFXaw/228297554/HTB1WHyCX.GF3KVjSZFoq6zmpFXaw.jpg_.webp",
    toUrl: "womens-shoes",
  },
];

export type { Collection };
export default collections;
