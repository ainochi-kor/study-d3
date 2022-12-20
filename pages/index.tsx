import { NextPage } from "next";
import Head from "next/head";
import * as d3 from "d3";
import { useEffect } from "react";

const Home: NextPage = () => {
  useEffect(() => {
    d3.select("#someDiv").style("border", "5px darkgray dashed");
    d3.select("#someDiv").attr("id", "newID");
    d3.select("#someChkbox").property("checked", true);

    //* 원 제거
    // d3.select("circle1``").remove();
    //* 사각형의 색상을 보라색으로 변경
    d3.select("rect").style("fill", "purple");
    //* 정보 시각화는 언제나 어두운 배경일 때 간지남
    d3.select("svg").style("background", "darkgray");
  }, []);

  return (
    <>
      <Head>
        <title>Study D3.js</title>
      </Head>
    </>
  );
};

export default Home;
