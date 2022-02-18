package com.example.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.model.Library;

@Repository
public interface LibraryDAO extends JpaRepository<Library, Integer>{
	@Transactional
	@Modifying
	@Query("Delete from Library l where l.bookid = ?1" )
	void deleteCustomersOfBookByBookId(int id);
	
	@Query("select l from Library l where l.bookid = ?1")
	List<Library> getLibraryByBookId(int id);
	
	@Query("select l from Library l where l.userid = ?1")
	List<Library> getLibraryByCustomerId(int id);
	
}
