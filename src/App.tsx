import { Button, ButtonGroup, Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GamesList from './components/GamesList'
import GenresList from './components/GenresList'
import {useState} from 'react'
import { Genre } from './Hooks/useGenres'
import PlatformSelector from './components/PlatformSelector'
import { Platform } from './Hooks/useGames'
//in chakra padding ={1} is by default 4px , however we can costumize it using padding = '10px

export interface GameQuery{
  genre: Genre | null,
  platform : Platform | null,
}
function App() {
const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)
  return (
    <>
      <Grid templateAreas={
        {
          base: `"nav" "main"`,
          lg : `"nav nav""side main"` //above 1024px
        }
        
      }
        templateColumns={{
          base: "1fr",
          lg : "200px 1fr" ,
      }}>
        <GridItem area="nav" >
            <NavBar />
        </GridItem>
        <Show above='lg'>
        <GridItem area="side" padding={5}>
            <GenresList selectedGenre={gameQuery.genre} onSelectGenre={(genre)=> setGameQuery( {...gameQuery, genre} as GameQuery)}/>
        </GridItem>
        </Show>
        <GridItem area="main" >
            <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(plat)=>setGameQuery({...gameQuery , platform : plat} as GameQuery)}/>
            <GamesList gameQuery={gameQuery} />
        </GridItem>

      </Grid>
    </>
  )
}

export default App
