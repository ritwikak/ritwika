// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
          document.querySelector("#add")
      .addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("data/name.json", 
            function (res) {
              var a=res.firstnum+res.secondnum;
              var message = 
                res.firstnum + " + " + res.secondnum + " = "+ a;

              document.querySelector("#content")
                .innerHTML = "<h2>" + message + "</h2>";
            });    
          }); 
    document.querySelector("#sub")
      .addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("data/name.json", 
            function (res) {
              var a=res.firstnum-res.secondnum;
              var message = 
                res.firstnum + " - " + res.secondnum + " = "+ a;

              document.querySelector("#content")
                .innerHTML = "<h2>" + message + "</h2>";
            });    
          }); 

    document.querySelector("#mul")
      .addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("data/name.json", 
            function (res) {
              var a=res.firstnum*res.secondnum;
              var message = 
                res.firstnum + " x " + res.secondnum + " = "+ a;

              document.querySelector("#content")
                .innerHTML = "<h2>" + message + "</h2>";
            });    
          }); 

    document.querySelector("#div")
      .addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("data/name.json", 
            function (res) {
              var a=res.firstnum/res.secondnum;
              var message = 
                res.firstnum + " / " + res.secondnum + " = "+ a;

              document.querySelector("#content")
                .innerHTML = "<h2>" + message + "</h2>";
            });    
          }); 

}
                         );
