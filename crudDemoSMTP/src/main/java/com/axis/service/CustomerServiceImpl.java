package com.axis.service;

import java.util.List;
import java.util.Optional;
import java.util.Random;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;


import com.axis.entity.Customer;
import com.axis.exception.CustomerIdNotFoundException;
import com.axis.repository.CustomerRepository;
import com.axis.utility.AppConstant;




@Service
public class CustomerServiceImpl implements CustomerService{
	@Autowired
	CustomerRepository customerRepository;

	@Autowired 
	private BCryptPasswordEncoder passwordEncoder;
	
	@Autowired
	EmailSenderService emailService;


	@Override
	public String signUp(Customer customer) {

		  String customerId = generateCustomerId();
	      String accountNumber = generateAccountNumber();
	      
        customer.setBalance(100);
        customer.setAccountNumber(accountNumber);
        customer.setCustomerId(customerId);
       
        customer.setCustomerPassword(passwordEncoder.encode(customer.getCustomerPassword()));
        
       customerRepository.save(customer);
       
       
       // Send email with customer ID and account number
       String to = customer.getCustomerEmail();
       String subject = "Your customer ID and account number";
       String text = "Dear  Customer ,<br/><br/>"
    		   + "Congratulations!You are rewarded with 100Rs Bonus in your account!<br/><br/>"
               + "Your customer ID is " + customerId + " and your account number is " + accountNumber + ".<br/><br/>"
               + "Thank you for registering with us!<br/><br/>"
               + "Best regards,<br/>"
               + "Easy Banking Ltd.";
       emailService.sendSimpleMessage(to, subject, text);
       
       return "Customer Registered!";
        
    }
	@Override
	public List<Customer> getAllCustomers() {
		// TODO Auto-generated method stub
		return customerRepository.findAll();
	}



	@Override
	public Customer getCustomerBycustomerId(String customerId) {
		Optional<Customer> opt=Optional.of(customerRepository.findByCustomerId(customerId));
		if(opt.isPresent()) {
			return opt.get();
		}
		
		else {
			throw new CustomerIdNotFoundException(AppConstant.CUSTOMER_ID_NOT_FOUND_MESSAGE);
		}
	}



	@Override
	public Customer updateCustomerById(String customerId, Customer customer) {
		Optional<Customer> opt=Optional.of(customerRepository.findByCustomerId(customerId));
		if(opt.isPresent()) {
			return customerRepository.save(customer);
		}
		
		else {
			throw new CustomerIdNotFoundException(AppConstant.CUSTOMER_ID_NOT_FOUND_MESSAGE);
		}
	}



	@Override
	public String deleteCustomerById(String customerId) {
		Optional<Customer> opt=Optional.of(customerRepository.findByCustomerId(customerId));
		if(opt.isPresent()) {
			customerRepository.findByCustomerId(customerId);
			return "customer is deleted";
		}
		
		else {
			throw new CustomerIdNotFoundException(AppConstant.CUSTOMER_ID_NOT_FOUND_MESSAGE);
		}
	}
	
	private String generateAccountNumber() {
		  
	    Random random = new Random();
	    StringBuilder accountNumber = new StringBuilder();
	    for (int i = 0; i < 12; i++) {
	        accountNumber.append(random.nextInt(10));
	    }
	    return accountNumber.toString();
	}

	private String generateCustomerId() {
		  
	    Random random = new Random();
	    StringBuilder customerId = new StringBuilder();
	    for (int i = 0; i < 9; i++) {
	    	customerId.append(random.nextInt(10));
	    }
	    return customerId.toString();
	}

	
}
