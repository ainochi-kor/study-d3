import { NextPage } from "next";
import * as d3 from "d3";

const plastics: {
  source: string;
  target: string;
  date: Date;
  value: number;
  weight: number;
}[] = [
  {
    source: "CAN",
    target: "CHN",
    date: new Date("2017-01-01"),
    value: 2042849,
    weight: 3423283,
  },
  {
    source: "CAN",
    target: "CHN",
    date: new Date("2017-03-01"),
    value: 2485664,
    weight: 4016028,
  },
  {
    source: "CAN",
    target: "CHN",
    date: new Date("2017-04-01"),
    value: 2209183,
    weight: 3612766,
  },
  {
    source: "CAN",
    target: "CHN",
    date: new Date("2017-05-01"),
    value: 1547378,
    weight: 2404447,
  },
];

const total2017 = d3.sum(
  plastics.filter((d) => d.date.getFullYear() === 2017),
  (d) => d.weight
);

const SumPage: NextPage = () => {
  return (
    <div>
      <button
        onClick={() => {
          console.log(d3.sum([1, 2, 3, -0.5]));
        }}
      >{`d3.sum([1, 2, 3, -0.5])`}</button>
      <br />
      <button
        onClick={() => {
          console.log(d3.sum(plastics, (d) => d.weight));
        }}
      >{`d3.sum(plastics, d => d.weight)`}</button>
      <br />
      <button
        onClick={() => {
          console.log(d3.sum(plastics, (d) => d.value));
        }}
      >{`d3.sum(plastics, d => d.value)`}</button>
      <br />
      <button
        onClick={() => {
          console.log(total2017);
        }}
      >{`total2017`}</button>
      <br />
    </div>
  );
};

export default SumPage;
