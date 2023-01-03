import { scaleLinear, select } from "d3";
import { NextPage } from "next";
import { useEffect, useRef } from "react";

const Stick: NextPage = () => {
  const ref = useRef(null);

  useEffect(() => {
    const yScale = scaleLinear()
      .domain([0, 100, 500])
      .range([0, 50, 100])
      .clamp(true);
    select("svg")
      .selectAll("rect")
      .data([14, 68, 24500, 430, 19, 1000, 5555])
      .enter()
      .append("rect")
      .attr("width", 10)
      .attr("height", (d) => yScale(d))
      .style("fill", "blue")
      .style("stroke", "red")
      .style("stroke-width", "1px")
      .style("opacity", 0.25)
      .attr("x", (d, i) => i * 10)
      .attr("y", (d) => 100 - yScale(d));
  }, []);

  return (
    <div ref={ref}>
      <svg></svg>
    </div>
  );
};

export default Stick;
