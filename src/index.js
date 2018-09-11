import * as d3 from 'd3'

// style
import bulma from 'bulma'

// Dat protocol
const datUrl = 'dat://3167d872cec0d2896009a4156409b9e1ce89638d030c42be7c4be02f4e967bf7/'
try	{
	const archive = new DatArchive(datUrl)
}
catch (e) {
	console.log('Want to see something cool? Try this out over the dat protocol:')
	console.log(datUrl)
}

const svg = d3.select('svg')
const svgBox = document.querySelector('svg').getBBox()
const width = svgBox.width
const height = svgBox.height
const angles = d3.range(0, 2 * Math.PI, Math.PI / 200);

const path = svg.append('g')
    .attr('transform', `translate( ${width / 2}, ${height / 2} )`)
    .attr('fill', 'none')
    .attr('stroke-width', 10)
    .attr('stroke-linejoin', 'round')
  .selectAll('path')
  .data(['cyan', 'magenta', 'yellow'])
  .enter().append('path')
    .attr('stroke', d => d )
    .style('mix-blend-mode', 'darken')
    .datum(function(d, i) {
      return d3.radialLine()
          .curve(d3.curveLinearClosed)
          .angle(function(a) { return a; })
          .radius(function(a) {
            const t = d3.now() / 1000;
            return 200 + Math.cos(a * 8 - i * 2 * Math.PI / 3 + t) * Math.pow((1 + Math.cos(a - t)) / 2, 3) * 32;
          });
    });

d3.timer(function() {
  path.attr('d', function(d) {
    return d(angles);
  });
});