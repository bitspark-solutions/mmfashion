import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Award, Users } from 'lucide-react';
import Image from 'next/image';

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">About MM Fashion Ltd.</h2>
          
          <div className="w-[200px] sm:w-[250px] md:w-[300px] h-[100px] sm:h-[125px] md:h-[150px] relative mx-auto mb-8">
            <Image
              src="/factorypictures/4.png"
              alt="MM Fashion Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are committed to delivering world-class textile products while maintaining the highest
            quality standards and ensuring complete customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-6 w-6 text-primary" />
                Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Our core mission is to maximize the business volume and profitability of our valued clients. Therefore, as a prominent manufacturer in the textile and apparel sector, we strive to facilitate both buyers and sellers in negotiating the best deals. We are committed to ensuring the utmost satisfaction of our overseas clients and consistently focus on manufacturing only world-class textile and apparel products.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-6 w-6 text-primary" />
                Quality
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
              To provide our customers with the best quality products as per their required standards, we are dedicated to maintaining all quality control processes and standards to ensure their satisfaction and happiness. We remain committed to upholding the promises we make to our clients.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-6 w-6 text-primary" />
                Team
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Our skilled workforce and experienced management team work together to deliver
                excellence in every project.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}