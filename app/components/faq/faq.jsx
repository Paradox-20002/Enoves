import { useState } from "react";

const FaqSection = ({ faqs }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="mt-20 flex flex-col gap-10 text-white">
      <header className="mx-auto flex w-full max-w-3xl flex-col gap-4 text-left">
        <h2 className="text-3xl font-semibold md:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="text-base text-white/70">
          Find answers to common questions about our services, engagement
          models, and how we work with clients to deliver exceptional results.
        </p>
      </header>

      <div className="mx-auto flex w-full max-w-[900px] flex-wrap justify-between gap-6">
        {faqs.map((faq, index) => (
          <div
            key={faq.question} // use unique key
            className="flex basis-full flex-col rounded-2xl border border-[rgba(104,97,255,0.16)] bg-[rgba(20,20,34,0.5)] transition-all duration-300 ease-out hover:border-[rgba(104,97,255,0.32)] hover:bg-[rgba(20,20,34,0.7)] md:basis-[calc(50%-0.75rem)]"
          >
            <button
              className={`flex w-full items-center justify-between gap-4 px-7 py-6 text-left text-base font-semibold text-white transition-colors duration-300 md:text-lg ${
                openFaqIndex === index
                  ? "text-[#8b5cf6]"
                  : "hover:text-[#8b5cf6]"
              }`}
              onClick={() => toggleFaq(index)}
              aria-expanded={openFaqIndex === index}
            >
              <span className="flex-1 text-left leading-snug text-[13px]">
                {faq.question}
              </span>
              <span
                className={`flex h-7 w-7 items-center justify-center text-[0.75rem] text-[#8b5cf6] transition-transform duration-300 ${
                  openFaqIndex === index ? "rotate-180" : "rotate-0"
                }`}
              >
                <i className="fa-solid fa-chevron-down" />
              </span>
            </button>

            <div
              className={`max-h-0 overflow-hidden bg-[rgba(89,86,233,0.05)] px-7 transition-[max-height,padding] duration-300 ease-out ${
                openFaqIndex === index ? "max-h-[160px] pb-6" : "pb-0"
              }`}
            >
              <p className="text-sm leading-relaxed text-[#c6c8f4] md:text-base ">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
