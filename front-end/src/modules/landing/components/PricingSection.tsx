import React, { useState } from 'react';
import { Check, X, Star, Zap, Crown, Users, ArrowRight, Shield, Headphones, Sparkles } from 'lucide-react';

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      subtitle: 'Perfect for solo creators',
      icon: <Star className="w-6 h-6" />,
      price: {
        monthly: 0,
        annual: 0
      },
      badge: 'Free Forever',
      badgeColor: 'bg-green-100 text-green-700',
      buttonText: 'Get Started Free',
      buttonStyle: 'bg-slate-600 hover:bg-slate-700 text-white',
      description: 'Everything you need to start your first project',
      features: [
        { name: '1 Active Project', included: true },
        { name: 'Up to 3 Team Members', included: true },
        { name: 'Basic Task Management', included: true },
        { name: 'File Sharing (1GB)', included: true },
        { name: 'Community Support', included: true },
        { name: 'Basic Analytics', included: true },
        { name: 'Advanced Team Matching', included: false },
        { name: 'Priority Support', included: false },
        { name: 'Custom Branding', included: false },
        { name: 'Advanced Analytics', included: false }
      ],
      popular: false
    },
    {
      id: 'professional',
      name: 'Professional',
      subtitle: 'For growing teams',
      icon: <Zap className="w-6 h-6" />,
      price: {
        monthly: 29,
        annual: 24
      },
      badge: 'Most Popular',
      badgeColor: 'bg-blue-100 text-blue-700',
      buttonText: 'Start Free Trial',
      buttonStyle: 'bg-blue-600 hover:bg-blue-700 text-white',
      description: 'Advanced tools for professional project delivery',
      features: [
        { name: 'Unlimited Projects', included: true },
        { name: 'Up to 15 Team Members', included: true },
        { name: 'Advanced Task Management', included: true },
        { name: 'File Sharing (50GB)', included: true },
        { name: 'Priority Support', included: true },
        { name: 'Advanced Analytics', included: true },
        { name: 'AI Team Matching', included: true },
        { name: 'Time Tracking', included: true },
        { name: 'Custom Workflows', included: true },
        { name: 'Integration Hub', included: true }
      ],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      subtitle: 'For large organizations',
      icon: <Crown className="w-6 h-6" />,
      price: {
        monthly: 'Custom',
        annual: 'Custom'
      },
      badge: 'Custom Solution',
      badgeColor: 'bg-purple-100 text-purple-700',
      buttonText: 'Contact Sales',
      buttonStyle: 'bg-purple-600 hover:bg-purple-700 text-white',
      description: 'Enterprise-grade features with dedicated support',
      features: [
        { name: 'Unlimited Everything', included: true },
        { name: 'Unlimited Team Members', included: true },
        { name: 'Advanced Security (SSO)', included: true },
        { name: 'Unlimited Storage', included: true },
        { name: 'Dedicated Account Manager', included: true },
        { name: 'Custom Integrations', included: true },
        { name: 'White-label Solution', included: true },
        { name: 'SLA Guarantees', included: true },
        { name: 'Advanced Compliance', included: true },
        { name: '24/7 Phone Support', included: true }
      ],
      popular: false
    }
  ];

  const addOns = [
    {
      name: 'Priority Matching',
      description: 'Get matched with top 1% talent within 24 hours',
      price: '$49/month',
      icon: <Sparkles className="w-5 h-5 text-yellow-500" />
    },
    {
      name: 'Dedicated Success Manager',
      description: 'Personal project advisor and account management',
      price: '$299/month',
      icon: <Headphones className="w-5 h-5 text-green-500" />
    },
    {
      name: 'Enhanced Security',
      description: 'Advanced encryption and compliance features',
      price: '$99/month',
      icon: <Shield className="w-5 h-5 text-blue-500" />
    }
  ];

  const faqs = [
    {
      question: 'Can I change plans anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and we\'ll prorate any billing adjustments.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express) and PayPal. Enterprise customers can also pay via bank transfer.'
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes! Professional and Enterprise plans come with a 14-day free trial. No credit card required to start.'
    },
    {
      question: 'What happens to my data if I cancel?',
      answer: 'Your data remains accessible for 90 days after cancellation. You can export all your project data at any time.'
    }
  ];

  const formatPrice = (price: number | string) => {
    if (typeof price === 'string') return price;
    return `$${price}`;
  };

  const getAnnualSavings = (monthly: number, annual: number) => {
    if (typeof monthly !== 'number' || typeof annual !== 'number') return 0;
    return Math.round(((monthly * 12 - annual * 12) / (monthly * 12)) * 100);
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your team. Start free, scale as you grow, 
            and only pay for what you need.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-4">
            <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-slate-900' : 'text-slate-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingCycle === 'annual' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${billingCycle === 'annual' ? 'text-slate-900' : 'text-slate-500'}`}>
              Annual
            </span>
            <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
              Save up to 20%
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-2xl shadow-sm border-2 transition-all duration-300 ${
                plan.popular 
                  ? 'border-blue-200 shadow-lg scale-105' 
                  : hoveredPlan === plan.id 
                    ? 'border-slate-300 shadow-md' 
                    : 'border-slate-200'
              }`}
              onMouseEnter={() => setHoveredPlan(plan.id)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white text-sm font-medium px-4 py-1.5 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-slate-100 rounded-lg mb-4 text-slate-600">
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <p className="text-slate-600 mb-4">{plan.subtitle}</p>
                  
                  {/* Badge */}
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${plan.badgeColor}`}>
                    {plan.badge}
                  </span>
                </div>

                {/* Pricing */}
                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-slate-900">
                      {formatPrice(plan.price[billingCycle])}
                    </span>
                    {typeof plan.price[billingCycle] === 'number' && plan.price[billingCycle] > 0 && (
                      <span className="text-slate-500 ml-2">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                    )}
                  </div>
                  
                  {billingCycle === 'annual' && typeof plan.price.monthly === 'number' && typeof plan.price.annual === 'number' && plan.price.monthly > 0 && (
                    <p className="text-sm text-green-600 font-medium">
                      Save {getAnnualSavings(plan.price.monthly, plan.price.annual)}% annually
                    </p>
                  )}
                  
                  <p className="text-sm text-slate-500 mt-2">{plan.description}</p>
                </div>

                {/* CTA Button */}
                <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors duration-200 mb-8 ${plan.buttonStyle}`}>
                  {plan.buttonText}
                </button>

                {/* Features */}
                <div className="space-y-4">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 mr-3 mt-0.5">
                        {feature.included ? (
                          <Check className="w-4 h-4 text-green-500" />
                        ) : (
                          <X className="w-4 h-4 text-slate-300" />
                        )}
                      </div>
                      <span className={`text-sm ${feature.included ? 'text-slate-700' : 'text-slate-400'}`}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Additional Info for Enterprise */}
                {plan.id === 'enterprise' && (
                  <div className="mt-6 pt-6 border-t border-slate-200">
                    <p className="text-sm text-slate-600 text-center">
                      Custom pricing based on your needs
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Add-ons Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Add-ons & Extensions</h3>
            <p className="text-slate-600">Enhance your experience with premium add-ons</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-slate-200 hover:border-slate-300 transition-colors duration-200">
                <div className="flex items-start mb-4">
                  <div className="mr-3">
                    {addon.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">{addon.name}</h4>
                    <p className="text-sm text-slate-600 mb-3">{addon.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-900">{addon.price}</span>
                      <button className="text-blue-600 text-sm font-medium hover:text-blue-700 flex items-center">
                        Add to plan <ArrowRight className="w-3 h-3 ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-slate-200">
                <h4 className="font-semibold text-slate-900 mb-3">{faq.question}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {[
              { icon: <Shield className="w-6 h-6 text-green-500" />, label: 'Bank-level Security' },
              { icon: <Users className="w-6 h-6 text-blue-500" />, label: '99.9% Uptime' },
              { icon: <Headphones className="w-6 h-6 text-purple-500" />, label: '24/7 Support' },
              { icon: <Star className="w-6 h-6 text-yellow-500" />, label: '30-day Guarantee' }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="mb-2">{item.icon}</div>
                <span className="text-sm font-medium text-slate-700">{item.label}</span>
              </div>
            ))}
          </div>

          <p className="text-sm text-slate-500">
            All plans include SSL encryption, daily backups, and GDPR compliance
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;