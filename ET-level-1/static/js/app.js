// from data.js
var tableData = data;

//append the data from data.js to the table in html

//reference the table element
var table= d3.select('tbody');

//insert a row after each th element
data.forEach(record => {
    var rows= table.append('tr');
    Object.values(record).forEach(value => rows.append('td').text(value));
});

//identify input box
var inputBox= d3.select('.form-control');

//function to filter data by date/time column
function search(){
    var searchDate =inputBox.property('value');
    var returnDates= data.filter(date => date.datetime === searchDate);
    console.log(returnDates)
    //return results on table
    table.text('');
    returnDates.forEach(resultRow => {
        var newrows= table.append('tr');
        Object.values(resultRow).forEach(value => newrows.append('td').text(value));
    });
}

//call back function on search
inputBox.on('change', search);

// YOUR CODE HERE!
