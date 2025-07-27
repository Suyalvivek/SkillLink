import { ArrowRight, Users, Search, Zap, Trophy } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      id: 1,
      icon: <Search className="w-8 h-8" />,
      title: "Create Your Project",
      description: "Define your project requirements, timeline, and budget. Our smart system analyzes your needs to find the perfect match.",
      features: ["Project scope definition", "Timeline planning", "Budget estimation"]
    },
    {
      id: 2,
      icon: <Users className="w-8 h-8" />,
      title: "Find Your Team",
      description: "Browse verified profiles or let our AI match you with skilled professionals based on expertise and availability.",
      features: ["AI-powered matching", "Skill verification", "Portfolio reviews"]
    },
    {
      id: 3,
      icon: <Zap className="w-8 h-8" />,
      title: "Collaborate & Execute",
      description: "Use our integrated tools for seamless project management, real-time communication, and efficient task tracking.",
      features: ["Kanban boards", "Real-time chat", "File sharing"]
    },
    {
      id: 4,
      icon: <Trophy className="w-8 h-8" />,
      title: "Get Results",
      description: "Deliver exceptional projects on time with our analytics, progress tracking, and quality assurance tools.",
      features: ["Progress analytics", "Quality control", "Success metrics"]
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            How SkillLink Works
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            From project creation to successful delivery, our streamlined process 
            makes it easy to build amazing projects with the right team.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-4 gap-8 mb-12">
              {steps.map((step, index) => (
                <div key={step.id} className="relative">
                  {/* Connection Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-12 left-full w-8 flex justify-center">
                      <ArrowRight className="w-6 h-6 text-blue-400" />
                    </div>
                  )}
                  
                  {/* Step Card */}
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-300">
                    {/* Step Number & Icon */}
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-4">
                        {step.icon}
                      </div>
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {step.id}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-2">
                      {step.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-slate-500">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile/Tablet Layout */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => (
              <div key={step.id} className="relative">
                {/* Connection Line for mobile */}
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-20 w-0.5 h-16 bg-blue-200"></div>
                )}
                
                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                  {/* Step Header */}
                  <div className="flex items-start mb-4">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-2">
                        {step.icon}
                      </div>
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm mx-2">
                        {step.id}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-slate-600 mb-4">
                        {step.description}
                      </p>
                      
                      {/* Features */}
                      <ul className="space-y-2">
                        {step.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-slate-500">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Start Your Next Project?
            </h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who trust SkillLink to deliver exceptional results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200">
                Start Your Project
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Projects Completed", value: "5,000+" },
            { label: "Success Rate", value: "95%" },
            { label: "Active Users", value: "10,000+" },
            { label: "Countries", value: "50+" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">
                {stat.value}
              </div>
              <div className="text-slate-600 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;