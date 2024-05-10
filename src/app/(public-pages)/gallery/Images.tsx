import Image from "next/legacy/image";

interface IImage {
  src: string;
  alt: string;
  priority: true;
}

const images: IImage[] = [];
for (let i = 1; i <= 20; i++) {
  images.push({
    src: `/imgs/imagen-${i}.jpg`,
    alt: `Image description ${i}`,
    priority: true,
  });
}

export default function Images() {
  return (
    <>
      <h1 className="mt-8 text-5xl text-center font-bold text-gray-700">
        Gallery
      </h1>
      <div className="container mt-20 mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-110"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={500}
                height={300}
                layout="responsive"
                objectFit="cover"
                priority={image.priority || false}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
