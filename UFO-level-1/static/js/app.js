// from data.js
var tableData = data;

var button = d3.select("#filter-btn");

var tbody = d3.select("tbody");



button.on("click", function(){
  var filteredData = tableData;  
    // Select the date input element's HTML node
  var dateValue = d3.select("#datetime").property("value");
  var cityValue = d3.select("#city").property("value");

  console.log(dateValue);
  console.log(tableData);

  if (dateValue) {
    console.log("filtering by date");
    filteredData = filteredData.filter(sighting => sighting.datetime === dateValue);
  }

  

  

  // Append one table row `tr` for each sighting object
  filteredData.forEach(sightingReport=>{
    console.log(sightingReport);
    var row = tbody.append("tr");
    Object.entries(sightingReport).forEach(([key,value])=>{
        console.log(key, value);
        var cell = row.append("td");
        cell.html(value);
    })
  });
})

