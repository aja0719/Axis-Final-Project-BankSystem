package com.axis.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.axis.entity.Customer;
import com.axis.service.CustomerService;
import com.axis.service.TransactionService;


@Controller
@RequestMapping("/customer")
public class HomeController {

	@Autowired
	CustomerService customerService;
	
	@Autowired
	TransactionService transactionService;
	
	@PostMapping("/signUp")
	public ResponseEntity<Customer> signUp(@RequestBody Customer customer){
		return new ResponseEntity<Customer>(customerService.signUp(customer),HttpStatus.OK);
	}
	
	@RequestMapping("/index")
	public String dashboard() {
		return "hello";
	}
	
}
