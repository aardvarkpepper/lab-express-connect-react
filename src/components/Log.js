import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom"
const API = process.env.REACT_APP_API_URL;

export default function Log () {
    let navigate = useNavigate()
    const [log, setLog] = useState({});
    const { index } = useParams();
    useEffect(() => {
        axios
        .get(`${API}/logs/${index}`)
        .then((response) => {
            setLog(response.data)
        }).catch(() => {
            navigate("/not-found")
        })
    }, [index, navigate])
    return (
        <div></div>
    )
}