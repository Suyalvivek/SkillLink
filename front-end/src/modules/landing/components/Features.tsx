import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Users,
  Kanban,
  MessageCircle,
  BarChart3,
  Shield,
  Globe,
  Zap,
  ArrowRight,
  CheckCircle,
  Clock,
  Star,
} from "lucide-react";

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: Users,
      title: "Smart Team Matching",
      description:
        "AI-powered algorithm matches you with the perfect team members based on skills, availability, and project requirements.",
      benefits: [
        "95% match accuracy",
        "Save 10+ hours on recruitment",
        "Skill-verified profiles",
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: Kanban,
      title: "Project Management",
      description:
        "Intuitive Kanban boards, task tracking, and timeline management keep your projects organized and on schedule.",
      benefits: [
        "Visual task management",
        "Real-time progress tracking",
        "Deadline notifications",
      ],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      icon: MessageCircle,
      title: "Real-time Collaboration",
      description:
        "Built-in chat, file sharing, video calls, and collaborative workspaces keep your team connected and productive.",
      benefits: [
        "Instant messaging",
        "File version control",
        "Video conferencing",
      ],
      color: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      icon: BarChart3,
      title: "Progress Analytics",
      description:
        "Comprehensive insights and reporting help you track performance, identify bottlenecks, and optimize workflows.",
      benefits: ["Performance metrics", "Time tracking", "Custom reports"],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
    },
    {
      icon: Shield,
      title: "Secure Workspace",
      description:
        "Enterprise-grade security with encrypted communications, secure file storage, and privacy controls.",
      benefits: [
        "End-to-end encryption",
        "GDPR compliant",
        "Role-based access",
      ],
      color: "from-gray-600 to-gray-800",
      bgColor: "bg-gray-50",
      iconColor: "text-gray-600",
    },
    {
      icon: Globe,
      title: "Global Talent Pool",
      description:
        "Connect with skilled professionals worldwide. Time zone management and multilingual support included.",
      benefits: [
        "200+ countries",
        "24/7 availability",
        "Multi-language support",
      ],
      color: "from-teal-500 to-blue-600",
      bgColor: "bg-teal-50",
      iconColor: "text-teal-600",
    },
  ];

  const stats = [
    { value: "10,000+", label: "Active Users", icon: Users },
    { value: "5,000+", label: "Projects Completed", icon: CheckCircle },
    { value: "95%", label: "Success Rate", icon: Star },
    { value: "24/7", label: "Support", icon: Clock },
  ];

  return (
    <section
      id="features"
      className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <Badge
            variant="secondary"
            className="mb-4 px-4 py-2 text-sm font-medium bg-blue-50 text-blue-700 border-blue-200"
          >
            <Zap className="w-4 h-4 mr-2" />
            Powerful Features
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Everything you need to
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {" "}
              succeed
            </span>
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From smart team matching to advanced analytics, SkillLink provides
            all the tools you need to build, manage, and deliver exceptional
            projects.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 lg:mb-20">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="text-center p-6 border border-slate-200 bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-0">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600 font-medium">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Features List */}
          <div className="space-y-4">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              const isActive = activeFeature === index;

              return (
                <Card
                  key={index}
                  className={`cursor-pointer transition-all duration-300 transform hover:scale-105 border ${
                    isActive
                      ? "border-blue-200 shadow-xl bg-white"
                      : "border-slate-200 hover:border-slate-300 bg-white/50 hover:shadow-lg"
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                          isActive
                            ? "bg-gradient-to-br " + feature.color
                            : feature.bgColor
                        } transition-all duration-300`}
                      >
                        <IconComponent
                          className={`w-6 h-6 ${
                            isActive ? "text-white" : feature.iconColor
                          } transition-colors duration-300`}
                        />
                      </div>

                      <div className="flex-1">
                        <h3
                          className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                            isActive ? "text-slate-900" : "text-slate-800"
                          }`}
                        >
                          {feature.title}
                        </h3>

                        <p className="text-slate-600 text-sm mb-3 leading-relaxed">
                          {feature.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {feature.benefits.map((benefit, benefitIndex) => (
                            <Badge
                              key={benefitIndex}
                              variant="secondary"
                              className="text-xs px-2 py-1 bg-slate-100 text-slate-700 border-0"
                            >
                              {benefit}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <ArrowRight
                        className={`w-5 h-5 transition-all duration-300 ${
                          isActive
                            ? "text-blue-600 translate-x-1"
                            : "text-slate-400"
                        }`}
                      />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Feature Preview */}
          <div className="lg:sticky lg:top-8">
            <Card className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 shadow-xl">
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <div
                    className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${features[activeFeature].color} flex items-center justify-center shadow-lg`}
                  >
                    {React.createElement(features[activeFeature].icon, {
                      className: "w-10 h-10 text-white",
                    })}
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                      {features[activeFeature].title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {features[activeFeature].description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {features[activeFeature].benefits.map((benefit, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-center space-x-3"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-slate-700 font-medium">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
                    Try {features[activeFeature].title}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 lg:mt-20 text-center">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-0 shadow-2xl">
            <CardContent className="p-8 lg:p-12">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Ready to supercharge your projects?
              </h3>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of students and professionals who are already
                building amazing projects with SkillLink.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-50 font-semibold px-8 py-4 transition-all duration-300 hover:scale-105"
                >
                  Start Free Trial
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-blue-600 hover:bg-white/10 font-semibold px-8 py-4 transition-all duration-300"
                >
                  Schedule Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Features;
