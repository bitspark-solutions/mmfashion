import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Layers, ShirtIcon } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Image from 'next/image';

const productCategories = [
  {
    title: 'Woven Items',
    icon: Layers,
    items: [
      'Denim Pants',
      'Cargo Pants',
      'Casual Shirts',
      'Jackets',
      'Shorts',
    ],
    capacity: '50,000 pieces/month',
  },
  {
    title: 'Knit Items',
    icon: ShirtIcon,
    items: [
      'T-Shirts',
      'Polo Shirts',
      'Tank Tops',
      'Leggings',
      'Sweatshirts',
    ],
    capacity: '100,000 pieces/month',
  },
];

const productImages = [
  { src: '/factorypictures/27.png', alt: 'Factory Image 27' },
  { src: '/factorypictures/28.png', alt: 'Factory Image 28' },
  { src: '/factorypictures/29.png', alt: 'Factory Image 29' },
  { src: '/factorypictures/30.png', alt: 'Factory Image 30' },
  { src: '/factorypictures/35.png', alt: 'Factory Image 35' },
  { src: '/factorypictures/36.png', alt: 'Factory Image 36' },
  { src: '/factorypictures/37.png', alt: 'Factory Image 37' },
  { src: '/factorypictures/40.png', alt: 'Factory Image 40' },
  { src: '/factorypictures/41.png', alt: 'Factory Image 41' },
  { src: '/factorypictures/42.png', alt: 'Factory Image 42' },
  { src: '/factorypictures/43.png', alt: 'Factory Image 43' },
  { src: '/factorypictures/45.png', alt: 'Factory Image 45' },
  { src: '/factorypictures/46.png', alt: 'Factory Image 46' },
  { src: '/factorypictures/47.png', alt: 'Factory Image 47' },
  { src: '/factorypictures/48.png', alt: 'Factory Image 48' },
];

export function Products() {
  return (
    <section id="products" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Products</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            High-quality garments for every style and season
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {productCategories.map((category) => (
            <Card key={category.title}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <category.icon className="h-6 w-6 text-primary" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside mb-4">
                  {category.items.map((item) => (
                    <li key={item} className="text-gray-600">{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Product Gallery</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our manufacturing capabilities and finished products
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {productImages.map((image) => (
              <div key={image.src} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <AspectRatio ratio={1}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform hover:scale-105 duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 20vw"
                  />
                </AspectRatio>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}