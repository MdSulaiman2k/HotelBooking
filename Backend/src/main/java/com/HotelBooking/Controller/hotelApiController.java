package com.HotelBooking.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.HotelBooking.Repository.hotelRepo;
import com.HotelBooking.model.hotelrooms;

@CrossOrigin("*")
@RestController
@RequestMapping("/hotels")
public class hotelApiController {
	
	@Autowired
	hotelRepo htRp ;

  @GetMapping("/data")
  public ResponseEntity<List<hotelrooms>> getdata(){
	   List<hotelrooms> roomsdata = htRp.findAll() ;
	   return new ResponseEntity<List<hotelrooms>>(roomsdata , HttpStatus.OK) ;
  }
  

   	  
}
