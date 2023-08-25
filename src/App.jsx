import {Routes,Route} from "react-router-dom";
import './App.css'
import {FormPage} from "./components/FormPage.jsx";
import {UserData} from "./components/UserData.jsx";

function App() {

  return (
    <>
        <Routes>
            <Route path='/' element={<FormPage/>} />
            <Route path='/data' element={<UserData/>} />
        </Routes>
    </>
  )
}

export default App
