import {
  csv,
  selectAll,
  DSVRowArray,
  extent,
  max,
  mean,
  min,
  select,
  html,
  scaleLinear,
} from "d3";
import { IWorldcup } from "../../public/data/part3/worldcup.type";

export const createSoccerViz = () => {
  // 데이터를 로딩하고 로딩된 데이터로 overallTeamViz() 함수를 호출.
  csv("/data/part3/worldcup.csv").then((e) => {
    overallTeamViz(e as unknown as IWorldcup[]);
  });
};

const overallTeamViz = (incomingData: IWorldcup[]) => {
  select("svg")
    .append("g")
    .attr("id", "teamsG")
    .attr("transform", "translate(50,300)")
    .selectAll("g")
    .data(incomingData)
    .enter()
    .append("g")
    .attr("class", "overallG")
    .attr("transform", (d, i) => `translate(${i * 50},0)`);

  const teamG = selectAll("g.overallG");

  teamG
    .append("circle")
    .attr("r", 20)
    .style("fill", "pink")
    .style("stroke", "black")
    .style("stroke-width", "1px");

  teamG
    .append("text")
    .style("text-anchor", "middle")
    .attr("y", 30)
    .style("font-size", "10px")
    .text((d) => (d as IWorldcup).team);

  const dataKeys = Object.keys(incomingData[0]).filter(
    (el) => el !== "team" && el !== "region"
  );

  const buttonClick = (event: PointerEvent, datapoint: string) => {
    const key = datapoint as keyof IWorldcup;
    const maxValue = max(incomingData, (d) => Number(d[key]));

    const radiusScale = scaleLinear()
      .domain([0, maxValue ?? 0])
      .range([2, 20]);

    selectAll("g.overallG")
      .select("circle")
      .attr("r", (d) => {
        return radiusScale((d as IWorldcup)[key] as number);
      });
  };

  const highlightRegion = (d: any) => {
    console.log("d", d);
  };

  select("#controls")
    .selectAll("button.teams")
    .data(dataKeys)
    .enter()
    .append("button")
    .attr("name", (d) => d)
    .on("click", buttonClick)
    .html((d) => d);

  teamG.on("mouseover", highlightRegion);
};
