var x = document.getElementById("one")
var y = document.getElementById("two")
var z = document.getElementById("three")
var z1 = document.getElementById("four")

function one(){
  if(x.value.length>0)
  {
    y.focus()
  }
 }
 function two(){
   if (y.value.length > 0) {
     z.focus()
   }
 }
function three() {
  if (z.value.length > 0) {
    z1.focus()
  }
}


$("form").submit(function(){
     var userotp = $("#one").val() +   $("#two").val() + $("#three").val() +  $("#four").val()   ;
     if(userotp == sessionStorage.getItem("otp")){
          var js = {
                id : sessionStorage.getItem("id")
          }
          data =  $.ajax({
               url: 'http://localhost:8080/api/mail/Bookingconfirmation',
               method: 'POST',
               dataType: 'json',
               data: js,
               success: function check(data , status){
                  console.log(data.email)
                   found = true ;
                   console.log(data.otp)
                   // else{
                   //     $("#Adate").css("color" , "red")
                   //     $("#Adate").css("border-color" , "red")
                   //     $("#Ddate").css("color" , "red")
                   //     $("#Ddate").css("border-color" , "red")
                     
                   // }
               },
               error: function(jqXHR, textStatus, err) {
                  console.log( jqXHR,'\n', textStatus,'\n', err )
       
                  found = false ;
                },
                async : false 
             });
         return true ;
     }
     else{
          $
          return false 

     }
    
});