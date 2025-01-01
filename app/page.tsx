import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Management } from '@/components/sections/management';
import { Capabilities } from '@/components/sections/capabilities';
import { Products } from '@/components/sections/products';
import { Gallery } from '@/components/sections/gallery';
import { Contact } from '@/components/sections/contact';
import { Certifications } from '@/components/sections/certifications';
import { Machinery } from '@/components/sections/machinery';
import { Customers } from '@/components/sections/customers';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Machinery />
      <Management />
      {/* <Capabilities /> */}
      <Products />
      {/* <Certifications /> */}
      <Gallery />
      <Customers />
      <Contact />
    </>
  );
}