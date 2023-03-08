import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';

const People = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [responseData, setResponseData] = useState([])
    const [newHomeworld, setNewHomeworld] = useState("")
    const [error, setError] = useState(false);

    const handleClear = () => {
        navigate("/");
    }


    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
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

    useEffect(() => {
        axios.get(responseData.homeworld)
        .then((response) => {
            setNewHomeworld(response.data);
            console.log(response)
        })
        .catch((err) => {
            console.log(err);
        })
}, [responseData]);

    const stringURL = `${newHomeworld.url}`;
    const lastChar = stringURL.slice(stringURL.length-2);
    console.log(newHomeworld)
    console.log(stringURL)
    console.log(lastChar);


    if (error===false) {
        return (
            <div>
                <p>Name: {responseData.name}</p>
                <p>Birth Year: {responseData.birth_year}</p>
                <p>Skin Color: {responseData.skin_color}</p>
                <p>Height: {responseData.height}</p>
                <p>Homeworld: <a href={`/planets/${lastChar}`}>{newHomeworld.name}</a></p>
                <div>
                <br/>
                    <button onClick={handleClear}>Clear Results</button>
                </div>
            </div>
        )
    }
    else{
        return (
            <div>
                <img
                    src="https://media.tenor.com/TlfAvuz0tLMAAAAC/obi-wan-kenobi-these-are-not-the-droids.gif"
                    alt="These aren't the droids you're looking for"
                />
                <br/>
                <button onClick={handleClear}>Clear Results</button>
            </div>
        )
    }
}

export default People