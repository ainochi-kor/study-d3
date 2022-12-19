import { NextPage } from "next";
import Head from "next/head";
import * as d3 from "d3";
import { useEffect } from "react";

const Home: NextPage = () => {
  useEffect(() => {
    d3.select("#someDiv").style("border", "5px darkgray dashed");
    d3.select("#someDiv").attr("id", "newID");
    d3.select("#someChkbox").property("checked", true);
  }, []);

  return (
    <>
      <Head>
        <title>Study D3.js</title>
      </Head>

      <h2>1-1</h2>
      <div
        id="someDiv"
        style={{ width: "100%", height: "100px", border: "black 1px solid" }}
      >
        <input id="someChkbox" type={"checkbox"} />
      </div>

      <h2>1-2</h2>
      <div id="infovizDiv">
        <svg
          style={{
            width: "100%",
            height: "500px",
            border: "1px lightgray solid",
          }}
        >
          <path
            d="M 10,60 40,30 50,50 60,30, 70,80"
            style={{ fill: "black", stroke: "gray", strokeWidth: "4px" }}
          />
          <polygon
            style={{ fill: "gray" }}
            points="80,400 120,400, 160,440 120,480 60,460"
          />
          <g>
            <line
              x1="200"
              y1="100"
              x2="450"
              y2="225"
              style={{ stroke: "black", strokeWidth: "2px" }}
            />
            <circle cy="100" cx="200" r="30" />
            <rect
              x="410"
              y="200"
              width="100"
              height="50"
              style={{ fill: "pink", stroke: "black", strokeWidth: "1px" }}
            />
          </g>
        </svg>
      </div>
    </>
  );
};

export default Home;
