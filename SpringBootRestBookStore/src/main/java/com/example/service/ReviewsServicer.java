package com.example.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dao.LibraryDAO;
import com.example.dao.ReviewsDAO;
import com.example.model.Library;
import com.example.model.Reviews;

@Service
public class ReviewsServicer {
	@Autowired
	ReviewsDAO dao;
	
	public ReviewsServicer() {
		super();
	}

	public List<Reviews> getReviewsByCustomerId(int id){
		System.out.println("IN DAO SERVICER getReviewsByCustomerId");
		return dao.getReviewsByCustomerId(id);
	}
	
	public List<Reviews> getReviewsByBookId(int id){
		System.out.println("IN DAO SERVICER getReviewsByBookId");
		return dao.getReviewsByBookId(id);
	}
	public void deleteReviewsOfBookByBookId(int id) {
		System.out.println("IN DAO SERVICER deleteCustomersOfBookById");
		dao.deleteReviewsOfBookByBookId(id);
	}
	public Reviews insertCustomerBookMapping(Reviews r) {
		return dao.save(r);
	}
	public void addManyReviews(List<Reviews> reviews) {
		dao.saveAll(reviews);
	}
}
