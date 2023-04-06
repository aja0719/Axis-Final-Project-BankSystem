package com.axis.exception;

public class CustomerIdNotFoundException extends RuntimeException {
	String msg;
	public CustomerIdNotFoundException(String msg) {
		super();
		this.msg = msg;
	}

	public String getMsg() {
		return msg;
	}

}
