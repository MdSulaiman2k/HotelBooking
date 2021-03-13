package com.HotelBooking.Repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.HotelBooking.model.hotelrooms;

public interface hotelRepo  extends CrudRepository<hotelrooms, Integer>{
	@Override 
    List<hotelrooms> findAll() ;
    
}
