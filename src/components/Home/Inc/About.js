import { Image } from '@chakra-ui/image';
import { Box, Center, Divider, Grid, GridItem, SimpleGrid, Text, Container } from '@chakra-ui/react'
import React, { useContext } from 'react'
import ScholarshipContext from '../../../contexts/ScholarshipContext';

export default function About() {
    const { schoolData } = useContext(ScholarshipContext);
    return (
        <>
            <Container as={Box} py="20" minH="100vh" mt="50px" maxW="6xl">
                <Box display={["inherit","inherit", "flex"]} w="100%">
                    <Center w={["100%","100%", "50%"]} >
                        <Image
                            borderRadius="full"
                            boxSize={["250px","350px"]}
                            objectFit="cover"
                            src={schoolData.scholarship.program.photos[0].src}
                
                        />
                    </Center>
                    <Box w={["100%","100%", "50%"]} my="5" >
                        <Text color="#685DC5" fontSize={["35px", "48px"]}>
                            About the <br /> apprenticeship
                    </Text>
                        <Text fontSize={["18px", "22px"]} lineHeight="32px"> {schoolData.scholarship.about[0].data}</Text>
                    </Box>
                </Box>

                
                <Grid
                    templateRows="repeat(3, 1fr)"
                    templateColumns="repeat(6, 1fr)"
                    gap={6}
                    mt={["100px","200px"]}
                    display={["block","block", "inline-grid"]}
                >
                    <GridItem p="40px" rowSpan={3} colSpan={2} shadow="base" >
                        <Box h="60%" >
                            <Text color="#685DC5" fontSize="16px">
                                Scholarship value
                        </Text>
                            <Text fontSize="48px">
                                €{schoolData.scholarship.total_value}
                            </Text>
                        </Box>
                        <Divider my="7" borderColor="gray.300" />
                        <Box>
                            <SimpleGrid columns={2} spacing={15}>
                                <Box>
                                    <Text d="flex" color="#685DC5" fontSize="16px">
                                        Tuition covered
                                    </Text>
                                    <Text > €{schoolData.scholarship.tuition}</Text>
                                </Box>
                                <Box>
                                    <Text d="flex" color="#685DC5" fontSize="16px">
                                        Remaining
                                    </Text>
                                    <Text> €{schoolData.scholarship.remaining}</Text>

                                </Box>
                                <Box>
                                    <Text color="#685DC5" fontSize="16px">
                                        Living stipend
                        </Text>
                                    <Text d="flex" fontSize="16px">
                                        €{schoolData.scholarship.stipend_per_year}
                                        (
                                        <Text fontSize="16px">
                                            €{schoolData.scholarship.stipend_per_month}/month
                                            </Text>)
                        </Text>
                                </Box>
  
                            </SimpleGrid>
                        </Box>
                    </GridItem>
                    <GridItem p="40px" rowSpan={2} colSpan={2} shadow="base">
                        <Box  >
                            <Text color="#685DC5" fontSize="16px">
                                Study commitment
                        </Text>
                            <Text fontSize="26px">
                                {schoolData.scholarship.study_commitment} hours / day
                            </Text>
                        </Box>
                        <Divider my="4" w="30px" borderColor="gray.300" />
                        <Text> {schoolData.scholarship.study_commitment_text}</Text>
                    </GridItem>
                    <GridItem p="40px" rowSpan={2} colSpan={2} shadow="base">
                        <Box  >
                            <Text color="#685DC5" fontSize="16px">
                                Internship commitment
                        </Text>
                            <Text fontSize="26px">
                                {schoolData.scholarship.internship_commitment} hours / day
                            </Text>
                        </Box>
                        <Divider my="4" w="30px" borderColor="gray.300" />
                        <Text> {schoolData.scholarship.internship_commitment_text}</Text>
                    </GridItem>
                   
                    <GridItem colSpan={4} shadow="base" p="40px">
                       
                        <Text color="#685DC5" fontSize="16px">
                            A full-time contract
                        </Text>
                        <Text fontSize="26px">
                            {schoolData.scholarship.duration} year(s)/Full-Time
                            </Text>
                        <Divider my="1" w="25px" borderColor="gray.300" />
                        <Text> You’ll be guaranteed a {schoolData.scholarship.duration} year(s) contract with {schoolData.scholarship.company.name} upon graduation.</Text>
                      
                    </GridItem>
                </Grid>
            </Container>
        </>
    )
}
