import { GetServerSideProps, NextPage } from "next";
import { useEffect, useState } from "react";
import path from "path";
import { csv, DSVRowArray, extent, max, mean, min, select } from "d3";

interface P {
  result: any;
}

const LoadCsv: NextPage<P> = ({}) => {
  const [data, setData] = useState<DSVRowArray>();
  useEffect(() => {
    csv("/data/part2/cities.csv").then((e) => {
      select("#city")
        .selectAll("div.cities")
        .data(e)
        .enter()
        .append("div")
        .attr("class", "cities")
        .html((d, i) => d.label);
    });
  }, []);

  useEffect(() => {
    if (!data) return;
  }, [data]);

  useEffect(() => {
    console.log("data", data);
  }, [data]);
  return <div id="city"></div>;
};

export default LoadCsv;
