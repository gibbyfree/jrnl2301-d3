// Code largely pulled and adapted from: https://www.d3-graph-gallery.com/graph/treemap_json.html

// set dimensions of graph
const margin = {top: 10, right: 10, bottom: 10, left: 10},
  width = 650 - margin.left - margin.right,
  height = 650 - margin.top - margin.bottom;

// Data is being stored in-file to simplify submission, allowing professor to view the project locally
// Sorry it's so big and terrible.
const groceryData = {
    "children": [
        {
            "name": "Dark green veg.",
            "children": [
                {
                    "name": "365 Everyday Value, Organic Baby Spinach, 5 oz",
                    "group": "A",
                    "value": 0.70,
                    "colname": "level3"                
                },
                {
                    "name": "365 Everyday Value, Broccoli Florets, 12 oz",
                    "group": "C",
                    "value": 0.26,
                    "colname": "level3"
                }
            ]
        },
        {
            "name": "Red/orange veg.",
            "children": [
                {
                    "name": "Tomato Vine Conventional",
                    "group": "C",
                    "value": 0.80,
                    "colname": "level3"
                },
                {
                    "name": "Organic Garnet Sweet Potato",
                    "group": "C",
                    "value": 1.65,
                    "colname": "level3"
                },
                {
                    "name": "365 Everyday Value, Carrot Baby Peeled Bag Organic, 16 Ounce",
                    "group": "B",
                    "value": 1.44,
                    "colname": "level3"
                }
            ]
        },
        {
            "name": "Legumes",
            "children": [
                {
                    "name": "365 Everyday Value, Organic Black Beans, 15 oz",
                    "group": "B",
                    "value": 0.99,
                    "colname": "level3"
                }
            ]
        },
        {
            "name": "Starchy veg.",
            "children": [
                {
                    "name": "Conventional Yellow Potato",
                    "group": "C",
                    "value": 0.56,
                    "colname": "level3"
                },
                {
                    "name": "Corn Bi Color Conventional",
                    "group": "C",
                    "value": 1.50,
                    "colname": "level3"
                },
                {
                    "name": "365 Everyday Value, Organic Baby Lima Beans, No Salt Added, 16 oz, (Frozen)",
                    "group": "B",
                    "value": 0.81,
                    "colname": "level3"
                }
            ]
        },
        {
            "name": "Other veg.",
            "children": [
                {
                    "name": "365 Everyday Value, Organic Trimmed Green Beans, 12 oz",
                    "group": "A",
                    "value": 2.35,
                    "colname": "level3"
                },
                {
                    "name": "Organic Yellow Onion",
                    "group": "A",
                    "value": 1.06,
                    "colname": "level3"
                }
            ]
        },
        {
            "name": "Fruits",
            "children": [
                {
                    "name": "Organic Fuji Apple",
                    "group": "C",
                    "value": 1.65,
                    "colname": "level3"
                },
                {
                    "name": "Strawberry Organic, 16 Ounce",
                    "group": "C",
                    "value": 2.91,
                    "colname": "level3"
                },
                {
                    "name": "Grape Green Seedless Organic",
                    "group": "D",
                    "value": 2.99,
                    "colname": "level3"
                },
                {
                    "name": "Organic D'Anjou Pear",
                    "group": "C",
                    "value": 1.64,
                    "colname": "level3"
                },
                {
                    "name": "Black Plum Conventional",
                    "group": "D",
                    "value": 1.82,
                    "colname": "level3"
                },
                {
                    "name": "Raspberry Red Organic, 6 Ounce",
                    "group": "D",
                    "value": 5.75,
                    "colname": "level3"
                }
            ]
        },
        {
            "name": "Whole grain",
            "children": [
                {
                    "name": "365 Everyday Value, Organic Brown Rice Crisps, 12 oz",
                    "group": "A",
                    "value": 3.99,
                    "colname": "level3"
                },
                {
                    "name": "TruRoots Organic 100% Whole Grain Quinoa, 32 Ounces",
                    "group": "B",
                    "value": 3.75,
                    "colname": "level3"
                }
            ]
        },
        {
            "name": "Refined grain",
            "children": [
                {
                    "name": "Lundberg Organic White Rice, Long Grain, 32 oz",
                    "group": "B",
                    "value": 3.99,
                    "colname": "level3"
                }
            ]
        },
        {
            "name": "Dairy",
            "children": [
                {
                    "name": "365 Everyday Value, Organic 2% Fat Milk, 128 oz",
                    "group": "B",
                    "value": 5.99,
                    "colname": "level3"
                },
                {
                    "name": "FAGE TOTAL, 2% Plain Greek Yogurt, 35.3 oz",
                    "group": "C",
                    "value": 5.89,
                    "colname": "level3"
                },
                {
                    "name": "365 by Whole Foods Market, Cheese Bar, Colby Jack, 8 Ounce",
                    "group": "C",
                    "value": 0.74,
                    "colname": "level3"
                }
            ]
        },
        {
            "name": "Seafood",
            "children": [
                {
                    "name": "Farm Raised Atlantic Salmon Fillet",
                    "group": "A",
                    "value": 5.00,
                    "colname": "level3"
                }
            ]
        },
        {
            "name": "Meats, poultry, eggs",
            "children": [
                {
                    "name": "365 Everyday Value, Eggs Brown Organic Large, 12 Each",
                    "group": "B",
                    "value": 3.99,
                    "colname": "level3"
                },
                {
                    "name": "365 Everyday Value, Chicken Breast Boneless Skinless Prepacked Step 2",
                    "group": "C",
                    "value": 4.37,
                    "colname": "level3"
                }
            ]
        },
        {
            "name": "Nuts, seeds, soy products",
            "children": [
                {
                    "name": "365 Everyday Value, Deluxe Mixed Nuts, Roasted & Salted, 16 oz",
                    "group": "D",
                    "value": 1.49,
                    "colname": "level3"
                }
            ]
        },
        {
            "name": "Oil",
            "children": [
                {
                    "name": "365 Everyday Value, Extra Virgin Olive Oil, Italian, 33.8 fl oz",
                    "group": "D",
                    "value": 0.27,
                    "colname": "level3"
                }
            ]
        }
    ],
    "name": "groceries"
}

