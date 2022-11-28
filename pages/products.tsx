import Head from "next/head";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";
import ScrollButton from "../components/ScrollButton";
import { categoryTypeState, modalState } from "../utils/recoilAtom";
import requests from "../utils/request";
import Product from "../utils/types";

interface Props {
  mensShirts: Product[];
  mensShoes: Product[];
  womensDresses: Product[];
  womensShoes: Product[];
}

const Products = ({
  mensShirts,
  mensShoes,
  womensDresses,
  womensShoes,
}: Props) => {
  const [sortOption, setSortOption] = useState("low-to-high");
  const [productsToMap, setproductsToMap] = useState<Product[]>([]);
  const [resultCount, setResultCount] = useState(0);
  const [isMounted, setIsMounted] = useState(true);

  const [categoryType, setCategoryType] = useRecoilState(categoryTypeState);
  const showModal = useRecoilValue(modalState);

  // Custom sort function because the default didn't work (typescript error)
  const customSort = (
    prod_1: Product,
    prod_2: Product,
    sortOp: string
  ): number => {
    if (sortOp === "low-to-high") {
      if (prod_1.price > prod_2.price) return 1;
      if (prod_1.price < prod_2.price) return -1;
      else return 0;
    } else if (sortOp === "high-to-low") {
      if (prod_1.price < prod_2.price) return 1;
      if (prod_1.price > prod_2.price) return -1;
      else return 0;
    } else {
      return 0;
    }
  };

  // Controlling what items are displayed based on their category and the sorting option
  useEffect(() => {
    setIsMounted(true);
    if (isMounted) {
      setCategoryType(categoryType);

      switch (categoryType) {
        case "all":
          setproductsToMap([
            ...mensShirts,
            ...mensShoes,
            ...womensDresses,
            ...womensShoes,
          ]);
          setResultCount(
            [...mensShirts, ...mensShoes, ...womensDresses, ...womensShoes]
              .length
          );

          break;
        case "mens-shirts":
          setproductsToMap(mensShirts);
          setResultCount(mensShirts.length);
          break;
        case "mens-shoes":
          setproductsToMap(mensShoes);
          setResultCount(mensShoes.length);
          break;
        case "womens-dresses":
          setproductsToMap(womensDresses);
          setResultCount(womensDresses.length);
          break;
        case "womens-shoes":
          setproductsToMap(womensShoes);
          setResultCount(womensShoes.length);
          break;
      }

      switch (sortOption) {
        case "low-to-high":
          setproductsToMap((prev) => [
            ...prev.sort((p_1, p_2) => customSort(p_1, p_2, sortOption)),
          ]);
          break;
        case "high-to-low":
          setproductsToMap((prev) => [
            ...prev.sort((p_1, p_2) => customSort(p_1, p_2, sortOption)),
          ]);
          break;
      }
    }

    return () => {
      setIsMounted(false);
    };
  }, [categoryType, sortOption]);

  return (
    <div className={`${showModal && "!h-screen overflow-hidden"}`}>
      <Head>
        <title>Unused | Products</title>
        <meta
          name="description"
          content="Web App for a second-hand clothes selling store"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ScrollButton />
      <Header />

      <ProductModal />

      <main className="first-letter:overflow-x-hidden min-h-[100vh] mb-4">
        <h1 className="mx-auto w-[90%] font-bold text-center text-3xl mt-32 tracking-wider leading-normal sm:mt-36 sm:text-4xl md:w-[700px] md:text-[40px] md:leading-normal">
          High Quality Second-hand Clothes with the Best Prices
        </h1>
        <div className="w-full mx-auto md:w-[90%] lg:w-[75%] xl:w-[1280px]">
          {/* Filtering div */}
          <div className="flex mx-auto items-end">
            <p className="hidden w-[15%] font-serif font-semibold text-darkGreen text-xl tracking-wider mb-2 ml-4 md:inline">
              {resultCount} Results
            </p>
            <div className="flex justify-between items-center space-x-8 mt-4 mx-auto w-[90%] md:w-fit md:mr-4 md:justify-end">
              <label
                htmlFor="collection-select"
                className="flex flex-col w-fit text-center text-lg font-serif font-semibold text-darkGreen tracking-wider md:text-xl"
              >
                Collection
                <select
                  name="collection"
                  id="collection-select"
                  className="py-2 px-2 w-fit mx-auto mt-2 border-2 border-darkGreen text-sm font-sans tracking-wide text-darkGreen cursor-pointer rounded-lg transition-all duration-300 md:text-lg focus:border-darkGreen/50"
                  value={categoryType}
                  onChange={(e) => setCategoryType(e.target.value)}
                >
                  <option value="all">All</option>
                  <option value="mens-shirts">Men's Shirts</option>
                  <option value="mens-shoes">Men's Shoes</option>
                  <option value="womens-dresses">Women's Dresses</option>
                  <option value="womens-shoes">Women's Shoes</option>
                </select>
              </label>
              <label
                htmlFor="sort-select"
                className="flex flex-col w-fit text-center text-lg font-serif font-semibold text-darkGreen tracking-wider md:text-xl"
              >
                Sort by
                <select
                  name="sort"
                  id="sort-select"
                  className="py-2 px-2 w-fit mx-auto mt-2 border-2 border-darkGreen text-sm font-sans tracking-wide text-darkGreen cursor-pointer rounded-lg transition-all duration-300 md:text-lg  focus:border-darkGreen/50"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  <option value="low-to-high">Price: Low to High</option>
                  <option value="high-to-low">Price: High to Low</option>
                </select>
              </label>
            </div>
          </div>
          <hr className="hidden border border-darkGreen/30 rounded-2xl mt-3 md:block" />

          {/* Products div */}
          <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 xl:grid-cols-3">
            {productsToMap?.map(
              (prod) =>
                prod.stock && (
                  <ProductCard
                    key={prod.id}
                    id={prod.id}
                    title={prod.title}
                    description={prod.description}
                    price={prod.price}
                    discountPercentage={prod.discountPercentage}
                    rating={prod.rating}
                    stock={prod.stock}
                    brand={prod.brand}
                    category={prod.category}
                    thumbnail={prod.thumbnail}
                    images={prod.images}
                  />
                )
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export const getServerSideProps = async () => {
  const [mensShirts, mensShoes, womensDresses, womensShoes] = await Promise.all(
    [
      fetch(requests.mensShirts)
        .then((res) => res.json())
        .catch((err) => console.log(err.message)),
      fetch(requests.mensShoes)
        .then((res) => res.json())
        .catch((err) => console.log(err.message)),
      fetch(requests.womensDresses)
        .then((res) => res.json())
        .catch((err) => console.log(err.message)),
      fetch(requests.womensShoes)
        .then((res) => res.json())
        .catch((err) => console.log(err.message)),
    ]
  );

  return {
    props: {
      mensShirts: mensShirts.products || [],
      mensShoes: mensShoes.products || [],
      womensDresses: womensDresses.products || [],
      womensShoes: womensShoes.products || [],
    },
  };
};

export default Products;
