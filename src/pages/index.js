import Head from "next/head";
import Link from "next/link";
import Layout from "../pages/component/Layout";
import Hero from "../pages/component/Hero"



export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Next.js 101</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-gray-200 p-4 ">
        <p>Welcome to Next.js 101!</p>
        <Hero />
      </main>
    </Layout>
  );
}
