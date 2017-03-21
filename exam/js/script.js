

//function getMarks () {
  //var student =
  // document.getElementById("name").value;
  //document.write(student);
  
  var student ;

// feom example 57 - 
// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
  function getMarks () {  
      student =   document.getElementById("name").value;
  }
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
        
      if(student=="Aakriti"){
        document.write("hello");
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





