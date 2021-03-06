// from data.js
var tableData = data;

// YOUR CODE HERE!

// Get references to emelemnts: tbody, input filed and button
var tbody = document.querySelector("tbody");
var dateInput = document.querySelector('#datetime');
var searchBtn = document.querySelector('#filter-btn');

function renderTable(){
    tbody.innerHTML= "";

    for(var i = 0; i < tableData.length; i++) {
        // grab current data object and fields
        var data = tableData[i];
        var fields = Object.keys(data);
        // create new row and set index 
        var row = tbody.insertRow(i);
        for (var j = 0; j < fields.length; j++) {
            var field = fields[j];
            var cell = row.insertCell(j);
            cell.innerText = data[field];
        }
    };
};

