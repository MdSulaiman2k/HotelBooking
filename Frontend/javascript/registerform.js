var found = false 
count = 1 
function validdate(){
    var arrivedate = new Date($("#Adate").val() );
     var ddate = new Date($("#Ddate").val()) ;
      var today = new Date() ;
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();
      today = yyyy+  "-" + mm + '-' + dd ;
      today = new Date(today) 
      if(today.getTime() <= arrivedate.getTime()){
             if(arrivedate.getTime() <= ddate.getTime()) {
                   return sendmail() ; 
             }
             else{
                $("#Ddate").css("color" , "red")
                   $("#Ddate").css("border-color" , "red")
                   
                   return false ;
             }
      }
      else{
        $("#Adate").css("color" , "red")
        $("#Adate").css("border-color" , "red")
          return false ;
      }
}

$("#Adate").on("input" , function(){
    $("#Adate").css("color" , "black")
    $("#Adate").css("border-color" , "lightblue")
});

$("#reset").click(function(){
    $("#Adate").css("color" , "black")
    $("#Adate").css("border-color" , "lightblue")
    $("#Ddate").css("color" , "black")
    $("#Ddate").css("border-color" , "lightblue")
});

$("#Ddate").on("input" , function(){
    $("#Ddate").css("color" , "black")
    $("#Ddate").css("border-color" , "lightblue")
});

$("document").ready(function(){
    $("form").submit(function(){
        return validdate() ;
    });
});

function sendmail(){ 

    if(count <= 1 ){
        count++ ; 
    var js = {
        name  : $("#Fname").val() + $("#Lname").val() ,
        mail :  $("#email").val() ,
        checkindate : $("#Adate").val() , 
        checkoutdate :  $("#Ddate").val(),
        htname : sessionStorage.getItem("hotel") ,
        Adult  : $("#points").val() ,
        Children :  $("#points2").val() ,
        otp  : ""
    }
   data =  $.ajax({
        url: 'http://localhost:8080/api/mail/hotelbooking',
        method: 'POST',
        dataType: 'json',
        data: js,
        success: function check(data , status){
           console.log(data.email)
            found = true ;
            console.log(data.otp)
            sessionStorage.setItem("otp" , data.otp)
            sessionStorage.setItem("id" , data.id);
            
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
    }
     
        
     return found ;
}