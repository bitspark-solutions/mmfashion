import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Mail, Phone, Building } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get in touch with us for any inquiries or collaboration opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Card>
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input placeholder="Name" />
                    <Input type="email" placeholder="Email" />
                  </div>
                  <Input placeholder="Subject" />
                  <Textarea placeholder="Message" className="h-32" />
                  <Button className="w-full">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-medium mb-1">Factory Address</h3>
                <p className="text-gray-600">Mehernagar, Dobadia, Uttarkhan, Dhaka-1230</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Building className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-medium mb-1">Office Address</h3>
                <p className="text-gray-600">Corporate Office, Dhaka, Bangladesh</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-medium mb-1">Email</h3>
                <p className="text-gray-600">mmfashion0003@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-medium mb-1">Phone</h3>
                <p className="text-gray-600">+880 1234-567890</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}