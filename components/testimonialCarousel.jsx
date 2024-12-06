'use client'

import React from 'react'
import Autoplay from "embla-carousel-autoplay"
import testimonials from '@/data/testimonials.json'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import { Card } from './ui/card'
import { CardContent } from './ui/card'
const TestimonialCarousel = () => {
  return (
    <div>
      <h2 className='text-center p-5 font-extrabold text-5xl text-orange-800 m-6'> What our Writer says</h2>
      <Carousel
    /*  plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}*/
    >
         <CarouselContent>
            {testimonials.map((testimonials, index) => {
                return (<CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <Card className='bg-white/80 backdrop-blur-sm shadow-lg '>
                        <CardContent>
                            <blockquote className='mb-4'>
                                <p className='text-orange-700 brand-font italic'>
                                   &quot; {testimonials.text} &quot;
                                </p>
                            </blockquote>
                            <footer>
                                <div className='brand-font'>{testimonials.author}</div>
                                <div className='text-sm'>{testimonials.role}</div>
                            </footer>
                        </CardContent>
                    </Card>
                </CarouselItem>
)})}
       
      </CarouselContent>
      <CarouselNext/>
        <CarouselPrevious/>
    </Carousel>
    </div>
  )
}

export default TestimonialCarousel
