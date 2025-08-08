'use client'

import React, { useState, useEffect, useRef, ReactNode, useCallback, memo } from 'react';
import { 
  ArrowRight, Menu, X, Sparkles, TrendingUp, Zap, Target, Award, Play, ChevronDown,
  Users, CheckCircle, Star, ArrowUp
} from 'lucide-react';

// ===============================================
// 🚀 PERFORMANCE OPTIMIZED COMPONENTS
// ===============================================

// Memoized AnimatedText component
interface AnimatedTextProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const AnimatedText = memo<AnimatedTextProps>(({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`${className} overflow-hidden`}>
      <div 
        className={`transform transition-all duration-1000 ease-out will-change-transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
        style={{ willChange: isVisible ? 'auto' : 'transform, opacity' }}
      >
        {children}
      </div>
    </div>
  );
});

AnimatedText.displayName = 'AnimatedText';

// Client-only Floating Elements to prevent hydration errors
const FloatingElements = memo(() => {
  const [isMounted, setIsMounted] = useState(false);
  const [elements] = useState(() => 
    Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 3 + Math.random() * 2
    }))
  );

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Don't render on server
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element) => (
        <div
          key={element.id}
          className="absolute w-2 h-2 bg-blue-400/20 rounded-full animate-pulse will-change-transform"
          style={{
            left: `${element.left}%`,
            top: `${element.top}%`,
            animationDelay: `${element.delay}s`,
            animationDuration: `${element.duration}s`
          }}
        />
      ))}
    </div>
  );
});

FloatingElements.displayName = 'FloatingElements';

// ===============================================
// 🎨 SERVICE CARD COMPONENT
// ===============================================

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  color: string;
  border: string;
  index: number;
}

const ServiceCard = memo<ServiceCardProps>(({ icon, title, description, color, border, index }) => {
  return (
    <AnimatedText delay={index * 100}>
      <div className={`group p-8 bg-gradient-to-br ${color} backdrop-blur-sm rounded-2xl border ${border} hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden will-change-transform`}>
        <div className="relative z-10">
          <div className="mb-6 group-hover:scale-110 transition-transform duration-300 will-change-transform">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
            {description}
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 will-change-transform"></div>
      </div>
    </AnimatedText>
  );
});

ServiceCard.displayName = 'ServiceCard';

// ===============================================
// 📊 TRUST INDICATOR COMPONENT
// ===============================================

interface TrustIndicatorProps {
  value: string;
  label: string;
  color: string;
  icon: ReactNode;
  index: number;
}

const TrustIndicator = memo<TrustIndicatorProps>(({ value, label, color, icon, index }) => {
  return (
    <div className="group p-6 bg-white/40 backdrop-blur-sm rounded-2xl border border-white/50 hover:bg-white/60 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 will-change-transform">
      <div className={`${color} mb-3 group-hover:scale-110 transition-transform duration-300 will-change-transform`}>
        {icon}
      </div>
      <div className={`text-4xl font-bold ${color} mb-2`}>{value}</div>
      <div className="text-gray-600 font-medium">{label}</div>
    </div>
  );
});

TrustIndicator.displayName = 'TrustIndicator';

// ===============================================
// 🎯 MAIN HOMEPAGE COMPONENT
// ===============================================

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Performance optimized event handlers with useCallback
  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    // Throttle mouse movement for better performance
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  useEffect(() => {
    // Throttled scroll handler for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Throttled mouse move handler for better performance  
    let mouseMoveTicking = false;
    const throttledMouseMove = (e: MouseEvent) => {
      if (!mouseMoveTicking) {
        requestAnimationFrame(() => {
          handleMouseMove(e);
          mouseMoveTicking = false;
        });
        mouseMoveTicking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    window.addEventListener('mousemove', throttledMouseMove, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', throttledScroll);
      window.removeEventListener('mousemove', throttledMouseMove);
    };
  }, [handleScroll, handleMouseMove]);

  // Memoized cursor gradient for performance
  const cursorGradient = useRef({
    background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
  });
  
  cursorGradient.current.background = `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`;

  // Static data (won't change during renders)
  const trustIndicators = [
    { 
      value: "150%", 
      label: "Conversion Improvements", 
      color: "text-blue-600", 
      icon: <TrendingUp className="h-6 w-6 mx-auto mb-2" /> 
    },
    { 
      value: "2x", 
      label: "Faster Development", 
      color: "text-green-600", 
      icon: <Zap className="h-6 w-6 mx-auto mb-2" /> 
    },
    { 
      value: "50+", 
      label: "Successful Projects", 
      color: "text-purple-600", 
      icon: <Target className="h-6 w-6 mx-auto mb-2" /> 
    },
    { 
      value: "100%", 
      label: "Client Satisfaction", 
      color: "text-orange-600", 
      icon: <Award className="h-6 w-6 mx-auto mb-2" /> 
    }
  ];

  const services = [
    {
      icon: <Zap className="h-10 w-10 text-blue-600" />,
      title: "Vision Casting & Blue Sky Design",
      description: "Transform ambitious ideas into clear, actionable product visions that align teams and inspire stakeholders.",
      color: "from-blue-500/10 to-blue-600/10",
      border: "border-blue-200/50"
    },
    {
      icon: <Target className="h-10 w-10 text-green-600" />,
      title: "Professional Website Design", 
      description: "Create stunning, conversion-focused websites that perfectly represent your brand and drive business results.",
      color: "from-green-500/10 to-green-600/10",
      border: "border-green-200/50"
    },
    {
      icon: <Users className="h-10 w-10 text-purple-600" />,
      title: "Design Systems & Scalable UX",
      description: "Build cohesive design systems that scale with your product and ensure consistent user experiences.",
      color: "from-purple-500/10 to-purple-600/10", 
      border: "border-purple-200/50"
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-orange-600" />,
      title: "UX Strategy & Research",
      description: "Make informed design decisions based on real user insights and strategic business objectives.",
      color: "from-orange-500/10 to-orange-600/10",
      border: "border-orange-200/50"
    },
    {
      icon: <Star className="h-10 w-10 text-red-600" />,
      title: "Growth & Conversion Optimization", 
      description: "Optimize user flows and interfaces to maximize conversions and drive sustainable growth.",
      color: "from-red-500/10 to-red-600/10",
      border: "border-red-200/50"
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-teal-600" />,
      title: "Rapid Prototyping & Testing",
      description: "Quickly validate ideas through interactive prototypes and user testing before full development.",
      color: "from-teal-500/10 to-teal-600/10",
      border: "border-teal-200/50"
    }
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Cursor Gradient Effect */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 will-change-auto" 
        style={cursorGradient.current} 
      />
      
      {/* Floating Elements */}
      <FloatingElements />

      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md border-b border-gray-200/50 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent animate-pulse">
                AllDazeWork
              </h1>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#services" className="relative text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-all duration-300 group">
                  Services
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 will-change-transform"></span>
                </a>
                <a href="#about" className="relative text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-all duration-300 group">
                  About
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 will-change-transform"></span>
                </a>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl will-change-transform">
                  Start Project
                </button>
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
                <a href="#services" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 transition-colors">Services</a>
                <a href="#about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 transition-colors">About</a>
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-base font-medium mt-4">
                  Start Project
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center relative z-10">
            <AnimatedText delay={200}>
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full text-blue-700 text-sm font-medium mb-8 border border-blue-200/50 backdrop-blur-sm">
                <Sparkles className="h-4 w-4 mr-2 animate-pulse" />
                Design Duo Excellence
              </div>
            </AnimatedText>

            <AnimatedText delay={400}>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                We transform ideas into{' '}
                <span className="relative">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent animate-pulse">
                    winning experiences
                  </span>
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 rounded-lg blur-lg animate-pulse"></div>
                </span>
              </h1>
            </AnimatedText>

            <AnimatedText delay={600}>
              <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
                As a collaborative design duo, we bring <strong>double the creative power</strong> to your biggest challenges—from 
                blue sky visioning to scalable product experiences that drive real business growth.
              </p>
            </AnimatedText>
            
            <AnimatedText delay={800}>
              <div className="flex flex-col sm:flex-row justify-center gap-6 mb-20">
                <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-5 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center justify-center relative overflow-hidden will-change-transform">
                  <span className="relative z-10 flex items-center">
                    Start Your Project
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300 will-change-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 will-change-transform"></div>
                </button>
                <button className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:bg-gray-50 px-10 py-5 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg flex items-center justify-center group">
                  <Play className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform duration-300 will-change-transform" />
                  Watch Our Process
                </button>
              </div>
            </AnimatedText>

            {/* Trust Indicators */}
            <AnimatedText delay={1000}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {trustIndicators.map((stat, index) => (
                  <TrustIndicator
                    key={index}
                    value={stat.value}
                    label={stat.label}
                    color={stat.color}
                    icon={stat.icon}
                    index={index}
                  />
                ))}
              </div>
            </AnimatedText>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ChevronDown className="h-8 w-8 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Parallax Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl will-change-transform"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          />
          <div 
            className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-cyan-400/10 rounded-full blur-3xl will-change-transform"
            style={{ transform: `translateY(${scrollY * -0.05}px)` }}
          />
        </div>
      </section>

      {/* =============================================== */}
      {/* 🛠️ SERVICES SECTION */}
      {/* =============================================== */}
      <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedText>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Core Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From rapid ideation to polished product design, we offer a range of services 
                that craft meaningful human experiences.
              </p>
            </div>
          </AnimatedText>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                color={service.color}
                border={service.border}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =============================================== */}
      {/* 👥 ABOUT SECTION */}
      {/* =============================================== */}
      <section id="about" className="py-24 bg-white/50 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <AnimatedText>
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
            </AnimatedText>

            {/* Core Value Props */}
            <div className="grid md:grid-cols-2 gap-12 mb-20">
              <div className="space-y-6">
                <AnimatedText delay={200}>
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
                </AnimatedText>

                <AnimatedText delay={400}>
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
                </AnimatedText>
              </div>

              <div className="space-y-6">
                <AnimatedText delay={600}>
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
                </AnimatedText>

                <AnimatedText delay={800}>
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
                </AnimatedText>
              </div>
            </div>

            {/* Who We Serve */}
            <AnimatedText delay={1000}>
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12 backdrop-blur-sm border border-gray-200/50">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                  We Specialize in Three Key Areas
                </h3>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 will-change-transform">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Startup Founders</h4>
                    <p className="text-gray-600 text-sm">
                      Get to product-market fit faster with user-validated design and conversion optimization that drives growth.
                    </p>
                  </div>

                  <div className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 will-change-transform">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Product Teams</h4>
                    <p className="text-gray-600 text-sm">
                      Integrate UX seamlessly into your development workflow for better user outcomes and team efficiency.
                    </p>
                  </div>

                  <div className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 will-change-transform">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Local Businesses</h4>
                    <p className="text-gray-600 text-sm">
                      Build professional digital presence that drives local customers and competes with larger brands.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedText>

            {/* CTA */}
            <AnimatedText delay={1200}>
              <div className="text-center mt-16">
                <p className="text-lg text-gray-600 mb-8">
                  Ready to transform your user experience?
                </p>
                <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center mx-auto will-change-transform relative overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    Get Your Free UX Assessment
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300 will-change-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 will-change-transform"></div>
                </button>
              </div>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* =============================================== */}
      {/* 📊 RESULTS SECTION */}
      {/* =============================================== */}
      <section id="results" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedText>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Client Outcomes That Matter
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real results from real partnerships. See how we've helped companies 
                transform their digital experiences and drive business growth.
              </p>
            </div>
          </AnimatedText>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { stat: "150%", desc: "Conversion Improvements", color: "from-blue-600 to-blue-700" },
              { stat: "2x", desc: "Faster Development", color: "from-green-600 to-green-700" },
              { stat: "Vision", desc: "Product Acquisitions", color: "from-purple-600 to-purple-700" },
              { stat: "Enterprise", desc: "System Adoptions", color: "from-orange-600 to-orange-700" }
            ].map((result, index) => (
              <AnimatedText key={index} delay={index * 150}>
                <div className="group text-center p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200/50 will-change-transform">
                  <div className={`text-5xl font-bold mb-4 bg-gradient-to-r ${result.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 will-change-transform`}>
                    {result.stat}
                  </div>
                  <div className="text-gray-700 font-semibold text-lg">
                    {result.desc}
                  </div>
                </div>
              </AnimatedText>
            ))}
          </div>
        </div>
      </section>

      {/* =============================================== */}
      {/* 🚀 CTA SECTION */}
      {/* =============================================== */}
      <section id="contact" className="py-24 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedText>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to transform your digital experience?
            </h2>
            <p className="text-xl text-white/90 mb-12 leading-relaxed max-w-2xl mx-auto">
              Let&apos;s discuss how we can bring your vision to digital fruition. 
              From rapid ideation to polished product design, we&apos;re here to help.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="group bg-white text-gray-900 px-10 py-5 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center transform hover:scale-105 shadow-2xl will-change-transform">
                <span className="flex items-center">
                  Start Your Project
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300 will-change-transform" />
                </span>
              </button>
              <button className="border-2 border-white text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 will-change-transform">
                Schedule a Call
              </button>
            </div>
          </AnimatedText>
        </div>
      </section>

      {/* =============================================== */}
      {/* 🦶 FOOTER */}
      {/* =============================================== */}
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

      {/* =============================================== */}
      {/* 📍 SCROLL TO TOP BUTTON */}
      {/* =============================================== */}
      {scrollY > 400 && (
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 z-50 will-change-transform"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}