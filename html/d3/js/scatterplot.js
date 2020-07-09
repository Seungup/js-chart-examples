// set the dimensions and margins of the graph
var margin3 = {top: 10, right: 30, bottom: 40, left: 50},
    width3 = 420 - margin3.left - margin3.right,
    height3 = 420 - margin3.top - margin3.bottom;

// append the svg object to the body of the page
var svg3 = d3.select("#scatterplot")
  .append("svg")
    .attr("width", width3 + margin3.left + margin3.right)
    .attr("height", height3 + margin3.top + margin3.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin3.left + "," + margin3.top + ")")

// Add the grey background that makes ggplot2 famous
svg3
  .append("rect")
    .attr("x",0)
    .attr("y",0)
    .attr("height", height3)
    .attr("width", height3)
    .style("fill", "EBEBEB")

//Read the data
d3.csv("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/iris.csv", function(data) {

  // Add X axis
  var x = d3.scaleLinear()
    .domain([4*0.95, 8*1.001])
    .range([ 0, width3 ])
  svg3.append("g")
    .attr("transform", "translate(0," + height3 + ")")
    .call(d3.axisBottom(x).tickSize(-height3*1.3).ticks(10))
    .select(".domain").remove()

  // Add Y axis
  var y = d3.scaleLinear()
    .domain([-0.001, 9*1.01])
    .range([ height3, 0])
    .nice()
  svg3.append("g")
    .call(d3.axisLeft(y).tickSize(-width3*1.3).ticks(7))
    .select(".domain").remove()

  // Customization
  svg3.selectAll(".tick line").attr("stroke", "white")

  // Add X axis label:
  svg3.append("text")
      .attr("text-anchor", "end")
      .attr("x", width3/2 + margin3.left)
      .attr("y", height3 + margin3.top + 20)
      .text("Sepal Length");

  // Y axis label:
  svg3.append("text")
      .attr("text-anchor", "end")
      .attr("transform", "rotate(-90)")
      .attr("y", -margin3.left + 20)
      .attr("x", -margin3.top - height3/2 + 20)
      .text("Petal Length")

  // Color scale: give me a specie name, I return a color
  var color = d3.scaleOrdinal()
    .domain(["setosa", "versicolor", "virginica" ])
    .range([ "#F8766D", "#00BA38", "#619CFF"])

  // Add dots
  svg3.append('g')
    .selectAll("dot")
    .data(data)
    .enter()
    .append("circle")
      .attr("cx", function (d) { return x(d.Sepal_Length); } )
      .attr("cy", function (d) { return y(d.Petal_Length); } )
      .attr("r", 5)
      .style("fill", function (d) { return color(d.Species) } )

})