import {  ChakraProvider } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"
import Home from "./components/Home/Home"
import ScholarshipContext from "./contexts/ScholarshipContext"
import NavBar from "./layout/Navbar"

export default function App() {
  const [schoolData, setSchoolData] = useState(0);
  
  useEffect( async () =>  {
      axios.get("https://stage.harbour.space/api/v1/scholarship_pages/data-science-apprenticeship-zeptolab")
          .then((res)=>{
            setSchoolData(res.data);
            console.log(res.data)
          })
}, [])

  return (
    schoolData ?  <ScholarshipContext.Provider value={{ schoolData }}>
      <ChakraProvider>
      <NavBar />
        <Home />
    </ChakraProvider>

    </ScholarshipContext.Provider> : <h1> Loading </h1>
   
  )
}
