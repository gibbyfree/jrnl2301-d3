// Constants for container sizing
const costWidth = 900;
const costHeight = 250;

// Data declared in-file just to simplify submission -- make it easier for prof to view the project locally
const costData = {"nodes": [
    {"cx": 600, "cy": 100, "r": 80, "label": "Average Meal Cost in Massachussetts", "cost": "$3.63", "labelx": 0},
    {"cx": 300, "cy": 100, "r": 80, "label": "Average Meal Cost in Suffolk County", "cost": "$4.32", "labelx": 0}
]}

let svg = d3.select("#cost-comparison").append("svg")
            .attr("width", costWidth)
            .attr("height", costHeight)

let node = svg.selectAll("g")
              .data(costData.nodes)
    
let nodeEnter = node.enter()
                    .append("g")
                    .attr("transform", function(d) {
                        return "translate(" + d.cx + "," + d.cy +")"
                    })

let circle = nodeEnter.append("circle")
                        .attr("r", function (d) {
                            return d.r
                        })
                        .style("stroke", "black")
                        .style("fill", "gold")

// Add label above node
nodeEnter.append("text")
         .attr("x", function(d){return d.labelx})
         .attr("y", function(d){return d.cy + 20})
         .attr("text-anchor", "middle")
         .text(function (d) {return d.label})
    
// Add cost label inside node
nodeEnter.append("text")
         .attr("dx", function(d) {return -20})
         .text(function(d) {return d.cost})
