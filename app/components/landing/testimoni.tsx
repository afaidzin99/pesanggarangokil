import Carousel from './paket/carousel';
import Image from 'next/image';
import reviews from "@/app/data/review.json"
// import type { Testimoni } from "@/app/type"

// const reviews = [
//   {
//     path: '/images/user1.jpg',
//     alt: 'User 1',
//     name: 'Alice Johnson',
//     job: 'Software Engineer',
//     review: 'Amazing service and top-notch quality!',
//   },
//   {
//     path: '/images/user2.jpg',
//     alt: 'User 2',
//     name: 'Bob Smith',
//     job: 'Product Manager',
//     review: 'The product exceeded my expectations. Highly recommend!',
//   },
//   {
//     path: '/images/user3.jpg',
//     alt: 'User 3',
//     name: 'Charlie Brown',
//     job: 'UX Designer',
//     review: 'Fast delivery and excellent customer support.',
//   },
//   {
//     path: '/images/user4.jpg',
//     alt: 'User 4',
//     name: 'Diana Prince',
//     job: 'Marketing Specialist',
//     review: 'A wonderful shopping experience. Will definitely return.',
//   },
//   {
//     path: '/images/user5.jpg',
//     alt: 'User 5',
//     name: 'Ethan Hunt',
//     job: 'Sales Executive',
//     review: 'Great value for the money. Very satisfied with my purchase.',
//   },
// ];

const Home: React.FC = () => {
  return (
    // <div className="flex flex-col items-center justify-center min-h-screen py-2">
    //   <h1 className="text-2xl font-bold mb-4">Customer Reviews</h1>
    //   <Carousel reviews={reviews} />
    // </div>
    <section className='relative min-h-[100vh] flex flex-col items-center sm:h-[120vh]'>
      <figure className='h-[80%] w-full absolute top-1/2 -translate-y-1/2'>
        <Image
          src='/landing/testimoni/back.png'
          alt='hero'
          fill={true}
        />
      </figure>
      <figure className='w-full h-[75%] bg-gradient-to-b from-black absolute'></figure>
      <figure className='w-full h-[75%] bg-gradient-to-t from-black absolute bottom-0'></figure>
      <h2 className='text-[6.67vw] font-bold underline absolute top-[10vw] sm:text-[2.3vw] sm:top-[4vw]'>APA KATA MEREKA</h2>
      <main className='absolute w-[94.167vw] h-[61.67vw] top-1/2 -translate-y-1/2 sm:scale-[.4] sm:w-[200vw]'>
        <Carousel reviews={reviews} />
      </main>
    </section>
  );
};

export default Home;
