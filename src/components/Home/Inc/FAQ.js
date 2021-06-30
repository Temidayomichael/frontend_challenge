
import {
    Box,
    Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
    AccordionIcon,
    Container, Flex, Select, Text
} from '@chakra-ui/react'
import React from 'react'
import { AiFillMinusCircle } from "react-icons/ai";
import { MdAddCircle } from "react-icons/md";

export default function FAQ() {
    return (
         <Container as={Box} py="20" minH="100vh" mt="100px" maxW="6xl">
            <Flex justifyContent="space-between" >
                <Text
                    color="#685DC5"
                    fontSize="48px"
                    lineHeight="56px"
                    letterSpacing="-0.6px"
                >
                    Frequently asked <br /> questions
                </Text>
                <Flex >
                    <Text color="#6A6A6A" fontSize="16px">Filter by:</Text>
                    <Select
                        borderRadius="full"
                        size="lg"
                       color="#685DC5"  placeholder="Program conditions" />
                </Flex>
            </Flex>
            <Accordion mt="10" allowMultiple>


  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Section 2 title
            </Box>
            <Box flex="1" textAlign="left">
              Section 2 title
            </Box>
            {isExpanded ? (
              <MdAddCircle fontSize="48px" />
            ) : (
              <AiFillMinusCircle fontSize="48px" />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </>
    )}
  </AccordionItem>

  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Section 2 title
            </Box>
            <Box flex="1" textAlign="left">
              Section 2 title
            </Box>
            {isExpanded ? (
              <MdAddCircle fontSize="48px" />
            ) : (
              <AiFillMinusCircle fontSize="48px" />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </>
    )}
  </AccordionItem>

  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Section 2 title
            </Box>
            <Box flex="1" textAlign="left">
              Section 2 title
            </Box>
            {isExpanded ? (
              <MdAddCircle fontSize="48px" />
            ) : (
              <AiFillMinusCircle fontSize="48px" />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </>
    )}
  </AccordionItem>
</Accordion>
        </Container>
    )
}
