package com.example.dao;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.example.model.Reviews;

public interface ReviewsDAO extends JpaRepository<Reviews, Integer>{
	@Transactional
	@Modifying
	@Query("Delete from Reviews l where l.bookid = ?1" )
	void deleteReviewsOfBookByBookId(int id);
	
	@Query("select l from Reviews l where l.bookid = ?1")
	List<Reviews> getReviewsByBookId(int id);
	
	@Query("select l from Reviews l where l.userid = ?1")
	List<Reviews> getReviewsByCustomerId(int id);
}