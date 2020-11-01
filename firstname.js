var getfname=function(fname){
    return fname.firstName
}

d3.select("body")
    .selectAll("h2")
    .data(employees)
    .enter()
    .append("h2")
    .text(getfname);