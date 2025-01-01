import Image from 'next/image';

export function Customers() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          OUR CUSTOMERS
        </h2>
        
        <div className="flex flex-col max-w-6xl mx-auto">
          <div className="w-full h-auto relative">
            <Image
              src="/factorypictures/20.png"
              alt="Customer Logo"
              width={1200}
              height={400}
              className="w-full h-auto object-contain"
              sizes="100vw"
              priority
            />
          </div>
          <div className="w-full h-auto relative">
            <Image
              src="/factorypictures/17.png"
              alt="Customer Logo"
              width={1200}
              height={400}
              className="w-full h-auto object-contain"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
