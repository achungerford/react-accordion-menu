import { useState } from "react";
import { faqs } from "../data";
import AccordionItem from "./AccordionItem";

const Accordion = () => {
  const [clicked, setClicked] = useState("0");

  // handler function: [0, 1, 2] index for the three FAQs
  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0")
    }
    setClicked(index)
  }

  return (
    <ul className="accordion">
      {faqs.map((faq, index) => (
        <AccordionItem 
          onToggle={() => handleToggle(index)}
          active={clicked === index}
          key={index}
          faq={faq}
        />
      ))}
    </ul>
  );
};

export default Accordion;
