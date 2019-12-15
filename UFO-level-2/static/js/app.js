// from data.js
var tableData = data;

var button = d3.select("#filter-btn");

var tbody = d3.select("tbody");



button.on("click", function(){
  var filteredData = tableData;  
    // Select the date input element's HTML node
  var dateValue = d3.select("#datetime").property("value");
  var cityValue = d3.select("#city").property("value");
  var stateValue = d3.select("#state").property("value");
  var countryValue = d3.select("#country").property("value");
  var shapeValue = d3.select("#shape").property("value");

  console.log(dateValue);
  console.log(tableData);

  if (dateValue) {
    console.log("filtering by date");
    filteredData = filteredData.filter(sighting => sighting.datetime === dateValue);
  }

  if (cityValue){
    console.log("filtering by city");
    filteredData = filteredData.filter(sighting => sighting.city === cityValue );
  }

  if (stateValue){
    console.log("filtering by state");
    filteredData = filteredData.filter(sighting => sighting.state === stateValue );
  }

  if (countryValue){
    console.log("filtering by country");
    filteredData = filteredData.filter(sighting => sighting.country === countryValue );
  }

  if (shapeValue){
    console.log("filtering by shape");
    filteredData = filteredData.filter(sighting => sighting.shape === shapeValue );
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

