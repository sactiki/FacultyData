var photo=function(name){
    return name.photo
}

d3.select("body")
    .selectAll("img")
    .data(employees)
    .enter()
    .append("img")
    .attr("src",photo)