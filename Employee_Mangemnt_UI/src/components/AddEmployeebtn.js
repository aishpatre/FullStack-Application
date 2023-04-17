import React, { useEffect, useState } from 'react'
import EmployeeSevice from '../services/EmployeeSevice';
import { Link, useHistory ,useParams} from 'react-router-dom/cjs/react-router-dom.min';
const AddEmployeebtn = () => {
    const[firstName,setFirstName] = useState('');
    const[lastName,setLastName] = useState('');
    const[emailId,setEmailId] = useState('');
    const history = useHistory();
    const{id} = useParams();

    const saveOrUpdateEmployee = (e) =>{
        e.preventDefault();
        const employee ={firstName,lastName,emailId}
          if(id){
                EmployeeSevice.updateEmployee(id,employee).then((response)=>{
                 history.push('/employees')
                }).catch(error =>{
                    console.log(error);
                })
          }else{
            EmployeeSevice.createEmployee(employee).then((response)=>{
                console.log(response.data)
                history.push('/employee');
            }).then(error =>{
                console.log(error)
            })
        
          }

        }
        

    useEffect(()=>{

       EmployeeSevice.getEmployeeById(id).then((response)=>{
        setFirstName(response.data.firstName)
        setLastName(response.data.lastName)
        setEmailId(response.data.emailId)
       }).catch(error=>{
        console.log(error)
       });
    },[])

     const title = ()=>{
    
         if(id){
            return <h2 className="text-center">Update Employee</h2>
         }else{
            return <h2 className='text-center'>Add Employee</h2>
         }
    }
 

  return (
    <div>
        <br></br><br></br>
       <div className='container'>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
         {
                title()
          }
            <div className='card-body'>
                <form>
                    <div className='form-group mb-2'>
                        <lable className='form-lable'>First Name</lable>
                        <input 
                            type='text' 
                            placeholder='Enter First Name' 
                            name="firstName" 
                            className='form-control' 
                            value={firstName} 
                            onChange={(e) => setFirstName(e.target.value)}
                            >
                        </input>
                    </div>
                    <div className='form-group mb-2'>
                    <lable className='form-lable'>Last Name</lable>
                    <input 
                            type='text' 
                            placeholder='Enter Last Name' 
                            name="lastName" 
                            className='form-control' 
                            value={lastName} 
                            onChange={(e) =>setLastName(e.target.value)}
                            >
                        </input>
                        </div>
                        <div className='form-group mb-2'>
                        <lable className='form-lable'>Email Id</lable>
                        <input 
                            type='email' 
                            placeholder='Enter Email ID' 
                            name="emailId" 
                            className='form-control' 
                            value={emailId} 
                            onChange={(e) =>setEmailId(e.target.value)}
                            >
                        </input>
                        </div>
                    
                    <button className='btn btn-success' onClick={(e) => saveOrUpdateEmployee(e)}>Submit</button>
                    <Link to= "/employees" className="btn btn-danger">Cancel</Link>
                </form>  

            </div>
            </div>
            </div>
       </div>
    </div>
  )
}

export default AddEmployeebtn