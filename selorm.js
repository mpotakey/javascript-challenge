var table_align = d3.select("tbody");

potash.forEach(function(data){
    var table_row = table_align.append("tr")
    Object.entries(data).forEach(function([key,value]){
        table_cell = table_row.append("td");
        table_cell.text(value);
    });

});