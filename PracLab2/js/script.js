var count;
count=0;
function sayHello () 
{
var name =
document.getElementById("name").value;
var message = "<h2>Hello " + name + "!</h2>";

document
.getElementById("content")
.innerHTML = message;
if (name === "student") 
{
 
var title =
document
.querySelector("#title")
.textContent;
if(count==0)
{
title += " & Lovin' it!";
count++;
}
document
.querySelector("h1")
.textContent = title;
}
}
