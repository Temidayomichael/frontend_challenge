import {  Button, Flex, Image, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import ScholarshipContext from '../contexts/ScholarshipContext';

export default function NavBar() {
    
    const { schoolData } = useContext(ScholarshipContext);
    return (
        <>
            <Flex
                px="10" fontFamily="ApercuPro-Medium"
                textTransform="uppercase"
                color="white"
                alignItems="center"
                justifyContent="space-between"
                w="100%" h="60px"
                bg="#685DC5">
              
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
                <Image src="./img/menu.svg" />
                <Button bg="#4fa16c"
                    rounded="full"
                    boxSize="100px"
                    pos="absolute"
                    top="3"
                    left="85%"
                    alignItems="center"
                    display={{ base: "none" }}
                    visibility={{ base: "hidden", md: "hidden", lg:"hidden", xl:"visible"}}
                     _hover={{
                                bg: "5cb77c"
                            }}
                            _active={{
                                bg: "5cb77c",
                                transform: "scale(0.98)",
                                borderColor: "#5cb77c",
                                  
                            }}
                >
                   <Text  lineHeight="1" textAlign="center" >Apply <br/> Now</Text>
                </Button>
            </Flex>
        </>
    )
}
  