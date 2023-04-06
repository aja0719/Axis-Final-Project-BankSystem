package com.axis.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.axis.entity.Customer;
import com.axis.entity.LoginDto;
import com.axis.service.CustomerService;

@RestController
@RequestMapping
@CrossOrigin
public class CustomerController {
	
	@Autowired
	CustomerService customerService;
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@PostMapping("/signUp")
	public ResponseEntity<String> signUp(@RequestBody Customer customer){
		return new ResponseEntity<String>(customerService.signUp(customer),HttpStatus.OK);
	}
	
	@PostMapping("/signin")
	public ResponseEntity<String> authenticateCustomer(@RequestBody LoginDto loginDto){
		org.springframework.security.core.Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
				loginDto.getCustomerId(), loginDto.getCustomerPassword()));
		SecurityContextHolder.getContext().setAuthentication(authentication);
		return new ResponseEntity<>("Customer signed in success",HttpStatus.OK);
	}
    
	@GetMapping("/getAllCustomer")
	public ResponseEntity<List<Customer>> getAll(){
		return new ResponseEntity<List<Customer>>(customerService.getAllCustomers(),HttpStatus.OK);
	}
	
	@GetMapping("/getCustomerById/{customerId}")
	public ResponseEntity<Customer> getCustomerById(@PathVariable String customerId){
		return new ResponseEntity<Customer>(customerService.getCustomerBycustomerId(customerId),HttpStatus.OK);
	}
	
	@PutMapping("/updateById/{customerId}")
	public ResponseEntity<Customer> updateCustomerById(@PathVariable String customerId,@RequestBody Customer customer){
		return new ResponseEntity<Customer>(customerService.updateCustomerById(customerId, customer),HttpStatus.OK);
	}
	
	@DeleteMapping("/deleteById/{customerId}")
	public ResponseEntity<String> deleteCustomer(@PathVariable String customerId){
		return new ResponseEntity<String>(customerService.deleteCustomerById(customerId),HttpStatus.OK);
	}
	
	
	
	
	
}
