package com.axis.service;


import java.util.List;

import com.axis.entity.Transaction;

public interface TransactionService {

public double getAccountBalance(String customerId);

	public void performTransaction(String customerId, String transactionType,double amount, String beneficiaryAccountNumber,
			String narration);

	public List<Transaction> findByCustomerId(String customerId);
//	public	List<Transaction> findByTransactionNature( String transactionNature);
	public	List<Transaction> findByCustomerIdAndTransactionNature( String customerId,String transactionNature);
}
