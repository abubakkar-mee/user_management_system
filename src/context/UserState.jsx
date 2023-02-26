
import UserContext from "./UserContext";
import { useState } from "react";

const UserState = (props) => {

    const [Users, setUsers] = useState([
        {id:1, name:"Abu bakkar siddique", position: "Blockchain Developer", salary: "1000usd"}
    ])


    return(
        <UserContext.Provider value={[Users, setUsers]}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;