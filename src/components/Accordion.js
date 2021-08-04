import { faqs } from "../data";
import AccordionItem from "./AccordionItem";

import React from 'react'

const Accordion = () => {
  return (
    <ul className="accordion">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} faq={faq} />
      ))}
    </ul>
  )
}

export default Accordion
