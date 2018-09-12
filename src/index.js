import * as d3 from 'd3'

let datPoints = 2
const width = window.innerWidth
const height = window.innerHeight

function getRandomValue(max) {
	return Math.floor(Math.random() * max)
}

// Dat protocol
const datUrl = 'dat://3167d872cec0d2896009a4156409b9e1ce89638d030c42be7c4be02f4e967bf7/'
try	{
	const archive = new DatArchive(datUrl)
}
catch (e) {
	console.log(`Want to see something cool? Try this out over the dat protocol: ${datUrl}`)
	console.log(`learn more at https://datproject.org/`)
}

// update DOM
const nodes = d3.range(datPoints).map( i => {
	return {
		index: i,
		x: getRandomValue(width),
		y: getRandomValue(height),
		vx: getRandomValue(100),
		vy: getRandomValue(1000),
		radius: getRandomValue(height < width ? height / 5 : width / 5)
	}
})

// create gravity simulation
const simulation = d3.forceSimulation(nodes)
											.force('charge', d3.forceManyBody().strength(5))
											.force('collision', d3.forceCollide().radius(d => d.radius))
											.on('tick', ticked)

function ticked() {

  const u = d3.select('svg').selectAll('circle')
  	.data(nodes)

  u.enter()
    .append('svg:circle')
		.attr('r', node => node.radius)
    .attr('cx', node => node.x)
		.attr('cy', node => node.y)

  u.exit().remove()
}

// var nodes = d3.range(200).map(function() { return {radius: Math.random() * 12 + 4}; }),
//     color = d3.scale.category10();

// var force = d3.layout.force()
//     .gravity(0.05)
//     .charge(function(d, i) { return i ? 0 : -2000; })
//     .nodes(nodes)
//     .size([w, h]);

// var root = nodes[0];
// root.radius = 0;
// root.fixed = true;

// force.start();

// svg.selectAll("circle")
//     .data(nodes.slice(1))
//   .enter().append("svg:circle")
//     .attr("r", function(d) { return d.radius - 2; })
//     .style("fill", function(d, i) { return color(i % 3); });

// force.on("tick", function(e) {
//   var q = d3.geom.quadtree(nodes),
//       i = 0,
//       n = nodes.length;

//   while (++i < n) {
//     q.visit(collide(nodes[i]));
//   }

//   svg.selectAll("circle")
//       .attr("cx", function(d) { return d.x; })
//       .attr("cy", function(d) { return d.y; });
// });

// svg.on("mousemove", function() {
//   var p1 = d3.svg.mouse(this);
//   root.px = p1[0];
//   root.py = p1[1];
//   force.resume();
// });

// function collide(node) {
//   var r = node.radius + 16,
//       nx1 = node.x - r,
//       nx2 = node.x + r,
//       ny1 = node.y - r,
//       ny2 = node.y + r;
//   return function(quad, x1, y1, x2, y2) {
//     if (quad.point && (quad.point !== node)) {
//       var x = node.x - quad.point.x,
//           y = node.y - quad.point.y,
//           l = Math.sqrt(x * x + y * y),
//           r = node.radius + quad.point.radius;
//       if (l < r) {
//         l = (l - r) / l * .5;
//         node.x -= x *= l;
//         node.y -= y *= l;
//         quad.point.x += x;
//         quad.point.y += y;
//       }
//     }
//     return x1 > nx2
//         || x2 < nx1
//         || y1 > ny2
//         || y2 < ny1;
//   };
// }

