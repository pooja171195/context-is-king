import React from "react";
import { RegistrationContext } from "../Context/RegistrationContext";
import {Navigate} from "react-router-dom";
export const Form_Two =() => {
    const {
        dispatch,
        StateofResidence,
        Address,
        Pincode,
        name,
        age,
        dateofbirth,
        handleSubmit
    } = React.useContext(RegistrationContext);
    if(!name || !age || !dateofbirth){
        return<Navigate to="/registration/one"/>
    }
    return (
        <div>
            <input 
            placeholder="State of Residence"
            type="text"
            value={StateofResidence}
            onChange={(e) =>
            dispatch({
type: "CHANGE_STATE_OF_RESIDENCE",
payload: e.target.value
            })
        }
            />
            <br/>
            <input 
            placeholder="Address"
            type="text"
            value={Address}
            onChange={(e) =>
            dispatch({
type: "CHANGE_STATE_ADDRESS",
payload: e.target.value
            })
        }
            />
            <br/>
            <input 
            placeholder="Pincode"
            type="text"
            value={Pincode}
            onChange={(e) =>
            dispatch({
type: "CHANGE_PINCODE",
payload: e.target.value
            })
        }
            />
            <br/>
            <button 
            disabled = {
                !StateofResidence || !Address || !Pincode || !name || !age || !dateofbirth
            }
            onClick = {handleSubmit}
            >
SUBMIT
            </button>
        </div>
    );
};



