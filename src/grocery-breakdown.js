// Code largely pulled and adapted from: https://www.d3-graph-gallery.com/graph/treemap_json.html

// set dimensions of graph
const margin = {top: 10, right: 10, bottom: 10, left: 10},
  width = 445 - margin.left - margin.right,
  height = 445 - margin.top - margin.bottom;

// Data is being stored in-file to simplify submission, allowing professor to view the project locally
// Sorry it's so big and terrible.
const groceryData = {
    "children": [
        {
            "name": "Dark green vegetables",
            "children": [
                {
                    "name": "365 Everyday Value, Organic Baby Spinach, 5 oz",
                    "group": "A",
                    "value": 2,
                    "colname": "level3"
                },
                {
                    "name": "365 Everyday Value, Broccoli Florets, 12 oz",
                    "group": "C",
                    "value": 0.5,
                    "colname": "level3"
                }
            ]
        },
        {
            "name": "Red/orange vegetables",
            "children": [
                {
                    "name": "Tomato Vine Conventional",
                    "group": "C",
                    "value": 1,
                    "colname": "level3"
                },
                {
                    "name": "Organic Garnet Sweet Potato",
                    "group": "C",
                    "value": 1.5,
                    "colname": "level3"
                },
                {
                    "name": "365 Everyday Value, Carrot Baby Peeled Bag Organic, 16 Ounce",
                    "group": "B",
                    "value": 3,
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
                    "value": 2.5,
                    "colname": "level3"
                }
            ]
        },
        {
            "name": "Starchy vegetables",
            "children": [
                {
                    "name": "Conventional Yellow Potato",
                    "group": "C",
                    "value": 2,
                    "colname": "level3"
                },
                {
                    "name": "Corn Bi Color Conventional",
                    "group": "C",
                    "value": 2,
                    "colname": "level3"
                },
                {
                    "name": "365 Everyday Value, Organic Baby Lima Beans, No Salt Added, 16 oz, (Frozen)",
                    "group": "B",
                    "value": 2,
                    "colname": "level3"
                }
            ]
        },
        {
            "name": "Other vegetables",
            "children": [
                {
                    "name": "365 Everyday Value, Organic Trimmed Green Beans, 12 oz",
                    "group": "A",
                    "value": 2,
                    "colname": "level3"
                },
                {
                    "name": "Organic Yellow Onion",
                    "group": "A",
                    "value": 2,
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
                    "value": 3,
                    "colname": "level3"
                },
                {
                    "name": "Strawberry Organic, 16 Ounce",
                    "group": "C",
                    "value": 2,
                    "colname": "level3"
                },
                {
                    "name": "Grape Green Seedless Organic",
                    "group": "D",
                    "value": 3,
                    "colname": "level3"
                },
                {
                    "name": "Organic D'Anjou Pear",
                    "group": "C",
                    "value": 2,
                    "colname": "level3"
                },
                {
                    "name": "Black Plum Conventional",
                    "group": "D",
                    "value": 2,
                    "colname": "level3"
                },
                {
                    "name": "Raspberry Red Organic, 6 Ounce",
                    "group": "D",
                    "value": 2,
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
                    "value": 11,
                    "colname": "level3"
                },
                {
                    "name": "TruRoots Organic 100% Whole Grain Quinoa, 32 Ounces",
                    "group": "B",
                    "value": 10,
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
                    "value": 21,
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
                    "value": 16,
                    "colname": "level3"
                },
                {
                    "name": "FAGE TOTAL, 2% Plain Greek Yogurt, 35.3 oz",
                    "group": "C",
                    "value": 4,
                    "colname": "level3"
                },
                {
                    "name": "365 by Whole Foods Market, Cheese Bar, Colby Jack, 8 Ounce",
                    "group": "C",
                    "value": 2,
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
                    "value": 8,
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
                    "value": 12,
                    "colname": "level3"
                },
                {
                    "name": "365 Everyday Value, Chicken Breast Boneless Skinless Prepacked Step 2",
                    "group": "C",
                    "value": 14,
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
                    "value": 2.5,
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
                    "value": 1,
                    "colname": "level3"
                }
            ]
        }
    ],
    "name": "groceries"
}

let grocerySvg = d3.select("#grocery-breakdown")
                   .append("svg")
                   .attr("width", width + margin.left + margin.right)
                   .attr("height", height + margin.top + margin.bottom)
                   .append("g")
                   .attr("transform","translate(" + margin.left + "," + margin.top + ")");


let root = d3.hierarchy(groceryData).sum(function(d){return d.value})

d3.treemap()
  .size([width, height])
  .padding(2)
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

grocerySvg.selectAll("text")
   .data(root.leaves())
   .enter()
   .append("text")
   .attr("x", function(d){ return d.x0+5})    
   .attr("y", function(d){ return d.y0+20})    
   .text(function(d){ return d.data.product })
   .attr("font-size", "8px")
   .attr("fill", "white")