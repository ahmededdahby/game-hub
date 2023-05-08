import { Button, ButtonGroup, Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GamesList from './components/GamesList'
import GenresList from './components/GenresList'
import {useState} from 'react'
import { Genre } from './Hooks/useGenres'
import PlatformSelector from './components/PlatformSelector'
import { Platform } from './Hooks/useGames'
//in chakra padding ={1} is by default 4px , however we can costumize it using padding = '10px
function App() {
  const [SelectedGenre, setSelectedGenre] = useState<Genre | null>(null)
  const [SelectedPlatform, setSelectedPlatform] = useState<Platform| null>(null)
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
            <GenresList selectedGenre={SelectedGenre} onSelectGenre={(genre)=> setSelectedGenre(genre)}/>
        </GridItem>
        </Show>
        <GridItem area="main" >
            <PlatformSelector selectedPlatform={SelectedPlatform} onSelectPlatform={(plat)=>setSelectedPlatform(plat)}/>
            <GamesList selectedPlatform={SelectedPlatform} selectedGenre={SelectedGenre}/>
        </GridItem>

      </Grid>
    </>
  )
}

export default App
