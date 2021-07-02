import { Image, Img } from '@chakra-ui/image';
import { HStack } from '@chakra-ui/layout';
import { Box, Center, Container, Flex, Text } from '@chakra-ui/layout';
import React from 'react'
import SwiperCore, {
  Pagination
} from 'swiper/core';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';

export default function InstructorsSlide() {
    SwiperCore.use([Pagination]);
    return (
        <>
            <Box py="20" zIndex="-50" minH="50vh" mt="100px">
           <Image
                    pos="absolute"
                    bottom="60em"
                    left="50%"
                   className="bgImg"
                    
  transform="translateX(-50%)"
               
                            src="./img/Pattern.svg" />
                <Swiper
                    zIndex="1"
                   spaceBetween={50}
                    slidesPerView={2}
                    centeredSlides={true}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="mySwiper"
                    navigation={true}
                    loop={true}
                    
                >
                    <SwiperSlide  >
                            <Box>
                                <Flex  bg="blue" h="40">
                                    <Box>
                                    <Image src="" />
                                    <Text> E Choke</Text>
</Box>
                                </Flex>
                                <Box  bg="gray.50" h="60">
                                    <Text fontSize="26px" p="20">
                                        This Fellowship was a turning point in my career. I wouldn’t be where I am today without the financial support and experienced offered through the program. 
</Text>
                                </Box>
                            </Box>
                    </SwiperSlide>
                           
                    <SwiperSlide  >
                            <Box>
                                <Flex  bg="blue" h="40">
                                    <Box>
                                    <Image src="" />
                                    <Text> E Choke</Text>
</Box>
                                </Flex>
                                <Box  bg="gray.50" h="60">
                                    <Text fontSize="26px" p="20">
                                        This Fellowship was a turning point in my career. I wouldn’t be where I am today without the financial support and experienced offered through the program. 
</Text>
                                </Box>
                            </Box>
                    </SwiperSlide>
                           
                    <SwiperSlide  >
                            <Box>
                                <Flex  bg="blue" h="40">
                                    <Box>
                                    <Image src="" />
                                    <Text> E Choke</Text>
</Box>
                                </Flex>
                                <Box  bg="gray.50" h="60">
                                    <Text fontSize="26px" p="20">
                                        This Fellowship was a turning point in my career. I wouldn’t be where I am today without the financial support and experienced offered through the program. 
</Text>
                                </Box>
                            </Box>
                    </SwiperSlide>
                           
                
    </Swiper>
            </Box>
        </>
    )
}
