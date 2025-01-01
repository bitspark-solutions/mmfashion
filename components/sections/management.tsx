import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail } from 'lucide-react';

const managementTeam = [
  {
    title: 'Chairman',
    name: 'Md. Sofur Uddin Shahin',
    email: 'sofur.shahin@gmail.com',
  },
  {
    title: 'Director Finance & Commerce',
    name: ' Md. Miraj Uddin Dhrubo',
    email: 'miraj.dhrubo54@gmail.com',
  },
  {
    title: 'Managing Director',
    name: 'Md. Habibullah Habib',
    email: 'abutalha088388@gmail.com',
  },
  {
    title: 'Director Administration',
    name: 'Md. Mezbha Uddin Abir',
    email: 'abir3215@gmail.com',
  },
];

export function Management() {
  return (
    <section id="management" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Management Team</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Led by industry veterans with decades of experience in textile manufacturing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {managementTeam.map((member) => (
            <Card key={member.title}>
              <CardHeader>
                <CardTitle className="text-xl">{member.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-medium mb-2">{member.name}</p>
                <p className="text-sm text-gray-600 flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  {member.email}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}