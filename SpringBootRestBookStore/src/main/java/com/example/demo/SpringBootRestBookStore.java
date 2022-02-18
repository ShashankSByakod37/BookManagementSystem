package com.example.demo;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.Book;
import com.example.model.Customer;
import com.example.model.Library;
import com.example.model.Reviews;
import com.example.service.BookServicer;
import com.example.service.CustomerServicer;
import com.example.service.LibraryServicer;
import com.example.service.ReviewsServicer;

@SpringBootApplication(scanBasePackages={"com.example.dao","com.example.service","com.example.model","com.example.demo"})
@EntityScan("com.example.model")
@EnableJpaRepositories("com.example.dao")
public class SpringBootRestBookStore {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootRestBookStore.class, args);
	}

}

@CrossOrigin(origins = "localhost:3000")
@RestController
@RequestMapping("/api")
class WelcomeController{
	@Autowired
	CustomerServicer customerServicer;
	@Autowired
	BookServicer bookServicer;
	@Autowired
	LibraryServicer libraryServicer;
	@Autowired
	ReviewsServicer reviewsServicer;
	@GetMapping("/hi")
	public String sayHelloWorld() {
		System.out.println("HERE!");
		return "Hello World!";
	}
	public WelcomeController(){
		super();
	}
	
	@GetMapping("/customers")
	public List<Customer> getCustomers() {
		System.out.println("Getting customers: ");
//		return null;
		return customerServicer.getCustomers();
		
	}
	
	@GetMapping("/customers/{id}")
	public Customer getCustomerByUserId(@PathVariable int id) {
		System.out.println("Getting customer by UserId: "+id);
		
		return customerServicer.getCustomerById(id);
		
		
	}
	
	@PostMapping("/customers")
	public Customer createCustomer(@RequestBody Customer customer) {
		System.out.println("Inserting customer into DB "+customer.getId());
		Customer inserted = customerServicer.insertCustomer(customer);
		return inserted;
		
	}
	
	@PostMapping("/customers/addAll")
	public void createManyCustomers(@RequestBody List<Customer> customers) {
		System.out.println("Inserting customers into DB ");
		customerServicer.addManyCustomers(customers);
		
	}
	
	@PutMapping("/customers")
	public Customer updateCustomer(@RequestBody Customer customer) {
		System.out.println("Updating customer in DB"+customer.getId());
		Customer updated = customerServicer.updateCustomer(customer);
		return updated;
	}
	
	@DeleteMapping("/customers/{id}")
	public Customer deleteCustomerById(@PathVariable int id) {
		System.out.println("Getting customer by UserId: "+id);
		
		Customer customer =  customerServicer.getCustomerById(id);
		
		
		System.out.println("Deleting customer in DB"+customer.getId());
		Customer deleted = customerServicer.deleteCustomer(customer);
		return deleted;
	}
	
	// BOOK mappings start from here
	
	@GetMapping("/books")
	public List<Book> getBooks() {
		System.out.println("Getting Books: ");
//		return null;
		return bookServicer.getBooks();
		
	}
	
	@GetMapping("/books/{id}")
	public Book getBookById(@PathVariable int id) {
		System.out.println("Getting book by Id: "+id);
		
		return bookServicer.getBookById(id);
		
		
	}
	
	@PostMapping("/books/addAll")
	public void createBook(@RequestBody List<Book> books) {
		System.out.println("Inserting books into DB ");
		bookServicer.addManyBooks(books);
		
	}
	
	
	@PutMapping("/books")
	public Book updateBook(@RequestBody Book book) {
		System.out.println("Updating book in DB"+book.getId());
		Book updated = bookServicer.updateBook(book);
		return updated;
	}
	
	@DeleteMapping("/books/{id}")
	public Book deleteBookById(@PathVariable int id) {
		System.out.println("Getting book by Id: "+id);
		
		Book book =  bookServicer.getBookById(id);
		
		
		System.out.println("Deleting book in DB"+book.getId());
		Book deleted = bookServicer.deleteBook(book);
		return deleted;
	}
	
	@DeleteMapping("library/{id}")
	void deleteCustomersOfBookByBookId(@PathVariable int id) {
		System.out.println("Deleting customers of book "+id);
		libraryServicer.deleteCustomersOfBookByBookId(id);
	}
	
	@PostMapping("library")
	public Library createMapping(@RequestBody Library library) {
		System.out.println("Inserting book into DB ");
		Library inserted = libraryServicer.insertCustomerBookMapping(library);
		return inserted;
		
	}
	
	@PostMapping("/library/addAll")
	public void createManyLibraries(@RequestBody List<Library> libraries) {
		System.out.println("Inserting libraries into DB ");
		libraryServicer.addManyLibraries(libraries);
		
	}
	
	@GetMapping("library/customers/{id}")
	public List<Library> getLibraryByCustomerId(@PathVariable int id){
		System.out.println("Getting getLibraryByCustomerId "+id);
		return libraryServicer.getLibraryByCustomerId(id);
	} 
	@GetMapping("library/books/{id}")
	public List<Library> getLibraryByBookId(@PathVariable int id){
		System.out.println("Getting getLibraryByBookId "+id);
		return libraryServicer.getLibraryByBookId(id);
	}
	
	@GetMapping("library/customers/books/{id}")
	public List<Book> getBooksByCustomerId(@PathVariable int id){
		System.out.println("Getting getBooksByCustomerId "+id);
		return libraryServicer.getBooksByCustomerId(id);
	} 
	
	@PostMapping("reviews")
	public Reviews createMapping(@RequestBody Reviews reviews) {
		System.out.println("Inserting reviews mapping into DB "+reviews.getId());
		Reviews inserted = reviewsServicer.insertCustomerBookMapping(reviews);
		return inserted;
		
	}
	
	@PostMapping("/reviews/addAll")
	public void createManyReviews(@RequestBody List<Reviews> reviews) {
		System.out.println("Inserting reviews into DB ");
		reviewsServicer.addManyReviews(reviews);
		
	}
	
	@GetMapping("reviews/customers/{id}")
	public List<Reviews> getReviewsByCustomerId(@PathVariable int id){
		System.out.println("Getting getReviewsByCustomerId "+id);
		return reviewsServicer.getReviewsByCustomerId(id);
	} 
	@GetMapping("reviews/books/{id}")
	public List<Reviews> getReviewsByBookId(@PathVariable int id){
		System.out.println("Getting getReviewsByBookId "+id);
		return reviewsServicer.getReviewsByBookId(id);
	}
	@DeleteMapping("reviews/{id}")
	void deleteReviewsOfBookByBookId(@PathVariable int id) {
		System.out.println("Deleting reviews of book "+id);
		reviewsServicer.deleteReviewsOfBookByBookId(id);
	}
	
	
}
