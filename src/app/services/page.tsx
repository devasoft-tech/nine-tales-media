'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  PencilSquareIcon,
  ChartBarIcon,
  MagnifyingGlassIcon,
  VideoCameraIcon,
  ShoppingCartIcon,
  CodeBracketIcon,
  ChatBubbleLeftRightIcon,
  CogIcon,
  ArrowRightIcon,
  CheckIcon,
  StarIcon,
  TrophyIcon,
  UsersIcon,
  RocketLaunchIcon,
  LightBulbIcon,
  PresentationChartLineIcon,
  SparklesIcon,
  GlobeAltIcon,
  CurrencyDollarIcon,
  ClockIcon,
  ShieldCheckIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';

export default function Services() {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      title: "Content Creation",
      subtitle: "Strategic Storytelling",
      description: "Craft compelling narratives that capture attention and drive engagement across all digital platforms.",
      icon: PencilSquareIcon,
      emoji: "✍️",
      color: "#ff6b35",
      gradient: "from-orange-500 to-red-500",
      features: ["Blog Writing", "Social Media Content", "Video Scripts", "Email Campaigns", "SEO-Optimized Copy"],
      stats: { projects: "200+", satisfaction: "98%", avgIncrease: "145%" },
      deliverables: ["5 Blog Posts", "10 Social Posts", "1 Video Script", "Monthly Reports"],
      highlights: ["Viral Content", "Brand Voice", "SEO Optimized"]
    },
    {
      title: "Meta & Google Ads",
      subtitle: "Performance Marketing",
      description: "Strategic advertising campaigns that deliver measurable ROI and connect you with high-intent customers.",
      icon: ChartBarIcon,
      emoji: "📊",
      color: "#ff3366",
      gradient: "from-red-500 to-purple-500",
      features: ["Campaign Strategy", "Audience Research", "Creative Development", "Performance Optimization", "Detailed Analytics"],
      stats: { projects: "150+", satisfaction: "97%", avgIncrease: "220%" },
      deliverables: ["Campaign Setup", "A/B Testing", "Weekly Reports", "Performance Optimization"],
      highlights: ["High ROI", "Targeted Reach", "Data-Driven"]
    },
    {
      title: "TVC Production",
      subtitle: "Video Excellence",
      description: "Professional television commercials and video content that tells your brand story beautifully.",
      icon: VideoCameraIcon,
      emoji: "🎬",
      color: "#8b5cf6",
      gradient: "from-purple-500 to-pink-500",
      features: ["Script Development", "Professional Filming", "Post-Production", "Motion Graphics", "Distribution Strategy"],
      stats: { projects: "80+", satisfaction: "99%", avgIncrease: "300%" },
      deliverables: ["30s TVC", "Behind-the-Scenes", "Social Media Cut", "Full Production Report"],
      highlights: ["Cinematic Quality", "Story-Driven", "Multi-Platform"]
    },
    {
      title: "E-commerce Marketing",
      subtitle: "Online Retail Growth",
      description: "Complete digital marketing solutions specifically designed for online retail success.",
      icon: ShoppingCartIcon,
      emoji: "🛒",
      color: "#0891b2",
      gradient: "from-cyan-500 to-blue-500",
      features: ["Product Photography", "Store Optimization", "Email Marketing", "Social Commerce", "Inventory Advertising"],
      stats: { projects: "90+", satisfaction: "98%", avgIncrease: "250%" },
      deliverables: ["Product Catalog", "Marketing Strategy", "Monthly Performance", "Growth Roadmap"],
      highlights: ["Conversion Focused", "ROI Driven", "Growth Oriented"]
    },
    {
      title: "Web Development",
      subtitle: "Digital Platforms",
      description: "Custom websites and applications built with modern technologies and exceptional user experiences.",
      icon: CodeBracketIcon,
      emoji: "💻",
      color: "#059669",
      gradient: "from-green-500 to-emerald-500",
      features: ["Responsive Design", "Backend Development", "API Integration", "Performance Optimization", "Maintenance & Support"],
      stats: { projects: "100+", satisfaction: "97%", avgIncrease: "200%" },
      deliverables: ["Responsive Website", "Admin Dashboard", "API Documentation", "Performance Report"],
      highlights: ["Modern Tech", "Fast Loading", "User-Friendly"]
    },
    {
      title: "AI Chatbot Integration",
      subtitle: "Intelligent Automation",
      description: "Intelligent conversational AI that enhances customer experience and automates support operations.",
      icon: ChatBubbleLeftRightIcon,
      emoji: "🤖",
      color: "#7c3aed",
      gradient: "from-violet-500 to-purple-500",
      features: ["Natural Language Processing", "Multi-Platform Integration", "Training & Optimization", "Analytics Dashboard", "24/7 Support"],
      stats: { projects: "60+", satisfaction: "95%", avgIncrease: "400%" },
      deliverables: ["Trained AI Bot", "Multi-Platform Setup", "Analytics Dashboard", "Training Documentation"],
      highlights: ["AI-Powered", "24/7 Available", "Smart Automation"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechCorp Inc.",
      content: "Nine Tales Media transformed our digital presence completely. Their content strategy increased our engagement by 300% in just 3 months.",
      rating: 5,
      avatar: "👩‍💼",
      metric: "300% Engagement Increase"
    },
    {
      name: "Michael Chen",
      role: "CEO",
      company: "Growth Solutions",
      content: "The ROI on our ad campaigns has been incredible. We've seen a 250% increase in qualified leads since working with them.",
      rating: 5,
      avatar: "👨‍💼",
      metric: "250% Lead Increase"
    },
    {
      name: "Emily Rodriguez",
      role: "E-commerce Manager",
      company: "Fashion Forward",
      content: "Their e-commerce marketing expertise helped us scale from $50K to $500K monthly revenue. Truly exceptional results.",
      rating: 5,
      avatar: "👩‍🦱",
      metric: "10x Revenue Growth"
    }
  ];

  const packages = [
    {
      name: "Essential",
      price: "$3,500",
      duration: "3 weeks",
      description: "Perfect for startups and small businesses",
      features: [
        "Content Strategy & Creation",
        "Basic SEO Optimization",
        "Social Media Setup",
        "Performance Analytics",
        "Monthly Reporting"
      ],
      popular: false,
      color: "#ff6b35",
      savings: "Save $500"
    },
    {
      name: "Growth",
      price: "$7,500",
      duration: "6 weeks",
      description: "Comprehensive solution for scaling businesses",
      features: [
        "Complete Digital Strategy",
        "Advanced SEO & Content",
        "Multi-Channel Marketing",
        "Custom Analytics Dashboard",
        "Weekly Strategy Calls",
        "Dedicated Account Manager"
      ],
      popular: true,
      color: "#ff3366",
      savings: "Most Popular"
    },
    {
      name: "Enterprise",
      price: "$15,000",
      duration: "12 weeks",
      description: "Full-scale digital transformation",
      features: [
        "Complete Business Audit",
        "Custom Software Solutions",
        "Multi-Channel Campaigns",
        "Advanced AI Integration",
        "Dedicated Success Team",
        "Custom Reporting Suite"
      ],
      popular: false,
      color: "#8b5cf6",
      savings: "Best Value"
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div style={{
      background: '#0a0a0f',
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '60px',
    }}>
      {/* Enhanced Dynamic Background */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '5%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(255, 107, 53, 0.12) 0%, rgba(255, 107, 53, 0.06) 40%, transparent 70%)',
        filter: 'blur(100px)',
        animation: 'morphShape 30s ease-in-out infinite',
        opacity: 0.8,
      }} />

      <div style={{
        position: 'absolute',
        top: '60%',
        right: '8%',
        width: '450px',
        height: '450px',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, rgba(139, 92, 246, 0.06) 40%, transparent 70%)',
        filter: 'blur(100px)',
        animation: 'morphShape 35s ease-in-out infinite reverse',
        opacity: 0.7,
      }} />

      <div style={{
        position: 'absolute',
        bottom: '15%',
        left: '15%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(8, 145, 178, 0.1) 0%, rgba(8, 145, 178, 0.05) 40%, transparent 70%)',
        filter: 'blur(90px)',
        animation: 'floatDiagonal 25s ease-in-out infinite',
        opacity: 0.6,
      }} />

      {/* Floating geometric elements */}
      <div style={{
        position: 'absolute',
        top: '25%',
        right: '20%',
        width: '80px',
        height: '80px',
        background: 'linear-gradient(45deg, rgba(255, 107, 53, 0.2), rgba(255, 51, 102, 0.2))',
        borderRadius: '20px',
        transform: 'rotate(45deg)',
        animation: 'float 20s ease-in-out infinite, spin 25s linear infinite',
        filter: 'blur(2px)',
      }} />

      <div style={{
        position: 'absolute',
        bottom: '30%',
        left: '10%',
        width: '60px',
        height: '60px',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.25), transparent)',
        borderRadius: '50%',
        animation: 'floatHorizontal 18s ease-in-out infinite, pulse 12s ease-in-out infinite',
      }} />

      <div style={{
        position: 'absolute',
        top: '70%',
        right: '5%',
        width: '70px',
        height: '70px',
        background: 'radial-gradient(circle, rgba(8, 145, 178, 0.2), transparent)',
        borderRadius: '15px',
        transform: 'rotate(30deg)',
        animation: 'floatDiagonal 22s ease-in-out infinite',
        filter: 'blur(1px)',
      }} />

      {/* Hero Section with Prominent Logo */}
      <section style={{
        padding: '40px 0 30px',
        position: 'relative',
        textAlign: 'center',
      }}>
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 24px',
          position: 'relative',
          zIndex: 2,
        }}>
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8 }}
          >
            {/* Prominent Logo Display */}
            <img
              src="/logo_white.png"
              alt="Nine Tales Media Logo"
              style={{
                width: '120px',
                height: 'auto',
                margin: '0 auto 24px',
                display: 'block',
                filter: 'drop-shadow(0 0 20px rgba(255, 107, 53, 0.6))',
              }}
            />

            <h1 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              color: 'white',
              marginBottom: '20px',
              fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)',
              lineHeight: 1.2,
            }}>
              Digital Solutions That{' '}
              <span style={{
                background: 'linear-gradient(135deg, #ff6b35 0%, #ff3366 25%, #8b5cf6 50%, #0891b2 75%, #ff6b35 100%)',
                backgroundSize: '300% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'shimmer 6s ease-in-out infinite',
              }}>
                Drive Results
              </span>
            </h1>

            <p style={{
              fontSize: '1rem',
              color: '#9ca3af',
              maxWidth: '600px',
              margin: '0 auto 32px',
              lineHeight: 1.6,
            }}>
              From strategic marketing campaigns to cutting-edge software development,
              we deliver comprehensive digital solutions that transform businesses and accelerate growth.
            </p>

            {/* Hero Stats */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '32px',
              flexWrap: 'wrap',
              marginBottom: '32px',
            }}>
              <div style={{
                textAlign: 'center',
                padding: '16px',
                background: 'rgba(26, 26, 46, 0.2)',
                borderRadius: '12px',
              }}>
                <div style={{
                  fontSize: '1.75rem',
                  fontWeight: 700,
                  color: '#ff6b35',
                  fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)',
                  marginBottom: '4px',
                }}>
                  500+
                </div>
                <div style={{
                  fontSize: '0.75rem',
                  color: '#9ca3af',
                  fontWeight: 500,
                }}>
                  Projects Completed
                </div>
              </div>

              <div style={{
                textAlign: 'center',
                padding: '16px',
                background: 'rgba(26, 26, 46, 0.2)',
                borderRadius: '12px',
              }}>
                <div style={{
                  fontSize: '1.75rem',
                  fontWeight: 700,
                  color: '#ff3366',
                  fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)',
                  marginBottom: '4px',
                }}>
                  98%
                </div>
                <div style={{
                  fontSize: '0.75rem',
                  color: '#9ca3af',
                  fontWeight: 500,
                }}>
                  Client Satisfaction
                </div>
              </div>

              <div style={{
                textAlign: 'center',
                padding: '16px',
                background: 'rgba(26, 26, 46, 0.2)',
                borderRadius: '12px',
              }}>
                <div style={{
                  fontSize: '1.75rem',
                  fontWeight: 700,
                  color: '#8b5cf6',
                  fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)',
                  marginBottom: '4px',
                }}>
                  24/7
                </div>
                <div style={{
                  fontSize: '0.75rem',
                  color: '#9ca3af',
                  fontWeight: 500,
                }}>
                  Support Available
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Premium Services Showcase */}
      <section style={{
        padding: '40px 0',
        position: 'relative',
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 24px',
          position: 'relative',
          zIndex: 1,
        }}>
          <motion.div
            className="text-center mb-12"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 20px',
              background: 'rgba(26, 26, 46, 0.3)',
              borderRadius: '20px',
              marginBottom: '16px',
            }}>
              <div style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#ff6b35',
                animation: 'pulse 2s infinite',
              }} />
              <span style={{
                color: '#ff6b35',
                fontWeight: 600,
                fontSize: '13px',
                letterSpacing: '0.5px',
              }}>
                🚀 Premium Services
              </span>
            </div>

            <h2 style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 700,
              color: 'white',
              marginBottom: '12px',
              fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)',
            }}>
              Comprehensive Digital Solutions
            </h2>
            <p style={{
              fontSize: '0.9375rem',
              color: '#9ca3af',
              maxWidth: '600px',
              margin: '0 auto',
            }}>
              From strategic marketing to cutting-edge development, we deliver exceptional results across all digital channels.
            </p>
          </motion.div>

          {/* Premium Services Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
          }}>
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                style={{
                  background: 'rgba(26, 26, 46, 0.6)',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  padding: '24px',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -12, scale: 1.03 }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${service.color}66`;
                  e.currentTarget.style.background = 'rgba(26, 26, 46, 0.8)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.background = 'rgba(26, 26, 46, 0.6)';
                }}
              >
                {/* Background gradient accent */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '150px',
                  height: '150px',
                  background: `radial-gradient(circle, ${service.color}15 0%, transparent 70%)`,
                  filter: 'blur(50px)',
                  animation: 'pulse 10s ease-in-out infinite',
                }} />

                {/* Service Header */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  marginBottom: '24px',
                }}>
                  <div style={{
                    width: '56px',
                    height: '56px',
                    background: `linear-gradient(135deg, ${service.color}55, ${service.color}33)`,
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '28px',
                    border: `3px solid ${service.color}44`,
                    animation: 'float 8s ease-in-out infinite',
                    boxShadow: `0 15px 40px ${service.color}33`,
                  }}>
                    {service.emoji}
                  </div>

                  <div>
                    <h3 style={{
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: 'white',
                      marginBottom: '4px',
                      fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)',
                    }}>
                      {service.title}
                    </h3>
                    <p style={{
                      color: service.color,
                      fontWeight: 600,
                      fontSize: '16px',
                    }}>
                      {service.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p style={{
                  fontSize: '1.125rem',
                  color: '#d1d5db',
                  lineHeight: 1.7,
                  marginBottom: '32px',
                }}>
                  {service.description}
                </p>

                {/* Key Features */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                  gap: '16px',
                  marginBottom: '32px',
                }}>
                  {service.features.slice(0, 3).map((feature, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '12px 16px',
                        background: `${service.color}15`,
                        border: `1px solid ${service.color}30`,
                        borderRadius: '16px',
                        fontSize: '14px',
                        fontWeight: 600,
                        color: service.color,
                      }}
                    >
                      <CheckIcon style={{
                        width: '16px',
                        height: '16px',
                        color: service.color,
                      }} />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Service Stats */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '16px',
                  marginBottom: '32px',
                }}>
                  <div style={{
                    textAlign: 'center',
                    padding: '16px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '12px',
                  }}>
                    <div style={{
                      fontSize: '1.5rem',
                      fontWeight: 800,
                      color: service.color,
                      fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)',
                      marginBottom: '4px',
                    }}>
                      {service.stats.projects}
                    </div>
                    <div style={{
                      fontSize: '12px',
                      color: '#9ca3af',
                      fontWeight: 600,
                    }}>
                      Projects
                    </div>
                  </div>

                  <div style={{
                    textAlign: 'center',
                    padding: '16px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '12px',
                  }}>
                    <div style={{
                      fontSize: '1.5rem',
                      fontWeight: 800,
                      color: service.color,
                      fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)',
                      marginBottom: '4px',
                    }}>
                      {service.stats.satisfaction}
                    </div>
                    <div style={{
                      fontSize: '12px',
                      color: '#9ca3af',
                      fontWeight: 600,
                    }}>
                      Satisfaction
                    </div>
                  </div>

                  <div style={{
                    textAlign: 'center',
                    padding: '16px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '12px',
                  }}>
                    <div style={{
                      fontSize: '1.5rem',
                      fontWeight: 800,
                      color: service.color,
                      fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)',
                      marginBottom: '4px',
                    }}>
                      +{service.stats.avgIncrease}
                    </div>
                    <div style={{
                      fontSize: '12px',
                      color: '#9ca3af',
                      fontWeight: 600,
                    }}>
                      Growth
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <button style={{
                  width: '100%',
                  padding: '18px 32px',
                  background: `linear-gradient(135deg, ${service.color}, ${service.color}88)`,
                  border: 'none',
                  borderRadius: '16px',
                  color: 'white',
                  fontWeight: 700,
                  fontSize: '16px',
                  cursor: 'pointer',
                  transition: 'all 0.4s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                  e.currentTarget.style.boxShadow = `0 12px 40px ${service.color}44`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                >
                  Explore {service.title}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section style={{
        padding: '40px 0',
        position: 'relative',
        background: 'linear-gradient(135deg, rgba(10, 10, 15, 0.8) 0%, rgba(22, 33, 62, 0.4) 100%)',
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 24px',
          position: 'relative',
          zIndex: 1,
        }}>
          <motion.div
            className="text-center mb-20"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 700,
              color: 'white',
              marginBottom: '20px',
              fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)',
            }}>
              Service Packages
            </h2>
            <p style={{
              fontSize: '1.25rem',
              color: '#9ca3af',
              maxWidth: '700px',
              margin: '0 auto',
            }}>
              Choose the perfect package for your business needs and budget.
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '40px',
          }}>
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                style={{
                  background: 'rgba(26, 26, 46, 0.7)',
                  borderRadius: '24px',
                  border: `3px solid ${pkg.popular ? pkg.color : 'rgba(255, 255, 255, 0.08)'}`,
                  padding: '40px',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -12, scale: 1.03 }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${pkg.color}77`;
                  e.currentTarget.style.background = 'rgba(26, 26, 46, 0.9)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = pkg.popular ? pkg.color : 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.background = 'rgba(26, 26, 46, 0.7)';
                }}
              >
                {/* Popular badge */}
                {pkg.popular && (
                  <div style={{
                    position: 'absolute',
                    top: '24px',
                    right: '24px',
                    padding: '8px 18px',
                    background: `linear-gradient(135deg, ${pkg.color}, ${pkg.color}88)`,
                    borderRadius: '24px',
                    color: 'white',
                    fontSize: '13px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    boxShadow: `0 8px 25px ${pkg.color}44`,
                  }}>
                    {pkg.savings}
                  </div>
                )}

                {/* Package name */}
                <h3 style={{
                  fontSize: '1.75rem',
                  fontWeight: 800,
                  color: 'white',
                  marginBottom: '12px',
                  fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)',
                }}>
                  {pkg.name}
                </h3>

                {/* Price */}
                <div style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '12px',
                  marginBottom: '12px',
                }}>
                  <span style={{
                    fontSize: '3rem',
                    fontWeight: 800,
                    color: pkg.color,
                    fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)',
                  }}>
                    {pkg.price}
                  </span>
                  <span style={{
                    color: '#9ca3af',
                    fontSize: '1.125rem',
                    fontWeight: 500,
                  }}>
                    / {pkg.duration}
                  </span>
                </div>

                {/* Description */}
                <p style={{
                  fontSize: '1.125rem',
                  color: '#d1d5db',
                  marginBottom: '32px',
                  lineHeight: 1.6,
                }}>
                  {pkg.description}
                </p>

                {/* Features */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  marginBottom: '40px',
                }}>
                  {pkg.features.map((feature, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                      }}
                    >
                      <CheckIcon style={{
                        width: '20px',
                        height: '20px',
                        color: pkg.color,
                        flexShrink: 0,
                      }} />
                      <span style={{
                        fontSize: '15px',
                        color: '#e5e7eb',
                        fontWeight: 500,
                      }}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button style={{
                  width: '100%',
                  padding: '20px 32px',
                  background: `linear-gradient(135deg, ${pkg.color}, ${pkg.color}88)`,
                  border: 'none',
                  borderRadius: '16px',
                  color: 'white',
                  fontWeight: 700,
                  fontSize: '17px',
                  cursor: 'pointer',
                  transition: 'all 0.4s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                  e.currentTarget.style.boxShadow = `0 15px 40px ${pkg.color}44`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                >
                  Get Started with {pkg.name}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section style={{
        padding: '40px 0',
        position: 'relative',
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 24px',
          position: 'relative',
          zIndex: 1,
        }}>
          <motion.div
            className="text-center mb-20"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 700,
              color: 'white',
              marginBottom: '20px',
              fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)',
            }}>
              Client Success Stories
            </h2>
            <p style={{
              fontSize: '1.25rem',
              color: '#9ca3af',
              maxWidth: '700px',
              margin: '0 auto',
            }}>
              Real results from real clients who trusted us with their digital transformation.
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '40px',
          }}>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                style={{
                  background: 'rgba(26, 26, 46, 0.6)',
                  borderRadius: '24px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  padding: '40px',
                  position: 'relative',
                  transition: 'all 0.4s ease',
                }}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 107, 53, 0.5)';
                  e.currentTarget.style.background = 'rgba(26, 26, 46, 0.8)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.background = 'rgba(26, 26, 46, 0.6)';
                }}
              >
                {/* Rating */}
                <div style={{
                  display: 'flex',
                  gap: '6px',
                  marginBottom: '20px',
                }}>
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <StarIcon key={i} style={{
                      width: '20px',
                      height: '20px',
                      color: '#ff6b35',
                    }} />
                  ))}
                </div>

                {/* Quote */}
                <p style={{
                  fontSize: '1.125rem',
                  color: '#d1d5db',
                  lineHeight: 1.7,
                  marginBottom: '28px',
                  fontStyle: 'italic',
                }}>
                  "{testimonial.content}"
                </p>

                {/* Metric highlight */}
                <div style={{
                  padding: '12px 20px',
                  background: 'rgba(255, 107, 53, 0.1)',
                  border: '1px solid rgba(255, 107, 53, 0.3)',
                  borderRadius: '16px',
                  marginBottom: '24px',
                  textAlign: 'center',
                }}>
                  <div style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#ff6b35',
                    fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)',
                  }}>
                    {testimonial.metric}
                  </div>
                </div>

                {/* Author */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    background: `linear-gradient(135deg, #ff6b35, #ff3366)`,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '30px',
                  }}>
                    {testimonial.avatar}
                  </div>

                  <div>
                    <div style={{
                      fontSize: '1.125rem',
                      fontWeight: 700,
                      color: 'white',
                      marginBottom: '4px',
                    }}>
                      {testimonial.name}
                    </div>
                    <div style={{
                      fontSize: '0.9375rem',
                      color: '#9ca3af',
                    }}>
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{
        padding: '40px 0',
        position: 'relative',
        textAlign: 'center',
      }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '0 24px',
          position: 'relative',
          zIndex: 1,
        }}>
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 900,
              color: 'white',
              marginBottom: '24px',
              fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)',
            }}>
              Ready to Transform Your Business?
            </h2>

            <p style={{
              fontSize: '1.25rem',
              color: '#9ca3af',
              marginBottom: '40px',
            }}>
              Let's discuss how our premium services can accelerate your digital growth and deliver exceptional results.
            </p>

            <div style={{
              display: 'flex',
              gap: '20px',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}>
              <button style={{
                padding: '20px 40px',
                background: 'linear-gradient(135deg, #ff6b35 0%, #ff3366 50%, #8b5cf6 100%)',
                border: 'none',
                borderRadius: '32px',
                color: 'white',
                fontWeight: 800,
                fontSize: '18px',
                cursor: 'pointer',
                transition: 'all 0.4s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
              }}
              >
                Get Free Consultation
              </button>

              <button style={{
                padding: '20px 40px',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '32px',
                color: 'white',
                fontWeight: 700,
                fontSize: '18px',
                cursor: 'pointer',
                transition: 'all 0.4s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
              }}
              >
                View Portfolio
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
