import { group, json, max, scaleLinear, select } from "d3";
import { NextPage } from "next";
import { useEffect } from "react";
import { ITweet } from "../../public/data/part2/type";
import { nest } from "d3-collection";

const Tweets: NextPage = () => {
  const dataViz = (inconmingData: ITweet[]) => {
    const nestedTweets = Array.from(group(inconmingData, (d) => d.user)).map(
      (d) => {
        return {
          key: d[0],
          values: d[1],
          numTweets: d[1].length,
        };
      }
    );

    const maxTweets = max(nestedTweets, (el) => el.numTweets);
    const yScale = scaleLinear()
      .domain([0, maxTweets ?? 0])
      .range([0, 100]);

    select("svg")
      .selectAll("rect")
      .data(nestedTweets)
      .enter()
      .append("rect")
      .attr("width", 50)
      .attr("height", (d) => yScale(d.numTweets))
      .attr("x", (d, i) => i * 60)
      .attr("y", (d) => 100 - yScale(d.numTweets))
      .style("fill", "blue")
      .style("stroke", "red")
      .style("stroke-width", "1px")
      .style("opacity", 0.25);
  };

  useEffect(() => {
    json("/data/part2/tweets.json").then((data) => {
      dataViz((data as { tweets: ITweet[] }).tweets);
    });
  }, []);

  return (
    <div>
      <svg style={{ width: 500, height: 500, border: "1px solid lightgray" }} />
    </div>
  );
};

export default Tweets;
