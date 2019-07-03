const bottomLine = 300;
const svgWidth = 800;
const svgHeight = 400;
const circleRadius = 30;
const bottomLineWidth = 5;

const svg = d3
  .select('#chart')
  .append('svg')
  .attr('width', svgWidth)
  .attr('height', svgHeight);

svg
  .append('line')
  .attr('x1', 0)
  .attr('x2', svgWidth)
  .attr('y1', bottomLine)
  .attr('y2', bottomLine)
  .attr('stroke', 'black')
  .attr('stroke-width', bottomLineWidth);

svg
  .append('circle')
  .attr('cx', 200)
  .attr('cy', bottomLine - circleRadius - bottomLineWidth / 2)
  .attr('r', circleRadius)
  .attr('fill', 'pink');
