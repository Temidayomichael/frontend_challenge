import { Button } from '@chakra-ui/button'
import { Image } from '@chakra-ui/image'
import { Container, Box, Center, SimpleGrid, Flex, Text, Stack } from '@chakra-ui/layout'
import React, { useContext } from 'react'
import ScholarshipContext from '../../../contexts/ScholarshipContext';
import DateCountdown from 'react-date-countdown-timer';

export default function TopSection() {
    const { schoolData } = useContext(ScholarshipContext);
    console.log(schoolData.scholarship)

    const end_date= new Date(schoolData.scholarship.application_end_date);
    const start_date= new Date(schoolData.scholarship.scholarship_start_date);
    return (
        <Container maxW="6xl">
          
            <Box mt="10%">
                <SimpleGrid minChildWidth="340px" spacingX="40px" spacingY="20px">
                    <Box bg="white">
                        <Text
                            fontSize="48px"
                            color="#685DC5"
                            width="440px"
                            lineHeight="56px"
                            letterSpacing="-0.6px"
                            fontWeight="500"
                        >{schoolData.scholarship.name}</Text>
                        <Image
                            pos="absolute"
                            top="100"
                            left="410"
                            boxSize="206px"
                            src="./img/IntDesign.svg" />
                    </Box>
                    <Flex height="80px">
                        <Image
                            src={schoolData.scholarship.company.color_logo.src}
                           />
                        <Box ml="10">
                            <Text
                                fontSize="18px"
                                color="gray.500"
                            >Powered by:</Text>
                            <Text
                                fontSize="27px"
                            >{schoolData.scholarship.company.name}</Text>
                        </Box>
                    </Flex>
                </SimpleGrid>
                <SimpleGrid
                    minChildWidth="340px"
                    spacingX="40px" spacingY="20px">
                    <Stack
                        spacing={5}
                        mt="6"
                        w="420px"
                        >
                        <Text
                            color="#535353"
                            fontSize="22px"
                          
                        >
                             {schoolData.scholarship.program.about}
                       </Text>
                        <Text
                            color="gray.500"
                            fontSize="22px"
                          
                        >
                          {schoolData.og_meta.desc}
                       </Text>
                        <Text
                            fontSize="22px"
                            d="flex"
                        >
                            Position: <Text ml="3" color="gray.500"> {schoolData.scholarship.position ? schoolData.scholarship.position : "No position data from API"}
                                  </Text>
                        </Text>
                        <Button py="5"
                            w="40"
                            as={Center}
                            color="white"
                            bg="#685DC5"
                            borderRadius="full"
                            size="lg"
                            fontSize="18px"
                            _hover={{
                                bg: "#887bf7"
                            }}
                            _active={{
                                bg: "#dddfe2",
                                transform: "scale(0.98)",
                                borderColor: "#bec3c9",
                                   bg: "#887bf7"
                            }}
                            cursor="pointer"
                        >
                            Apply Now
                         </Button>
                        
                    </Stack>
                    <Box>
                        <Box
                            boxShadow="base"
                            p="10">
                            <Text
                                color="#685DC5"
                                fontSize="16px"
                            >
                                Application closes in
                            </Text>
                            <Text
                                fontSize="27px"
                            >
                            <DateCountdown dateTo={schoolData.scholarship.application_end_date} />
                            </Text>
                        </Box>
                        <SimpleGrid
                            columns={2}
                             boxShadow="base"
                            p="10"
                            mt="10"
                            spacing="40px"
                            bg="white"
                        >
                            <Box>
                                <Text
                                    color="#685DC5"
                                    fontSize="16px"
                                >
                                    Location
                                     
                            <Text
                                        color="gray.500"
                                    >
                                     {schoolData.scholarship.location.name}
                            </Text>
                                </Text>
                                <Text
                                    color="#685DC5"
                                    fontSize="16px"
                                    mt="6"
                                >
                                    Start date
                                     
                            <Text
                                        color="gray.500"
                                    >
                                      { start_date.toLocaleDateString('default', { day:'numeric',month: 'long',year:"numeric" })}
                            </Text>
                                </Text>
                            </Box>
                                <Box>
                                    <Text
                                        color="#685DC5"
                                        fontSize="16px"
                                    >
                                        Duration
                                         
                            <Text
                                            color="gray.500"
                                        >
                                             {schoolData.scholarship.duration} year(s)
                                           <br /> Full-Time
                            </Text>
                                    </Text>
                                    <Text
                                        color="#685DC5"
                                        fontSize="16px"
                                    >
                                        End date
                                         
                            <Text
                                            color="gray.500"
                                        >
                                        { end_date.toLocaleDateString('default', { day:'numeric',month: 'long',year:"numeric" })}
                            </Text>
                                    </Text>
                            </Box>
                            
        
                        </SimpleGrid>
                         <Image
                            pos="absolute"
                          
                                right="0"
                top="490"
                zIndex="-50"
                            src="./img/Pattern.svg" />
                    </Box>
                </SimpleGrid>
            </Box>
              
            </Container>
           
    )
                        
}
