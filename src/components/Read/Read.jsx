import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './Read.css'
import { useContext } from 'react'
import UserContext from '../../context/UserContext'

const Read = () => {
  const navigate = useNavigate();
  const handleGoback = () => {
    navigate("/")
  }

  const {id} = useParams();
  const [Users, setusers] = useContext(UserContext);

  const singleUser = Users.filter(user => user.id == id);

  



  return (
   
    <>
    <div className="read_area">
        <div className="read_container">
            <h2>Id: {singleUser[0].id}</h2>
            <h2>Name: {singleUser[0].name}</h2>
            <h3>Position: {singleUser[0].position}</h3>
            <h3>Salary: {singleUser[0].salary}</h3>
            <button onClick={handleGoback} className="button_back">Go Back</button>
        </div>
    </div>
    </>
  )
}

export default Read