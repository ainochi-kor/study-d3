import * as d3 from "d3";
import { NextPage } from "next";

export const getMinMaxExtent = (array: any[]) => {
  const min = d3.min(array); // 최소 값 반환
  const max = d3.max(array);
  const extent = d3.extent(array); // d3.extent는 입력에 대한 단일 패스로 [min, max]를 반환

  console.log("min", min);
  console.log("max", max);
  console.log("extent", extent);
};

export const getMaxMinIndex = (array: number[]) => {
  const minIndex = d3.minIndex(array);
  const maxIndex = d3.maxIndex(array);

  console.log("minIndex", minIndex);
  console.log("maxIndex", maxIndex);
};

const array = [3, 2, 1, 1, 6, 2, 4];

const flights = [
  { airline: "Icelandair", price: 1621, stops: 3 },
  { airline: "Multiple airlines", price: 1381, stops: 2 },
  { airline: "Air France", price: 1948, stops: 0 },
  { airline: "WestJet", price: 1711, stops: 1 },
  { airline: "Air France", price: 1951, stops: 1 },
  { airline: "French Bee", price: 1780, stops: 1 },
];

const threshold = 0.6;
const numbers = Float64Array.from({ length: 100 }, Math.random);

const Extent: NextPage = () => {
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
      <br /> <br />
      <button
        onClick={() => {
          console.log(d3.min(numbers, (d) => (d >= threshold ? d : NaN)));
        }}
      >
        {`d3.min(numbers, d => d >= threshold ? d : NaN)`}
      </button>
      <br /> <br />
      <button
        onClick={() => {
          const set = new Set([3, 2, 1, 2, 3]);
          console.log(d3.min(set));
        }}
      >
        {`d3.min(set)`}
      </button>
      <br /> <br />
      <button
        onClick={() => {
          const set = new Set([3, 2, 1, 2, 3]);
          console.log(d3.minIndex(set));
        }}
      >
        {`d3.minIndex(set)`}
      </button>
    </div>
  );
};

export default Extent;
