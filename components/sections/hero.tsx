import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-[url('/factorypictures/24.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          Leading Garments Manufacturer in Bangladesh
        </h1>
        <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto">
          MM Fashion Ltd. is your trusted partner for high-quality textile and apparel manufacturing,
          serving European clients with excellence and precision.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="text-lg">
            <Link href="#contact">Contact Us</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-blue-600 border-transparent text-lg">
            <Link href="#about">Learn More</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}