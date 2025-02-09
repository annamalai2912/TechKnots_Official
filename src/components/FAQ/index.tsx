"use client"
import { useState } from "react";

const FAQData = [
  {
    id: 1,
    question: "What types of courses does TechKnots offer?",
    answer: "TechKnots offers Value Added Courses (VAC) with different credit options (1, 2, and 3 credits) ranging from 15-45 hours. Our courses cover IoT Fundamentals, PCB Designing, Drone Technology, Electric Vehicles, Smart Home Technologies, and more. We also provide additional skill development courses like fault analysis in home appliances and mobile/laptop repair."
  },
  {
    id: 2,
    question: "How are the training sessions structured?",
    answer: "We offer both one-day and two-day training sessions. One-day workshops cover basics like component testing, soldering, and IoT programming. Two-day workshops include basic training on day 1 and hands-on project work on day 2. All sessions are conducted by trained professionals and include practical, hands-on experience."
  },
  {
    id: 3,
    question: "What is the minimum batch size for courses?",
    answer: "Our courses require a minimum batch size of 30 students per course. The duration and delivery mode can be adjusted based on student strength and trainer availability."
  },
  {
    id: 4,
    question: "Do you provide certification?",
    answer: "Yes, we provide valid certification upon course completion. Students must complete practical assignments to receive certification. For 2 and 3 credit courses, we also offer special recognition certificates for competition winners."
  },
  {
    id: 5,
    question: "What support do you provide for final year projects?",
    answer: "We offer comprehensive final year project support including step-by-step guidance, component identification, quality testing, project evaluation, paper/journal publication assistance, internship opportunities for outstanding students, and R&D support for selected projects."
  },
  {
    id: 6,
    question: "Can courses be conducted in hybrid mode?",
    answer: "Yes, courses can be delivered through hybrid sessions (online and offline) based on management demands and student convenience, ensuring no disruption to academic schedules."
  },
  {
    id: 7,
    question: "What additional benefits do you provide?",
    answer: "We offer workshops, guest lectures, seminars, project training and competitions, final year project assistance, and funding/mentoring for entrepreneurial projects for high-achieving students through our MoU arrangements."
  }
];

const SingleFaq = ({
  faq,
  isOpen,
  toggleFaq,
}: {
  faq: {
    id: number;
    question: string;
    answer: string;
  };
  isOpen: boolean;
  toggleFaq: (id: number) => void;
}) => {
  return (
    <div className="single-faq mb-8 w-full rounded-lg border border-[#F3F4FE] bg-white p-4 sm:p-8 lg:px-6 xl:px-8">
      <button
        className={`faq-btn flex w-full text-left`}
        onClick={() => toggleFaq(faq.id)}
      >
        <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary">
          <svg
            className={`duration-200 ease-in-out fill-primary stroke-primary ${
              isOpen ? "rotate-180" : ""
            }`}
            width="17"
            height="10"
            viewBox="0 0 17 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.71425 9.54337 8.41995L9.54396 8.41942L15.7071 2.70705C16.0976 2.31625 16.0976 1.68425 15.7071 1.29344C15.3165 0.902644 14.6835 0.902644 14.293 1.29344L8.41472 6.87312L2.70718 1.29344C2.31628 0.902644 1.68398 0.902644 1.29344 1.29344C0.902901 1.68425 0.902901 2.31625 1.29344 2.70705L7.28687 8.43257Z"
            />
          </svg>
        </div>

        <div className="w-full">
          <h4 className="text-lg font-semibold text-black">{faq.question}</h4>
        </div>
      </button>

      <div
        className={`pl-[62px] duration-200 ease-in-out ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <p className="py-3 text-base leading-relaxed text-body-color">{faq.answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openFaqId, setOpenFaqId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section className="relative z-20 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                FAQ
              </span>
              <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                Any Questions? Look Here
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                Find answers to common questions about our courses, training programs, and support services.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            {FAQData.map((faq) => (
              <SingleFaq
                key={faq.id}
                faq={faq}
                isOpen={openFaqId === faq.id}
                toggleFaq={toggleFaq}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 z-[-1]">
        <svg
          width="1440"
          height="886"
          viewBox="0 0 1440 886"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="1308.65"
              y1="1142.58"
              x2="602.827"
              y2="-418.681"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3056D3" stopOpacity="0.36" />
              <stop offset="1" stopColor="#F5F2FD" stopOpacity="0" />
              <stop offset="1" stopColor="#F5F2FD" stopOpacity="0.096144" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default FAQ;