import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
export const UseFetch = (url) => {
    const [data, setData] = useState([])
    useEffect(() => {
        const Fetch = async () => {
            try {
                const response = await fetch()
                const data = await response.json()
                setData(data)
            } catch (error) {
                console.log(error);
            }
        }
        Fetch()
    }, [url])
    return data
}