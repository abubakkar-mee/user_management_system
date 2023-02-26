import React,{useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './Update.css'
import { useContext } from 'react'
import UserContext from '../../context/UserContext'

const Update = () => {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate("/")
    }
const {id} = useParams();
const [Users, setUsers] = useContext(UserContext);

const singleUser = Users.filter(user => user.id ==id);


const [Name, setName] = useState(singleUser[0].name)
const [Position, setPosition] = useState(singleUser[0].position)
const [Salary, setSalary] = useState(singleUser[0].salary)

const handleName = (e) => {
    setName(e.target.value)
    const updateName = Name;
    singleUser[0].name = updateName;


}
const handlePosition = (e) => {
    setPosition(e.target.value)
    const updatePosition = Position
    singleUser[0].position = updatePosition;
   
}
const handleSalary = (e) => {
    setSalary(e.target.value)
    const updateSalary = Salary;
    singleUser[0].salary = updateSalary;
  
}

const handleUpdate = (e) => {
    e.preventDefault();
    setUsers([...Users])
    navigate("/")
}





  return (
    <>
    <div className="update_area">
        <div className="container">
            <h2>Update Here</h2>
            <form onSubmit={handleUpdate}>
                <label >Name</label>
                <input required value={Name} onChange={handleName} type="text" />
                <label >Position</label>
                <input required value ={Position} onChange={handlePosition} type="text" />
                <label >Salary</label>
                <input required value={Salary} onChange ={handleSalary} type="text" />
                <button>Update</button>
            </form>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    </div>
    
    </>
  )
}

export default Update