// Another ugly consequence of all data existing in-file. In an ideal world, this is a .csv. 
const groceryMap = new Map([
    ["365 Everyday Value, Organic Baby Spinach, 5 oz", 
    {label: "$0.70", quantity: "2 cups", 
    explanation: "Bag contains 340g. 1 cup florets = 70g (https://fdc.nal.usda.gov/fdc-app.html#/food-details/787465/portions)\n9.7 servings. $2.49 / 9.7 = 0.25670103093. Assumes eaten raw. Rounded up."}],
    ["365 Everyday Value, Broccoli Florets, 12 oz", {label: "$0.26", quantity: "0.5 cup", 
    explanation: "Bag contains 340g. 1 cup florets = 70g (https://fdc.nal.usda.gov/fdc-app.html#/food-details/787465/portions)\n9.7 servings. $2.49 / 9.7 = 0.25670103093. Assumes eaten raw. Rounded up."}],
    ["Tomato Vine Conventional", {label: "$0.80", quantity: "1 cup", 
    explanation: "1 cup = 180g (https://fdc.nal.usda.gov/fdc-app.html#/food-details/787683/portions)\n180g = .4 lbs. $1.99 * .4 = 0.796. Assumes eaten raw. Rounded up."}],
    ["Organic Garnet Sweet Potato", {label: "$1.65", quantity: "1.5 cups",
    explanation: "1 cup mashed = 250g (https://fdc.nal.usda.gov/fdc-app.html#/food-details/787642/portions)\n1.5 cup = 375g = .83 lbs. $1.99 * .83 = 1.6517"}],
    ["365 Everyday Value, Carrot Baby Peeled Bag Organic, 16 Ounce", {label: "$1.44", quantity: "3 cups", 
    explanation: "1 cup chopped = 128g (https://fdc.nal.usda.gov/fdc-app.html#/food-details/787522/portions)\n3 cups = 384g. Bag is 454g. 384/454 = 0.84581497797. Rounded up. $1.69 * .85 = 1.4365. Rounded up. Assumes eaten raw."}],
    ["365 Everyday Value, Organic Black Beans, 15 oz", {label: "$0.99", quantity: "2.5 cups", 
    explanation: "1 can = 2.5 cups."}],
    ["Conventional Yellow Potato", {label: "$0.56", quantity: "2 cups", 
    explanation: "1 cup potato = 130g (https://fdc.nal.usda.gov/fdc-app.html#/food-details/786981/portions)\n2 cup = 260g. 260g = 0.5732019 lb. $0.99 * .57 = 0.5643."}],
    ["Corn Bi Color Conventional", {label: "$1.50", quantity: "2 cups", 
    explanation: "1 medium ear = 102 g (https://fdc.nal.usda.gov/fdc-app.html#/food-details/787790/portions)\n1 cup = 145g (same source). 2 cup = 290, or approx. 3 medium ears."}],
    ["365 Everyday Value, Organic Baby Lima Beans, No Salt Added, 16 oz, (Frozen)", {label: "$0.81", quantity: "1 cup", 
    explanation: "Bag contains 3.33 cups (nutrition facts). 1 / 3.33 = 0.3 of package.\n$2.69 / .3 = 0.807. Rounded up."}],
    ["365 Everyday Value, Organic Trimmed Green Beans, 12 oz", {label: "$2.35", quantity: "2 cups", 
    explanation: "1 cup = 100g (https://fdc.nal.usda.gov/fdc-app.html#/food-details/787776/portions)\nPackage is 340g. 200/340 = 0.58823529412. Rounded up. $3.99 * .59 = 2.3541."}],
    ["Organic Yellow Onion", {label: "$1.06", quantity: "2 cups", 
    explanation: "1 cup = 160g (https://fdc.nal.usda.gov/fdc-app.html#/food-details/787804/portions)\n2 cup = 320g. 320g = 0.7054792 lb. Rounded up. $1.49 * .71 = 1.0579. Rounded up."}],
    ["Organic Fuji Apple", {label: "$1.65", quantity: "3 cups", 
    explanation: "1 cup = 125g (https://fdc.nal.usda.gov/fdc-app.html#/food-details/786631/portions)\n3 cup = 375g. 375g = 0.8267335 lb. Rounded up. $1.99 * .83 = 1.6517."}],
    ["Strawberry Organic, 16 Ounce", {label: "$2.91", quantity: "2 cups", 
    explanation: "16 oz to grams = 453.5924. Round up to 454. 1 cup = 166g (https://fdc.nal.usda.gov/fdc-app.html#/food-details/786790/portions)\n2 cups = 332g. 332/453 = 0.73289183223. $3.99 * .73 = 2.9127"}],
    ["Grape Green Seedless Organic", {label: "$2.99", quantity: "3 cups", 
    explanation: "1 cup = 151g (https://fdc.nal.usda.gov/fdc-app.html#/food-details/786684/portions)\n3 cup = 453g. 453g = 0.998694. Round up. $2.99 * 1 = 2.99"}],
    ["Organic D'Anjou Pear", {label: "$1.64", quantity: "2 cups", 
    explanation: "1 cup = 150g (https://fdc.nal.usda.gov/fdc-app.html#/food-details/786720/portions)\n2 cup = 300g. 300g = 0.6613868. $2.49 * 0.66 = 1.6434"}],
    ["Black Plum Conventional", {label: "$1.82", quantity: "2 cups",
    explanation: "1 cup = 165g (https://fdc.nal.usda.gov/fdc-app.html#/food-details/786736/portions)\n2 cup = 330g. 330g = 0.7275255. Rounded up. $2.49 * .73 = 1.8177. Rounded up."}],
    ["Raspberry Red Organic, 6 Ounce", {label: "$5.75", quantity: "2 cups",
    explanation: "1 cup = 123g (https://fdc.nal.usda.gov/fdc-app.html#/food-details/786783/portions)\n2 cup = 246g. 246g = 0.5423372 lb. 10.64 * 0.54 = 5.7456. Round up."}],
    ["365 Everyday Value, Organic Brown Rice Crisps, 12 oz", {label: "$3.99", quantity: "11 cups",
    explanation: "Nutrition facts says contains 11 cups."}],
    ["TruRoots Organic 100% Whole Grain Quinoa, 32 Ounces", {label: "$3.75", quantity: "10 ounces",
    explanation: "Package contains 32 ounces. 10 / 32 = 0.3125.\n$11.99 * 0.3125 = 3.746875. Rounded up."}],
    ["Lundberg Organic White Rice, Long Grain, 32 oz", {label: "$3.99", quantity: "21 ounces",
    explanation: "Costs $0.19 per ounce. 0.19 * 21 = 3.99."}],
    ["365 Everyday Value, Organic 2% Fat Milk, 128 oz", {label: "$5.99", quantity: "16 cups",
    explanation: "Nutrition facts says contains 16 cups."}],
    ["FAGE TOTAL, 2% Plain Greek Yogurt, 35.3 oz", {label: "$5.89", quantity: "4 cups",
    explanation: "Nutrition facts says contains 4 cups."}],
    ["365 by Whole Foods Market, Cheese Bar, Colby Jack, 8 Ounce", {label: "$0.74", quantity: "2 ounces",
    explanation: "Costs $0.37 per ounce. $0.37 * 2 = .74"}],
    ["Farm Raised Atlantic Salmon Fillet", {label: "$5.00", quantity: "8 ounces",
    explanation: "8 oz is half pound. $9.99/lb. Round up."}],
    ["365 Everyday Value, Eggs Brown Organic Large, 12 Each", {label: "$3.99", quantity: "12 ounces",
    explanation: "USDA says that 1 egg is 1 oz/eq."}],
    ["365 Everyday Value, Chicken Breast Boneless Skinless Prepacked Step 2", {label: "$4.37", quantity: "14 ounces",
    explanation: "14 oz to lb = 0.875 lb. $4.99 * .875 lb = 4.36625. Round up."}],
    ["365 Everyday Value, Deluxe Mixed Nuts, Roasted & Salted, 16 oz", {label: "$1.49", quantity: "2.5 ounces",
    explanation: "Costs $0.56/oz. .56 * 2.5 = 1.4"}],
    ["365 Everyday Value, Extra Virgin Olive Oil, Italian, 33.8 fl oz", {label: "$0.27", quantity: "27 grams",
    explanation: "Bottle contains 1000g. 27 / 1000 = .027. $9.99 * .027 = 0.26973.\nRounded up."}]
]);

