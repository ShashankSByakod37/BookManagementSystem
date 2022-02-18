package com.example.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dao.LibraryDAO;
import com.example.model.Library;

@Service
public class LibraryServicer {
	@Autowired
	LibraryDAO dao;
	
	public LibraryServicer() {
		super();
	}

	public List<Library> getLibraryByCustomerId(int id){
		System.out.println("IN DAO SERVICER getLibraryByCustomerId");
		return dao.getLibraryByCustomerId(id);
	}
	
	public List<Library> getLibraryByBookId(int id){
		System.out.println("IN DAO SERVICER getLibraryByBookId");
		return dao.getLibraryByBookId(id);
	}
	public void deleteCustomersOfBookByBookId(int id) {
		System.out.println("IN DAO SERVICER deleteCustomersOfBookById");
		dao.deleteCustomersOfBookByBookId(id);
	}
	public Library insertCustomerBookMapping(Library l) {
		return dao.save(l);
	}
	public void addManyLibraries(List<Library> l) {
		dao.saveAll(l);
	}
}
