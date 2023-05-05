import { Button, ButtonGroup, Grid, GridItem, Show } from '@chakra-ui/react'

function App() {
  return (
    <>
      <Grid templateAreas={
        {
          base: `"nav" "main"`,
          lg : `"nav nav""side main"` //above 1024px
        }
      }>
        <GridItem area="nav" bg="coral">
            nav
        </GridItem>
        <Show above='lg'>
        <GridItem area="side" bg="GrayText">
            side
        </GridItem>
        </Show>
        <GridItem area="main" bg="blue.50">
            main
        </GridItem>

      </Grid>
    </>
  )
}

export default App
