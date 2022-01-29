import React, { useEffect } from "react";
import "./faq.css";
import faqData from "./faqData";
import AOS from "aos";
import "aos/dist/aos.css";

const Faq = () => {
  useEffect(() => {
    AOS.init({
      duration : 1000,
      once: true,  // to be trued during deployment
  });
    const faq = document.querySelectorAll(".faq-sec-item");

    faq.forEach((faq_sec_item) => {
      faq_sec_item.addEventListener("click", () => {
        faq_sec_item.classList.toggle("faq-active");
      });
    });
  }, []);

  return (
    <div className="faq-sec" id="faq">
      <div className="faq-sec-container" data-aos="fade-up" data-aos-offset="50">
        <div className="faq-sec-heading" data-aos="fade-up" data-aos-offset="50">Frequently asked questions (FAQs)</div>

        {faqData.map((faq, index) => (
          <div key={index} value={false} className={`faq-sec-item`} data-aos="fade-up" data-aos-offset="50">
            <div className="faq-sec-ques" data-aos="fade-up"  data-aos-offset="50" >
              <div className="arrow">🡡</div>
              <div className="ques">{faq.question}</div>
            </div>
            <div className="answer" data-aos="fade-up" >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;