import { Button, ButtonGroup, Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GamesList from './components/GamesList'

function App() {
  return (
    <>
      <Grid templateAreas={
        {
          base: `"nav" "main"`,
          lg : `"nav nav""side main"` //above 1024px
        }
      }>
        <GridItem area="nav" >
            <NavBar />
        </GridItem>
        <Show above='lg'>
        <GridItem area="side" >
            side
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
