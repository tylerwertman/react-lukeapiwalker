import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';

const People = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [responseData, setResponseData] = useState([])
    
    const handleClear = () => {
        navigate("/");
    }

    
    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then((response) => {
                setResponseData(response.data);
            })
            .catch((err)=>{
                console.log(err);
            })
        },[id]);
        console.log(responseData)
    return (
        <div>
            <p>Name: {responseData.name}</p>
            <p>Birth Year: {responseData.birth_year}</p>
            <p>Skin Color: {responseData.skin_color}</p>
            <p>Height: {responseData.height}</p>
            <div>
                <button onClick={handleClear}>Clear Results</button>
            </div>
        </div>
    )
}

export default People