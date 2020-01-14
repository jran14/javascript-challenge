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
    var searchDate =d3.select('#datetime').property('value');
    var searchCity=d3.select('#city').property('value');
    var searchState=d3.select('#state').property('value');
    var searchCountry=d3.select('#country').property('value');
    var searchShape=d3.select('#shape').property('value');
    console.log(searchDate);
    //return date filter
    var returnDates= data.filter(date => date.datetime === searchDate);
    //return city filter
    var returnCity= returnDates.filter(city => city.city === searchCity);
    //return state filter
    var returnState= returnCity.filter(state => state.state === searchState);
    //return country filter
    var returnCountry= returnState.filter(country => country.country === searchCountry);
    //return shape filter
    var returnShape= returnCountry.filter(shape => shape.shape === searchShape);
    //return results on table
    table.text('');
    returnCity.forEach(resultRow => {
        var newrows= table.append('tr');
        Object.values(resultRow).forEach(value => newrows.append('td').text(value));
    });
}

//call back function on search
var button= d3.select('#filter-btn');
button.on('click', search);


//PART TWO



// YOUR CODE HERE!
