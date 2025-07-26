import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Menu,
  X,
  ChevronDown,
  Users,
  Briefcase,
  Building,
  Home,
} from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a
                href="/"
                className="flex items-center space-x-3 hover:opacity-90 transition-opacity"
              >
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-lg">
                  <Home className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-slate-900 tracking-tight">
                  SkillLink
                </span>
              </a>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a
                href="#features"
                className="text-slate-600 hover:text-slate-900 font-medium transition-colors duration-200 hover:scale-105"
              >
                Features
              </a>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="text-slate-600 hover:text-slate-900 font-medium transition-all duration-200 hover:bg-slate-50"
                  >
                    Solutions
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 p-2">
                  <DropdownMenuItem className="flex items-center space-x-3 p-3 rounded-md hover:bg-blue-50 transition-colors cursor-pointer">
                    <Users className="h-4 w-4 text-blue-600" />
                    <span className="text-slate-700 font-medium">
                      For Teams
                    </span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center space-x-3 p-3 rounded-md hover:bg-green-50 transition-colors cursor-pointer">
                    <Briefcase className="h-4 w-4 text-green-600" />
                    <span className="text-slate-700 font-medium">
                      For Freelancers
                    </span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center space-x-3 p-3 rounded-md hover:bg-purple-50 transition-colors cursor-pointer">
                    <Building className="h-4 w-4 text-purple-600" />
                    <span className="text-slate-700 font-medium">
                      For Enterprises
                    </span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <a
                href="#pricing"
                className="text-slate-600 hover:text-slate-900 font-medium transition-colors duration-200 hover:scale-105"
              >
                Pricing
              </a>
              <a
                href="#about"
                className="text-slate-600 hover:text-slate-900 font-medium transition-colors duration-200 hover:scale-105"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-slate-600 hover:text-slate-900 font-medium transition-colors duration-200 hover:scale-105"
              >
                Contact
              </a>
            </div>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-slate-600 hover:text-slate-900 font-medium transition-all duration-200 hover:bg-slate-50"
            >
              Log in
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleMenuToggle}
              className="text-slate-600 hover:text-slate-900"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden animate-in slide-in-from-top-2 duration-200">
            <div className="px-4 pt-4 pb-6 space-y-3 border-t border-slate-200 bg-white shadow-lg">
              <a
                href="#features"
                className="block px-3 py-3 text-slate-700 hover:text-slate-900 hover:bg-slate-50 font-medium transition-all duration-200 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>

              <div className="px-3 py-2">
                <div className="text-slate-800 font-semibold mb-3 text-sm uppercase tracking-wide">
                  Solutions
                </div>
                <div className="pl-4 space-y-2">
                  <a
                    href="#teams"
                    className="flex items-center space-x-3 py-2 text-slate-600 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Users className="h-4 w-4" />
                    <span>For Teams</span>
                  </a>
                  <a
                    href="#freelancers"
                    className="flex items-center space-x-3 py-2 text-slate-600 hover:text-green-600 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Briefcase className="h-4 w-4" />
                    <span>For Freelancers</span>
                  </a>
                  <a
                    href="#enterprises"
                    className="flex items-center space-x-3 py-2 text-slate-600 hover:text-purple-600 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Building className="h-4 w-4" />
                    <span>For Enterprises</span>
                  </a>
                </div>
              </div>

              <a
                href="#pricing"
                className="block px-3 py-3 text-slate-700 hover:text-slate-900 hover:bg-slate-50 font-medium transition-all duration-200 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#about"
                className="block px-3 py-3 text-slate-700 hover:text-slate-900 hover:bg-slate-50 font-medium transition-all duration-200 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className="block px-3 py-3 text-slate-700 hover:text-slate-900 hover:bg-slate-50 font-medium transition-all duration-200 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>

              <div className="pt-4 border-t border-slate-200">
                <div className="flex flex-col space-y-3 px-3">
                  <Button
                    variant="ghost"
                    className="justify-start text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-medium transition-all duration-200"
                  >
                    Log in
                  </Button>
                  <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium shadow-lg transition-all duration-200 transform hover:scale-105">
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
