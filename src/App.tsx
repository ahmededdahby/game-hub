import { Button, ButtonGroup, Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GamesList from './components/GamesList'
import GenresList from './components/GenresList'
//in chakra padding ={1} is by default 4px , however we can costumize it using padding = '10px
function App() {
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
            <GenresList/>
        </GridItem>
        </Show>
        <GridItem area="main" >
            <GamesList/>
        </GridItem>

      </Grid>
    </>
  )
}

export default App
