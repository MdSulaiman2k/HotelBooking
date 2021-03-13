package com.HotelBooking.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Hotel_details")
public class hotelrooms {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id ;
	private String hotelname ;
	private double price ;
	private String imgsrc ;
	private String address ;
	
	
	
	public hotelrooms(int id, String hotelname, double price, String imgsrc, String desc) {
		super();
		this.id = id;
		this.hotelname = hotelname;
		this.price = price;
		this.imgsrc = imgsrc;
		this.address = desc;
	}
	
	
	public hotelrooms() {
		super();
		// TODO Auto-generated constructor stub
	}


	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getHotelname() {
		return hotelname;
	}
	public void setHotelname(String hotelname) {
		this.hotelname = hotelname;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public String getImgsrc() {
		return imgsrc;
	}
	public void setImgsrc(String imgsrc) {
		this.imgsrc = imgsrc;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String desc) {
		this.address = desc;
	}
	@Override
	public String toString() {
		return "hotelrooms [id=" + id + ", hotelname=" + hotelname + ", price=" + price + ", imgsrc=" + imgsrc
				+ ", desc=" + address + "]";
	}
	
	
	
	
	
	
	
	

}
