import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';

const Galleri = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

const images = [
  
  '/img/web1.jpg',
  '/img/web2.jpg',
  '/img/web3.jpg',
  '/img/web1.jpg',
  '/img/web2.jpg',
  '/img/web3.jpg',
  // ...lägg till fler bildkällor här
];

  const openModal = (src: string) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
     
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Galleri</h1>
        <p className="text-lg text-center text-gray-600 mt-4 mb-8 px-4 sm:px-0">
  Välkommen till vårt galleri där vi stolt visar upp några av våra bästa webbdesignprojekt. Bläddra igenom vår samling av innovativa och moderna designlösningar som hjälper våra kunder att sticka ut på nätet.
</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative h-64 w-full cursor-pointer"
              onClick={() => openModal(src)}
            >
              <Image
                src={src}
                alt={`Bild ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded "
              />
            </div>
          ))}
        </div>
      </div>
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={closeModal}
        >
          <div className="relative w-full max-w-4xl h-auto">
            <Image
              src={selectedImage}
              alt="Förstorad bild"
              layout="intrinsic"
              width={900}
              height={600}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Galleri;



