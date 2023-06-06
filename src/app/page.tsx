import Head from "next/head";
import { Hero } from "./components";

export default function Home() {
  return (
    <>
      <Head>
        <title>CushyCo</title>
      </Head>
      <Hero></Hero>
    </>
  );
}
