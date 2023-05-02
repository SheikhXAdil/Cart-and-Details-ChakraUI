'use client'
import { Container, Flex } from '@chakra-ui/react'
import Cart from './Components/Cart'
import Details from './Components/Details'

export default function Page() {
  return (
    <Container maxW={"container.xl"} p={0}>
      <Flex h={{ base: "auto", lg: "100vh" }} p={[0, 10, 20]} direction={{ base: "column-reverse", lg: "row" }}>
        <Details />
        <Cart />
      </Flex>
    </Container>
  )
}