import { Button, ButtonGroup, Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GamesList from './components/GamesList'
import GenresList from './components/GenresList'
import {useState} from 'react'
import { Genre } from './Hooks/useGenres'
//in chakra padding ={1} is by default 4px , however we can costumize it using padding = '10px
function App() {
  const [SelectedGenre , setSelectedGenre] = useState<Genre | null>(null)
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
            <GenresList onSelectGenre={(genre)=> setSelectedGenre(genre)}/>
        </GridItem>
        </Show>
        <GridItem area="main" >
            <GamesList selectedGenre={SelectedGenre}/>
        </GridItem>

      </Grid>
    </>
  )
}

export default App
