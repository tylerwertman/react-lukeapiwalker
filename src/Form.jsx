import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Form = () => {

    const [select, setSelect] = useState("")
    const [id, setId] = useState("")
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate(`/${select}/${id}`)
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label htmlFor="search">Search for: </label>
                <select id="search" value={select} onChange={(e)=>setSelect(e.target.value)}>
                    <option value="">--Select--</option>
                    <option value="films">Films</option>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                    {/* <option value="species">Species</option> */}
                    {/* <option value="starships">Starships</option> */}
                    {/* <option value="vehicles">Vehicles</option> */}
                </select>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <label htmlFor="id">ID: </label>
                <input type="text" id="id" onChange={(e)=>setId(e.target.value)}></input>
                <button>Search</button>
            </form>
        </div>
    )
}

export default Form