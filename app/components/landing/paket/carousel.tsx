import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Review {
  path: string;
  alt: string;
  name: string;
  job: string;
  review: string;
}

interface CarouselProps {
  reviews: Review[];
}

const Carousel: React.FC<CarouselProps> = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <div className="relative w-full h-full">
      {reviews.map((review, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <section className='w-[94.167vw] bg-[#4E7A25] absolute top-1/2 -translate-y-1/2 rounded-[8vw] p-[6vw] pb-0 sm:w-[200vw]'>
            <section className='w-[30.278vw] h-[30.278vw] border-[2vw] border-[#4E7A25] rounded-full absolute left-1/2 -translate-x-1/2 -top-[22.5vw] overflow-hidden sm:scale-[.7]'>
              <Image
                src={review.path}
                alt={review.alt}
                fill={true}
              />
            </section>
            <h3 className='text-[3.33vw] text-center'><span className='text-[4.44vw] font-bold'>{review.name} | </span>{review.job}</h3>
            <p className='text-[6.66vw] font-bold w-full leading-none'>“</p>
            <article className='text-[3.33vw] text-center'>{review.review}</article>
            <p className='text-[6.66vw] font-bold w-full leading-none text-right'>”</p>
          </section>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
