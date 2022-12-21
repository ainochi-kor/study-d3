import styled from "@emotion/styled";
import { NextPage } from "next";
import { useEffect } from "react";
import * as d3 from "d3";

const useStylesheet: NextPage = () => {
  useEffect(() => {
    // attr("class", "name"): class 덮어쓰기
    d3.select("circle").attr("class", "tentative");
    // classed: class 추가 / 삭제 메소드
    d3.select("circle").classed("active", true);
  }, []);
  return (
    <Container
      id="infovizDiv"
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <svg
        style={{
          width: "100%",
          height: "100%",
          border: "1px lightgray solid",
        }}
      >
        <path d="M 10,60 40,30 50,50 60,30 70,80" />
        <polygon
          className="inactive"
          points="80, 400 120,400 160,440 120,480 60,460"
        />
        <g>
          <circle className="active tentative" cy="100" cx="200" r="30" />
          <rect className="active" x="410" y="200" width="100" height="50" />
        </g>
      </svg>
    </Container>
  );
};

export default useStylesheet;

const Container = styled.div`
  .inactive,
  .tentative {
    stroke: darkgray;
    stroke-width: 2px;
    stroke-dasharray: 5 5;
  }

  .tentative {
    opacity: 0.5;
  }

  .active {
    stroke: black;
    stroke-width: 4px;
    stroke-dasharray: 1;
  }

  circle {
    fill: red;
  }

  rect {
    fill: darkgray;
  }
`;
