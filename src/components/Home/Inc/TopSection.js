import { Button } from '@chakra-ui/button'
import { Image } from '@chakra-ui/image'
import { Container, Box, Center, SimpleGrid, Flex, Text, Stack } from '@chakra-ui/layout'
import React, { useContext } from 'react'
import ScholarshipContext from '../../../contexts/ScholarshipContext';
import Countdown from 'react-countdown';

export default function TopSection({start_date, end_date}) {
    const { schoolData } = useContext(ScholarshipContext);
    console.log(schoolData.scholarship)
const applicationEndDate = new Date(schoolData.scholarship.application_end_date)

   
    return (
        <Container maxW="6xl">
          
            <Box mt="10%">
                <SimpleGrid minChildWidth="340px" spacingX="40px" spacingY="20px">
                    <Box  bg="white">
                        <Text
                            
                            fontSize={{ base: "35px", md: "40px", lg: "48px" }}
                            color="#685DC5"
                            
                            width={{ base: "292px", md: "440px", lg: "440px" }}
                              lineHeight={{ base: "40px", md: "40px", lg: "56px" }}
                            letterSpacing="-0.6px"
                            fontFamily="ApercuPro-Medium"
                        >{schoolData.scholarship.name}</Text>
                        <Image
                            pos="absolute"
                            top={{ base: "50px", md:"100px" , lg: "100px" }}
                            left={{ base: "160px", md:"220px", lg: "290px",xl: "440px" }}
                            boxSize={{ base: "133px", lg: "206px" }}
                            
                            src="./img/IntDesign.svg" />
                    </Box>
                    <Flex flexDirection={["column-reverse","colomn-reverse", "inherit"]} height="80px">
                        <Image
                            src="./img/zeptolab.svg"
                            boxSize={['62px','82px']}
                           />
                        <Box ml={['0','10px']}>
                            <Text
                                fontSize={{ base: "14px", md: "18px", lg: "18px", xl: "18px" }}
                                display={['flex','block']}
                                color="gray.500"
                            >Powered by:
                            <Text
                                color="black"
                                >{schoolData.scholarship.company.name}</Text>
                                </Text>
                        </Box>
                    </Flex>
                </SimpleGrid>
                <SimpleGrid
                    minChildWidth="340px"
                    spacingX="40px" spacingY="20px"
                    flexDirection={["column-reverse", "inherit"]}
                    display={["flex","flex","block","flex"]}
                    mt="10"

                >
                    <Stack
                        spacing={5}
                        mt="6"
                        w="100%"
                        >
                        <Text
                            color="#535353"
                            fontSize={["18px","22px"]}
                          
                        >
                             {schoolData.scholarship.program.about}
                       </Text>
                        <Text
                            color="gray.500"
                            fontSize={["18px","22px"]}
                          
                        >
                          {schoolData.og_meta.desc}
                       </Text>
                        <Text
                            fontSize={["18px","18px","22px"]}
                            d="flex"
                        >
                            Position: <Text ml="3" color="gray.500">
                                {schoolData.scholarship.position
                                    ?schoolData.scholarship.position
                                    : schoolData.scholarship.program.name}
                                  </Text>
                        </Text>
                        <Button py="5"
                            w="157px"
                            as={Center}
                            color="white"
                            bg="#685DC5"
                            borderRadius="full"
                            size={["xs","sm"]}
                            fontSize="18px"
                            _hover={{
                                bg: "#887bf7"
                            }}
                            _active={{
                                transform: "scale(0.98)",
                                borderColor: "#bec3c9",
                                   bg: "#4fa16c"
                            }}
                            cursor="pointer"
                        >
                            Apply Now
                         </Button>
                        
                    </Stack>
                    <Box w="100%">
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
                                fontSize={["16px", "27px"]}
                                d='flex'
                                justifyContent="space-between"
                            >
                               
                                <Countdown date={applicationEndDate}>
                                    <Text fontSize="38px" >00:00:00:00</Text>
                                </Countdown>
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
                                    fontSize="16px">
                                    Location  
                            <Text color="gray.500">
                                     {schoolData.scholarship.location.name}
                            </Text>
                                </Text>
                                <Text
                                    color="#685DC5"
                                    fontSize="16px"
                                    mt="6">
                                    Start date      
                            <Text
                                        color="gray.500" >
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
                          display={["none","none","none","inherit"]}
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
