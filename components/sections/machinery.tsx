import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Image from 'next/image';

const cuttingSectionMachines = [
  { id: 1, brand: 'KM BRAND MODEL -KS-AUV 8"', description: 'STRAIGHT KNIFE CUTTING Cutting Machine', origin: 'Japan', quantity: 2 },
  { id: 2, brand: 'DISON BRAND MODEL : DS -801A RI', description: 'B CUTTING MACHINE Rib Cutting Machine', origin: 'China', quantity: 1 },
  { id: 3, brand: 'PLOTER MACHINE', description: 'Marker Machine', origin: 'China', quantity: 1 },
  { id: 4, brand: 'FABRICS INSPECTION MACHINE', description: 'Inspection Machine', origin: 'China', quantity: 1 },
];

const sewingWovenMachines = [
  { id: 1, brand: 'BROTHER', description: 'Plain Machine', origin: 'TAIWAN', quantity: 85 },
  { id: 2, brand: 'BROTHER', description: 'Feed off arm Machine', origin: 'TAIWAN', quantity: 6 },
  { id: 3, brand: 'PEGASUS', description: 'Over Lock Machine', origin: 'CHINA', quantity: 55 },
  { id: 4, brand: 'PEGASUS', description: 'Flat Lock Flat bed Machine', origin: 'VIETNAM', quantity: 8 },
  { id: 5, brand: 'PEGASUS', description: 'Button Hole, Eyelet Hole, Tape Bainding, kancha', origin: 'VIETNAM', quantity: 10 },
  { id: 6, brand: 'PEGASUS', description: 'Flat Lock CylinderBed', origin: 'VIETNAM', quantity: 4 },
  { id: 7, brand: 'PEGASUS', description: 'Waist tag & Fusing attach machine', origin: 'VIETNAM', quantity: 2 },
];

const sewingKnitMachines = [
  { id: 1, brand: 'JUKI', description: 'Plain Machine (Auto)', origin: 'CHINA', quantity: 86 },
  { id: 2, brand: 'BROTHER', description: 'Feed off arm Machine', origin: 'TAIWAN', quantity: 6 },
  { id: 3, brand: 'JUKI', description: 'Over Lock Machine', origin: 'CHINA', quantity: 66 },
  { id: 4, brand: 'JUKI', description: 'Flat Lock Flat bed Machine', origin: 'CHINA', quantity: 6 },
  { id: 5, brand: 'PEGASUS', description: 'Button Hole, Eyelet Hole, Tape Bainding, kancha', origin: 'VIETNAM', quantity: 6 },
  { id: 6, brand: 'JUKI', description: 'Flat Lock Cylinder Bed', origin: 'CHINA', quantity: 12 },
  { id: 7, brand: 'JUKI', description: 'Compressor', origin: 'CHINA', quantity: 6 },
  { id: 8, brand: 'JUKI', description: 'Narrow Set', origin: 'CHINA', quantity: 12 },
  { id: 9, brand: 'JUKI', description: 'Waist tag & Fusing attach machine', origin: 'CHINA', quantity: 2 },
  { id: 10, brand: 'JUKI', description: 'Rib Cutter', origin: 'CHINA', quantity: 2 },
  { id: 11, brand: 'Iron', description: 'Iron (Steam)', origin: 'CHINA', quantity: 24 },
  { id: 12, brand: 'KM', description: 'Cutting Machine', origin: 'JAPAN', quantity: 4 },
  { id: 13, brand: 'NEEDLE DETECTOR', description: 'Needle Detector', origin: 'CHINA', quantity: 1 },
  { id: 14, brand: 'THREAD SUCKER', description: 'Thread Sucker', origin: 'CHINA', quantity: 2 },
];

const finishingMachines = [
  { id: 1, brand: 'SHENGTIAN BRAND MODEL : JS B4-8013 VACUMM IRON TABLE', description: 'VACUMM IRON TABLE', origin: 'CHINA', quantity: 10 },
  { id: 2, brand: 'SILVER STAR BRAND MODEL :ALL STEAM IRON', description: 'ALL STEAM IRON', origin: 'KOREA', quantity: 10 },
];

const otherMachines = [
  { id: 1, brand: '-', description: 'Steam Iron Sets', origin: 'CHINA', quantity: 10 },
  { id: 2, brand: '-', description: 'Boiler (Electric)', origin: 'CHINA', quantity: 2 },
  { id: 3, brand: '-', description: 'Generator', origin: 'CHINA', quantity: 1 },
];

function MachineTable({ data, total, image }: { data: any[], total: number, image?: string }) {
  return (
    <div className="relative rounded-lg overflow-hidden">
      {/* Background Image Layer */}
      {image && (
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${image})`,
            filter: 'blur(1px) brightness(0.6)',
            transform: 'scale(1.02)'
          }}
        />
      )}
      
      {/* Glass Effect Layer */}
      <div className="relative backdrop-blur-[2px] bg-black/20">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-black/30 transition-colors">
              <TableHead className="w-[80px] text-white font-bold">SL/No</TableHead>
              <TableHead className="text-white font-bold">Brand</TableHead>
              <TableHead className="text-white font-bold">Machine Description</TableHead>
              <TableHead className="text-white font-bold">Origin</TableHead>
              <TableHead className="text-white font-bold text-right">Quantity</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((machine) => (
              <TableRow 
                key={machine.id}
                className="hover:bg-black/30 transition-colors border-b border-white/20"
              >
                <TableCell className="text-white">{machine.id}</TableCell>
                <TableCell className="font-medium text-white">{machine.brand}</TableCell>
                <TableCell className="text-white">{machine.description}</TableCell>
                <TableCell className="text-white">{machine.origin}</TableCell>
                <TableCell className="text-right text-white">{machine.quantity}</TableCell>
              </TableRow>
            ))}
            <TableRow className="hover:bg-black/30 transition-colors">
              <TableCell colSpan={4} className="font-bold text-right text-white">
                Total Machines:
              </TableCell>
              <TableCell className="text-right font-bold text-white">
                {total}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

function MachineSection({ title, image, data, total }: { title: string, image: string, data: any[], total: number }) {
  return (
    <div className="mb-16">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
      </div>
      
      <div className="w-full">
        <MachineTable data={data} total={total} image={image} />
      </div>
    </div>
  );
}

export function Machinery() {
  return (
    <section id="machinery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Machinery</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            State-of-the-art equipment for premium quality production
          </p>
        </div>

        <MachineSection
          title="Cutting Section Machine List"
          image="/factorypictures/12.jpg"
          data={cuttingSectionMachines}
          total={5}
        />

        <MachineSection
          title="Sewing Section Machine List (Woven)"
          image="/factorypictures/13.jpg"
          data={sewingWovenMachines}
          total={170}
        />

        <MachineSection
          title="Sewing Section Machine List (Knit)"
          image="/factorypictures/14.jpg"
          data={sewingKnitMachines}
          total={235}
        />

        <MachineSection
          title="Finishing Section Machine List"
          image="/factorypictures/15.jpg"
          data={finishingMachines}
          total={20}
        />

        <MachineSection
          title="Other Machinery"
          image="/factorypictures/16.jpg"
          data={otherMachines}
          total={13}
        />
      </div>
    </section>
  );
}
