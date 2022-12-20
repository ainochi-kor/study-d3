import { NextPage } from "next";

const intro: NextPage = () => {
  return (
    <>
      <h2>1-1</h2>
      <div
        id="someDiv"
        style={{ width: "100%", height: "100px", border: "black 1px solid" }}
      >
        <input id="someChkbox" type={"checkbox"} />
      </div>
      <h2>1-2</h2>
      <div id="infovizDiv">
        <svg
          style={{
            width: "100%",
            height: "500px",
            border: "1px lightgray solid",
          }}
        >
          <path
            d="M 10,60 40,30 50,50 60,30, 70,80"
            style={{ fill: "black", stroke: "gray", strokeWidth: "4px" }}
          />
          <polygon
            style={{ fill: "gray" }}
            points="80,400 120,400, 160,440 120,480 60,460"
          />
          <g>
            <line
              x1="200"
              y1="100"
              x2="450"
              y2="225"
              style={{ stroke: "black", strokeWidth: "2px" }}
            />
            <circle cy="100" cx="200" r="30" />
            <rect
              x="410"
              y="200"
              width="100"
              height="50"
              style={{ fill: "pink", stroke: "black", strokeWidth: "1px" }}
            />
          </g>
        </svg>
      </div>
      <h2>1-3</h2>
      <div>
        <svg
          style={{
            width: "100%",
            height: "600px",
            border: "1px lightgray solid",
          }}
        >
          <g>
            <circle r="2" />
            <text>This circle{"'"}s label</text>
          </g>
          <g transform="translate(100, 50)">
            <circle r="2" />
            <text>This circle{"'"}s Label</text>
          </g>
          <g transform="translate(100, 400) scale(3.5)">
            <circle r="2" />
            <text>This circle{"'"}s Label</text>
          </g>
        </svg>
      </div>
      <h2>1-4</h2>
      <div>
        <svg
          style={{
            width: "100%",
            height: "600px",
            border: "1px lightgray solid",
          }}
        >
          <path
            style={{ fill: "none", stroke: "gray", strokeWidth: "4px" }}
            d="M 10,60 40,30 50,50, 60,30 70,80"
            transform="translate(0,0)"
          />
          <path
            style={{ fill: "black", stroke: "gray", strokeWidth: "4px" }}
            d="M 10,60 40,30 50,50, 60,30 70,80"
            transform="translate(0,100)"
          />
          <path
            style={{ fill: "none", stroke: "gray", strokeWidth: "4px" }}
            d="M 10,60 40,30 50,50, 60,30 70,80Z"
            transform="translate(0,200)"
          />
          <path
            style={{ fill: "black", stroke: "gray", strokeWidth: "4px" }}
            d="M 10,60 40,30 50,50, 60,30 70,80Z"
            transform="translate(0,300)"
          />
        </svg>
      </div>
    </>
  );
};

export default intro;
