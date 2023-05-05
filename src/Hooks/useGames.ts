import  { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import axios from "axios"
export interface Game {
    id: number;
    name: string;
    background_image: string;
}
interface FetchGamesResponse {
    count: number;
    results: Game[];
}
const useGames = () => {
    const [Games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    useEffect(() => {
        const controller = new AbortController();
        apiClient
            .get<FetchGamesResponse>("/games", { signal: controller.signal })
            .then((res) => setGames(res.data.results))
            .catch((err) => {
                if (err instanceof axios.CanceledError) return;
                setError(err.message);
    })
        return ()=> controller.abort();
    }, []);
    return {Games,error}
}
export default useGames