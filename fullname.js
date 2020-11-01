var getfname=function(fname){
    return fname.firstName
}
var getlname=function(lname){
    return lname.lastName
}
var getfullname=function(employee){
   return getfname(employee)+" "+getlname(employee) 
}
d3.select("body")
    .selectAll("h2")
    .data(employees)
    .enter()
    .append("h2")
    .text(getfullname);