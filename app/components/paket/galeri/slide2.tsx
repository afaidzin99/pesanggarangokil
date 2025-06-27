import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface Sliding1Props {
    images: string[];
}

const Sliding2: React.FC<Sliding1Props> = ({ images }) => {
    const [position, setPosition] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPosition((prevPosition) => (prevPosition === -50 ? 0 : prevPosition - 50));
        }, 7000); // Change position every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-[100vw] h-[30vw] overflow-hidden my-[1.66vw] sm:h-[8vw] sm:my-[.166vw]">
            <div className='relative w-[200vw] h-[30vw] flex sm:h-[8vw]' style={{ transform: `translateX(${position}%)`, transition: 'transform 7s linear' }}>
                <div className='w-[100vw] h-[30vw] flex sm:h-[8vw]'>
                    {
                        images.map((url, i) => (
                            <div key={i} className='relative w-[30vw] h-[30vw] border-2 mx-[1.66vw] bg-white border-black sm:h-[8vw] sm:w-[8vw] sm:mx-[.166vw]'>
                                <Image
                                    src={url}
                                    alt="hero"
                                    fill={true}
                                />
                            </div>
                        ))
                    }
                </div>
                <div className='w-[100vw] h-[30vw] flex'>
                    {
                        images.map((url, i) => (
                            <div key={i} className='relative w-[30vw] h-[30vw] border-2 mx-[1.66vw] bg-white border-black sm:h-[8vw] sm:w-[8vw] sm:mx-[.166vw]'>
                                <Image
                                    src={url}
                                    alt="hero"
                                    fill={true}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Sliding2;