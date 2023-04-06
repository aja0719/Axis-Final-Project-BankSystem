package com.axis.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.axis.entity.Transaction;

public interface TransactionRepository extends JpaRepository<Transaction, Integer>{
  
  public List<Transaction> findByCustomerId(String customerId);
  
  public	List<Transaction> findByTransactionNature( String transactionNature);
 // @Query("select t from transaction t where t.customerId=?1 and t.transactionNature=?2")
  public	List<Transaction> findByCustomerIdAndTransactionNature( String customerId,String transactionNature);

  
}
