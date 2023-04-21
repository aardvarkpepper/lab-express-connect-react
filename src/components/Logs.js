import { useState, useEffect } from 'react';
import axios from "axios";
import Log from "./Log"
const API = process.env.REACT_APP_API_URL;


export default function Logs() {
    const [logs, setLogs] = useState([]);
    console.log(API, "Testing API");
    useEffect(() => {
        axios
        .get(`${API}/logs`)
        .then((response) => setLogs(response.data))
        .catch((e) => console.error("catch", e))
    }, [])
    console.log("logs", logs)
    return (
        <div className="Logs">
            {logs.map((log, index) => {
                console.log(log)
                const {captainName, title, post, mistakesWereMadeToday, daysSinceLastCrisis} = log;
                return <div key={index}>{`${captainName} ${title} ${post} ${mistakesWereMadeToday} ${daysSinceLastCrisis}`}</div>
            })}
        </div>
    )
}