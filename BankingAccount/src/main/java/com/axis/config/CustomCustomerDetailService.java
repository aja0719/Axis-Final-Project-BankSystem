package com.axis.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.axis.entity.Customer;
import com.axis.repository.CustomerRepository;

public class CustomCustomerDetailService implements UserDetailsService{

	@Autowired
	private CustomerRepository customerRepository;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		
		Customer customer = customerRepository.findByCustomerId(username);
		
		if(customer==null) {
			throw new UsernameNotFoundException("Could not find USer id");
		}
		CustomCustomerDetails customCustomerDetails = new CustomCustomerDetails(customer);
		
//		CustomCustomerDetails customCustomerDetails=(CustomCustomerDetails) User.withUsername(customer.getCustomerId())
//				.password(customer.getCustomerPassword())
//				.authorities("USER").build();
		
		return customCustomerDetails;
	}

}
