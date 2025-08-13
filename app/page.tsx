'use client'

import React, { useState } from 'react';
import { 
  ArrowRight, Menu, X, Sparkles, TrendingUp, Zap, Target, Award, 
  Users, CheckCircle, Star, Play, ChevronDown
} from 'lucide-react';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md border-b border-gray-200/50 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                AllDazeWork
              </h1>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#services" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                  Services
                </a>
                <a href="/assessment" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                  UX Assessment
                </a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                  About
                </a>
                <a href="/assessment" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300">
                  Free Assessment
                </a>
              </div>
            </div>

            <div className="md:hidden">
              <button onClick={toggleMenu} className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200">
              <div className="px-4 py-6 space-y-4">
                <a href="#services" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">Services</a>
                <a href="/assessment" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">UX Assessment</a>
                <a href="#about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">About</a>
                <a href="/assessment" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-base font-medium mt-4 block text-center">
                  Free Assessment
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full text-blue-700 text-sm font-medium mb-8 border border-blue-200/50 shadow-lg">
              <Sparkles className="h-4 w-4 mr-2" />
              Design Duo Excellence
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              We transform ideas into{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                winning experiences
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
              As a collaborative design duo, we bring <strong>double the creative power</strong> to your biggest challenges—from 
              blue sky visioning to scalable product experiences that drive real business growth.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-20">
              <a href="/assessment" className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-5 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center">
                <span className="flex items-center">
                  Get Free UX Assessment
                  <ArrowRight className="ml-3 h-5 w-5" />
                </span>
              </a>
              <button className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:bg-white/80 px-10 py-5 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg flex items-center justify-center group">
                <Play className="mr-3 h-5 w-5" />
                Watch Our Process
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="group p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 hover:bg-white/80 hover:shadow-xl transition-all duration-300">
                <TrendingUp className="h-6 w-6 mx-auto mb-2 text-blue-600" />
                <div className="text-4xl font-bold text-blue-600 mb-2">150%</div>
                <div className="text-gray-600 font-medium">Conversion Improvements</div>
              </div>
              <div className="group p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 hover:bg-white/80 hover:shadow-xl transition-all duration-300">
                <Zap className="h-6 w-6 mx-auto mb-2 text-green-600" />
                <div className="text-4xl font-bold text-green-600 mb-2">2x</div>
                <div className="text-gray-600 font-medium">Faster Development</div>
              </div>
              <div className="group p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 hover:bg-white/80 hover:shadow-xl transition-all duration-300">
                <Target className="h-6 w-6 mx-auto mb-2 text-purple-600" />
                <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
                <div className="text-gray-600 font-medium">Successful Projects</div>
              </div>
              <div className="group p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 hover:bg-white/80 hover:shadow-xl transition-all duration-300">
                <Award className="h-6 w-6 mx-auto mb-2 text-orange-600" />
                <div className="text-4xl font-bold text-orange-600 mb-2">100%</div>
                <div className="text-gray-600 font-medium">Client Satisfaction</div>
              </div>
            </div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ChevronDown className="h-8 w-8 text-gray-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From rapid ideation to polished product design, we offer a range of services 
              that craft meaningful human experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group p-8 bg-gradient-to-br from-blue-500/10 to-blue-600/10 backdrop-blur-sm rounded-2xl border border-blue-200/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="mb-6">
                <Zap className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Vision Casting & Blue Sky Design</h3>
              <p className="text-gray-600 leading-relaxed">
                Transform ambitious ideas into clear, actionable product visions that align teams and inspire stakeholders.
              </p>
            </div>

            <div className="group p-8 bg-gradient-to-br from-green-500/10 to-green-600/10 backdrop-blur-sm rounded-2xl border border-green-200/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="mb-6">
                <Target className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Website Design</h3>
              <p className="text-gray-600 leading-relaxed">
                Create stunning, conversion-focused websites that perfectly represent your brand and drive business results.
              </p>
            </div>

            <div className="group p-8 bg-gradient-to-br from-purple-500/10 to-purple-600/10 backdrop-blur-sm rounded-2xl border border-purple-200/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="mb-6">
                <Users className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Design Systems & Scalable UX</h3>
              <p className="text-gray-600 leading-relaxed">
                Build cohesive design systems that scale with your product and ensure consistent user experiences.
              </p>
            </div>

            <div className="group p-8 bg-gradient-to-br from-orange-500/10 to-orange-600/10 backdrop-blur-sm rounded-2xl border border-orange-200/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="mb-6">
                <TrendingUp className="h-10 w-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">UX Strategy & Research</h3>
              <p className="text-gray-600 leading-relaxed">
                Make informed design decisions based on real user insights and strategic business objectives.
              </p>
            </div>

            <div className="group p-8 bg-gradient-to-br from-red-500/10 to-red-600/10 backdrop-blur-sm rounded-2xl border border-red-200/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="mb-6">
                <Star className="h-10 w-10 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Growth & Conversion Optimization</h3>
              <p className="text-gray-600 leading-relaxed">
                Optimize user flows and interfaces to maximize conversions and drive sustainable growth.
              </p>
            </div>

            <div className="group p-8 bg-gradient-to-br from-teal-500/10 to-teal-600/10 backdrop-blur-sm rounded-2xl border border-teal-200/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="mb-6">
                <CheckCircle className="h-10 w-10 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Rapid Prototyping & Testing</h3>
              <p className="text-gray-600 leading-relaxed">
                Quickly validate ideas through interactive prototypes and user testing before full development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* UX Assessment CTA Section */}
      <section id="assessment" className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-8">
            <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6 border border-white/30">
              <CheckCircle className="h-4 w-4 mr-2" />
              Free UX Assessment • 15 Minutes • Actionable Results
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Discover Your UX Growth Opportunities
            </h2>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Get a comprehensive analysis of your digital experience with our proven assessment frameworks. 
              Identify specific opportunities to drive growth and improve conversions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Zap className="w-6 h-6 text-white mb-3" />
              <h3 className="font-semibold text-white mb-2">Startup Founders</h3>
              <p className="text-white/80 text-sm">Product-market fit & growth validation</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Users className="w-6 h-6 text-white mb-3" />
              <h3 className="font-semibold text-white mb-2">Product Teams</h3>
              <p className="text-white/80 text-sm">UX integration & workflow optimization</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Target className="w-6 h-6 text-white mb-3" />
              <h3 className="font-semibold text-white mb-2">Local Businesses</h3>
              <p className="text-white/80 text-sm">Digital presence & conversion analysis</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <a 
              href="/assessment" 
              className="group bg-white text-blue-600 px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center transform hover:scale-105 shadow-2xl"
            >
              <span className="flex items-center">
                Start Free Assessment
                <ArrowRight className="ml-3 h-5 w-5" />
              </span>
            </a>
            <button className="border-2 border-white text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <Play className="mr-3 h-5 w-5" />
              Watch Demo
            </button>
          </div>

          <div className="flex justify-center items-center space-x-8 text-white/80 text-sm">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-green-400" />
              No spam, ever
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-green-400" />
              Results in 15 minutes
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-green-400" />
              500+ completed
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Meet Your{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Design Partners
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're not just designers—we're strategic partners who understand that great UX drives real business results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-20">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Collaborative Duo Power</h3>
                    <p className="text-gray-600">
                      Two perspectives, one vision. We combine complementary skills to deliver designs that work beautifully and perform exceptionally.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">User-Centered Strategy</h3>
                    <p className="text-gray-600">
                      Every design decision is backed by user research and validated through testing. We don't guess—we know what works.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Rapid Results</h3>
                    <p className="text-gray-600">
                      From startup MVPs to enterprise redesigns, we deliver high-impact solutions that move fast and break through noise.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Methodology</h3>
                    <p className="text-gray-600">
                      Our comprehensive UX assessment framework helps identify opportunities and deliver measurable improvements.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12 backdrop-blur-sm border border-gray-200/50 mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                We Specialize in Three Key Areas
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Startup Founders</h4>
                  <p className="text-gray-600 text-sm">
                    Get to product-market fit faster with user-validated design and conversion optimization that drives growth.
                  </p>
                </div>

                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Product Teams</h4>
                  <p className="text-gray-600 text-sm">
                    Integrate UX seamlessly into your development workflow for better user outcomes and team efficiency.
                  </p>
                </div>

                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Local Businesses</h4>
                  <p className="text-gray-600 text-sm">
                    Build professional digital presence that drives local customers and competes with larger brands.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-gray-600 mb-8">
                Ready to transform your user experience?
              </p>
              <a href="/assessment" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center">
                <span className="flex items-center">
                  Get Your Free UX Assessment
                  <ArrowRight className="ml-3 h-5 w-5" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
              AllDazeWork
            </h3>
            <p className="text-gray-400 mb-8 text-lg">
              Transforming ideas into winning digital experiences
            </p>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-500">
                © 2024 AllDazeWork. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}