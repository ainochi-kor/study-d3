import { extent, group, json, max, scaleLinear, scaleTime, select } from "d3";
import { NextPage } from "next";
import { useEffect } from "react";
import { ITweet } from "../../public/data/part2/type";

const Index: NextPage = () => {
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

    const newData = inconmingData.map((el) => {
      return {
        ...el,
        impact: el.favorites.length + el.retweets.length,
        tweetTime: new Date(el.timestamp),
      };
    });

    const maxImpact = max(newData, (el) => el.impact);
    const startEnd = extent(newData, (el) => el.tweetTime);

    // startEnd is Array
    const timeRamp = scaleTime()
      .domain(startEnd as [Date, Date])
      .range([20, 480]);
    const yScale = scaleLinear()
      .domain([0, maxImpact ?? 0])
      .range([0, 460]);
    const radiusScale = scaleLinear()
      .domain([0, maxImpact ?? 0])
      .range([1, 20]);
    // 영향력을 흰색과 진한 빨간색 사이의 색으로 대응하는 스케일을 생성.
    const colorScale = scaleLinear<string, string>()
      .domain([0, maxImpact ?? 0])
      .range(["#FFFFFF", "#990000"]);

    select("svg")
      .selectAll("circle")
      .data(newData)
      .enter()
      .append("circle")
      .attr("r", (d) => radiusScale(d.impact))
      .attr("cx", (d) => timeRamp(d.tweetTime))
      .attr("cy", (d) => 480 - yScale(d.impact))
      .style("fill", (d) => colorScale(d.impact))
      .style("stroke", "black")
      .style("stroke-width", "1px");
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

export default Index;
