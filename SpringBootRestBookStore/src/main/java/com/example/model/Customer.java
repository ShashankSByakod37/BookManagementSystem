package com.example.model;



import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Customer{
	@Id
	int id;
	@Column
	String password;
	@Column
	String address;
	@Column
	int admin;
	@Column
	String email;
	@Column
	String name;
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	public int getAdmin() {
		return admin;
	}
	public void setAdmin(int admin) {
		this.admin = admin;
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public Customer(int id, String password, String address, int admin, String email, String name) {
		super();
		this.id = id;
		this.password = password;
		this.address = address;
		this.admin = admin;
		this.email = email;
		this.name = name;
	}
	public Customer() {
		super();
	}
	public Customer updateCustomer(Customer new_customer) {
		this.setName(new_customer.getName());
		this.setPassword(new_customer.getPassword());
		this.setAddress(new_customer.getAddress());
		this.setAdmin(new_customer.getAdmin());
		this.setEmail(new_customer.getEmail());
		this.setId(new_customer.getId());
		return this;
	}
}