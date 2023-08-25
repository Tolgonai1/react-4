import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import '../App.css'

export function FormPage(){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    function handleSubmit(e){
        e.preventDefault()
    }
    function handleChangeName(e){
        dispatch({type: 'USER NAME', payload: e.target.value})
    }
    function handleChangeAge(e){
        dispatch({type: 'USER AGE',payload: e.target.value})
    }

    return (
        <div>
            <form className="form-wrapper" onSubmit={(e)=>handleSubmit(e)}>
                <input onChange={(e) => handleChangeName(e)} type="text" placeholder="Enter your name"/>
                <input onChange={(e) =>handleChangeAge(e)} type="number" placeholder="Enter your age"/>
                <button onClick={()=> navigate('/data')}>Save</button>
            </form>
        </div>
    )
}