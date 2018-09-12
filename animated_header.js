window.onscroll = function(){ myfunction() };
function myfunction(){
  if( document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ){
      document.getElementById("id of the element" ).className = "class with new properties" ; // example className = "change-header"
   }else{
      document.getElementById("same").className = "your prev class for header";
    }
 }
