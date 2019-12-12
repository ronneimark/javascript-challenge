// from data.js
var tableData = data;

// Console.log the weather data from data.js
var tbody = d3.select("tbody");
console.log(data);

data.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
});

// Getting a reference to the button on the page with the id property set to `click-me`
var button = d3.select("#filter-btn");


button.on("click", function() {

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log('Filter button was clicked')
    console.log(inputValue);

    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

    console.log(filteredData);

    d3.selectAll('tr').selectAll('td').remove()

    filteredData.forEach((ufoSighting) => {
        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
})
