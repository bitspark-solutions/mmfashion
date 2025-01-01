import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Shield, CheckCircle } from 'lucide-react';

const certifications = [
  {
    title: 'BOND License',
    status: 'In Progress',
    description: 'Currently in the process of acquiring BOND license certification.',
    icon: Shield,
  },
  {
    title: 'Quality Management',
    status: 'Certified',
    description: 'ISO 9001:2015 certified for quality management systems.',
    icon: Award,
  },
  {
    title: 'Compliance',
    status: 'Certified',
    description: 'Compliant with international labor and safety standards.',
    icon: CheckCircle,
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Certifications</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our commitment to quality and compliance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <Card key={cert.title}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <cert.icon className="h-6 w-6 text-primary" />
                  {cert.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium mb-2">
                  Status: <span className="text-primary">{cert.status}</span>
                </p>
                <p className="text-gray-600">{cert.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}