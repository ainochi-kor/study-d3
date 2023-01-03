import { GetServerSideProps, NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import path from "path";
import { csv, DSVRowArray, extent, max, mean, min, select, html } from "d3";

interface P {
  result: any;
}

const LoadCsv: NextPage<P> = ({}) => {
  const [data, setData] = useState<DSVRowArray>();
  const ref = useRef(null);
  useEffect(() => {
    const cities = select(ref.current);
    csv("/data/part2/cities.csv").then((e) => {
      cities
        .selectAll("div.cities")
        .data(e)
        .join((enter) => enter.append("div"))
        .attr("class", "cities")
        .text((d) => d.label ?? "");
    });
  }, []);

  useEffect(() => {
    if (!data) return;
  }, [data]);

  useEffect(() => {
    console.log("data", data);
  }, [data]);
  return <div ref={ref} id="city"></div>;
};

export default LoadCsv;