let grocerySvg = d3.select("#grocery-breakdown")
                   .append("svg")
                   .attr("width", width + margin.left + margin.right)
                   .attr("height", height + margin.top + margin.bottom)
                   .append("g")
                   .attr("transform","translate(" + margin.left + "," + margin.top + ")");


let root = d3.hierarchy(groceryData).sum(function(d){return d.value})

const groceryColor = d3.scaleOrdinal()
                       .domain(["Dark green vegetables", "Red/orange vegetables", "Legumes", "Starchy vegetables", "Other vegetables",
                                "Fruits", "Whole grain", "Refined grain", "Oil", "Dairy", "Seafood", "Meats, poultry, eggs", "Nuts, seeds, soy products"])
                       .range(["#237C0D", "#D97C2C", "#94D92C", "#C2B038", "#C8BF87", "#E4501B", "#A16411", "#E2A757", 
                               "#E1E257", "#42BEEB", "#F1957B", "#B71408", "#E8A718"])

d3.treemap()
  .size([width, height])
  .paddingTop(15)
  .paddingRight(10)
  .paddingInner(10)
  .paddingOuter(6)
  (root)

// Tooltip and its functions
let tooltip = d3.select("#grocery-breakdown")
                .append("div")
                .style("opacity", 0)
                .attr("class", "tooltip")
                .style("background-color", "white")
                .style("border", "solid")
                .style("border-width", "2px")
                .style("padding", "5px")
      
