import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Play } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Product Manager",
      company: "TechFlow Inc",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "SkillLink transformed how we build products. The AI matching connected us with a full-stack developer who understood our vision perfectly. We shipped our MVP 3 weeks ahead of schedule.",
      project: "E-commerce Platform",
      results: "Delivered 3 weeks early",
      isVideo: false
    },
    {
      id: 2,
      name: "Marcus Rodriguez", 
      role: "Startup Founder",
      company: "GreenTech Solutions",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Finding reliable developers was our biggest challenge. SkillLink's vetting process gave us confidence, and the project management tools kept everything on track. Our app now has 50k+ users.",
      project: "Mobile App Development",
      results: "50k+ active users",
      isVideo: true
    },
    {
      id: 3,
      name: "Emily Watson",
      role: "Design Director", 
      company: "Creative Studio",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The collaboration tools are incredible. Real-time feedback, seamless file sharing, and progress tracking made working with remote talent feel effortless. Best investment we've made.",
      project: "Brand Identity System",
      results: "40% faster delivery",
      isVideo: false
    },
    {
      id: 4,
      name: "David Kim",
      role: "CTO",
      company: "DataFlow Analytics",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "SkillLink's analytics helped us understand our project velocity and team performance. We've improved our delivery time by 35% and our client satisfaction scores are at an all-time high.",
      project: "Analytics Dashboard",
      results: "35% faster delivery",
      isVideo: false
    },
    {
      id: 5,
      name: "Lisa Park",
      role: "Marketing Lead",
      company: "Growth Agency",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The quality of talent on SkillLink is outstanding. We found specialists we couldn't hire full-time, and the project-based model works perfectly for our agency's varying needs.",
      project: "Multi-brand Campaign",
      results: "300% ROI increase",
      isVideo: false
    },
    {
      id: 6,
      name: "Alex Thompson",
      role: "Engineering Manager",
      company: "FinTech Startup",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Security and compliance were crucial for our fintech project. SkillLink's verified professionals and secure workspace gave us peace of mind while building our payment platform.",
      project: "Payment Processing System",
      results: "PCI DSS Compliant",
      isVideo: false
    }
  ];

  const companyLogos = [
    { name: "TechFlow", logo: "https://via.placeholder.com/120x40/6366f1/white?text=TechFlow" },
    { name: "GreenTech", logo: "https://via.placeholder.com/120x40/10b981/white?text=GreenTech" },
    { name: "Creative Studio", logo: "https://via.placeholder.com/120x40/f59e0b/white?text=Creative" },
    { name: "DataFlow", logo: "https://via.placeholder.com/120x40/ef4444/white?text=DataFlow" },
    { name: "Growth Agency", logo: "https://via.placeholder.com/120x40/8b5cf6/white?text=Growth" },
    { name: "FinTech", logo: "https://via.placeholder.com/120x40/06b6d4/white?text=FinTech" }
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-slate-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Trusted by <span className="text-blue-600">10,000+</span> Professionals
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            See how teams worldwide are using SkillLink to deliver exceptional projects 
            and build lasting professional relationships.
          </p>
        </div>

        {/* Main Testimonial Carousel */}
        <div className="relative mb-16">
          <div className="bg-slate-50 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <Quote className="absolute top-6 left-6 w-8 h-8 text-blue-200" />
            
            {/* Testimonial Content */}
            <div className="relative z-10">
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                {/* User Info */}
                <div className="lg:col-span-1">
                  <div className="flex flex-col items-center lg:items-start">
                    <div className="relative mb-4">
                      <img
                        src={testimonials[currentSlide].image}
                        alt={testimonials[currentSlide].name}
                        className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                      />
                      {testimonials[currentSlide].isVideo && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                            <Play className="w-3 h-3 text-white ml-0.5" />
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className="text-center lg:text-left">
                      <h4 className="font-semibold text-slate-900 text-lg">
                        {testimonials[currentSlide].name}
                      </h4>
                      <p className="text-slate-600">
                        {testimonials[currentSlide].role}
                      </p>
                      <p className="text-sm text-slate-500">
                        {testimonials[currentSlide].company}
                      </p>
                      
                      {/* Rating */}
                      <div className="flex justify-center lg:justify-start mt-2">
                        {renderStars(testimonials[currentSlide].rating)}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial Text */}
                <div className="lg:col-span-2">
                  <blockquote className="text-lg md:text-xl text-slate-700 leading-relaxed mb-6">
                    "{testimonials[currentSlide].text}"
                  </blockquote>
                  
                  {/* Project Info */}
                  <div className="flex flex-col sm:flex-row gap-4 text-sm">
                    <div className="bg-white rounded-lg px-4 py-2 border border-slate-200">
                      <span className="text-slate-500">Project:</span>
                      <span className="ml-2 font-medium text-slate-900">
                        {testimonials[currentSlide].project}
                      </span>
                    </div>
                    <div className="bg-white rounded-lg px-4 py-2 border border-slate-200">
                      <span className="text-slate-500">Result:</span>
                      <span className="ml-2 font-medium text-green-600">
                        {testimonials[currentSlide].results}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-slate-50 transition-colors duration-200"
          >
            <ChevronLeft className="w-5 h-5 text-slate-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-slate-50 transition-colors duration-200"
          >
            <ChevronRight className="w-5 h-5 text-slate-600" />
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  index === currentSlide ? 'bg-blue-600' : 'bg-slate-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Company Logos */}
        <div className="text-center mb-12">
          <p className="text-sm text-slate-500 mb-6">Trusted by companies worldwide</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60">
            {companyLogos.map((company, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-8 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
          {[
            { label: "Average Rating", value: "4.9/5", icon: "⭐" },
            { label: "Projects Completed", value: "5,000+", icon: "🚀" },
            { label: "Client Retention", value: "96%", icon: "💝" },
            { label: "On-Time Delivery", value: "98%", icon: "⏰" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">
                {stat.value}
              </div>
              <div className="text-slate-600 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-slate-600 mb-8">
            Start your project today and experience the SkillLink difference.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 mr-4">
            Get Started Free
          </button>
          <button className="border border-slate-300 text-slate-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-colors duration-200">
            View More Stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;