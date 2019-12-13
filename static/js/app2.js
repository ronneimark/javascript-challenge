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
    var inputElementDate = d3.select("#datetime");

    // Get the value property of the input element
    var inputValueDate = inputElementDate.property("value");

    console.log("Date: ", inputValueDate);
 
    var inputElementState = d3.select("#state");

    var inputValueState = inputElementState.property("value");

    console.log("Element: ", inputElementState);
    console.log("State: ", inputValueState);

    var filteredData = tableData;
    if(inputValueState !== '*')
        filteredData = filteredData.filter(d => d.state === inputValueState);
    if(inputValueDate !== '')
        filteredData = filteredData.filter(d => d.datetime === inputValueDate);
   /* var filteredData = tableData.filter(tableData => 
        (tableData.datetime === inputValueDate || inputValueDate === '') && (tableData.state === inputValueState || inputValueState === '*'));
        */

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
