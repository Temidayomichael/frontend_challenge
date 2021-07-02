
import {
    Box,
    Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
    AccordionIcon,
    Container, Flex, Select, Text
} from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { AiFillMinusCircle } from "react-icons/ai";
import { IoIosAddCircleOutline } from "react-icons/io";
import ScholarshipContext from '../../../contexts/ScholarshipContext';

export default function FAQ() {
  const { schoolData } = useContext(ScholarshipContext);
  const filterArray = schoolData.scholarship.faqs.items;
  const filterOptions = filterArray.filter((elem, index) => filterArray.findIndex(data => data.type === elem.type) === index);
  const [selectedFilter, setSelectedFilter] = useState(filterOptions[0].type)
  
console.log(filterOptions)
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
               onChange={e => {
                 setSelectedFilter(e.target.value);
                 console.log(e)
           }}
              color="#685DC5">
              {
               filterOptions.map((data,index) =>
                  <>
                    <option key={index} value={data.type}>{data.type}</option>
                    </>
                )}
                       </Select>
                </Flex>
            </Flex>
            <Accordion mt="10" allowMultiple>

          {
            schoolData.scholarship.faqs.items.filter(data => data.type === selectedFilter).map((data) =>
          
          (
            
            <AccordionItem>
            
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton allowToggle >
            <Box flex="1" size="22px" color="#685DC5" textAlign="left">
              {data.type}
            </Box>
            <Box flex="2" textAlign="left">
             {data.question}
            </Box>
            {isExpanded ? (
                              <AiFillMinusCircle
                                color="#685dc5"
                                                                fontSize="38px" />
            ) : (
                                <IoIosAddCircleOutline
                                color="#685dc5"
                                  fontSize="38px" />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
                      {
                        data.answer.map((answer) => 
                          <Text>{answer.data}</Text>
                        )
        }
        </AccordionPanel>
      </>
    )}
  </AccordionItem>
)
                )}

</Accordion>
        </Container>
    )
}
