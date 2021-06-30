import {  ChakraProvider } from "@chakra-ui/react"
import Home from "./components/Home/Home"
import NavBar from "./layout/Navbar"


function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <NavBar />
      <Home />
    </ChakraProvider>
  )
}

export default App