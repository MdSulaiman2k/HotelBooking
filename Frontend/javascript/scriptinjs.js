// function clicking(){
// 	var a = document.querySelector("#bt1").classList
// 	var arr = ["1,450" , "1,950" , "2,650" , "1,550" , "1,750"  , "1,050"]
// 	if(a[0] == "btn2"){

//          document.querySelector("#bt1").classList.remove("btn2") ;
//          document.querySelector("#bt1").classList.add("btn1");
//          document.querySelector("#bt2").classList.remove("btn1") ;
//          document.querySelector("#bt2").classList.add("btn2") ;
//          for(var i = 1 ; i <= 6 ; i++ ){
//          	document.querySelector("#weekday"+i).innerHTML = "For tonight" ;
//          	document.querySelector("#weekdaymoney"+i).innerHTML = arr[i-1] ;



//          }
// 	}	
// }

// function clicking1(){
// 	var a = document.querySelector("#bt2").classList
// 	var arr = ["1,650" , "2,150" , "2,850" , "1,750" , "1,950"  , "1,250"]
// 	if(a[0] == "btn2"){
// 		 document.querySelector("#bt1").classList.remove("btn1") ;
//          document.querySelector("#bt1").classList.add("btn2");
//          document.querySelector("#bt2").classList.remove("btn2") ;
//          document.querySelector("#bt2").classList.add("btn1") ;
//          document.querySelector("#bt1").style.left = "486px" ;
//          for(var i = 1 ; i <= 6 ; i++ ){
//          	document.querySelector("#weekday"+i).innerHTML = "for weekEnd" ;
//          	document.querySelector("#weekdaymoney"+i).innerHTML =  arr[i-1];
           
//            }

// 	}
// }


// // function passvali(){
// // 	var pass =  document.querySelector("#pass").value
// // 	var pass2 = document.querySelector("#passveri").value
// // 	if(pass == pass2)
// // 		document.querySelector("form").action = "file:///C:/Users/mohamedsulaiman/Documents/webdevelopment/HotelManagement/home.html" ;
// //     else 
// //     	document.quer


// // }



var img = "../image/"
var hotels = {
   room : {
             name : "ITC Grand Chola" ,
             image : "bedroom1.jpg" ,
             address : "Chennai , Tamil Nadu"  ,
             price : 500 
          },
    room1 : {
             name : "Hablis-A Business Hotel in Chennai" ,
             image : "bedroom2.jpg" ,
             address : "Guindy"  ,
             price : 1500 
          },
    room2 : {
             name : "Crown Plaza Chennai Adyar Park" ,
             image : "bedroom3.jpg" ,
             address : "Adyar Park,Chennai, Tamil Nadu"  ,
             price : 3500 
          },
    room3 : {
             name : "The Leela Palace Chennao" ,
             image : "bedroom4.jpg" ,
             address : "Sabari Nagar,Porur ,Chennai ,Tamil Nadu"  ,
             price : 4500 
          },
    room4 : {
             name : "Vamana Royal" ,
             image : "bedroom5.jpeg" ,
             address : "Taramani,Chennai , Tamil Nadu"  ,
             price : 5500 
          },
    room5 : {
             name : "Rithikha Inn porur by R-hotel" ,
             image : "bedroom6.jpeg" ,
             address : "Tambaram,Chennai , Tamil Nadu"  ,
             price : 7000 
          },
   room6 : {
             name : "OYO Townhouse 77649" ,
             image : "bedroom7.jpg" ,
             address : "Ashok Nagar,Chennai , Tamil Nadu"  ,
             price : 1750 
          },
    room7 : {
             name : "Pleasant Days Resort " ,
             image : "bedroom8.webp" ,
             address : "Guindy, chennai"  ,
             price : 1800 
          },
     room8 : {
             name : "S.S.K Residency" ,
             image : "bedroom9.jpg" ,
             address : "Mylapore,Chennai , Tamil Nadu"  ,
             price : 2000 
          },
    room9 : {
             name : "Century Park Hotel" ,
             image : "bedroom10.webp" ,
             address : "Ambattur,Chennai"  ,
             price : 2500 
          },
     room10 : {
             name : "Pleasant Days Resort" ,
             image : "bedroom11.jpg" ,
             address : "Tambaram,Tamil Nadu"  ,
             price : 4500 
          },
    room11 : {
             name : "Rb residency Ambattur" ,
             image : "bedroom1.jpg" ,
             address : "Ambattur,Tamil Nadu"  ,
             price : 4750 
          },
     room12 : {
             name : "Holiday Inn Chennai OMR IT Expressway" ,
             image : "bedroom13.jpg" ,
             address : "OMR,Chennai, Tamil Nadu"  ,
             price : 4800 
          },
    room13 : {
             name : "Skyfy " ,
             image : "bedroom2.jpg" ,
             address : "Anna Nagar,Chennai"  ,
             price : 5000 
          },
     room14 : {
             name : "ITC Grand Chola" ,
             image : "bedroom18.jpg" ,
             address : "Chennai , Tamil Nadu"  ,
             price : 9000 
          },
    room15 : {
             name : "Hablis-A Business Hotel in Chennai" ,
             image : "bedroom16.webp" ,
             address : "Guindy"  ,
             price : 9500 
          },
     room16 : {
             name : "ITC Grand Chola" ,
             image : "bedroom17.jpg" ,
             address : "Chennai , Tamil Nadu"  ,
             price : 10500 
          },
    room17 : {
             name : "Hablis-A Business Hotel in Chennai" ,
             image : "bedroom15.jpg" ,
             address : "Guindy"  ,
             price : 11500 
          },

}

