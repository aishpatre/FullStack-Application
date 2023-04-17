import axios from "axios";

const Emp_RestAPI_url = "http://localhost:8082/api/v1/employees";
class EmployeeService{

    getAllEmployees(){
        return axios.get(Emp_RestAPI_url);
    }
    createEmployee(employee){
        return axios.post(Emp_RestAPI_url,employee);
    }
    getEmployeeById(employeeId){
        return axios.get(Emp_RestAPI_url + '/' + employeeId);
    }
    updateEmployee(emailId,employee){
        return axios.put(Emp_RestAPI_url + '/'+ emailId, employee)
    }
    deleteEmployee(employeeId){
        return axios.delete(Emp_RestAPI_url+'/'+ employeeId);
    }
}
// eslint-disable-next-line

export default new EmployeeService();