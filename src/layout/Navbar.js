import {  Button, Container, Flex, Image, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import ScholarshipContext from '../contexts/ScholarshipContext';

export default function NavBar() {
    
    const { schoolData } = useContext(ScholarshipContext);
    return (
        <>
            <Flex
                fontFamily="ApercuPro-Medium"
                textTransform="uppercase"
                color="white"
                w="100%" h="60px"
                bg="#523c94">
                <Container d="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    maxW="8xl"
                >
                <Flex >
                    <Text
                        fontFamily="ApercuPro-Medium"
                        letterSpacing="widest" fontSize="19px" >
                        Harbour space
                         </Text>
                    <Text
                        fontSize="10px"
                        ml="2" pt="1"
                        fontFamily="ApercuPro-Regular">
                        /{schoolData.scholarship.program.name}
                    </Text>
                </Flex>
                <Flex>
                        <Image src="./img/menu.svg" />
                    <Button bg="#4fa16c"
                        rounded="full"
                        boxSize="100px"
                        pos="absolute"
                        top="3"
                            left={{ md: "80%", lg: "85%" }}
                        alignItems="center"
                            visibility={["hidden","visible"]}
                        _hover={{
                            bg: "5cb77c"
                        }}
                        _active={{
                            bg: "5cb77c",
                            transform: "scale(0.98)",
                            borderColor: "#5cb77c",
                                  
                        }}
                    >
                        <Text lineHeight="1" textAlign="center" >Apply <br /> Now</Text>
                    </Button>
                    </Flex>
                    </Container>
            </Flex>
        </>
    )
}
  