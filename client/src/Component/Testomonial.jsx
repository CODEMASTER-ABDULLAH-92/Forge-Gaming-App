import React, { useRef } from "react";
import { asset } from "../assets/asset";

const testimonials = [
  {
    text: "Lorem ipsum dolor sit, amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quas maxime velit neque expedita a praesentium. Cupiditate consequuntur tempore optio quo inventore facilis corporis neque illum? Iure nemo quod nam quam culpa delectus debitis optio fugit iste quos eius sed omnis reiciendissicing elit ...",

    name: "Abdullah",
    role: "Web Developer",
    img: asset.client1,
  },
  {
    text: "Lorem ipsum dolor sit, amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quas maxime velit neque expedita a praesentium. Cupiditate consequuntur tempore optio quo inventore facilis corporis neque illum? Iure nemo quod nam quam culpa delectus debitis optio fugit iste quos eius sed omnis reiciendissicing elit ...",
    name: "Abdullah Hussaini",
    role: "Web Developer",
    img: asset.client1,
  },
  {
    text: "Lorem ipsum dolor sit, amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quas maxime velit neque expedita a praesentium. Cupiditate consequuntur tempore optio quo inventore facilis corporis neque illum? Iure nemo quod nam quam culpa delectus debitis optio fugit iste quos eius sed omnis reiciendissicing elit ...",

    name: "Abdullah Ali",
    role: "Web Developer",
    img: asset.client1,
  },
  {
    text: "Lorem ipsum dolor sit, amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quas maxime velit neque expedita a praesentium. Cupiditate consequuntur tempore optio quo inventore facilis corporis neque illum? Iure nemo quod nam quam culpa delectus debitis optio fugit iste quos eius sed omnis reiciendissicing elit ...",

    name: "Abdullah Ali 2",
    role: "Web Developer",
    img: asset.client1,
  },
  {
    text: "Lorem ipsum dolor sit, amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quas maxime velit neque expedita a praesentium. Cupiditate consequuntur tempore optio quo inventore facilis corporis neque illum? Iure nemo quod nam quam culpa delectus debitis optio fugit iste quos eius sed omnis reiciendissicing elit ...",
    name: "Abdullah Ali 3",
    role: "Web Developer",
    img: asset.client1,
  },
];

const TestimonialCarousel = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -300, // Adjust scroll distance
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 300, // Adjust scroll distance
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="px-[5%] py-8">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-4xl text-start">
          What Our
          <span className="text-transparent bg-gradient-to-r pl-2 from-[#ff1b6b] to-[#2472fc] bg-clip-text">
            Client Says
          </span>
        </h1>
        <div className="sm:flex gap-2 hidden">
          <img
            src={asset.right}
            onClick={scrollRight}
            className="cursor-pointer"
            alt="Right Arrow"
          />
          <img
            src={asset.left}
            onClick={scrollLeft}
            className="cursor-pointer"
            alt="Left Arrow"
          />
        </div>
      </div>
      <div
        ref={carouselRef}
        className="mt-8 flex gap-4 overflow-x-scroll scrollbar-none snap-x snap-mandatory"
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-[#1b1b1b] px-10 pt-10 rounded-lg max-w-[624px] min-w-[600px] snap-start"
          >
            <p className="border-l-2 border-red-700 pl-4 max-h-[500px] text-[#a8aebf] -tracking-tighter">
              "{testimonial.text}"
            </p>
            <div className="my-6 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <img src={testimonial.img} alt="Client" />
                <div>
                  <h1 className="font-semibold text-lg text-white">
                    {testimonial.name}
                  </h1>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <img src={asset.comma} alt="Quotation mark" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
