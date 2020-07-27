// Code largely pulled and adapted from: https://www.d3-graph-gallery.com/graph/donut_basic.html

// Set dimensions of each donut
let donutWidth = 150
    donutHeight = 150
    donutMargin = 20

let radius = Math.min(donutWidth, donutHeight) / 2 - donutMargin

// Each donut svg is made seperately. It doesn't feel efficient, but maybe it is and I don't know about it :)
let calorieDonutSvg = d3.select("#calorie-donut")
                 .append("svg")
                 .attr("width", donutWidth)
                 .attr("height", donutHeight)
                 .append("g")
                 .attr("transform", "translate(" + donutWidth / 2 + "," + donutHeight / 2 + ")");

let carbDonutSvg = d3.select("#carb-donut")
                 .append("svg")
                 .attr("width", donutWidth)
                 .attr("height", donutHeight)
                 .append("g")
                 .attr("transform", "translate(" + donutWidth / 2 + "," + donutHeight / 2 + ")");

let fatDonutSvg = d3.select("#fat-donut")
                 .append("svg")
                 .attr("width", donutWidth)
                 .attr("height", donutHeight)
                 .append("g")
                 .attr("transform", "translate(" + donutWidth / 2 + "," + donutHeight / 2 + ")");

let fiberDonutSvg = d3.select("#fiber-donut")
                 .append("svg")
                 .attr("width", donutWidth)
                 .attr("height", donutHeight)
                 .append("g")
                 .attr("transform", "translate(" + donutWidth / 2 + "," + donutHeight / 2 + ")");

let proteinDonutSvg = d3.select("#protein-donut")
                 .append("svg")
                 .attr("width", donutWidth)
                 .attr("height", donutHeight)
                 .append("g")
                 .attr("transform", "translate(" + donutWidth / 2 + "," + donutHeight / 2 + ")");

// A: Calories on hypothetical diet. B: Recommended daily value for calories * 7 MINUS value of A. 
// This produces a "progress donut" of sorts. 
let caloriesData = {a: 13305, b: 695}

// The same methodology is used to produce A and B in each of these datasets.
let carbsData = {a: 1982, b: 118}
    fatsData = {a: 297, b: 158}
    fibersData = {a: 150, b: 25}

// In this case, B represents the surplus of protein. 
let proteinsData = {a: 712}

// Green because we're close to the requirement. Grey to represent the unmet portion of the requirement. 
// The shade of green will change depending on how close/far you are from a certain requirement/limit. This is done manually for now. 
let calorieColor = d3.scaleOrdinal()
                     .domain(caloriesData)
                     .range(["#5ebd49", "#d1e1cd"])

let carbsColor = d3.scaleOrdinal()
                   .domain(carbsData)
                   .range(["#32dc46", "#d1e1cd"])
    fatsColor = d3.scaleOrdinal()
                  .domain(fatsData)
                  .range(["#32dc46", "#d1e1cd"])
    fibersColor = d3.scaleOrdinal()
                    .domain(fibersData)
                    .range(["#6be179", "#d1e1cd"])

let proteinColor = d3.scaleOrdinal()
                     .domain(proteinsData)
                     .range(["#6be179", "#d1e1cd"])

let pie = d3.pie()
            .value(function(d) {return d.value; })


let calorie_data_ready = pie(d3.entries(caloriesData))
    carb_data_ready = pie(d3.entries(carbsData))
    fat_data_ready = pie(d3.entries(fatsData))
    fiber_data_ready = pie(d3.entries(fibersData))
    protein_data_ready = pie(d3.entries(proteinsData))

calorieDonutSvg
  .selectAll('donuts')
  .data(calorie_data_ready)
  .enter()
  .append('path')
  .attr('d', d3.arc()
    .innerRadius(30)         // This is the size of the donut hole
    .outerRadius(radius)
  )
  .attr('fill', function(d){ return(calorieColor(d.data.key)) })
  .attr("stroke", "black")
  .style("stroke-width", "2px")
  .style("opacity", 0.7)

  carbDonutSvg
  .selectAll('donuts')
  .data(carb_data_ready)
  .enter()
  .append('path')
  .attr('d', d3.arc()
    .innerRadius(30)         // This is the size of the donut hole
    .outerRadius(radius)
  )
  .attr('fill', function(d){ return(carbsColor(d.data.key)) })
  .attr("stroke", "black")
  .style("stroke-width", "2px")
  .style("opacity", 0.7)

  fatDonutSvg
  .selectAll('donuts')
  .data(fat_data_ready)
  .enter()
  .append('path')
  .attr('d', d3.arc()
    .innerRadius(30)         // This is the size of the donut hole
    .outerRadius(radius)
  )
  .attr('fill', function(d){ return(fatsColor(d.data.key)) })
  .attr("stroke", "black")
  .style("stroke-width", "2px")
  .style("opacity", 0.7)

  fiberDonutSvg
  .selectAll('donuts')
  .data(fiber_data_ready)
  .enter()
  .append('path')
  .attr('d', d3.arc()
    .innerRadius(30)         // This is the size of the donut hole
    .outerRadius(radius)
  )
  .attr('fill', function(d){ return(fibersColor(d.data.key)) })
  .attr("stroke", "black")
  .style("stroke-width", "2px")
  .style("opacity", 0.7)

  proteinDonutSvg
  .selectAll('donuts')
  .data(protein_data_ready)
  .enter()
  .append('path')
  .attr('d', d3.arc()
    .innerRadius(30)         // This is the size of the donut hole
    .outerRadius(radius)
  )
  .attr('fill', function(d){ return(proteinColor(d.data.key)) })
  .attr("stroke", "black")
  .style("stroke-width", "2px")
  .style("opacity", 0.7)