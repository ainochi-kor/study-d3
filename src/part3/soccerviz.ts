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

declare global {
  interface EventTarget {
    name: string;
  }
}

export const createSoccerViz = () => {
  // 데이터를 로딩하고 로딩된 데이터로 overallTeamViz() 함수를 호출.
  csv("/data/part3/worldcup.csv").then((e) => {
    overallTeamViz(e as unknown as IWorldcup[]);
  });
};

const overallTeamViz = (incomingData: IWorldcup[]) => {
  // 팀별로 <g>를 만들어 레이블을 붙인다.
  select("svg")
    .append("g")
    .attr("id", "teamsG")
    .attr("transform", "translate(50,300)")
    .selectAll("g")
    .data(incomingData)
    .enter()
    // <svg> 요소에 <g> 그룹을 추가하고 자신의 콘텐츠를 중앙으로 이동시킨다.
    .append("g")
    .attr("class", "overallG")
    .attr("transform", (d, i) => `translate(${i * 50},0)`);

  // d3.selectAll()을 매번 다시 입력할 필요가 없도록 셀렉션을 변수에 할당한다.
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

  const buttonClick = (datapoint: PointerEvent) => {
    console.log("datapoint", datapoint);
    if (datapoint) {
      const key = datapoint.target!.name as keyof IWorldcup;
      const maxValue = max(incomingData, (d) => Number(d[key]));

      const radiusScale = (num: number) =>
        scaleLinear()
          .domain([0, maxValue ?? 0])
          .range([2, 20]);

      selectAll("g.overallG")
        .select("circle")
        .transition()
        .duration(1000)
        .attr("r", function (d) {
          return radiusScale(d[key]);
        });
    }
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
