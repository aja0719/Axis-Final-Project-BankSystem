package com.axis.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.axis.entity.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long>{
	 
	@Query("select c from Customer c where c.customerId = :customerId")
	public Customer findByCustomerId(@Param("customerId") String customerId);

	Customer findByAccountNumber(String beneficiaryAccountNumber);
	
	

}
