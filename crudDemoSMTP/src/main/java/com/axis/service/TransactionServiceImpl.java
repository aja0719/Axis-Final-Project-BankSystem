package com.axis.service;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import javax.naming.InsufficientResourcesException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axis.entity.Customer;
import com.axis.entity.Transaction;
import com.axis.exception.InSuffientBalanceException;
import com.axis.repository.CustomerRepository;
import com.axis.repository.TransactionRepository;
import com.axis.utility.AppConstant;

@Service
public class TransactionServiceImpl implements TransactionService {
   
	@Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private TransactionRepository transactionRepository;

    @Override
    public double getAccountBalance(String customerId) {
        Customer customer = customerRepository.findByCustomerId(customerId);
        return customer.getBalance();
    }

    @Override
    public void performTransaction(String customerId, String transactionType, double amount,
                                    String beneficiaryAccountNumber, String narration) {
    	
        Customer customer = customerRepository.findByCustomerId(customerId);
        if (transactionType.equals("Fund Transfer")) {
            if (amount > customer.getBalance()) {
                throw new InSuffientBalanceException(AppConstant.INSUFFIENT_BALANCE);
            }
            Customer beneficiary = customerRepository.findByAccountNumber(beneficiaryAccountNumber);
            if (beneficiary == null) {
                throw new RuntimeException("Invalid beneficiary account number");
            }
            customer.setBalance(customer.getBalance() - amount);
            beneficiary.setBalance(beneficiary.getBalance() + amount);
            customerRepository.save(customer);
            customerRepository.save(beneficiary);
            
        } else if (transactionType.equals("Cash Deposit")) {
            if (amount > 10000) {
                throw new RuntimeException("Cash deposit amount cannot exceed INR 10,000");
            }
            customer.setBalance(customer.getBalance() + amount);
            customerRepository.save(customer);
        } else {
            throw new RuntimeException("Invalid transaction type");
        }
        Transaction transaction = new Transaction();
        transaction.setCustomerId(customer.getCustomerId());
        transaction.setTransactionType(transactionType);
        transaction.setTransactionNature(transactionType.equals("Fund Transfer") ? "Debit" : "Credit");
        transaction.setTransactionNature(transactionType.equals("Cash Deposit") ? "Debit" : "Credit");
        transaction.setAmount(amount);
        transaction.setBeneficiaryAccountNumber(beneficiaryAccountNumber);
        transaction.setNarration(narration);
        transaction.setTransactionDate(LocalDateTime.now());
        
        transactionRepository.save(transaction);
    }

	@Override
	public List<Transaction> findByCustomerId(String customerId) {
		
		List<Transaction> transactions = transactionRepository.findByCustomerId(customerId);
		
		return transactions;
		}
	
	@Override
	public	List<Transaction> findByCustomerIdAndTransactionNature( String customerId,String transactionNature) {
		//String transNature=null;
		List<Transaction> transactions;
		List<Transaction> transaction=transactionRepository.findByCustomerId(customerId);
		for(Transaction transaction2:transaction) {
			System.out.println(transactionNature);
			System.out.println(customerId);
		
		//  transNature=transaction2.getTransactionNature();
		  if(transactionNature=="Debit")
		    transactions=transactionRepository.findByCustomerIdAndTransactionNature(customerId, "Debit");
		  else
			  transactions=transactionRepository.findByCustomerIdAndTransactionNature(customerId, "Credit"); 
		    return transactions;
		    
		}
		
			
		
		return null;
	}
	
	@Override
	public List<Transaction> findByBeneficiaryAccountNumber(String beneficiaryAccountNumber) {
    List<Transaction> transactions = transactionRepository.findByBeneficiaryAccountNumber(beneficiaryAccountNumber);
		
		return transactions;
	}	

}
	
	
	

	
	
	
	
	
	
	
	
