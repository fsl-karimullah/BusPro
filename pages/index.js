import Head from "next/head";
import Homepage from "./Homepage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Homepage />
    </div>
  );
}
