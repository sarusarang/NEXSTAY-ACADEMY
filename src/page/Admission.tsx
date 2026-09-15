import PageHero from '@/components/common/PageHero';
import FeeOverview from '@/components/admission/FeeOverview';
import AdmissionBadgeRow from '@/components/admission/AdmissionBadgeRow';
import PaymentOptions from '@/components/admission/PaymentOptions';
import AdmissionProcess from '@/components/admission/AdmissionProcess';
import AdmissionCTA from '@/components/admission/AdmissionCTA';
import {
  Shirt,
  Briefcase,
  FileStack,
  IdCard,
  Image as ImageIcon,
} from 'lucide-react';

const included = [
  {
    icon: Shirt,
    title: 'Professional Uniforms',
    subtitle: 'Chef coats, front office blazers, and grooming standards kit.',
  },
  {
    icon: Briefcase,
    title: '100% Placement Training',
    subtitle: 'Resume workshops, mock interviews, and 5-star hotel placement mapping.',
  },
];

const documents = [
  {
    icon: FileStack,
    title: 'Educational Certificates',
    subtitle: '10th & 12th Standard Mark Sheets / Passing Certificates',
  },
  {
    icon: IdCard,
    title: 'Govt. Photo ID Proof',
    subtitle: 'Aadhaar Card, Passport, or Voter ID copy',
  },
  {
    icon: ImageIcon,
    title: 'Passport Photographs',
    subtitle: '4 Recent Color Passport-sized Photos',
  },
];

export default function Admission() {
  return (
    <div className="w-full bg-[#f8fafc] overflow-x-hidden">
      {/* Page Hero */}
      <PageHero
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"
        title="Fee & Admission"
        description="Transparent fees, flexible payment options, and a straightforward five-step path to your seat."
      />

      {/* 1. Fee Structure Section */}
      <FeeOverview />

      {/* 2. What's Included / Beyond The Classroom */}
      <div className="w-full bg-slate-50 border-b border-slate-200">
        <AdmissionBadgeRow
          eyebrow="What's Included"
          title="Beyond The Classroom"
          description="Every enrollment includes professional uniforms, certifications, and placement assistance with zero hidden fees."
          items={included}
          columns={2}
        />
      </div>

      {/* 3. Payment Options */}
      <PaymentOptions />

      {/* 4. Admission Process Timeline */}
      <AdmissionProcess />

      {/* 5. Documents You'll Need */}
      <AdmissionBadgeRow
        eyebrow="Come Prepared"
        title="Documents You'll Need"
        description="Keep these basic documents ready for instant counseling and fast-track seat reservation."
        items={documents}
        columns={4}
        theme="navy"
      />

      {/* 6. Closing Admission CTA */}
      <AdmissionCTA />
    </div>
  );
}