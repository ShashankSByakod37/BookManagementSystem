package com.example.dao;

import org.springframework.stereotype.Repository;

import com.example.model.Book;

import org.springframework.data.repository.CrudRepository;

@Repository
public interface BookDAO extends CrudRepository<Book,Integer>{

	
}
