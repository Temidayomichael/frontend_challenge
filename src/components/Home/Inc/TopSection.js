import { Button } from '@chakra-ui/button'
import { Image } from '@chakra-ui/image'
import { Container, Box, Center, SimpleGrid, Flex, Text, Stack } from '@chakra-ui/layout'
import React from 'react'

export default function TopSection() {
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
                        >Interaction Design Apprenticship</Text>
                        <Image
                            pos="absolute"
                            top="100"
                            left="410"
                            boxSize="206px"
                            src="./img/IntDesign.svg" />
                    </Box>
                    <Flex height="80px">
                        <Image
                            src="./img/zeptolab.svg" />
                        <Box ml="10">
                            <Text
                                fontSize="18px"
                                color="gray.500"
                            >Powered by:</Text>
                            <Text
                                fontSize="27px"
                            >Zeptolab</Text>
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
                        height="80px">
                        <Text
                            color="#535353"
                            fontSize="22px"
                          
                        >
                            A fully work and study program to launch your tech career
                       </Text>
                        <Text
                            color="gray.500"
                            fontSize="22px"

                        >
                            Harbour.Space has partnered with SCG to empower driven talent and eliminate the barriers to
                            accessing exceptional education and career opportunities through a Masters Fellowship.
                       </Text>
                        <Text
                            fontSize="22px"
                            d="flex"
                        >
                            Position: <Text ml="3" color="gray.500"> Marketing Performance
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
                                6 Day : 22 Hrs : 55 Min : 33 Sec
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
                                        Bankok
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
                                        30 June 2020
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
                                            1 year
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
                                            3 August 2020
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
