import React from 'react'
import { useNavigate,useParams, Link } from 'react-router-dom'
import './Delete.css'
import { useContext } from 'react'
import UserContext from '../../context/UserContext'


const Delete = () => {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate("/")
    }
const [Users, setUsers] = useContext(UserContext)

const deleteUser = async () => {
    const lastsUsers  = await Users.filter(user => user.id !=id)
    await setUsers(lastsUsers);
    navigate("/")
}


const {id} = useParams();

  return (
    <>
        <div className="delete_area">
            <div className="container">
                <h2>Are you delete this users?</h2>
                <div className="delete_action">
                <button className="cancel_button" onClick={handleGoBack}>Cancel</button>
                <button className="delete" onClick={deleteUser}>Delete</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Delete