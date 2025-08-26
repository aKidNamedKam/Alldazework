import React from 'react';
import { ArrowRight, CheckCircle, Zap, Users, Target, Play } from 'lucide-react';

export default function AssessmentCTA() {
  return (
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
  );
}