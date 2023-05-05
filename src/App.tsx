import { Button, ButtonGroup, Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'

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
            main
        </GridItem>

      </Grid>
    </>
  )
}

export default App