let mouseover = function(d) {
    tooltip
    .style("opacity", 1)
    d3.select(this)
    .style("stroke", "black")
    .style("opacity", 1)
}

let mousemove = function(d) {
    tooltip
    .html("<strong>Product:</strong> " + d.data.name + "<br><strong>Quantity:</strong> " + groceryMap.get(d.data.name).quantity + "<br><strong>Why? </strong>" +
          groceryMap.get(d.data.name).explanation)
    .style("left", (event.pageX) + "px")
    .style("top", (event.pageY) + "px")
}

let mouseleave = function(d) {
    tooltip
    .style("opacity", 0)
    d3.select(this)
    .style("stroke", "none")
    .style("opacity", 0.8)
}

grocerySvg.selectAll("rect")
   .data(root.leaves())
   .enter()
   .append("rect")
   .attr('x', function(d) {return d.x0})
   .attr('y', function(d) {return d.y0})
   .attr('width', function(d) {return d.x1 - d.x0})
   .attr('height', function(d) {return d.y1 - d.y0})
   .style('stroke', 'none')
   .style('fill', function(d){return groceryColor(d.parent.data.name)})
   .on("mouseover", mouseover)
   .on("mousemove", mousemove)
   .on("mouseleave", mouseleave)

grocerySvg.selectAll("text")
   .data(root.leaves())
   .enter()
   .append("text")
   .attr("x", function(d){ return d.x0+5})    
   .attr("y", function(d){ return d.y0+20})    
   .text(function(d){ return d.data.product })
   .attr("font-size", "8px")
   .attr("fill", "white")

// Labels for each group
grocerySvg.selectAll("titles")
          .data(root.descendants().filter(function(d){return d.depth==1}))
          .enter()
          .append("text")
          .attr("x", function(d){return d.x0+5})
          .attr("y", function(d){return d.y0})
          .text(function(d){return d.data.name})
          .attr("font-size", "15px")
          .attr("fill", "black")

// Labels for each rectangle
grocerySvg.selectAll("vals")
          .data(root.leaves())
          .enter()
          .append("text")
          .attr("x", function(d){ return d.x0+10})    // +10 to adjust position (more right)
          .attr("y", function(d){ return d.y0+35})    // +20 to adjust position (lower)
          .text(function(d){ 
              if(d.data.value > 1) {
                  return groceryMap.get(d.data.name).label
              }
           })
          .attr("font-size", (function(d) {
              if(d.data.value > 3) {
                  return "20px"
              }
              else {
                  return "16px"
              }
          }))
          .attr("fill", "white")