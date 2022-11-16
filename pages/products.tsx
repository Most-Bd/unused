import Head from "next/head";
import { useEffect, useState } from "react";
import Header from "../components/Header";

interface Context {
  query: {
    type: string;
  };
}

interface Props {
  type: string;
}

const Products = (props: Props) => {
  const [types, setTypes] = useState("all");

  useEffect(() => {
    setTypes(props.type);
  }, []);

  return (
    <div>
      <Head>
        <title>Unused | Products </title>
        <meta
          name="description"
          content="Web App for a second-hand clothes selling store"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </div>
  );
};

export const getServerSideProps = (context: Context) => {
  return {
    props: {
      type: context.query.type,
    },
  };
};

export default Products;
