import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Play, CheckCircle, Users, BarChart3 } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 lg:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.3),transparent_70%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Trust Badge */}
            <div className="flex justify-center lg:justify-start">
              <Badge
                variant="secondary"
                className="bg-white/10 text-slate-300 border-white/20 backdrop-blur-sm px-4 py-2 text-sm"
              >
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                Trusted by 10,000+ students worldwide
              </Badge>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Build Better{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Projects
                </span>{" "}
                with Your Dream Team
              </h1>

              <p className="text-xl text-slate-300 max-w-2xl">
                SkillLink connects talented students and professionals for
                seamless project collaboration. Find your perfect team, manage
                tasks efficiently, and deliver exceptional results.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_10px_25px_rgba(37,99,235,0.3)]"
              >
                Start Your Project
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-white/20 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-slate-700 space-y-4">
              <p className="text-sm text-slate-400">
                Trusted by students from:
              </p>
              <div className="flex flex-wrap items-center gap-6 opacity-60">
                <span className="text-slate-400 font-semibold">MIT</span>
                <span className="text-slate-400 font-semibold">Stanford</span>
                <span className="text-slate-400 font-semibold">Harvard</span>
                <span className="text-slate-400 font-semibold">Berkeley</span>
                <span className="text-slate-400 font-semibold">
                  Carnegie Mellon
                </span>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-3xl"></div>

            {/* Main Dashboard Card */}
            <Card className="relative bg-white/10 backdrop-blur-sm border-white/20 p-4 sm:p-6 lg:p-8">
              <CardContent className="p-0 space-y-4 sm:space-y-6">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold text-base sm:text-lg">
                    Project Dashboard
                  </h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>

                {/* Progress Section */}
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:justify-between text-sm text-slate-300 gap-1">
                    <span className="font-medium">AI Chatbot Project</span>
                    <span className="text-xs sm:text-sm">75% Complete</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out w-3/4"></div>
                  </div>
                </div>

                {/* Team Members */}
                <div className="space-y-3">
                  <p className="text-slate-300 text-sm flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    Team Members
                  </p>
                  <div className="flex -space-x-2">
                    {["A", "B", "C", "+"].map((initial, index) => (
                      <div
                        key={index}
                        className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-slate-800 flex items-center justify-center text-xs font-semibold text-white transition-transform hover:scale-110 ${
                          index === 0
                            ? "bg-gradient-to-r from-pink-500 to-rose-500"
                            : index === 1
                            ? "bg-gradient-to-r from-blue-500 to-cyan-500"
                            : index === 2
                            ? "bg-gradient-to-r from-green-500 to-emerald-500"
                            : "bg-gradient-to-r from-purple-500 to-indigo-500"
                        }`}
                      >
                        {initial}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Task List */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-slate-300 text-sm line-through opacity-60">
                      Design UI Components
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 border-2 border-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    </div>
                    <span className="text-slate-300 text-sm">
                      Implement Backend API
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 border-2 border-slate-500 rounded-full flex-shrink-0"></div>
                    <span className="text-slate-300 text-sm opacity-60">
                      Testing & Deployment
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Floating Notification Card - Hidden on mobile for better UX */}
            <Card className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-sm border-white/20 p-3 sm:p-4 max-w-xs hidden sm:block">
              <CardContent className="p-0">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">
                      Task Completed!
                    </p>
                    <p className="text-slate-300 text-xs">
                      Database integration done
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Floating Stats Card - Hidden on mobile for better UX */}
            <Card className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-sm border-white/20 p-3 sm:p-4 hidden sm:block">
              <CardContent className="p-0">
                <div className="flex items-center space-x-2">
                  <BarChart3 className="w-4 h-4 text-blue-400" />
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-white">
                      94%
                    </div>
                    <div className="text-slate-300 text-xs">Success Rate</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Background Decoration */}
            <div className="absolute -z-10 top-10 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 bottom-10 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
