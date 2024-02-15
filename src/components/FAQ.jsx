import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";

import Open from "@/../public/open.png";
import Image from "next/image";
import { faq_info } from "@/static_store/faq_info";

export default function Faq() {
  return (
    <section className="faq-block" id="consultation">
      <article className="faq-article">
        <h5 className="faq-h5">FAQ - Білизна Boutique</h5>
        {faq_info.map((info) => {
          return (
            <Accordion className="accordion">
              <AccordionItem key={info.title} id={info.text}>
                <AccordionHeader>
                  <h5 className="accordion-title">{info.title}</h5>
                  <Image alt="Close" src={Open} width={25} height={25} />
                </AccordionHeader>

                <AccordionBody>
                  <div className="accordion-body">{info.text}</div>
                </AccordionBody>
              </AccordionItem>
            </Accordion>
          );
        })}
      </article>
    </section>
  );
}
