import PageHero from '@/components/common/PageHero';
import AboutWhoWeAre from '@/components/about/AboutWhoWeAre';
import AboutParentGroup from '@/components/about/AboutParentGroup';
import AboutVisionMissionValues from '@/components/about/AboutVisionMissionValues';
import AboutWhyDifferent from '@/components/about/AboutWhyDifferent';
import AboutCTA from '@/components/about/AboutCTA';

export default function About() {
  return (
    <div className="w-full bg-white overflow-x-hidden">
      <PageHero
        image="/about-banner.jpeg"
        title="About Nexstay Academy"
        description="Where real-world hospitality expertise meets industry-leading hotel management education."
      />
      <AboutWhoWeAre />
      <AboutParentGroup />
      <AboutVisionMissionValues />
      <AboutWhyDifferent />
      <AboutCTA />
    </div>
  );
}
