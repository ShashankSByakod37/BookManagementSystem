package com.example.demo;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
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
import com.example.service.BookServicer;
import com.example.service.CustomerServicer;

@SpringBootApplication(scanBasePackages={"com.example.dao","com.example.service","com.example.model","com.example.demo"})
@EntityScan("com.example.model")
@EnableJpaRepositories("com.example.dao")
public class SpringBootRestBookStore {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootRestBookStore.class, args);
	}

}

@RestController
@RequestMapping("/api")
class WelcomeController{
	@Autowired
	CustomerServicer customerServicer;
	@Autowired
	BookServicer bookServicer;
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
		
		return bookServicer.getBookById(id).orElse(null);
		
		
	}
	
	@PostMapping("/books")
	public Book createBook(@RequestBody Book book) {
		System.out.println("Inserting book into DB "+book.getId());
		Book inserted = bookServicer.insertBook(book);
		return inserted;
		
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
		
		Book book =  bookServicer.getBookById(id).orElse(null);
		
		
		System.out.println("Deleting book in DB"+book.getId());
		Book deleted = bookServicer.deleteBook(book);
		return deleted;
	}
}
