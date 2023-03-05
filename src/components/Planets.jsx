import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';

const Planets = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [responseData, setResponseData] = useState([])
    
    const handleClear = () => {
        navigate("/");
    }


    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then((response) => {
                setResponseData(response.data);
            })
            .catch((err)=>{
                console.log(err);
            })
        }, [id]);
        console.log(responseData)
    return (
        <div>
            <p>Planet Name: {responseData.name}</p>
            <p>Climate: {responseData.climate}</p>
            <p>Terrain: {responseData.terrain}</p>
            <p>Population: {responseData.population}</p>
            <div>
                <button onClick={handleClear}>Clear Results</button>
            </div>
        </div>
    )
}

export default Planets