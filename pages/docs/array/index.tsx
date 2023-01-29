import * as d3 from "d3";
import { NextPage } from "next";
import { getMaxMinIndex, getMinMaxExtent } from "./array";

const array = [3, 2, 1, 1, 6, 2, 4];

const flights = [
  { airline: "Icelandair", price: 1621, stops: 3 },
  { airline: "Multiple airlines", price: 1381, stops: 2 },
  { airline: "Air France", price: 1948, stops: 0 },
  { airline: "WestJet", price: 1711, stops: 1 },
  { airline: "Air France", price: 1951, stops: 1 },
  { airline: "French Bee", price: 1780, stops: 1 },
];

const Docs: NextPage = () => {
  return (
    <div>
      <button
        onClick={() => {
          getMinMaxExtent(array);
        }}
      >
        Number min max extent
      </button>
      <br /> <br />
      <button
        onClick={() => {
          getMaxMinIndex([3, 3, 11]);
        }}
      >
        minIndex maxIndex
      </button>
      <br /> <br />
      <button
        onClick={() => {
          getMinMaxExtent(["Driven", "Data", "Documents"]);
        }}
      >
        String min max extent
      </button>
      <br /> <br />
      <button
        onClick={() => {
          console.log("Emotion min: ", d3.min("😻😼😾😸😿😺😽🙀😹"));
        }}
      >
        {`d3.min("😻😼😾😸😿😺😽🙀😹")`}
      </button>
      <br /> <br />
      <button
        onClick={() => {
          console.log(
            "Date: ",
            d3.min([new Date(), new Date("2018"), new Date("2011-03-09")])
          );
        }}
      >
        {`d3.min([new Date(), new Date("2018"), new Date("2011-03-09")])`}
      </button>{" "}
      <br /> <br />
      <button
        onClick={() => {
          console.log("zero min: ", d3.min([]));
        }}
      >
        {"d3.min([])"}
      </button>
      <br /> <br />
      <button
        onClick={() => {
          console.log("minIndex: ", d3.minIndex([NaN, undefined, ,]));
        }}
      >
        {"d3.minIndex([NaN, undefined, ,])"}
      </button>
      <br /> <br />
      <button
        onClick={() => {
          console.log(d3.min(["2", "3", "10"]));
        }}
      >
        {`d3.min(["2", "3", "10"])`}
      </button>
      <br /> <br />
      <button
        onClick={() => {
          console.log(d3.min(["2", "3", "10", "N/A"], (s) => +s));
        }}
      >
        {`d3.min(["2", "3", "10", "N/A"], s => +s)`}
      </button>
      <br /> <br />
      <button
        onClick={() => {
          const strings = ["2", "3", "10", "N/A"];
          const numbers = strings.map((s) => +s);
          console.log(d3.min(numbers));
        }}
      >
        {`other d3.min(["2", "3", "10", "N/A"], s => +s)`}
      </button>
      <br /> <br />
      <button
        onClick={() => {
          console.log(d3.min(flights, (d) => d.price));
        }}
      >
        {`d3.min(flights, d => d.price)`}
      </button>
      <br /> <br />
      <button
        onClick={() => {
          console.log(d3.minIndex(flights, (d) => d.price));
        }}
      >
        {`d3.minIndex(flights, d => d.price)`}
      </button>
      <br /> <br />
      <button
        onClick={() => {
          console.log(flights[d3.minIndex(flights, (d) => d.price)]);
        }}
      >
        {`flights[d3.minIndex(flights, d => d.price)]`}
      </button>
      <br /> <br />
      <button
        onClick={() => {
          console.log(
            d3.least(flights, (a, b) => d3.ascending(a.price, b.price))
          );
        }}
      >
        {`d3.least(flights, (a, b) => d3.ascending(a.price, b.price))`}
      </button>
    </div>
  );
};

export default Docs;
