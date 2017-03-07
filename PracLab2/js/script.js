function sayHello () 
{
  
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
  var count++;
  if(count>1)
  {
    document
.querySelector("h1")
.textContent = title;
    break;
  }
  //document.getElementById("title").value;
 // var title=title;

 //title ="Lecture 53";
var title =
document
.querySelector("#title")
.textContent;
 title = title+ " & rLovin' it!";
document
.querySelector("h1")
.textContent = title;
}
}
