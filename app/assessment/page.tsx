// app/assessment/page.tsx
'use client'

import React, { useState, useEffect, useRef, ReactNode, memo } from 'react';
import { 
  ArrowRight, ArrowLeft, CheckCircle, Zap, Users, Target, 
  Star, TrendingUp, Award, Play, Home
} from 'lucide-react';

// ===============================================
// 🚀 PERFORMANCE OPTIMIZED COMPONENTS
// ===============================================

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
      >
        {children}
      </div>
    </div>
  );
});

AnimatedText.displayName = 'AnimatedText';

// ===============================================
// 📊 ASSESSMENT TYPE CARD COMPONENT
// ===============================================

interface AssessmentCardProps {
  title: string;
  subtitle: string;
  icon: ReactNode;
  description: string;
  features: string[];
  gradient: string;
  delay: number;
  onSelect: () => void;
  isSelected: boolean;
}

const AssessmentCard = memo<AssessmentCardProps>(({ 
  title, subtitle, icon, description, features, gradient, delay, onSelect, isSelected 
}) => {
  return (
    <AnimatedText delay={delay}>
      <div 
        onClick={onSelect}
        className={`group cursor-pointer rounded-2xl border transition-all duration-300 hover:-translate-y-2 will-change-transform overflow-hidden ${
          isSelected 
            ? 'border-blue-500 bg-blue-50 shadow-2xl' 
            : 'border-gray-200 bg-white hover:shadow-xl'
        }`}
      >
        {/* Card Header */}
        <div className={`bg-gradient-to-r ${gradient} p-6 text-white`}>
          <div className="flex items-center mb-3">
            <div className="mr-3 group-hover:scale-110 transition-transform duration-300 will-change-transform">
              {icon}
            </div>
            <div>
              <h3 className="font-bold text-lg">{title}</h3>
              <p className="text-sm opacity-90">{subtitle}</p>
            </div>
          </div>
          <p className="text-sm opacity-95 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Card Content */}
        <div className="p-6">
          <h4 className="text-gray-900 font-semibold mb-3">What We Analyze:</h4>
          <ul className="space-y-2 mb-6">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start text-gray-700 text-sm">
                <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
          {isSelected && (
            <div className="text-blue-600 font-semibold text-sm flex items-center">
              <CheckCircle className="h-4 w-4 mr-2" />
              Selected - Continue to questions
            </div>
          )}
        </div>
      </div>
    </AnimatedText>
  );
});

AssessmentCard.displayName = 'AssessmentCard';

// ===============================================
// 🎯 MAIN ASSESSMENT PAGE COMPONENT
// ===============================================

