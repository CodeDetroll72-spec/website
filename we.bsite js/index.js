const PI=3.1459;
let radius;
let circumference;
document.getElementById("submit").onclick=function(){
  radius= document.getElementById("my text").Value;
  radius= Number(radius);
  circumference=2 * PI * radius;
  document.getElementById("H3").textContent= "circumference";
  document.getElementById("p1").innnerHTML="<h2> this was made by innerhtml</h2>";
}
 