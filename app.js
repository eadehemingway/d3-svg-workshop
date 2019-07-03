const bottomLine = 300;
const svgWidth = 800;
const svgHeight = 400;
const circleRadius = 30;
const bottomLineWidth = 5;
const rectHeight = 40;
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

const circleborder = 10;
svg
  .append('circle')
  .attr('cx', 200)
  .attr(
    'cy',
    bottomLine - circleRadius - bottomLineWidth / 2 - circleborder / 2
  )
  .attr('r', circleRadius)
  .attr('fill', 'pink')
  .attr('stroke', 'orange')
  .attr('stroke-width', circleborder);

svg
  .append('rect')
  .attr('x', 500)
  .attr('y', bottomLine - rectHeight - bottomLineWidth / 2)
  .attr('width', 10)
  .attr('height', rectHeight)
  .attr('fill', 'red');

const groupOne = svg.append('g').attr('class', 'group-1');

const boxX = 300;
groupOne
  .append('rect')
  .attr('x', boxX)
  .attr('y', bottomLine - rectHeight - bottomLineWidth / 2)
  .attr('width', 100)
  .attr('height', 40)
  .attr('stroke', 'blue')
  .attr('fill', 'none');

groupOne
  .append('text')
  .text('i am great')
  .attr('x', boxX)
  .attr('y', bottomLine - rectHeight / 2)
  .attr('fill', 'coral')
  .attr('font-family', 'sans-serif');

setTimeout(() => {
  groupOne
    .transition()
    .attr('transform', 'translate(0, 100)')
    .duration(2000)
    .ease(d3.easeElastic);
}, 1000);
