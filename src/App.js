import {  Center, ChakraProvider, Text } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"
import Home from "./components/Home/Home"
import ScholarshipContext from "./contexts/ScholarshipContext"
import NavBar from "./layout/Navbar"

export default function App() {
  const [schoolData, setSchoolData] = useState(0);
  
  useEffect(() => {
     async function fetchData() {
    await axios.get("https://stage.harbour.space/api/v1/scholarship_pages/data-science-apprenticeship-zeptolab")
          .then((res)=>{
            setSchoolData(res.data);
            console.log(res.data)
          })
  }
  fetchData();
    
}, [])

  return (
    schoolData ?
     <ScholarshipContext.Provider value={{ schoolData }}>
      <ChakraProvider>
        <NavBar />
        <Home />
      </ChakraProvider>

      </ScholarshipContext.Provider>
      : <Center h="100vh">
        <Text
          fontFamily="ApercuPro-Medium"
          fontSize={["10px","28px"]}
          letterSpacing="widest"
          color="#685DC5"
        >
        Harbour.space
        </Text>
    </Center>
   
  )
}
