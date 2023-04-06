package com.axis.service;

import java.util.List;

import com.axis.entity.Customer;

public interface CustomerService {
	Customer signUp(Customer customer);
	
	//Customer login(String customerId);
	
	List<Customer> getAllCustomers();
	Customer getCustomerBycustomerId(String customerId);
	Customer updateCustomerById(String customerId,Customer customer);
    String deleteCustomerById(String customerId);

}
