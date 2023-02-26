import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './Create.css'
import { useContext } from 'react'
import UserContext from '../../context/UserContext'

const Create = () => {
    const navigate = useNavigate();
    const goback = () =>{
        navigate("/")
    }

    const [Users, setUsers] = useContext(UserContext)

    const [Id, setId] = useState();  
    const [Name, setName] = useState();  
    const [Position, setPosition] = useState();  
    const [Salary, setSalary] = useState();  
    
    const handleId = (e) => {
        setId(e.target.value)
    }
    const handleName = (e) => {
        setName(e.target.value)
        console.log(Name)
    }
    const handlePosition = (e) => {
        setPosition(e.target.value)
        console.log(Position)
    }
    const handleSalary = (e) => {
        setSalary(e.target.value)
        console.log(Salary)
    }

    const handleAddUser = (e) => {
        e.preventDefault();
        setUsers([...Users, {id:Id, name:Name, position: Position, salary: Salary}])
        navigate("/")
    }
  


    return (
      <>
      <div className="create_area">
          <div className="container">
              <h2>Add User Here</h2>
              <form onSubmit ={handleAddUser}>
                  <label >Id</label>
                  <input required value={Id} onChange={handleId} type="number" />
                  <label >Name</label>
                  <input required value={Name} onChange={handleName} type="text" />
                  <label >Position</label>
                  <input required value={Position} onChange={handlePosition} type="text" />
                  <label >Salary</label>
                  <input required value={Salary} onChange={handleSalary} type="text" />
                  <button>Add User</button>
              </form>
              <button onClick={goback}>Go Back</button>
              
          </div>
      </div>
      
      </>
  )
}

export default Create;