const svgWidth = 800;
const svgHeight = 400;
const svg = d3
  .select('#chart')
  .append('svg')
  .attr('width', svgWidth)
  .attr('height', svgHeight);
const bottomLine = 300;
const bottomLineWidth = 5;
svg
  .append('line')
  .attr('x1', 0)
  .attr('x2', svgWidth)
  .attr('y1', bottomLine)
  .attr('y2', bottomLine)
  .attr('stroke', 'black')
  .attr('stroke-width', bottomLineWidth);

const circleRadius = 30;
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

const rectHeight = 40;
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
const textPadding = 15;
groupOne
  .append('text')
  .text('i am great')
  .attr('x', boxX + textPadding)
  .attr('y', bottomLine - rectHeight / 2)
  .attr('fill', 'coral')
  .attr('font-family', 'sans-serif');

setTimeout(() => {
  groupOne
    .transition()
    .duration(2000)
    .ease(d3.easeElastic)
    .attr('transform', 'translate(0, 100)');
}, 1000);

// NOTES

// - transition always comes after the selection and before the code that changes it
// - ease() and duration() go anywhere after transition()
// - how to know what is selected ?
// if in doubt console.log and you can see. but as a rule select and append create a selection/change a selection,
// .attr /.style (stuff that changes the selection) just passes the selection on.
// enter() exit() do other stuff they pass the selection on but they do it for each item, we will talk more about this later
