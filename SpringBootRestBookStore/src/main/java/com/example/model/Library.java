package com.example.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

class CompositeKey implements Serializable{
	int bookid;
	int userid;
}

@Entity
@Table(name="Library")
@IdClass(CompositeKey.class)
public class Library {
	
	@Id
	int bookid;
	@Id
	int userid;
	@Column
	long quantity;
	@Column
	long grandtotal;
	public int getBookid() {
		return bookid;
	}
	public void setBookid(int bookid) {
		this.bookid = bookid;
	}
	public int getUserid() {
		return userid;
	}
	public void setUserid(int userid) {
		this.userid = userid;
	}
	public long getQuantity() {
		return quantity;
	}
	public void setQuantity(long quantity) {
		this.quantity = quantity;
	}
	public long getGrandtotal() {
		return grandtotal;
	}
	public void setGrandtotal(long grandtotal) {
		this.grandtotal = grandtotal;
	}
	
	
}
