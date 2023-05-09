import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import axios from "axios";
import useData from "./useData";
import { Genre } from "./useGenres";
import { GameQuery } from "../App";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}
export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    rating_top : number
}

const useGames = (
 gamequery : GameQuery
) =>
    useData<Game>(
        "/games",
        //genres and platform should be written as the game properties given in the api
        { params: { genres: gamequery.genre?.id, parent_platforms: gamequery.platform?.id ,ordering : gamequery.sortOrder,search : gamequery.search } },
        [gamequery]
    );
export default useGames;
