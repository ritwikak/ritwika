function sayHello () 
{
  document
.querySelector("#title")
.textContent;
  title ="Lecture 53";
var name =
document.getElementById("name").value;
var message = "<h2>Hello " + name + "!</h2>";
// document
// .getElementById("content")
// .textContent = message;
document
.getElementById("content")
.innerHTML = message;
if (name === "student") 
{
var title =
document
.querySelector("#title")
.textContent;
title += " & Lovin' it!";
document
.querySelector("h1")
.textContent = title;
}
}
