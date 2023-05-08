import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
interface FetchGenresResponse{
    count: number;
    results: Genre[];
}
interface Genre{
    id: number;
    name: string;
}
const useGenres = () => {
    const [Genres, setGenres] = useState<Genre[]>()
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false)
    
    useEffect(() => {
        const controller = new AbortController();
        apiClient.get<FetchGenresResponse>("/genres", { signal: controller.signal })
        .then((res) => {
            setGenres(res.data.results);
        })
            .catch((err) => {
                if (err instanceof CanceledError) return;
            setError(err);
            })
        return ()=> controller.abort();
    }, [])
    return {Genres,error,isLoading}
}
export default useGenres