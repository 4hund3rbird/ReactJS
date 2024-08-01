import { useState } from "react";

const Accordion = () => {
  return (
    <>
      <h1>Accordion</h1>
      <div className="accordion">
        <AccordionSec
          text={
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nequeadipisci accusantium beatae quam voluptatibus unde eius, hic tempora enim ab porro laborum quo quia magni laboriosam numquam vel dolorum? Temporibus?"
          }
        />
        <AccordionSec
          text={
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nequeadipisci accusantium beatae quam voluptatibus unde eius, hic tempora enim ab porro laborum quo quia magni laboriosam numquam vel dolorum? Temporibus?"
          }
        />
        <AccordionSec
          text={
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nequeadipisci accusantium beatae quam voluptatibus unde eius, hic tempora enim ab porro laborum quo quia magni laboriosam numquam vel dolorum? Temporibus?"
          }
        />
      </div>
    </>
  );
};

const AccordionSec = ({ text }) => {
  const [show, setshow] = useState(false);
  return (
    <>
      <div className={`accordion-sec ${show && "widthani"} `}>
        {show ? (
          <span
            onClick={(e) => {
              e.preventDefault();
              setshow((show) => !show);
            }}
          >
            {text}
          </span>
        ) : (
          <span
            onClick={(e) => {
              e.preventDefault();
              setshow((show) => !show);
            }}
          >
            {text.substr(0, 20)}
          </span>
        )}
      </div>
    </>
  );
};

export default Accordion;
