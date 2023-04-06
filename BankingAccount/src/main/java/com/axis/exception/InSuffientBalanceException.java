package com.axis.exception;

public class InSuffientBalanceException extends RuntimeException {
	
	String msg;
	public InSuffientBalanceException(String msg) {
		super();
		this.msg = msg;
	}

	public String getMsg() {
		return msg;
	}

}
