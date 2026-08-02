import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../sections/home/Hero';
import TrustSlider from '../sections/home/TrustSlider';
import AboutPreview from '../sections/home/AboutPreview';
import FeaturedCategories from '../sections/home/FeaturedCategories';
import SolutionsGrid from '../sections/home/SolutionsGrid';
import IndustriesServed from '../sections/home/IndustriesServed';
import StatsCounter from '../sections/home/StatsCounter';
import VideoSection from '../sections/home/VideoSection';
import TimelineSection from '../sections/home/TimelineSection';
import SuccessStories from '../sections/home/SuccessStories';
import TestimonialsSection from '../sections/home/TestimonialsSection';
import FAQSection from '../sections/home/FAQSection';
import InsightsFeed from '../sections/home/InsightsFeed';
import CTABanner from '../sections/home/CTABanner';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Enterprise Medical Equipment & Hospital Solutions | Aetheris</title>
        <meta
          name="description"
          content="Aetheris designs and integrates medical imaging systems (MRI, CT), critical care ventilators, and hospital-wide piping infrastructure for leading clinical systems."
        />
        <link rel="canonical" href="https://aetheris-medical.com/" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Enterprise Medical Equipment & Hospital Solutions | Aetheris" />
        <meta property="og:description" content="Supply and engineering integration for clinical networks. MRI scanners, ventilators, and surgical layout design." />
        <meta property="og:url" content="https://aetheris-medical.com/" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Enterprise Medical Equipment & Hospital Solutions | Aetheris" />
        <meta name="twitter:description" content="Supply and engineering integration for clinical networks. MRI scanners, ventilators, and surgical layout design." />
      </Helmet>

      <div>
        <Hero />
        <TrustSlider />
        <AboutPreview />
        <FeaturedCategories />
        <SolutionsGrid />
        <IndustriesServed />
        <StatsCounter />
        <VideoSection />
        <TimelineSection />
        <SuccessStories />
        <TestimonialsSection />
        <FAQSection />
        <InsightsFeed />
        <CTABanner />
      </div>
    </>
  );
}
