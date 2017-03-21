var student ;

document.addEventListener("DOMContentLoaded",
  function getMarks (event) {
 
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
     student= document.getElementById("name").value;
        console.log(student); 
     if(student==="Aakriti"){
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("data/name.json", 
            function (res) {
            
              var message = 
               "Marks of " + res.nameone + ": "+ res.marksone + "out of 100";
              
              
              

              document.querySelector("#content")
                .innerHTML = "<h2>" + message + "</h2>";
            }
                          }//if over
                          if(student==="Zohaib Khan"){
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("data/name.json", 
            function (res) {
            
              var message = 
               "Marks of " + res.nametwo + ": "+ res.markstwo + "out of 100";
              
              
              

              document.querySelector("#content")
                .innerHTML = "<h2>" + message + "</h2>";
            }
                          }//if over
                        
                          }
                          }
                          );