var arr = [500 , 2500 ,3000, 5000, 5500 , 12000 ]

var dat = false 

setvalue(0);


function setvalue(cnt ){
for(i in hotels){
   if(cnt <= 6){
   var rooms =  hotels[i]
   
   for(j in rooms){
      if(j == "name"){
         $("h4").eq(cnt).html(rooms[j])
      }
      else if(j === "image"){
          $(".imgfont").eq(cnt).attr("src" , img + rooms[j]) ;
      }
      else if(j == "address"){
          $(".des").eq(cnt).html(rooms[j])
      }
      else if(j == "price"){
         $(".rupee").eq(cnt).html("&#x20B9 " + rooms[j])
      }
   }
   cnt++ ;
}
else{
   break ;
}
}
}

function price(){
   var cnt = 0 ; 
   for(i in hotels){
   var rooms =  hotels[i]
   for(j in rooms){
       if(j == "price" ){
          if(cnt <= 6  && rooms[j] >= 5000){
              $("h4").eq(cnt).html(rooms["name"]) ;
               $(".imgfont").eq(cnt).attr("src" , img + rooms["image"]) ;
               $(".rupee").eq(cnt).html("&#x20B9 " + rooms["price"]) ;
               $(".des").eq(cnt).html(rooms["address"]) ;
               cnt++ ;
          }
       }
       if(cnt > 6){
         break;
       }
   }
}
}






$("document").ready(function(){
   $("#rate").on("change" , function() {
     var val = parseInt($("#rate").val()) ;
     var cnt = 0 ;
     for(i in hotels){ 
       var rooms =  hotels[i]
     for(j in rooms){
        if(j == "price" ){
            if(arr[val] <= rooms[j] && arr[val+1] >= rooms[j] ){
               $("h4").eq(cnt).html(rooms["name"]) ;
               $(".imgfont").eq(cnt).attr("src" , img + rooms["image"]) ;
               $(".rupee").eq(cnt).html("&#x20B9 " + rooms["price"]) ;
               $(".des").eq(cnt).html(rooms["address"]) ;
               cnt++ ;
            }
        }
     }
  }
  setvalue(cnt);

  });

});
function clicking(){
   var a = document.querySelector("#bt3").classList
   if(a[0] == "btn2"){

         document.querySelector("#bt3").classList.remove("btn2") ;
         document.querySelector("#bt3").classList.add("btn1");
         document.querySelector("#bt2").classList.remove("btn1") ;
         document.querySelector("#bt2").classList.add("btn2") ;
         setvalue(0);
         
   }  
}



function clicking1(){
   var a = document.querySelector("#bt2").classList  
   if(a[0] == "btn2"){
       document.querySelector("#bt3").classList.remove("btn1") ;
         document.querySelector("#bt3").classList.add("btn2");
         document.querySelector("#bt2").classList.remove("btn2") ;
         document.querySelector("#bt2").classList.add("btn1") ;
         document.querySelector("#bt3").style.left = "486px" ;
         price();
   }
}

$("document").ready(function(){
   console.log(sessionStorage.getItem("name"))
   if(sessionStorage.getItem("name") != null  && sessionStorage.getItem("name") != "null"  ){
      $("#bt").css("display" , "none") ;
      $("#bt1").html(sessionStorage.getItem("name")) ;

   }
});

$("h4.headtag").click(function(event){
     sessionStorage.setItem("hotel" , $("#"+this.id).html())
});

$("#bt1").click(function(){
    if(sessionStorage.getItem("name") != "null"  ){
      sessionStorage.setItem("name" , "null") ;
      sessionStorage.setItem("email" , "null") ;
      $("#bt").css("display" , "inline-block") ;
      $("#bt1").html('<a href="Login.html">Sign in</a>') ;
    }  
});





