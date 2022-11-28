import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import collections from "../assets/collections";
import Card from "../components/Card";
import Footer from "../components/Footer";
import ConatctForm from "../components/ConatctForm";
import ScrollButton from "../components/ScrollButton";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Unused | Best Second-hand Clothes Out There </title>
        <meta
          name="description"
          content="Web App for a second-hand clothes selling store"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ScrollButton />
      <Header />

      <main className="overflow-x-hidden min-h-[100vh] mb-8">
        <Banner />

        {/* Collections section */}
        <section className="mt-8 md:mt-0">
          <h1 className="font-serif font-semibold tracking-wider text-center text-3xl mb-8">
            Our Collections
          </h1>
          <div className="w-full mx-auto px-4 flex flex-col sm:flex-row sm:flex-wrap md:w-[90%] lg:w-[75%] xl:w-[1280px]">
            {collections.map((collection) => (
              <Card
                key={collection.key}
                name={collection.name}
                imgUrl={collection.imgUrl}
                toUrl={collection.toUrl}
              />
            ))}
          </div>
        </section>
      </main>

      {/* Add contact section */}
      <ConatctForm />

      <Footer />
    </div>
  );
};

export default Home;
