import React from "react";
import { RegistrationContext } from "../Context/RegistrationContext";
import {useNavigate} from "react-router-dom";
export const Form_one =() => {
const {name,age,dateofbirth,dispatch} = 
React.useContext(RegistrationContext);
const navigate = useNavigate();
return (
    <div>
        <input 
        placeholder="Name"
        type="text"
        value={name}
        onChange = {(e)=>
        dispatch({type:"CHANGE_NAME",payload: e.target.value})
        }
        />
        <br/>
        <input 
        placeholder="Age"
        type="text"
        value={age}
        onChange = {(e)=>
        dispatch({type:"CHANGE_AGE",payload: e.target.value})
        }
        />
        <br/>
        <input 
        placeholder="Date of Birth"
        type="date"
        value={dateofbirth}
        onChange = {(e)=>
        dispatch({type:"CHANGE_DATE_OF_BIRTH",payload: e.target.value})
        }
        />
        <br/>
        <button
        disabled={!name && !age && !dateofbirth}
        onClick={()=>{
        navigate(`/registration/two`);
    }}
        >
            NEXT</button>
    </div>
);
};