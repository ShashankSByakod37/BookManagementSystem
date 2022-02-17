package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dao.CustomerDAO;
import com.example.model.Customer;

@Service
public class CustomerServicer {
	@Autowired
	CustomerDAO dao;
	
	public CustomerServicer() {
		super();
	}

	public Customer getCustomerById(int id) {
		System.out.println("In CUSTOMER SERVICER getCustomerById");
		return dao.findById(id).orElse(null);
	}

	public List<Customer> getCustomers() {
		// TODO Auto-generated method stub
		System.out.println("In CUSTOMER SERVICER getCustomers");
		return (List<Customer>) dao.findAll();
		}

	public Customer insertCustomer(Customer customer) {
		System.out.println("In CUSTOMER SERVICER insertCustomer");
		return dao.save(customer);
	}

	public Customer updateCustomer(Customer customer) {
		System.out.println("In CUSTOMER SERVICER updateCustomer");
		return dao.save(customer);
	}

	public Customer deleteCustomer(Customer customer) {
		System.out.println("In CUSTOMER SERVICER deleteCustomer");
		dao.delete(customer);
		return customer;
	}

	
}
