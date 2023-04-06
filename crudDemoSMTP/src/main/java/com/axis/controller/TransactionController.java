package com.axis.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.axis.entity.Transaction;
import com.axis.service.TransactionService;

@RestController
@RequestMapping("/transactions")
@CrossOrigin
public class TransactionController {
	
    @Autowired
    private TransactionService transactionService;

    @GetMapping("/balance")
    public ResponseEntity<Double> getAccountBalance(@RequestParam String customerId) {
        double balance = transactionService.getAccountBalance(customerId);
        return ResponseEntity.ok(balance);
    }

    @PostMapping("/perform")
    public ResponseEntity<String> performTransaction(@RequestBody Transaction transaction) {
        transactionService.performTransaction(
                transaction.getCustomerId(),
                transaction.getTransactionType(),
               
                transaction.getAmount(),
                
                transaction.getBeneficiaryAccountNumber(),
                transaction.getNarration()
        );
        return ResponseEntity.ok("Transaction successful");
    }
    
    @GetMapping("/transactionByCustomerId/{customerId}")
    public ResponseEntity<List<Transaction>> getTransactionByCustomerId(@PathVariable String customerId){
    	return new ResponseEntity<List<Transaction>>(transactionService.findByCustomerId(customerId),HttpStatus.OK);
    }    
    
    @GetMapping("/transactionByTransactionNature/{customerId}/{transactionNature}")
    public ResponseEntity<List<Transaction>> getTransactionListByTransactionNature(@PathVariable  String customerId,String transactionNature){
    	return new ResponseEntity<List<Transaction>>(transactionService.findByCustomerIdAndTransactionNature(customerId,transactionNature),HttpStatus.OK);
    }
    
    @GetMapping("/getTransactionByBeneficiaryAccountNumber/{beneficiaryAccountNumber}")
    public ResponseEntity<List<Transaction>> getTransactionByBeneficiaryAccountNumber(@PathVariable String beneficiaryAccountNumber){
    	return new ResponseEntity<List<Transaction>>(transactionService.findByBeneficiaryAccountNumber(beneficiaryAccountNumber),HttpStatus.OK);
    }
        
}