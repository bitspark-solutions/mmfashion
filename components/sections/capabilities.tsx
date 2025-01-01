import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Scissors, Shirt, PackageCheck } from 'lucide-react';

const departments = [
  {
    title: 'Cutting Section',
    icon: Scissors,
    machines: [
      'Automatic Fabric Spreading Machine - 2 units',
      'Band Knife Cutting Machine - 3 units',
      'Straight Knife Cutting Machine - 5 units',
      'Pattern Grading Machine - 2 units',
    ],
  },
  {
    title: 'Sewing Section',
    icon: Shirt,
    machines: [
      'Single Needle Lock Stitch - 150 units',
      'Double Needle Chain Stitch - 50 units',
      'Overlock Machine - 40 units',
      'Flat Lock Machine - 30 units',
    ],
  },
  {
    title: 'Finishing Section',
    icon: PackageCheck,
    machines: [
      'Steam Iron - 20 units',
      'Spot Removing Machine - 5 units',
      'Thread Sucking Machine - 10 units',
      'Metal Detector - 3 units',
    ],
  },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Capabilities</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            State-of-the-art machinery and equipment to deliver premium quality products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {departments.map((dept) => (
            <Card key={dept.title}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <dept.icon className="h-6 w-6 text-primary" />
                  {dept.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {dept.machines.map((machine) => (
                    <li key={machine} className="text-gray-600">
                      {machine}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}