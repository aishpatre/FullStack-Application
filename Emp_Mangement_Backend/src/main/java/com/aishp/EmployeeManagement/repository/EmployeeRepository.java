package com.aishp.EmployeeManagement.repository;

import com.aishp.EmployeeManagement.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository  extends JpaRepository<Employee,Long> {
  //all crud database methods


}
