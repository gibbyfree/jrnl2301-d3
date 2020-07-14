// Code for labeling and node creation partially pulled from: https://jsfiddle.net/chrisJamesC/DY7r4/

// Variable names are annoying because each viz has global visibility in index.html.
// There may be a more graceful way to get around this, but I don't know it :~)

// Constants for container sizing
const budgetWidth = 900;
const budgetHeight = 250;

// Data declared in-file just to simplify submission -- make it easier for prof to view the project locally
const budgetData = {"node": [{"cx": 450, "cy": 100, "rx": 80, "ry":60, "label": "Average Weekly Meal Budget in Suffolk County for Food Insecure People", "cost": "$69.60"}]}

let budgetSvg = d3.select("#weekly-budget").append("svg")
            .attr("width", budgetWidth)
            .attr("height", budgetHeight)

let budgetNode = budgetSvg.selectAll("g")
                          .data(budgetData.node)
    
let budgetNodeEnter = budgetNode.enter()
                    .append("g")
                    .attr("transform", function(d) {
                        return "translate(" + d.cx + "," + d.cy +")"
                    })

budgetNodeEnter.append("ellipse")
                .attr("rx", function (d) {return d.rx})
                .attr("ry", function (d) {return d.ry})
                .style("stroke", "black")
                .style("fill", "springgreen")

// Add label above node
budgetNodeEnter.append("text")
         .attr("x", function(d){return d.labelx})
         .attr("y", function(d){return d.cy + 20})
         .attr("text-anchor", "middle")
         .text(function (d) {return d.label})
    
// Add cost label inside node
budgetNodeEnter.append("text")
         .attr("dx", function(d) {return -20})
         .text(function(d) {return d.cost})
         