export default function AssessmentPage() {
  const [currentStep, setCurrentStep] = useState(0); // 0: selection, 1: questions, 2: results
  const [selectedAssessment, setSelectedAssessment] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

  // Assessment configurations
  const assessments = {
    startup: {
      title: "Startup Founder Assessment",
      subtitle: "Product-Market Fit & Growth",
      icon: <Zap className="w-8 h-8" />,
      description: "Validate your product vision and identify UX barriers to growth",
      features: [
        "User validation & onboarding analysis",
        "Scalable UX foundation review", 
        "Growth & conversion optimization",
        "Investor credibility assessment"
      ],
      gradient: "from-yellow-400 to-orange-500",
      questions: [
        {
          text: "How do you currently validate product decisions with users?",
          options: [
            { value: 4, text: "Regular user interviews, usability testing, and data analysis drive our roadmap" },
            { value: 3, text: "We collect user feedback through surveys and support channels" },
            { value: 2, text: "We occasionally talk to users but mostly rely on our product intuition" },
            { value: 1, text: "We build based on our vision and what we think users need" }
          ]
        },
        {
          text: "How quickly do new users experience your product's core value?",
          options: [
            { value: 4, text: "Most users have their 'aha moment' within the first session" },
            { value: 3, text: "Users typically see value within their first few uses" },
            { value: 2, text: "It takes users several sessions to really 'get' our product" },
            { value: 1, text: "Users often don't understand our value proposition initially" }
          ]
        },
        {
          text: "What happens during your user onboarding process?",
          options: [
            { value: 4, text: "Smooth, tested flow with high completion rates and quick value delivery" },
            { value: 3, text: "Generally effective onboarding with some optimization opportunities" },
            { value: 2, text: "Basic onboarding that gets users started but could be much better" },
            { value: 1, text: "High abandonment during signup/onboarding - we know it's problematic" }
          ]
        }
      ]
    },
    product: {
      title: "Product Team Assessment", 
      subtitle: "UX Integration & Workflow",
      icon: <Users className="w-8 h-8" />,
      description: "Optimize how UX integrates into your development process",
      features: [
        "Design-dev collaboration analysis",
        "User research integration review",
        "Quality assurance & testing gaps",
        "Stakeholder alignment assessment"
      ],
      gradient: "from-green-400 to-blue-500",
      questions: [
        {
          text: "How does user research influence your product roadmap and sprint planning?",
          options: [
            { value: 4, text: "User research is core to our planning - we validate before we build" },
            { value: 3, text: "We incorporate user feedback into planning when available" },
            { value: 2, text: "User input is considered but business requirements usually take priority" },
            { value: 1, text: "Product decisions are mainly driven by business needs and technical constraints" }
          ]
        },
        {
          text: "How well do design specifications translate to the final implemented features?",
          options: [
            { value: 4, text: "Very well - we have strong design-dev collaboration and systems" },
            { value: 3, text: "Generally well with occasional miscommunication" },
            { value: 2, text: "Often requires multiple iterations to match design intent" },
            { value: 1, text: "Frequently differs significantly from original design specifications" }
          ]
        },
        {
          text: "How do you measure whether delivered features succeed with users?",
          options: [
            { value: 4, text: "Clear success metrics with post-launch tracking and iteration" },
            { value: 3, text: "Some success measurement but could be more systematic" },
            { value: 2, text: "Limited tracking of user adoption and satisfaction" },
            { value: 1, text: "Features are considered done when development is complete" }
          ]
        }
      ]
    },
    business: {
      title: "Local Business Assessment",
      subtitle: "Digital Presence & Conversion", 
      icon: <Target className="w-8 h-8" />,
      description: "Transform your website into a customer-generating machine",
      features: [
        "First impressions & trust analysis",
        "Mobile & local search optimization",
        "Conversion funnel evaluation", 
        "Technical performance review"
      ],
      gradient: "from-purple-400 to-pink-500",
      questions: [
        {
          text: "When potential customers visit your website, what's their first reaction?",
          options: [
            { value: 4, text: "This business looks professional and established" },
            { value: 3, text: "This seems like a legitimate local business" },
            { value: 2, text: "I'm not sure if this business is still operating" },
            { value: 1, text: "This looks outdated or unprofessional" }
          ]
        },
        {
          text: "How does your website work on smartphones?",
          options: [
            { value: 4, text: "Perfect - customers can easily browse, call, and contact us" },
            { value: 3, text: "Works well - mostly easy to use on phones" },
            { value: 2, text: "Functional but could be easier to use on mobile" },
            { value: 1, text: "Difficult to use on phones - customers complain" }
          ]
        },
        {
          text: "What happens after someone visits your website?",
          options: [
            { value: 4, text: "They typically call, visit, or request a quote" },
            { value: 3, text: "Some contact us, but could be more" },
            { value: 2, text: "A few contact us, but many just browse and leave" },
            { value: 1, text: "Very few visitors actually become customers" }
          ]
        }
      ]
    }
  };

  const getScore = () => {
    if (!selectedAssessment) return 0;
    const totalQuestions = assessments[selectedAssessment as keyof typeof assessments].questions.length;
    const totalScore = Object.values(answers).reduce((sum, score) => sum + score, 0);
    const maxScore = totalQuestions * 4;
    return Math.round((totalScore / maxScore) * 100);
  };

  const getScoreLevel = (score: number) => {
    if (score >= 85) return { level: "Excellent", color: "text-green-600", bg: "bg-green-50" };
    if (score >= 70) return { level: "Good", color: "text-blue-600", bg: "bg-blue-50" };
    if (score >= 50) return { level: "Fair", color: "text-yellow-600", bg: "bg-yellow-50" };
    return { level: "Needs Improvement", color: "text-red-600", bg: "bg-red-50" };
  };

  const handleAssessmentSelect = (assessmentKey: string) => {
    setSelectedAssessment(assessmentKey);
  };

  const handleStartAssessment = () => {
    if (selectedAssessment) {
      setCurrentStep(1);
    }
  };

  const handleAnswerSelect = (questionIndex: number, value: number) => {
    setAnswers(prev => ({ ...prev, [questionIndex]: value }));
  };

  const handleNextQuestion = () => {
    if (!selectedAssessment) return;
    
    const totalQuestions = assessments[selectedAssessment as keyof typeof assessments].questions.length;
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setCurrentStep(2);
      setShowResults(true);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    } else {
      setCurrentStep(0);
      setCurrentQuestion(0);
    }
  };

  const restartAssessment = () => {
    setCurrentStep(0);
    setCurrentQuestion(0);
    setAnswers({});
    setSelectedAssessment(null);
    setShowResults(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="/" className="flex items-center space-x-3">
              <Home className="h-6 w-6 text-blue-600" />
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                AllDazeWork
              </h1>
            </a>
            <div className="text-sm text-gray-600">
              UX Assessment
            </div>
          </div>
        </div>
      </nav>

      {/* Step 0: Assessment Selection */}
      {currentStep === 0 && (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <AnimatedText>
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Choose Your UX Assessment Path
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Select the assessment that best matches your role and challenges to get personalized insights.
                </p>
              </div>
            </AnimatedText>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {Object.entries(assessments).map(([key, assessment], index) => (
                <AssessmentCard
                  key={key}
                  title={assessment.title}
                  subtitle={assessment.subtitle}
                  icon={assessment.icon}
                  description={assessment.description}
                  features={assessment.features}
                  gradient={assessment.gradient}
                  delay={index * 200}
                  onSelect={() => handleAssessmentSelect(key)}
                  isSelected={selectedAssessment === key}
                />
              ))}
            </div>

            {selectedAssessment && (
              <AnimatedText delay={600}>
                <div className="text-center">
                  <button
                    onClick={handleStartAssessment}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center mx-auto"
                  >
                    Start Assessment
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </button>
                </div>
              </AnimatedText>
            )}
          </div>
        </section>
      )}

      {/* Step 1: Questions */}
      {currentStep === 1 && selectedAssessment && (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Question {currentQuestion + 1} of {assessments[selectedAssessment as keyof typeof assessments].questions.length}</span>
                <span>{Math.round(((currentQuestion + 1) / assessments[selectedAssessment as keyof typeof assessments].questions.length) * 100)}% Complete</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / assessments[selectedAssessment as keyof typeof assessments].questions.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Question */}
            <AnimatedText key={currentQuestion}>
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {assessments[selectedAssessment as keyof typeof assessments].questions[currentQuestion].text}
                </h2>
                
                <div className="space-y-4">
                  {assessments[selectedAssessment as keyof typeof assessments].questions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(currentQuestion, option.value)}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 ${
                        answers[currentQuestion] === option.value
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-start">
                        <div className={`w-6 h-6 rounded-full border-2 mr-3 mt-0.5 flex-shrink-0 ${
                          answers[currentQuestion] === option.value
                            ? 'border-blue-500 bg-blue-500'
                            : 'border-gray-300'
                        }`}>
                          {answers[currentQuestion] === option.value && (
                            <CheckCircle className="w-4 h-4 text-white m-0.5" />
                          )}
                        </div>
                        <span className="text-gray-700">{option.text}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </AnimatedText>

            {/* Navigation */}
            <div className="flex justify-between">
              <button
                onClick={handlePrevQuestion}
                className="flex items-center px-6 py-3 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition-all duration-300"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                {currentQuestion === 0 ? 'Back to Selection' : 'Previous'}
              </button>
              
              <button
                onClick={handleNextQuestion}
                disabled={answers[currentQuestion] === undefined}
                className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                  answers[currentQuestion] !== undefined
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {currentQuestion === assessments[selectedAssessment as keyof typeof assessments].questions.length - 1 ? 'Get Results' : 'Next'}
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Step 2: Results */}
      {currentStep === 2 && showResults && selectedAssessment && (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedText>
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Your UX Assessment Results
                </h1>
                <p className="text-xl text-gray-600">
                  Based on your {assessments[selectedAssessment as keyof typeof assessments].title.toLowerCase()}
                </p>
              </div>
            </AnimatedText>

            {/* Score Display */}
            <AnimatedText delay={200}>
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-32 h-32 rounded-full mb-6 ${getScoreLevel(getScore()).bg}`}>
                    <div className="text-center">
                      <div className={`text-4xl font-bold ${getScoreLevel(getScore()).color}`}>
                        {getScore()}
                      </div>
                      <div className="text-sm text-gray-600">out of 100</div>
                    </div>
                  </div>
                  
                  <h2 className={`text-2xl font-bold mb-4 ${getScoreLevel(getScore()).color}`}>
                    {getScoreLevel(getScore()).level}
                  </h2>
                  
                  <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
                    <div 
                      className={`h-3 rounded-full transition-all duration-1000 ${
                        getScore() >= 85 ? 'bg-green-500' :
                        getScore() >= 70 ? 'bg-blue-500' :
                        getScore() >= 50 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${getScore()}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </AnimatedText>

            {/* Recommendations */}
            <AnimatedText delay={400}>
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Recommended Next Steps
                </h3>
                
                <div className="space-y-4">
                  {getScore() >= 85 ? (
                    <>
                      <div className="flex items-start">
                        <Star className="h-6 w-6 mr-3 mt-0.5 text-yellow-500 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900">Optimization & Innovation</h4>
                          <p className="text-gray-600">Focus on advanced conversion optimization and competitive differentiation strategies.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <TrendingUp className="h-6 w-6 mr-3 mt-0.5 text-green-500 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900">Scale Your Success</h4>
                          <p className="text-gray-600">Your UX foundation is strong. Consider mentoring other teams or expanding to new markets.</p>
                        </div>
                      </div>
                    </>
                  ) : getScore() >= 70 ? (
                    <>
                      <div className="flex items-start">
                        <TrendingUp className="h-6 w-6 mr-3 mt-0.5 text-blue-500 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900">Systematic Improvements</h4>
                          <p className="text-gray-600">Good foundation with clear optimization opportunities. Focus on user research and conversion testing.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-6 w-6 mr-3 mt-0.5 text-green-500 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900">Strengthen Core Areas</h4>
                          <p className="text-gray-600">Build on your strengths while addressing specific gaps identified in the assessment.</p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-start">
                        <Award className="h-6 w-6 mr-3 mt-0.5 text-orange-500 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900">Foundation Building</h4>
                          <p className="text-gray-600">Significant opportunities for improvement. Start with user research and basic UX principles.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-6 w-6 mr-3 mt-0.5 text-blue-500 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900">Quick Wins Available</h4>
                          <p className="text-gray-600">Focus on high-impact, low-effort improvements first to build momentum.</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </AnimatedText>

            {/* CTA */}
            <AnimatedText delay={600}>
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to Implement These Insights?</h3>
                <p className="text-lg mb-6 opacity-90">
                  Get personalized guidance from our UX experts to turn these recommendations into real results.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300">
                    Schedule Strategy Call
                  </button>
                  <button 
                    onClick={restartAssessment}
                    className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
                  >
                    Take Another Assessment
                  </button>
                </div>
              </div>
            </AnimatedText>
          </div>
        </section>
      )}
    </div>
  );
}