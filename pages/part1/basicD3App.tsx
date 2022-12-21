import { NextPage } from "next";
import { useEffect } from "react";
import * as d3 from "d3";

const BasicD3App: NextPage = () => {
  useEffect(() => {
    d3.select("div").style("border", "1px black solid").html("hello world");
    d3.select("div")
      .style("background-color", "pink")
      .style("font-size", "24px")
      .attr("id", "newDiv")
      .attr("class", "d3div")
      .on("click", function () {
        console.log("You clicked a div");
      });
  }, []);
  return <div></div>;
};

export default BasicD3App;
