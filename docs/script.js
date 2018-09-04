var txtField =document.getElementById("input1");
var buton= document.getElementById("btn");
var ul22=document.querySelector("ul") ;
buton.addEventListener("click", function(){
if(txtField.value.length>0){
 var li= document.createElement("li");
 li.appendChild(document.createTextNode(txtField.value));
 ul22.appendChild(li);
 txtField.value="";
}
})


var css= document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2= document.querySelector(".color2");
var body= document.getElementById("gradiant");
 color1.addEventListener("input",function(){
body.style.background="linear-gradient(to right," +color1.value+ " ," +color2.value+")";

 })

color2.addEventListener("input",function(){

 body.style.background="linear-gradient(to right," + color1.value+","+color2.value+")";
 })
