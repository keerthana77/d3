import * as d3 from 'https://cdn.skypack.dev/d3';

const dataset = [5,10,15,20,25];

d3.select('body').selectAll('div')
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

