import styled from "@emotion/styled";
import { NextPage } from "next";
import * as d3 from "d3";
import { useEffect } from "react";

const useJavascript: NextPage = () => {
  useEffect(() => {
    let someData = ["filler", "filler", "filler", "filler"];
    d3.select("div")
      .data(someData)
      .enter()
      .append("div")
      .html("Wow")
      .append("span")
      .html("Even More Wow")
      .style("font-weight", "900");

    let someNumbers = [17, 82, 9, 500, 40];
    let someColors = ["blue", "red", "chartreuse", "orange"];
    let somePeople = [
      {
        name: "Peter",
        age: 27,
      },
      {
        name: "Sulayman",
        age: 24,
      },
      {
        name: "K.C.",
        age: 49,
      },
    ];
    let smallerNumbers = someNumbers.filter(function (el) {
      return el <= 40;
    });

    d3.select("div").data(smallerNumbers).enter().append("div");
  }, []);

  return (
    <Container>
      <div id="borderdiv" />
    </Container>
  );
};

export default useJavascript;

const Container = styled.div`
  #borderdiv {
    width: 200px;
    height: 50px;
    border: 1px solid gray;
  }
`;
