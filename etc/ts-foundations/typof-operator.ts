const width = 12;
type Width = typeof width;
type Margin = {
  top: number;
  right: number;
  bottom: number;
  left: number;
};
type SingleData = {
  category: string;
  value: number;
};

type Data = SingleData[];
type YScale = {
  type: string;
  domain: number[];
  range: number[];
};

type Axis = {
  label: string;
  tickSize: number;
};
type Bar = {
  fill: string;
};

type D3ChartConfig = {
  width: number;
  height: number;
  margin: Margin;
  data: Data;
  xScale: YScale;
  yScale: YScale;
  xAxis: Axis;
  yAxis: Axis;
  bar: Bar;
};
