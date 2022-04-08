import React from "react";
export const RegistrationContext = React.createContext();

const initState = {
    name: "",
    age: "",
    dateofbirth: "",
    StateofResidence:"",
    Address:"",
    Pincode:""
};
function reducer(state,action){
    switch(action.type){
        case "CHANGE_NAME":
            return {...state,name: action.payload};
            case "CHANGE_AGE":
            return {...state,age: action.payload};
            case "CHANGE_DATE_OF_BIRTH":
            return {...state,dateOfBirth: action.payload};
            case "CHANGE_STATE_OF_RESIDENCE":
            return {...state,StateofResidence: action.payload};
            case "CHANGE_ADDRESS":
            return {...state,Address: action.payload};
            case "CHANGE_PINCODE":
            return {...state,Pincode: action.payload};
            default:
                throw new Error();

    }
}

export function RegistrationContextProvider({children}){
    const [state,dispatch]= React.useReducer(reducer, initState);
    const handleSubmit = () => {
        fetch(`http://localhost:3000/users`,{
            method:"POST",
            body: JSON.stringify(state),
            headers: {
                "Content-Type":"application/json"
            }
        })
        .then((res) => res.json())
        .catch((er) => console.log(er));
    };
    const {name,age,dateofbirth,StateofResidence,Address,Pincode} = state;
    return (
        <RegistrationContext.Provider
        value={{
            name,
            age,
            dateofbirth,
            StateofResidence,
            Address,
            Pincode,
            dispatch,
            handleSubmit
        }}
        />

    )
}