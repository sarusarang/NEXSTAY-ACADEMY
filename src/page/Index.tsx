import { HeroSection } from '@/components/home/HeroSection';
import HomeAboutSection from '@/components/home/HomeAboutSection';
import ProgramSnapshotSection from '@/components/home/Programsnapshotsection';
import EarnWhileYouLearnSection from '@/components/home/Earnwhileyoulearnsection';
import WhyChooseNAHM from '@/components/home/WhyUs';
import CTASection from '@/components/home/Cta';
import PlacementsStrip from '@/components/home/PlacementStrip';



export default function Home() {
  return (
    <div className="w-full bg-[#071322] overflow-x-hidden">
      <HeroSection />


      <HomeAboutSection />


      <ProgramSnapshotSection />


      <EarnWhileYouLearnSection />


      <WhyChooseNAHM />


      <PlacementsStrip />


      <CTASection />

    </div>

  );

}