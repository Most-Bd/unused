import Head from "next/head";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { categoryTypeState } from "../utils/recoilAtom";

const About = () => {
  const [categoryType, setCategoryType] = useRecoilState(categoryTypeState);
  const router = useRouter();

  const handleClick = () => {
    setCategoryType("all");
    router.push("/products");
  };

  return (
    <div className="min-h-[100vh] flex flex-col">
      <Head>
        <title>Unused | About</title>
        <meta
          name="description"
          content="Web App for a second-hand clothes selling store"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="overflow-x-hidden grow w-full mx-auto mb-8 md:w-[90%] lg:w-[75%] xl:w-[1280px] mt-28 text-center sm:mt-32">
        <h1 className="font-serif text-4xl tracking-widest font-bold text-darkGreen">
          ABOUT US
        </h1>
        <p className="mt-4 block mx-auto text-darkGreen p-8 rounded-2xl bg-lightGreen/30 text-[1.25rem] sm:w-[70%] w-96 md:text-2xl md:min-w-[700px]">
          We are a shop that sells second-hand clothes. Our main product stands
          out because of its reputation and convenience. Our target audience is
          adults. We want to convey a sense of faithfulness, while at the same
          time being approachable.
        </p>
        <div className="mt-6 text-2xl mx-auto text-darkGreen font-bold tracking-wider px-10 max-w-[768px]">
          <p className="mb-4 italic">What are you waiting for??</p>
          Go ahead and and visit our{" "}
          <span
            className="text-lightGreen underline cursor-pointer"
            onClick={handleClick}
          >
            products page
          </span>{" "}
          to find the best quality clothes for the best prices!!
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
