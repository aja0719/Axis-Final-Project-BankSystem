package com.axis.exception;

import java.time.LocalDateTime;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalException {

	@ExceptionHandler(CustomerIdNotFoundException.class)
	ResponseEntity<ErrorInfo> myExceptionResponse1(CustomerIdNotFoundException exception)
	{
		ErrorInfo errorInfo = new ErrorInfo();
		errorInfo.setStatus(HttpStatus.NOT_FOUND.toString());
		errorInfo.setErrorMessage(exception.getMsg());
		errorInfo.setLocalDateTime(LocalDateTime.now());
		
		
		return new ResponseEntity<ErrorInfo>(errorInfo,HttpStatus.NOT_FOUND);
	}
	
	@ExceptionHandler(InSuffientBalanceException.class)
	ResponseEntity<ErrorInfo> myExceptionResponse1(InSuffientBalanceException exception)
	{
		ErrorInfo errorInfo = new ErrorInfo();
		errorInfo.setStatus(HttpStatus.NOT_FOUND.toString());
		errorInfo.setErrorMessage(exception.getMsg());
		errorInfo.setLocalDateTime(LocalDateTime.now());
		
		
		return new ResponseEntity<ErrorInfo>(errorInfo,HttpStatus.NOT_FOUND);
	}
}
