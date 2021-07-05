import { Box, HStack, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import Sticky from 'react-sticky-el'
import ScholarshipContext from '../../contexts/ScholarshipContext'
import About from './Inc/About'
import FAQ from './Inc/FAQ'
import Testimonials from './Inc/Testimonials'
import TopSection from './Inc/TopSection'

export default function Home() {

    const { schoolData } = useContext(ScholarshipContext);
 const start_date= new Date(schoolData.scholarship.scholarship_start_date);
const end_date= new Date(schoolData.scholarship.application_end_date);
    return (
        <Box>
            <TopSection start_date={start_date} end_date={end_date} />
            <About />
            <Testimonials />
            <FAQ />
            <Sticky mode="bottom">
                <HStack display={["none","none","flex"]} w="100%" py="3" bg="white" justifyContent="space-evenly" >
                    <Box>
                        <Text
                            fontSize="16px"
                        >
                            {schoolData.scholarship.company.name}
                            <Text color="gray.500">{schoolData.scholarship.name}
                            </Text>
                        </Text>
                    </Box>
                    <Box>
                        <Text
                            
                            fontSize="16px"
                        >
                            Location
                             
                            <Text
                                color="gray.500"
                            >
                                {schoolData.scholarship.location.name}
                            </Text>
                        </Text>
                    </Box>
                    <Box>
                        <Text
                            
                            fontSize="16px"
                        >
                            Duration
                             
                            <Text
                                color="gray.500"
                            >
                                {schoolData.scholarship.duration} year(s)
                                        Full-Time
                            </Text>
                        </Text>
                    </Box>
                    <Box>
                        <Text
                            
                            fontSize="16px"
                        >
                            Start date
                             
                            <Text
                                color="gray.500"
                            >
                                {start_date.toLocaleDateString('default', { day: 'numeric', month: 'long', year: "numeric" })}
                            </Text>
                        </Text>
                    </Box>
                    <Box>
                        <Text
                            
                            fontSize="16px"
                        >
                            End date
                             
                            <Text
                                color="gray.500"
                            >
                                {end_date.toLocaleDateString('default', { day: 'numeric', month: 'long', year: "numeric" })}
                            </Text>
                        </Text>
                    </Box>
                </HStack>
            </Sticky>
        </Box>
    )
}
