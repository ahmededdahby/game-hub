import  { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import axios, { AxiosRequestConfig } from "axios"


interface FetchResponse<T> {
    count: number;
    results: T[];
}
const useData = <T>(endpoint: string,requestConfig?:AxiosRequestConfig,deps? : any) => { 
    const [Data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading,setLoading] = useState(false)
    useEffect(() => {
        const controller = new AbortController();
        setLoading(true)
        apiClient
            .get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
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
    }, deps? [...deps] : []);
    return {Data,error,isLoading}
}
export default useData