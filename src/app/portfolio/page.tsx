'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  EyeIcon,
  StarIcon,
  TrophyIcon,
  UsersIcon,
  ChartBarIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  TvIcon,
  ShoppingBagIcon,
  RocketLaunchIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects', count: 24 },
    { id: 'content', name: 'Content Creation', count: 8 },
    { id: 'ads', name: 'Advertising', count: 6 },
    { id: 'tvc', name: 'TVC Production', count: 4 },
    { id: 'ecommerce', name: 'E-commerce', count: 3 },
    { id: 'web', name: 'Web Development', count: 3 }
  ];

  const projects = [
    {
      id: 1,
      title: "TechCorp Brand Transformation",
      category: "content",
      description: "Complete digital rebrand including content strategy, social media presence, and marketing campaigns.",
      image: "🎨",
      client: "TechCorp Inc.",
      industry: "Technology",
      duration: "3 months",
      results: ["300% Engagement Increase", "150% Lead Growth", "Brand Recognition +85%"],
      featured: true,
      color: "#ff6b35"
    },
    {
      id: 2,
      title: "Growth Solutions PPC Campaign",
      category: "ads",
      description: "Strategic Google Ads and Meta campaigns that delivered exceptional ROI and lead generation.",
      image: "📊",
      client: "Growth Solutions",
      industry: "Marketing",
      duration: "2 months",
      results: ["400% ROI", "250% Lead Increase", "45% Cost Reduction"],
      featured: true,
      color: "#ff3366"
    },
    {
      id: 3,
      title: "Fashion Forward E-commerce",
      category: "ecommerce",
      description: "Complete e-commerce solution with marketing automation and conversion optimization.",
      image: "🛒",
      client: "Fashion Forward",
      industry: "Fashion",
      duration: "4 months",
      results: ["10x Revenue Growth", "85% Conversion Rate", "500K+ Monthly Sales"],
      featured: true,
      color: "#0891b2"
    },
    {
      id: 4,
      title: "InnovateX TV Commercial",
      category: "tvc",
      description: "Award-winning TV commercial that captured the essence of innovation and creativity.",
      image: "🎬",
      client: "InnovateX",
      industry: "Technology",
      duration: "2 months",
      results: ["Award Winner", "5M+ Views", "Brand Recognition +120%"],
      featured: false,
      color: "#8b5cf6"
    },
    {
      id: 5,
      title: "Modern Web Platform",
      category: "web",
      description: "Custom web application with advanced features and exceptional user experience.",
      image: "💻",
      client: "TechStart",
      industry: "SaaS",
      duration: "5 months",
      results: ["Zero Downtime", "99.9% Uptime", "User Satisfaction 97%"],
      featured: false,
      color: "#059669"
    },
    {
      id: 6,
      title: "AI Customer Service Bot",
      category: "web",
      description: "Intelligent chatbot that revolutionized customer support and reduced response times.",
      image: "🤖",
      client: "ServiceCorp",
      industry: "Customer Service",
      duration: "3 months",
      results: ["90% Query Automation", "24/7 Availability", "85% Satisfaction Rate"],
      featured: false,
      color: "#7c3aed"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechCorp Inc.",
      content: "Nine Tales Media transformed our digital presence completely. Their content strategy increased our engagement by 300% in just 3 months.",
      rating: 5,
      project: "TechCorp Brand Transformation",
      avatar: "👩‍💼"
    },
    {
      name: "Michael Chen",
      role: "CEO",
      company: "Growth Solutions",
      content: "The ROI on our ad campaigns has been incredible. We've seen a 250% increase in qualified leads since working with them.",
      rating: 5,
      project: "Growth Solutions PPC Campaign",
      avatar: "👨‍💼"
    },
    {
      name: "Emily Rodriguez",
      role: "E-commerce Manager",
      company: "Fashion Forward",
      content: "Their e-commerce marketing expertise helped us scale from $50K to $500K monthly revenue. Truly exceptional results.",
      rating: 5,
      project: "Fashion Forward E-commerce",
      avatar: "👩‍🦱"
    }
  ];

  return (
    <div style={{
      background: '#0a0a0f',
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '80px',
    }}>
      {/* Dynamic Background Elements */}
      <div style={{
        position: 'absolute',
        top: '15%',
        left: '8%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(255, 107, 53, 0.08) 0%, transparent 70%)',
        filter: 'blur(100px)',
        animation: 'morphShape 30s ease-in-out infinite',
      }} />

      <div style={{
        position: 'absolute',
        bottom: '20%',
        right: '12%',
        width: '450px',
        height: '450px',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)',
        filter: 'blur(100px)',
        animation: 'float 35s ease-in-out infinite reverse',
      }} />

      {/* Floating particles */}
      <div style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}>
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: i % 3 === 0 ? '4px' : '2px',
              height: i % 3 === 0 ? '4px' : '2px',
              borderRadius: '50%',
              background: i % 2 === 0 ? 'rgba(255, 107, 53, 0.3)' : 'rgba(255, 255, 255, 0.15)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2,
              animation: `float ${12 + Math.random() * 15}s ease-in-out ${Math.random() * 5}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Hero Section with Logo */}
      <section style={{
        padding: '80px 0 60px',
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
            variants={{
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 },
            }}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8 }}
          >
            {/* Logo */}
            <img
              src="/logo_white.png"
              alt="Nine Tales Media Logo"
              style={{
                width: '120px',
                height: 'auto',
                margin: '0 auto 32px',
                display: 'block',
                filter: 'drop-shadow(0 0 20px rgba(255, 107, 53, 0.6))',
                animation: 'float 6s ease-in-out infinite',
              }}
            />

            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 800,
              color: 'white',
              marginBottom: '24px',
              fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)',
              lineHeight: 1.2,
            }}>
              Our{' '}
              <span style={{
                background: 'linear-gradient(135deg, #ff6b35 0%, #ff3366 33%, #8b5cf6 66%, #0891b2 100%)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'shimmer 5s ease-in-out infinite',
              }}>
                Portfolio
              </span>
            </h1>

            <p style={{
              fontSize: '1.25rem',
              color: '#9ca3af',
              maxWidth: '700px',
              margin: '0 auto 48px',
              lineHeight: 1.6,
            }}>
              Explore our collection of successful projects that showcase our expertise in digital transformation and creative excellence.
            </p>

            {/* Portfolio Stats */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '60px',
              flexWrap: 'wrap',
              marginBottom: '48px',
            }}>
              <div style={{
                textAlign: 'center',
                padding: '16px',
                background: 'rgba(26, 26, 46, 0.2)',
                borderRadius: '12px',
              }}>
                <div style={{
                  fontSize: '2rem',
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
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: '#ff3366',
                  fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)',
                  marginBottom: '4px',
                }}>
                  15+
                </div>
                <div style={{
                  fontSize: '0.75rem',
                  color: '#9ca3af',
                  fontWeight: 500,
                }}>
                  Industries Served
                </div>
              </div>

              <div style={{
                textAlign: 'center',
                padding: '16px',
                background: 'rgba(26, 26, 46, 0.2)',
                borderRadius: '12px',
              }}>
                <div style={{
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: '#8b5cf6',
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
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Categories */}
      <section style={{
        padding: '60px 0',
        position: 'relative',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          position: 'relative',
          zIndex: 1,
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
            flexWrap: 'wrap',
            marginBottom: '48px',
          }}>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                style={{
                  padding: '12px 24px',
                  background: activeCategory === category.id
                    ? `linear-gradient(135deg, ${category.id === 'all' ? '#ff6b35' : '#ff3366'}, ${category.id === 'all' ? '#ff3366' : '#8b5cf6'})`
                    : 'rgba(255, 255, 255, 0.05)',
                  border: activeCategory === category.id
                    ? 'none'
                    : '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '24px',
                  color: activeCategory === category.id ? 'white' : '#9ca3af',
                  fontWeight: activeCategory === category.id ? 600 : 500,
                  fontSize: '14px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  if (activeCategory !== category.id) {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.color = '#d1d5db';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeCategory !== category.id) {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.color = '#9ca3af';
                  }
                }}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '40px',
          }}>
            {projects
              .filter(project => activeCategory === 'all' || project.category === activeCategory)
              .map((project, index) => (
                <motion.div
                  key={project.id}
                  style={{
                    background: 'rgba(26, 26, 46, 0.6)',
                    borderRadius: '24px',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    overflow: 'hidden',
                    position: 'relative',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                  variants={{
                    initial: { opacity: 0, y: 30 },
                    animate: { opacity: 1, y: 0 },
                  }}
                  initial="initial"
                  whileInView="animate"
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${project.color}44`;
                    e.currentTarget.style.background = 'rgba(26, 26, 46, 0.8)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.background = 'rgba(26, 26, 46, 0.6)';
                  }}
                >
                  {/* Featured badge */}
                  {project.featured && (
                    <div style={{
                      position: 'absolute',
                      top: '20px',
                      right: '20px',
                      padding: '8px 16px',
                      background: `linear-gradient(135deg, ${project.color}, ${project.color}88)`,
                      borderRadius: '20px',
                      color: 'white',
                      fontSize: '12px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      zIndex: 2,
                    }}>
                      Featured Project
                    </div>
                  )}

                  {/* Project Header */}
                  <div style={{
                    padding: '32px 32px 24px',
                    position: 'relative',
                  }}>
                    {/* Background gradient */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      width: '120px',
                      height: '120px',
                      background: `radial-gradient(circle, ${project.color}12 0%, transparent 70%)`,
                      filter: 'blur(40px)',
                      animation: 'pulse 8s ease-in-out infinite',
                    }} />

                    {/* Project icon */}
                    <div style={{
                      width: '80px',
                      height: '80px',
                      background: `linear-gradient(135deg, ${project.color}44, ${project.color}22)`,
                      borderRadius: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px',
                      fontSize: '40px',
                      border: `3px solid ${project.color}33`,
                      animation: 'float 6s ease-in-out infinite',
                    }}>
                      {project.image}
                    </div>

                    <h3 style={{
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      color: 'white',
                      marginBottom: '8px',
                      fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)',
                    }}>
                      {project.title}
                    </h3>

                    <p style={{
                      fontSize: '1rem',
                      color: '#d1d5db',
                      lineHeight: 1.6,
                      marginBottom: '16px',
                    }}>
                      {project.description}
                    </p>

                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      marginBottom: '20px',
                    }}>
                      <span style={{
                        color: project.color,
                        fontWeight: 600,
                        fontSize: '14px',
                      }}>
                        {project.client}
                      </span>
                      <span style={{
                        color: '#6b7280',
                        fontSize: '14px',
                      }}>
                        •
                      </span>
                      <span style={{
                        color: '#9ca3af',
                        fontSize: '14px',
                      }}>
                        {project.industry}
                      </span>
                    </div>
                  </div>

                  {/* Project Results */}
                  <div style={{
                    padding: '0 32px 24px',
                  }}>
                    <h4 style={{
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: 'white',
                      marginBottom: '12px',
                    }}>
                      Key Results
                    </h4>

                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                    }}>
                      {project.results.map((result, i) => (
                        <div
                          key={i}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                          }}
                        >
                          <TrophyIcon style={{
                            width: '16px',
                            height: '16px',
                            color: project.color,
                            flexShrink: 0,
                          }} />
                          <span style={{
                            fontSize: '14px',
                            color: '#e5e7eb',
                            fontWeight: 500,
                          }}>
                            {result}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Project Footer */}
                  <div style={{
                    padding: '24px 32px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                    <span style={{
                      fontSize: '13px',
                      color: '#9ca3af',
                      fontWeight: 500,
                    }}>
                      Duration: {project.duration}
                    </span>

                    <button style={{
                      padding: '8px 16px',
                      background: `linear-gradient(135deg, ${project.color}, ${project.color}88)`,
                      border: 'none',
                      borderRadius: '16px',
                      color: 'white',
                      fontSize: '12px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-1px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                    >
                      View Case Study
                    </button>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section style={{
        padding: '80px 0',
        position: 'relative',
        background: 'linear-gradient(135deg, rgba(10, 10, 15, 0.8) 0%, rgba(22, 33, 62, 0.4) 100%)',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          position: 'relative',
          zIndex: 1,
        }}>
          <motion.div
            className="text-center mb-16"
            variants={{
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 },
            }}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              color: 'white',
              marginBottom: '16px',
              fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)',
            }}>
              Client Success Stories
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: '#9ca3af',
              maxWidth: '600px',
              margin: '0 auto',
            }}>
              Real results from real clients who trusted us with their digital transformation.
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '32px',
          }}>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                style={{
                  background: 'rgba(26, 26, 46, 0.5)',
                  borderRadius: '20px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  padding: '32px',
                  position: 'relative',
                  transition: 'all 0.3s ease',
                }}
                variants={{
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0 },
                }}
                initial="initial"
                whileInView="animate"
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, scale: 1.02 }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 107, 53, 0.4)';
                  e.currentTarget.style.background = 'rgba(26, 26, 46, 0.7)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.background = 'rgba(26, 26, 46, 0.5)';
                }}
              >
                {/* Rating */}
                <div style={{
                  display: 'flex',
                  gap: '4px',
                  marginBottom: '16px',
                }}>
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <StarIcon key={i} style={{
                      width: '16px',
                      height: '16px',
                      color: '#ff6b35',
                    }} />
                  ))}
                </div>

                {/* Quote */}
                <p style={{
                  fontSize: '1rem',
                  color: '#d1d5db',
                  lineHeight: 1.6,
                  marginBottom: '20px',
                  fontStyle: 'italic',
                }}>
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Project highlight */}
                <div style={{
                  padding: '12px 16px',
                  background: 'rgba(255, 107, 53, 0.1)',
                  border: '1px solid rgba(255, 107, 53, 0.3)',
                  borderRadius: '12px',
                  marginBottom: '20px',
                  textAlign: 'center',
                }}>
                  <div style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    color: '#ff6b35',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                  }}>
                    Featured Project
                  </div>
                  <div style={{
                    fontSize: '14px',
                    fontWeight: 700,
                    color: 'white',
                  }}>
                    {testimonial.project}
                  </div>
                </div>

                {/* Author */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    background: `linear-gradient(135deg, #ff6b35, #ff3366)`,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                  }}>
                    {testimonial.avatar}
                  </div>

                  <div>
                    <div style={{
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: 'white',
                      marginBottom: '2px',
                    }}>
                      {testimonial.name}
                    </div>
                    <div style={{
                      fontSize: '0.875rem',
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

      {/* CTA Section */}
      <section style={{
        padding: '80px 0',
        position: 'relative',
        textAlign: 'center',
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: '0 24px',
          position: 'relative',
          zIndex: 1,
        }}>
          <motion.div
            variants={{
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 },
            }}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              color: 'white',
              marginBottom: '20px',
              fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)',
            }}>
              Ready to Create Your Success Story?
            </h2>

            <p style={{
              fontSize: '1.125rem',
              color: '#9ca3af',
              marginBottom: '32px',
            }}>
              Let&apos;s discuss how we can help transform your business and achieve exceptional results.
            </p>

            <div style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}>
              <button style={{
                padding: '16px 32px',
                background: 'linear-gradient(135deg, #ff6b35 0%, #ff3366 50%, #8b5cf6 100%)',
                border: 'none',
                borderRadius: '28px',
                color: 'white',
                fontWeight: 700,
                fontSize: '16px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
              }}
              >
                Start Your Project
              </button>

              <button style={{
                padding: '16px 32px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '28px',
                color: 'white',
                fontWeight: 600,
                fontSize: '16px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
              }}
              >
                View All Services
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}