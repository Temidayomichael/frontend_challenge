import { Box, Container, Flex } from '@chakra-ui/layout';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';

export default function InstructorsSlide() {
    return (
        <>
            <Box py="20" bg="red" minH="50vh" mt="100px">
                <Swiper
                    spaceBetween={70}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    as={Box}
                    width="10px"

                >
                    
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                
    </Swiper>
            </Box>
        </>
    )
}
