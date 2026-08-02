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
import ScrollReveal from '../components/ScrollReveal';

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
      </Helmet>

      <div>
        {/* Above the fold elements load instantly for FCP optimization */}
        <Hero />
        <TrustSlider />
        
        {/* Below the fold elements reveal smoothly on scroll */}
        <ScrollReveal><AboutPreview /></ScrollReveal>
        <ScrollReveal><FeaturedCategories /></ScrollReveal>
        <ScrollReveal><SolutionsGrid /></ScrollReveal>
        <ScrollReveal><IndustriesServed /></ScrollReveal>
        <ScrollReveal><StatsCounter /></ScrollReveal>
        <ScrollReveal><VideoSection /></ScrollReveal>
        <ScrollReveal><TimelineSection /></ScrollReveal>
        <ScrollReveal><SuccessStories /></ScrollReveal>
        <ScrollReveal><TestimonialsSection /></ScrollReveal>
        <ScrollReveal><FAQSection /></ScrollReveal>
        <ScrollReveal><InsightsFeed /></ScrollReveal>
        <ScrollReveal><CTABanner /></ScrollReveal>
      </div>
    </>
  );
}
