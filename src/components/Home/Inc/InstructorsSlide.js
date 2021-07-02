import { Image } from '@chakra-ui/image';
import { Box, Center, Flex, Text } from '@chakra-ui/layout';
import React, { useContext } from 'react'
import SwiperCore, {
  Pagination
} from 'swiper/core';
import { FaLinkedinIn } from 'react-icons/fa';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import ScholarshipContext from '../../../contexts/ScholarshipContext';

export default function InstructorsSlide() {
    const { schoolData } = useContext(ScholarshipContext);

    SwiperCore.use([Pagination]);
    return (
        <>
            <Box  minH="50vh" mt="100px">
                <Image
                    pos="absolute"
                    bottom="55em"
                    left="50%"
                    htmlWidth="700px"
                    zIndex="-50"
                    transform="translateX(-50%)"
                  
                    
                    src="./img/Pattern.svg" />
                <Swiper
                    zIndex="1"
                    spaceBetween={50}
                    slidesPerView={2.5}
                    centeredSlides={true}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="mySwiper"
                    navigation={true}
                    loop={true}
                    style={{ width:'100%' }}
                    breakpoints={{
                        "@0.00": {
                            "slidesPerView": 1,
                            "spaceBetween": 10
                        },
                        "@0.75": {
                            "slidesPerView": 2.5,
                            "spaceBetween": 20
                        },
                        "@1.00": {
                            "slidesPerView": 3.5,
                            "spaceBetween": 40
                        },
                        "@1.50": {
                            "slidesPerView": 3.5,
                            "spaceBetween": 50
                        }
                    }}
                >
                    {
                        schoolData.scholarship.instructors.map((data) =>
          
                        (
                            <SwiperSlide style={{ width: '800px' }} >
                                <Box border="1px" borderColor="gray.200" shadow="base">
                                    <Flex p="20" justifyContent="space-between" bg="white" h="40">
                                        <Center>
                                            <>
                                            <Image
                                                borderRadius="full"
                                                boxSize="100px"
                                                src={data.small_picture.src}
                                                alt={data.name}
                                            />
                                            <Box>
 <Text ml="5">{data.name}</Text>
                                            <Text ml="5">{data.category}</Text>
                                            </Box>
                                           </>
                                        </Center>
                                        <FaLinkedinIn size="30px" />
                                    </Flex>
                                    <Box bg="gray.50" color="gray.500" h="60" p={20}>
                                        <Text fontSize="22px" >
                                            {data.current_position}
                                        </Text>
                                    </Box>
                                </Box>
                            </SwiperSlide>
                           
                        )
                        )
                    
                    }
                
                </Swiper>
            </Box>
        </>
    )
}
