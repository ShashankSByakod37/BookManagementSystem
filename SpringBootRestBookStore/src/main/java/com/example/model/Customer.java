package com.example.model;



import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Customer{
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	int id;
	@Column
	String password;
	@Column
	String address;
	@Column
	int isAdmin;
	@Column
	String email;
	@Column
	String username;
	@Column 
	String firstName;
	@Column 
	String lastName;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
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
	public int getIsAdmin() {
		return isAdmin;
	}
	public void setIsAdmin(int isAdmin) {
		this.isAdmin = isAdmin;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public Customer(int id, String password, String address, int isAdmin, String email, String username,
			String firstName, String lastName) {
		super();
		this.id = id;
		this.password = password;
		this.address = address;
		this.isAdmin = isAdmin;
		this.email = email;
		this.username = username;
		this.firstName = firstName;
		this.lastName = lastName;
	}
	public Customer() {
		super();
	}
	
	
	
//	public Customer updateCustomer(Customer new_customer) {
//		this.setName(new_customer.getName());
//		this.setPassword(new_customer.getPassword());
//		this.setAddress(new_customer.getAddress());
//		this.setAdmin(new_customer.getAdmin());
//		this.setEmail(new_customer.getEmail());
//		this.setId(new_customer.getId());
//		return this;
//	}
}