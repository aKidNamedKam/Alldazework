import React from 'react';
import { ArrowRight, Sparkles, TrendingUp, Zap, Target, Award, Play, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-left mt-24">
        <div>
            <img src="/images/eagle.svg" alt="Alldaze Work" className="w-[10%] pb-2" />
            <span className="text-lg">Human-Centered Design. Studio-Crafted Clarity.</span>
        </div>
          

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-1 mt-8 leading-tight">
            We transform ideas into{' '}
            <span className="bg-gradient-to-r from-orange-600 via-yellow-600 to-cyan-600 bg-clip-text text-transparent">
              winning experiences
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl leading-relaxed">
            A collaborative design duo blending research, systems, and taste. We bring double the creative power to your biggest challenges.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 mb-20">
            <a href="/assessment" className="group px-10 py-5 rounded-full text-md font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center">
              <span className="flex items-center">
                Get Free UX Assessment
                <ArrowRight className="ml-3 h-5 w-5" />
              </span>
            </a>

            {/*<button className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:bg-white/80 px-10 py-5 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg flex items-center justify-center group">
              <Play className="mr-3 h-5 w-5" />
              Let's Connect
            </button> */}
          </div>

          {/* Trust Indicators 
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
              <div className="text-4xl font-bold text-purple-600 mb-2">10+</div>
              <div className="text-gray-600 font-medium">Successful Projects</div>
            </div>
            <div className="group p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 hover:bg-white/80 hover:shadow-xl transition-all duration-300">
              <Award className="h-6 w-6 mx-auto mb-2 text-orange-600" />
              <div className="text-4xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-gray-600 font-medium">Client Satisfaction</div>
            </div>
          </div> */}

         {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-8 w-8 text-gray-500" />
          </div> */}
        </div>
      </div>
    </section>
  );
}