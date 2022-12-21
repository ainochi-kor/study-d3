import { NextPage } from "next";
import Head from "next/head";
import * as d3 from "d3";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Study D3.js</title>
      </Head>
      <div>
        <h2>part1</h2>
        <p onClick={() => router.push("/part1")} style={{ cursor: "pointer" }}>
          index
        </p>
        <p
          onClick={() => router.push("/part1/useStylesheet")}
          style={{ cursor: "pointer" }}
        >
          useStyleSheet
        </p>
        <p
          onClick={() => router.push("/part1/useJavascript")}
          style={{ cursor: "pointer" }}
        >
          useJavascript
        </p>
        <p
          onClick={() => router.push("/part1/basicD3App")}
          style={{ cursor: "pointer" }}
        >
          basicD3App
        </p>
        <p
          onClick={() => router.push("/part1/circleHelloWorld")}
          style={{ cursor: "pointer" }}
        >
          circleHelloWorld
        </p>
      </div>
    </>
  );
};

export default Home;
