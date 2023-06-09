package com.aishp.EmployeeManagement;

import com.aishp.EmployeeManagement.model.Employee;
import com.aishp.EmployeeManagement.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class EmployeeManagementApplication implements CommandLineRunner{

	public static void main(String[] args) {
		SpringApplication.run(EmployeeManagementApplication.class, args);
	}
     @Autowired
	 private EmployeeRepository employeeRepository;

	 @Override
	 public void run(String... args) throws Exception {

	 }
}
