import { NextPage } from "next";
import * as d3 from "d3";

const D3ME: NextPage = () => {
  const numbers = [
    83,
    32,
    14,
    52,
    31,
    66,
    12,
    11,
    0,
    78,
    60,
    97,
    47,
    37,
    91,
    58,
    48,
    55,
    98,
    45,
    64,
    1,
    17,
    39,
    82,
    24,
    5,
    40,
    61,
    27,
    57,
    34,
    56,
    26,
    30,
    36,
    43,
    80,
    85,
    68,
    75,
    50,
    59,
    44,
    18,
    19,
    88,
    87,
    41,
    90,
    4,
    81,
    94,
    89,
    93,
    22,
    3,
    67,
    13,
    35,
    96,
    16,
    7,
    15,
    20,
    76,
    63,
    49,
    25,
    "95",
    86,
    99,
    28,
    62,
    71,
    undefined,
    21,
    10,
    72,
    29,
    51,
    46,
    73,
    74,
    9,
    65,
    77,
    92,
    6,
    8,
    2,
    79,
    53,
    69,
    70,
    33,
    54,
    42,
    23,
    84,
    38,
    NaN,
    "Fred",
  ];
  return (
    <div>
      <button
        onClick={() => {
          console.log(d3.mean(numbers as any));
        }}
      >{`d3.mean(numbers)`}</button>
      <br />
      <button
        onClick={() => {
          console.log(d3.median([0, 1, 5]));
        }}
      >{`d3.median([0, 1, 5])`}</button>
      <br />
      <button
        onClick={() => {
          console.log(d3.median([0, 1, 2, 5]));
        }}
      >{`d3.median([0, 1, 2, 5])`}</button>
      <br />
      <button
        onClick={() => {
          console.log(d3.median([0, 1, 2, 5]));
        }}
      >{`d3.median([0, 1, 2, 5])`}</button>
      <br />
    </div>
  );
};

export default D3ME;
