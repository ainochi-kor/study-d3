import * as d3 from "d3";

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
