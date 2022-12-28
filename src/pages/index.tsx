import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>My Film DAO</title>
        <meta
          name="description"
          content="My Film DAO"
        />
      </Head>
      <HomeView />
    </div>
  );
};

export default Home;
