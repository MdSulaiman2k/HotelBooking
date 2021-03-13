package com.HotelBooking.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.HotelBooking.Repository.userRepo;
import com.HotelBooking.model.hotelrooms;
import com.HotelBooking.model.login;
import com.HotelBooking.model.user;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/user")
public class UserController {
	
	@Autowired
	userRepo us ;
	
//	@PostMapping("/register")
//	public @ResponseBody user  setuser(user u) {
//		
//		 if(us.findByEmail(u.getEmail()) == null ) {
//			  us.save(u) ;
//			  return u ;
//		 }
//		return new user() ;
//	}
	
	@PostMapping("/register")
	 public ResponseEntity<user> setuser(user u){
		 System.out.println(u);
		 if(us.findByEmail(u.getEmail()) == null ) {
     		  us.save(u) ;
			  return new ResponseEntity<user>(u , HttpStatus.OK ) ;
		 }
		   return new ResponseEntity<user>(new user() , HttpStatus.OK) ;
	  }
	 
	 @PostMapping("/Check")
	 public ResponseEntity<user> checkEmail( @RequestParam("email")  String mail ){
		       System.out.println(mail) ;
               if(us.findByEmail(mail)  != null ) {
            	   user u = new user() ;
            	   u.setEmail(mail) ;
            	   return new ResponseEntity<user>( u , HttpStatus.OK) ;
               }
            return new ResponseEntity<user>(new user() , HttpStatus.OK) ;
	 }
	 
	 @PostMapping("/login")
	 public ResponseEntity<user> checkLogin( login l ){
		 System.out.println( l) ; 
		    user u = us.findByEmail(l.getEmail()) ;
		     if(u != null) {
		    	 System.out.println(u.getPassword() +""+ l.getPassword()) ; 
		    	if(l.getPassword().equals(u.getPassword())) {
		    		System.out.println( l) ; 
		    	  return new ResponseEntity<user>( u , HttpStatus.OK) ;
		     }
	        }
		    return new ResponseEntity<user>(new user() , HttpStatus.OK)  ;
	 }
    
}
