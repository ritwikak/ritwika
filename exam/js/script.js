var student ;
//function getMarks () {
 
  //student= document.getElementById("name").value;
  //document.write(student);
//};
console.log(student); 

// feom example 57 - 
// Event handling
document.addEventListener("DOMContentLoaded",
  function getMarks (event) {
 
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
     student= document.getElementById("name").value;
        
      if(student=="Aakriti"){
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("data/name.json", 
            function (res) {
            
              var message = 
               "Marks of " + res.nameone + ": "+ marksone + "out of 100";
              
              
              

              document.querySelector("#content")
                .innerHTML = "<h2>" + message + "</h2>";
            });
      });
  }
);
};
};





