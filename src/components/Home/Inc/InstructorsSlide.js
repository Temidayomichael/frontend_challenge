import { Box, Center, Flex, Text ,Image,IconButton } from '@chakra-ui/react';
import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import {  MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import Carousel from 'nuka-carousel';
import { useBreakpointValue } from "@chakra-ui/react"

export default function InstructorsSlide() {
    // const slidesSettings = {
    //  dots: true,
    //   infinite: false,
    //   speed: 500,
    //   slidesToShow: 4,
    //   slidesToScroll: 4,
    //     initialSlide: 0,
    //   rows:0,
    //   responsive: [
    //     {
    //       breakpoint: 1024,
    //       settings: {
    //         slidesToShow: 3,
    //         slidesToScroll: 3,
    //           infinite: true,
    //          rows:1,
    //         dots: true
    //       }
    //     },
    //     {
    //       breakpoint: 600,
    //       settings: {
    //         slidesToShow: 2,
    //           slidesToScroll: 2,
    //          rows:1,
    //         initialSlide: 2
    //       }
    //     },
    //     {
    //       breakpoint: 480,
    //       settings: {
    //           slidesToShow: 4,
    //            rows:1,
    //         slidesToScroll: 4
    //       }
    //     }
    //   ]
    // };
    const slider = React.useRef(null);
    const variant = useBreakpointValue({ base: "1", md: "1",lg:'1',xl:'2.5' })
    const Slides = () => {
        return(
          <Box className="slick-slides"
            border="1px" w={["335px", "800px"]}
            
            m="auto"
            borderColor="gray.200"
            bg="red"
            shadow="base">
                                <Flex p="10" justifyContent="space-between" bg="white" h="148px">
                                    <Center>
                                        <>
                                            <Image
                                                borderRadius="full"
                                                boxSize="100px"
                                                src="./img/slideImage.png"
                                                
                                            />
                                            <Box>
                                                <Text ml="5" fontSize="16px">Irene Pereyra</Text>
                                                <Text ml="5" color="gray.500">Interaction Design Fellow ‘19</Text>
                                            </Box>
                                        </>
                                    </Center>
                                    <Center>
                                        <FaLinkedinIn size="30px" color="#cdcdcd" />

                                    </Center>
                                </Flex>
                                <Box bg="gray.50" h="320.54px"   color="gray.500" px={["25px","120px"]} py="56px" >
                                    <Text fontSize="23px" lineHeight="35px" >
                        This Fellowship was a turning point in my career. I wouldn’t be where I am today without the financial support and experienced offered through the program. 
                                    </Text>
                    <Flex mt="32px">
                                                <Text color="gray.500">Education</Text>
                                                <Text ml="5" color="gray.500">B.A. Visual Design</Text>
                    </Flex>
                                </Box>
                               
                                
            </Box>
        )
    }
    return (
        <>
            <Box minH="50vh" mt="100px">
                <Image
                    pos="absolute"
                    bottom="5em"
                    left="50%"
                    htmlWidth="700px"
                    zIndex="1"
                    transform="translateX(-50%)"
                  
                    
            src="./img/Pattern.svg" />
          <Box>
          <Carousel 
            renderCenterLeftControls={({ previousSlide }) => (
              <IconButton ml="10" border="1px" borderColor="gray.400" color="#685dc5" rounded="full" as={MdKeyboardArrowLeft} onClick={previousSlide} />

            )}
            renderCenterRightControls={({ nextSlide }) => (
              <IconButton mr="10" border="1px" borderColor="gray.400" color="#685dc5" rounded="full" as={MdKeyboardArrowRight} onClick={nextSlide} />

            )}
            as={Flex}
            bg="red.600"
            slidesToShow={variant}
            cellSpacing={500}
              cellAlign="center"
              getControlsContainerStyles={() => {
                return {
                  display :'none'
                }
              }
               }
            defaultControlsConfig={{
  pagingDotsStyle: {
    display: 'none'
  }
}}

                >
                         <Slides/>
                         <Slides/>
                         <Slides/>
                         <Slides/>
                         <Slides/>
                         <Slides/>
                
                </Carousel>
                <Flex d="none" w="100%" px="40" bottom="67em" pos="absolute" justifyContent="space-between">
                    
                    <IconButton border="1px" borderColor="gray.400" rounded="full" as={MdKeyboardArrowLeft} onClick={() => slider?.current?.slickPrev()} />
                    <IconButton border="1px" borderColor="gray.400" rounded="full" as={MdKeyboardArrowRight} onClick={() => slider?.current?.slickNext()} />                
                </Flex>
          </Box>
          </Box>
        </>
    )
}


//    {
//                         schoolData.scholarship.instructors.map((data) =>
          
//                         (
//                          <slides data={data} />
                           
//                         )
//                         )
                    
//                     }