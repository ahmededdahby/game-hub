import  { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import axios from "axios"

export interface Platform{
    id: number,
    name: string,
    slug: string
}
export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic : number;
}
interface FetchGamesResponse {
    count: number;
    results: Game[];
}
const useGames = () => {
    const [Games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const [isLoading,setLoading] = useState(false)
    useEffect(() => {
        const controller = new AbortController();
        setLoading(true)
        apiClient
            .get<FetchGamesResponse>("/games", { signal: controller.signal })
            .then((res) => {
                setGames(res.data.results)
                setLoading(false)
            })
            .catch((err) => {
                if (err instanceof axios.CanceledError) return;
                setError(err.message);
                setLoading(false)
                
            })
            console.log(Games);
        return ()=> controller.abort();
    }, []);
    return {Games,error,isLoading}
}
export default useGames