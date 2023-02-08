import { NextPage } from "next";
import * as d3 from "d3";

// d3.mode는 실행 가능한 모드, 즉 가장 자주 나타나는 값을 반환합니다.
// 마지막으로 d3.mode는 비교할 수 없는 값(null, 정의되지 않음 및 NaN)을 무시합니다:

const ModePage: NextPage = () => {
  return (
    <div>
      <button
        onClick={() => {
          console.log(d3.mode([1, 2, 2, 2, 3, 3]));
        }}
      >
        {`d3.mode([1, 2, 2, 2, 3, 3])`}
      </button>
      <br />
      <button
        onClick={() => {
          console.log(
            d3.mode([1, undefined, undefined, NaN, NaN, NaN, null, null])
          );
        }}
      >
        {`d3.mode([1, undefined, undefined, NaN, NaN, NaN, null, null])`}
      </button>
    </div>
  );
};

export default ModePage;
