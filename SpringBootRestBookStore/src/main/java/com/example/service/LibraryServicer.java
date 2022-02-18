package com.example.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dao.LibraryDAO;
import com.example.model.Book;
import com.example.model.Library;

@Service
public class LibraryServicer {
	@Autowired
	LibraryDAO dao;
	@Autowired
	BookServicer bookServicer;
	
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
	
	public List<Book> getBooksByCustomerId(int id){
		List<Book> b = new ArrayList<Book>();
		List<Library> l = getLibraryByCustomerId(id);
		for(Library t: l) {
			b.add(bookServicer.getBookById(t.getBookid()));
		}
		return b;
	}
	
	public List<Book> getBooksByBookId(int id){
		List<Book> b = new ArrayList<Book>();
		List<Library> l = getLibraryByBookId(id);
		for(Library t: l) {
			b.add(bookServicer.getBookById(t.getBookid()));
		}
		return b;
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
