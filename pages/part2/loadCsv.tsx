import { GetServerSideProps, NextPage } from "next";
import { useEffect, useState } from "react";
import path from "path";
import { csv, DSVRowArray } from "d3";

interface P {
  result: any;
}

const LoadCsv: NextPage<P> = ({}) => {
  const [data, setData] = useState<DSVRowArray>();
  useEffect(() => {
    csv("/data/part2/cities.csv").then((e) => {
      setData(e);
      return "";
    });
  }, []);

  useEffect(() => {
    console.log("data", data);
  }, [data]);
  return <div></div>;
};

export default LoadCsv;
