import { Box, Center, Flex, Icon, Image, Text } from '@chakra-ui/react'
import React from 'react'

export default function NavBar() {
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
                        /Interaction design
                        </Text>
                </Flex>
                <Image src="./img/menu.svg" />
                <Center bg="#4fa16c"
                    rounded="full"
                    boxSize="100px"
                    pos="absolute"
                    top="3"
                    left="85%"
                    alignItems="center"
                    visibility={{ base: "hidden", md: "hidden", lg:"hidden", xl:"visible"}}
                   
                >
                   <Text lineHeight="1" textAlign="center" w="50px">Apply Now</Text>
                </Center>
            </Flex>
        </>
    )
}
  