import { Header, Navbar } from "@/components";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mededx Task</title>
        <meta name="description" content="Mededx Task" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="text-3xl text-black">
        <Header />
        <Navbar />
      </main>
    </>
  );
}
