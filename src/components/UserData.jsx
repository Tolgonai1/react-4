import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

export function UserData(){
    const navigate = useNavigate()
    const userName = useSelector(state => state.name)
    const userAge = useSelector(state => state.age)
    return (
        <div>
            <p>Your name: {userName}</p>
            <p>Your age: {userAge}</p>
            <button onClick={()=> navigate(-1)}>Back</button>
        </div>
    )
}