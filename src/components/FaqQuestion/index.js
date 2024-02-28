import { useState } from 'react';
import "./style.scss";

function FAQPage() {
    const faqs = [
        { question: "What services do you offer?", answer: "We offer a range of services including MVP development for startups, agile product teams for scaleups, and enterprise digital transformation solutions." },
        { question: "How can you help startups?", answer: "We can help startups by providing fast solution-building, conceptualization and prototyping, product design, quality analysis, mobile and web development, and product team expansion." },
        { question: "What about scaleups?", answer: "For scaleups, we offer expertise in mobile and web development, product design, cloud services, quality review, and product management to assist at any stage of the product development cycle." },
        { question: "How can you help enterprises?", answer: "We can help enterprises with customized enterprise product solutions, including product design, legacy and modernization, testing, and mobile development." },
        { question: "Still have questions?", answer: "If you still have questions, feel free to reach out to us. We're here to help!" },
        // Add more FAQs as needed
      ];
    const [openIndex, setOpenIndex] = useState(null);
    const Accordion = ({ questionsAnswers }) =>  {

        return (
          <div className="flex flex-col boxMain">
            {questionsAnswers.map((qa, index) => (
              <div key={index} className="box">
                <button
                  className="py-2 flex justify-between items-center w-full text-left"
                  onClick={() => toggleItem(index)}
                >
                  <span className='text-[16px] font-medium'>{qa.question}</span>
                  <span>{openIndex === index ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2196F3" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2196F3" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  )}</span>
                </button>
                {openIndex === index && (
                  <div className="pb-2 answer">
                    {qa.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        );
      }
    const toggleItem = (index) => {
      if (openIndex === index) {
        setOpenIndex(null);
      } else {
        setOpenIndex(index);
      }
    };
  return (
    <div className="FaqQusetion main">
         <div className="topArea">
            <h3 className="title">
                FAQs
            </h3>
            <h6 className="descrip">
            Answer common questions about Yaxbi&apos;s services, approach to tech solutions, and how they cater to the needs of startups, scaleups, and enterprises.
            </h6>
        </div>
      <Accordion questionsAnswers={faqs} />
      <div className="bottom_area">
            <h3 className="title">
            Still have questions?
            </h3>
            <h6 className="descrip">
            Contact us for more information or to get started.
            </h6>
            <a href='#' className='buttonName'>
                Contact
            </a>
        </div>
    </div>
  );
}

export default FAQPage;
