import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';

const Films = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [responseData, setResponseData] = useState([])

    const handleClear = () => {
        navigate("/");
    }
    console.log(id) // Undefined?

    useEffect(() => {
        axios.get(`https://swapi.dev/api/films/${id}`)
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
            <p>Title: {responseData.title}</p>
            <p>Episode #{responseData.episode_id}</p>
            <p>Director: {responseData.director}</p>
            <p>Release Date: {responseData.release_date}</p>
            <div>
                <button onClick={handleClear}>Clear Results</button>
            </div>
        </div>
    )
}

export default Films