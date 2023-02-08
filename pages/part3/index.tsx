import styled from "@emotion/styled";
import { NextPage } from "next";
import { useEffect } from "react";
import { createSoccerViz } from "../../src/part3/soccerviz";

const Index: NextPage = () => {
  useEffect(() => {
    createSoccerViz();
  }, []);

  return (
    <Container>
      <title>D3 in Action</title>
      <div id="viz">
        <svg
          style={{
            width: "100%",
            height: "500px",
            border: "1px lightgray solid",
          }}
        />
      </div>
      <div id="controls" />
    </Container>
  );
};

export default Index;

const Container = styled.div`
  text {
    font-size: 10px;
  }
  g > text.active {
    font-size: 30px;
  }
  circle {
    fill: pink;
    stroke: black;
    stroke-width: 1px;
  }
  circle.active {
    fill: red;
  }
  circle.inactive {
    fill: gray;
  }
`;
