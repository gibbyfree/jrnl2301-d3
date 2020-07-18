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

// Another ugly consequence of all data existing in-file. 
const costMap = new Map([
    ["365 Everyday Value, Organic Baby Spinach, 5 oz", "2c"],
    ["365 Everyday Value, Broccoli Florets, 12 oz", ".5c"],
    ["Tomato Vine Conventional", "1c"],
    ["Organic Garnet Sweet Potato", "1.5c"],
    ["365 Everyday Value, Carrot Baby Peeled Bag Organic, 16 Ounce", "3c"],
    ["365 Everyday Value, Organic Black Beans, 15 oz", "2.5c"],
    ["Conventional Yellow Potato", "2c"],
    ["Corn Bi Color Conventional", "2c"],
    ["365 Everyday Value, Organic Baby Lima Beans, No Salt Added, 16 oz, (Frozen)", "1c"],
    ["365 Everyday Value, Organic Trimmed Green Beans, 12 oz", "2c"],
    ["Organic Yellow Onion", "2c"],
    ["Organic Fuji Apple", "3c"],
    ["Strawberry Organic, 16 Ounce", "2c"],
    ["Grape Green Seedless Organic", "3c"],
    ["Organic D'Anjou Pear", "2c"],
    ["Black Plum Conventional", "2c"],
    ["Raspberry Red Organic, 6 Ounce", "2c"],
    ["365 Everyday Value, Organic Brown Rice Crisps, 12 oz", "11c"],
    ["TruRoots Organic 100% Whole Grain Quinoa, 32 Ounces", "10 oz"],
    ["Lundberg Organic White Rice, Long Grain, 32 oz", "21 oz"],
    ["365 Everyday Value, Organic 2% Fat Milk, 128 oz", "16c"],
    ["FAGE TOTAL, 2% Plain Greek Yogurt, 35.3 oz", "4c"],
    ["365 by Whole Foods Market, Cheese Bar, Colby Jack, 8 Ounce", "2 oz"],
    ["Farm Raised Atlantic Salmon Fillet", "8 oz"],
    ["365 Everyday Value, Eggs Brown Organic Large, 12 Each", "12 oz"],
    ["365 Everyday Value, Chicken Breast Boneless Skinless Prepacked Step 2", "14 oz"],
    ["365 Everyday Value, Deluxe Mixed Nuts, Roasted & Salted, 16 oz", "2.5 oz"],
    ["365 Everyday Value, Extra Virgin Olive Oil, Italian, 33.8 fl oz", "27g"]
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

grocerySvg.selectAll("rect")
   .data(root.leaves())
   .enter()
   .append("rect")
   .attr('x', function(d) {return d.x0})
   .attr('y', function(d) {return d.y0})
   .attr('width', function(d) {return d.x1 - d.x0})
   .attr('height', function(d) {return d.y1 - d.y0})
   .style('stroke', 'black')
   .style('fill', function(d){return groceryColor(d.parent.data.name)})

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
                  return costMap.get(d.data.name)
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
