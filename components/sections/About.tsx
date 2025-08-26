import React from 'react';
import { ArrowRight, Users, Target, Zap, Award } from 'lucide-react';

export default function About() {
  return (
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
  );
}