import  { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import axios from "axios"


interface FetchResponse<T> {
    count: number;
    results: T[];
}
const useData = <T>(endpoint: string) => { 
    const [Data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading,setLoading] = useState(false)
    useEffect(() => {
        const controller = new AbortController();
        setLoading(true)
        apiClient
            .get<FetchResponse<T>>(endpoint, { signal: controller.signal })
            .then((res) => {
                setData(res.data.results)
                setLoading(false)
            })
            .catch((err) => {
                if (err instanceof axios.CanceledError) return;
                setError(err.message);
                setLoading(false)
                
            })
            
        return ()=> controller.abort();
    }, []);
    return {Data,error,isLoading}
}
export default useData