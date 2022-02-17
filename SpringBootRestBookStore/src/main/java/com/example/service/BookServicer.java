package com.example.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dao.BookDAO;
import com.example.model.Book;

@Service
public class BookServicer {
	@Autowired
	BookDAO dao;
	
	public BookServicer() {
		super();
	}

	public Optional<Book> getBookById(int id) {
		System.out.println("In BOOK SERVICER getBookById");
		return dao.findById(id);
	}

	public List<Book> getBooks() {
		// TODO Auto-generated method stub
		System.out.println("In BOOK SERVICER getBooks");
		return (List<Book>) dao.findAll();
	}

	public Book insertBook(Book book) {
		System.out.println("In BOOK SERVICER insertBook");
		return dao.save(book);
	}

	public Book updateBook(Book book) {
		System.out.println("In BOOK SERVICER updateBook");
		return dao.save(book);
	}

	public Book deleteBook(Book book) {
		System.out.println("In BOOK SERVICER deleteBook");
		dao.delete(book);
		return book;
	}

}
