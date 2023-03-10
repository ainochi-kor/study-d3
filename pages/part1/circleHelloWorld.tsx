import { NextPage } from "next";
import { useEffect } from "react";
import * as d3 from "d3";

const CircleHelloWorld: NextPage = () => {
  useEffect(() => {
    d3.select("svg")
      .append("line")
      .attr("x1", 20)
      .attr("y1", 20)
      .attr("x2", 400)
      .attr("y2", 400)
      .style("stroke", "black")
      .style("stroke-width", "2px");

    d3.select("svg").append("text").attr("x", 20).attr("y", 20).text("HELLO");

    d3.select("svg")
      .append("circle")
      .attr("r", 20)
      .attr("cx", 20)
      .attr("cy", 20)
      .style("fill", "red");

    d3.select("svg")
      .append("circle")
      .attr("r", 100)
      .attr("cx", 400)
      .attr("cy", 400)
      .style("fill", "lightblue");

    d3.select("svg").append("text").attr("x", 400).attr("y", 400).text("WORLD");
  }, []);

  return (
    <div id="vizcontainer">
      <svg style={{ width: 500, height: 500, border: "1px solid lightgray" }} />
    </div>
  );
};

export default CircleHelloWorld;
