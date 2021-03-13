package com.HotelBooking.Repository;

import org.springframework.data.repository.CrudRepository;

import com.HotelBooking.model.user;

public interface userRepo extends CrudRepository<user, Integer> {
    
	user findByEmail(String mail)  ;
	
	user findByName(String name) ;
}
