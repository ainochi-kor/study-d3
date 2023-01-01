import { csv, DSVRowArray, DSVRowString, max, scaleLinear, select } from "d3";
import { NextPage } from "next";
import { useEffect } from "react";
import { ICity } from "../../public/data/part2/type";

const City: NextPage = () => {
  const dataViz = (incomingData: DSVRowArray<string>) => {
    const maxPopulation = max(incomingData, (el) =>
      parseInt(el.population!)
    );
    const yScale = scaleLinear().domain([0, maxPopulation!]).range([0, 460]);
    select("svg").attr("style", "height: 480px; width: 600px");
    select("svg")
      .selectAll("rect")
      .data(incomingData)
      .enter()
      .append("rect")
      .attr("width", 50)
      .attr("height", (d) => yScale(parseInt(d.population!)))
      .attr("x", (d, i) => i * 60)
      .attr("y", (d) => 480 - yScale(parseInt(d.population!)))
      .style("fill", "blue")
      .style("stroke", "red")
      .style("stroke-with", "1px")
      .style("opacity", 0.25);
  };

  useEffect(() => {
    csv("/data/part2/cities.csv").then((data) => dataViz(data));
  }, []);

  return (
    <div>
      <svg></svg>
    </div>
  );
};

export default City;
