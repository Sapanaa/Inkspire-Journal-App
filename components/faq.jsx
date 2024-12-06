import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import faqs from '@/data/faqs.json'

const Faqs = () => {
  return (
    <div>
      <h2 className='text-center p-5 font-extrabold text-5xl text-orange-800 m-6'>Frequently Asked Questions </h2>
      <Accordion type="single" collapsible>
        {faqs.map((faq, index) => {
          return (
            <AccordionItem key={faq.q} value={`item-${index}`}>
            <AccordionTrigger className='text-lg text-orange-800'>{faq.q}</AccordionTrigger>
            <AccordionContent className='text-lg text-orange-800'>
              {faq.a}
            </AccordionContent>
          </AccordionItem>
          )

        })}
 
</Accordion>

    </div>
  )
}

export default Faqs
