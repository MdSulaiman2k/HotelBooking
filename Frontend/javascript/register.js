function checkpassword(){
    var pass = $("#pass").val() ;
    var cnfpas = $("#passveri").val() ;
        
    if( pass != cnfpas){
          $("#passveri").css("border-color" , "red") ;
          return false ;
    }
   else{
       $("#passveri").css("border-color" , "rgb(8, 150, 255)") ;
          var js = {
                name  : $("#name").val() ,
                email  :  $("#mail").val(),
                password : $("#pass").val() 
          }
          var data = $.ajax({
              url : "http://localhost:8080/api/user/register" ,
              method: 'POST',
              dataType: 'json',
              data: js,
              success: function(data , status){
                console.log(data.email)
                 if(data.email != null){
                     sessionStorage.setItem("email" , data.email) ;
                     sessionStorage.setItem("name" , data.name) ;
                     return true ;
                 }
                 else{
                     sessionStorage.setItem("name" , "null") ;
                     sessionStorage.setItem("email" , "null") ;
                    $("#mail").css("color" , "red") ;
                    $("#mail").css("border-color" , "red")
                  // document.getElementById("thirdlabel").insertAdjacentHTML("beforebegin" , "<p class='error'>Email id not found </p>")
                   $("#error").css("display" , "inline-block") ;
                   return false ;
                 }
             },
             async : false 
          });         
          
        }
        if(sessionStorage.getItem("name") != null){
            return true ;
        }
        return false ;
}  


$("document").ready(function(){ 
    sessionStorage.clear();
$("form").submit(function() {
      
      return checkpassword();

});
});

$("#mail").on("input" , function(){
    cnt = 0 ;
   $("#mail").css("border-color" , "#E0E0E0") ;
   $("#mail").css("color" , "#333") ;
   $("#error").css("display" , "none")
 
 });
 
 $("#pass").on("input" , function(){
    $("#pass").css("border-color" , "#E0E0E0") ;
    $("#pass").css("color" , "#333") ;
  });
