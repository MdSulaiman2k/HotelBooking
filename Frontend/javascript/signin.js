// document.querySelector("#signbtn").addEventListener("click" , function(){
// 	if(document.querySelector("#passveri").value != document.querySelector("#pass").value){
//             document.querySelector("#passveri").style.borderColor = "red" ;
//             document.querySelector("#signbtn").disabled  = true;
//             var http =  new xmlHttpRequest() ;
//             http.open("POST" , "http://localhost:8080/api/Register");
//             http.onreadystatechange( function() {
//           if (this.readyState == 4 && this.status == 200) {
                 
//           }
//           else{
//           	document.querySelector("#passveri").style.borderColor  = "blue" ;
//     	document.querySelector("#signbtn").disabled  = false ;

//           }
//   });
//         }
//     else {
//     	alert("false")
//     	document.querySelector("#passveri").style.borderColor  = "blue" ;
//     	document.querySelector("#signbtn").disabled  = false ;
//     }
// });
var cnt = 0 
var found = false ;


$("document").ready(function(){
    $("#pass").on("input" , function(){
         if(cnt == 0){
         cnt++ ;
         var mail = $("#mail").val()
         var js = {
            email : mail 
         }
         $.ajax({
          url: 'http://localhost:8080/api/user/Check',
          method: 'POST',
          dataType: 'json',
          data: js,
          success: function(data , status){
             console.log(data.email)
             
              if(data.email != null){
                 return true ;
              }
              else{
                 $("#mail").css("color" , "red") ;
                 $("#mail").css("border-color" , "red")
               // document.getElementById("thirdlabel").insertAdjacentHTML("beforebegin" , "<p class='error'>Email id not found </p>")
                $("#error").css("display" , "inline-block") ;
                return false ;
              }
          },
          error: function(jqXHR, textStatus, err) {
             console.log( jqXHR,'\n', textStatus,'\n', err )
           }
        });
      }

    }) ;
})

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
 
function checkverfication(){
      js = {
         email :$("#mail").val() , 
         password :$("#pass").val()
      }
       console.log(js)
      $.ajax({
         url: 'http://localhost:8080/api/user/login',
         method: 'POST',
         dataType: 'json',
         data: js,
         success: function(data , status){
            
             if(data.email != null){
               console.log(data.name)
               
               found = true ;
               sessionStorage.setItem("name" , data.name ) ;
               sessionStorage.setItem("email" , data.email) ;
               return found ;
             }
             else{
               
               $("#pass").css("color" , "red")
               $("#pass").css("border-color" , "red")
               return found ; 
             } 
         },
         error: function(jqXHR, textStatus, err) {
            console.log( jqXHR,'\n', textStatus,'\n', err )
          },
          async : false 
          
       });
       
      
}

$("document").ready(function(){ 
   $("form").submit(function() {
      checkverfication() ;
      return found ;
   });
 });

