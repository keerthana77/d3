import * as d3 from 'https://cdn.skypack.dev/d3';

const dataset = [5,10,15,20,25];

d3.select('#chart').selectAll('div')
.data(dataset)
.enter()
.append('div')
// .text(function(d) {
//     return 'I can count up to ' + d;
// })
.attr("class", "bar")
.style("height", function(d) {
    return d*5 + "px";
});

var svg = d3.select("#circles")
            .attr("width", 500)
            .attr("height", 50)
            .style("border", "1px solid black")
                        .style("padding", "10px");
var cicles = svg.selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle")
cicles.attr("cx", function(d, i) {
    return (i * 50) + 25;
})
.attr("cy", 25)
.attr("r", function(d) {
    return d;
})
.attr("fill", "yellow")
.attr("stroke", "orange")
.attr("stroke-width", function(d) {
    return d/2;
});

/** Big bar chart */
const width = 500;
const height = 100;

var bigDataSet = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
    11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];

    d3.select("#bigchart").selectAll("div")
    .data(bigDataSet)
    .enter()
    .append("rect")
    .attr("width", 20)
    .attr("height", 100)
    .attr("x", function(d, i) {
        return width / bigDataSet.length * i;
    })
    .attr("y", 0)
    .attr("fill", function(d) {
        return "rgb(0, 0, " + (d * 10) + ")";
    })
    .attr("stroke", "black")
    .attr("stroke-width", 1);



    

