var lname=function(name){
    return name.lastName
}

d3.select("body")
    .append("ol")
    .selectAll("li")
    .data(employees)
    .enter()
    .append("li")
    .text(lname);