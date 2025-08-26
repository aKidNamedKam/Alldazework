'use client'

import React, { useState } from 'react';
import Navigation from '@/components/layout/Navigation';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import AssessmentCTA from '@/components/sections/AssessmentCTA';
import About from '@/components/sections/About';
import Footer from '@/components/layout/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Navigation />
      <Hero />
      <Services />
      <AssessmentCTA />
      <About />
      <Footer />
    </div>
  );
}