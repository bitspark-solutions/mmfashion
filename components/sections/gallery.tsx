import { AspectRatio } from '@/components/ui/aspect-ratio';
import Image from 'next/image';

const galleryImages = [
  { src: '/factorypictures/60.jpg', alt: 'Factory Image 60' },
  { src: '/factorypictures/52.jpg', alt: 'Factory Image 52' },
  { src: '/factorypictures/53.jpg', alt: 'Factory Image 53' },
  { src: '/factorypictures/54.jpg', alt: 'Factory Image 54' },
  { src: '/factorypictures/55.jpg', alt: 'Factory Image 55' },
  { src: '/factorypictures/56.jpg', alt: 'Factory Image 56' },
  { src: '/factorypictures/57.jpg', alt: 'Factory Image 57' },
  { src: '/factorypictures/58.jpg', alt: 'Factory Image 58' },
  { src: '/factorypictures/59.jpg', alt: 'Factory Image 59' },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Garments</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Take a tour of our state-of-the-art facilities
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div key={image.src} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <AspectRatio ratio={4/3}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform hover:scale-105 duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                />
              </AspectRatio>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}