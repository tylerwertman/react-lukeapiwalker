import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';

const Starships = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [responseData, setResponseData] = useState([])
    const [error, setError] = useState(false);

    const handleClear = () => {
        navigate("/");
    }


    useEffect(() => {
        axios.get(`https://swapi.dev/api/starships/${id}`)
        .then((response) => {
            setResponseData(response.data);
            setError(false);
            console.log(response)
        })
        .catch((err) => {
            console.log(err);
            setError(true)
        })
}, [id]);
    console.log(responseData)
    if (error === false) {
        return (
            <div>
                <p>Starship Name: {responseData.name}</p>
                <p>Class: {responseData.starship_class}</p>
                <p>Manufacturer: {responseData.manufacturer}</p>
                <p>Model: {responseData.model}</p>
                <p>Passengers: {responseData.passengers}</p>
                <div>
                <br/>
                    <button onClick={handleClear}>Clear Results</button>
                </div>
            </div>
        )
    }
    else {
        return (
            <div>
                <img
                    src="https://media.tenor.com/TlfAvuz0tLMAAAAC/obi-wan-kenobi-these-are-not-the-droids.gif"
                    alt="These aren't the droids you're looking for"
                />
                <br />
                <button onClick={handleClear}>Clear Results</button>
            </div>
        )
    }
}

export default Starships