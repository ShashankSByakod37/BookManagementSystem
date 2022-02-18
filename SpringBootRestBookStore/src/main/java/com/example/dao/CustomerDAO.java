package com.example.dao;

//import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.model.Customer;

//@Repository
//public class CustomerDAO {
//	@Autowired
//	EntityManager em;
//	public Customer getCustomerByUserId(int id) {
//		// TODO Auto-generated method stub
//		System.out.println("In CUSTOMERDAO getCustomerById");
//		
//		Customer c = em.find(Customer.class, id);
////		Car c_ref = em.getReference(Car.class, id);
//		return c;
//	}
//	@Transactional
//	public Customer insertCustomer(Customer customer) {
//		System.out.println("In CUSTOMERDAO insertCustomer");
////		em.getTransaction().begin();
//		em.persist(customer);
////		em.getTransaction().commit();
//		return em.getReference(Customer.class, customer.getUserId());
//	}
//	@Transactional
//	public Customer updateCustomer(Customer customer) {
//		System.out.println("In CUSTOMERDAO updateCustomer");
//		Customer old = em.find(Customer.class, customer.getUserId());
//		em.detach(old);
//		old.updateCustomer(customer);
////		em.getTransaction().begin();
//		em.merge(old);
////		em.getTransaction().commit();
//		return em.getReference(Customer.class, customer.getUserId());
//	}
//	public List<Customer> getCustomers(){
//		System.out.println("In CUSTOMERDAO getCustomers");
//		return em.createQuery("SELECT c from Customer c",Customer.class).getResultList();
//		}
//	@Transactional
//	public Customer deleteCustomer(Customer customer) {
//		System.out.println("In CUSTOMERDAO deleteCar");
//		em.remove(em.merge(customer));
//		return customer;
//	}
//}

@Repository
public interface CustomerDAO extends CrudRepository<Customer, Integer>
{
	
}