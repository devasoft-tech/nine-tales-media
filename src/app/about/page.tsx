'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  LightBulbIcon, 
  RocketLaunchIcon, 
  HeartIcon, 
  SparklesIcon,
  GlobeAltIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import { useEffect } from 'react';

export default function About() {

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  };

  const storySteps = [
    {
      title: "The Beginning",
      content: "Like the mythical fox spirit that gains wisdom through each tale, Nine Tales Media was born from a vision to bridge the gap between creative storytelling and technological innovation.",
      icon: SparklesIcon,
      year: "2019",
      emoji: "🦊",
      achievements: ["Company Founded", "First 5 Clients", "Creative Vision Set"]
    },
    {
      title: "The Journey",
      content: "Through each project, we've collected stories of transformation – brands that found their voice, businesses that discovered their digital soul, and creators who unlocked their potential.",
      icon: RocketLaunchIcon,
      year: "2020-2022",
      emoji: "🚀",
      achievements: ["100+ Projects", "Team Expansion", "Industry Recognition"]
    },
    {
      title: "The Present",
      content: "Today, we stand as digital alchemists, weaving together cutting-edge technology, compelling narratives, and strategic thinking to create experiences that resonate and results that matter.",
      icon: LightBulbIcon,
      year: "2023-Now",
      emoji: "✨",
      achievements: ["500+ Projects", "Global Reach", "Award-Winning Work"]
    }
  ];

  const values = [
    {
      title: "Creative Innovation",
      description: "We blend artistic vision with technological prowess to create unique digital experiences that push boundaries and set new standards.",
      icon: SparklesIcon,
      color: "#ff6b35",
      gradient: "from-orange-500 to-red-500",
      features: ["Boundary-Pushing Design", "Trend-Setting Solutions", "Unique Brand Identities"]
    },
    {
      title: "Client Partnership",
      description: "Your success is our story. We work alongside you as partners in your digital transformation, ensuring every step aligns with your vision.",
      icon: HeartIcon,
      color: "#ff3366",
      gradient: "from-red-500 to-purple-500",
      features: ["Dedicated Teams", "Transparent Communication", "Long-term Relationships"]
    },
    {
      title: "Strategic Thinking",
      description: "Every pixel, every word, every interaction is carefully crafted with purpose and intent, backed by data and strategic insight.",
      icon: LightBulbIcon,
      color: "#8b5cf6",
      gradient: "from-purple-500 to-orange-500",
      features: ["Data-Driven Decisions", "Strategic Planning", "Measurable Results"]
    },
    {
      title: "Global Impact",
      description: "We create digital narratives that transcend borders and connect with audiences worldwide, making a lasting impact on the global stage.",
      icon: GlobeAltIcon,
      color: "#0891b2",
      gradient: "from-orange-500 to-purple-500",
      features: ["International Reach", "Cultural Adaptation", "Worldwide Recognition"]
    }
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "Creative Director",
      description: "Visual storyteller with 8+ years crafting compelling brand narratives that resonate across cultures and platforms.",
      image: "👩‍🎨",
      skills: ["Brand Strategy", "Creative Direction", "Visual Design"],
      color: "#ff6b35"
    },
    {
      name: "Marcus Rodriguez",
      role: "Lead Developer",
      description: "Full-stack wizard who brings digital dreams to life with clean, scalable code and innovative technical solutions.",
      image: "👨‍💻",
      skills: ["React/Next.js", "Node.js", "Cloud Architecture"],
      color: "#ff3366"
    },
    {
      name: "Priya Sharma",
      role: "Strategy Lead",
      description: "Data-driven strategist who transforms insights into actionable growth plans that deliver measurable business results.",
      image: "👩‍💼",
      skills: ["Digital Strategy", "Analytics", "Growth Marketing"],
      color: "#8b5cf6"
    },
    {
      name: "David Kim",
      role: "UX/UI Designer",
      description: "Experience architect focused on creating intuitive, delightful user journeys that convert visitors into loyal customers.",
      image: "👨‍🎨",
      skills: ["User Research", "Interface Design", "Conversion Optimization"],
      color: "#0891b2"
    }
  ];


  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.textContent = `
      @keyframes morphShape {
        0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
        50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
      }

      @keyframes floatDiagonal {
        0%, 100% { transform: translate(0, 0) rotate(0deg); }
        50% { transform: translate(15px, -15px) rotate(2deg); }
      }

      .timeline-dot {
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .timeline-dot:hover {
        transform: scale(1.5);
      }

      .value-card {
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .team-card {
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .team-card:hover {
        transform: translateY(-8px) scale(1.02);
      }
    `;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <div style={{
      background: '#0a0a0f',
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '60px',
    }}>
      {/* Minimal background elements */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '15%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(255, 107, 53, 0.04) 0%, transparent 70%)',
        filter: 'blur(80px)',
        animation: 'float 30s ease-in-out infinite',
      }} />

      <div style={{
        position: 'absolute',
        bottom: '20%',
        left: '15%',
        width: '250px',
        height: '250px',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.04) 0%, transparent 70%)',
        filter: 'blur(80px)',
        animation: 'float 35s ease-in-out infinite reverse',
      }} />

      {/* Hero Section */}
      <section style={{
        padding: '40px 0 30px',
        position: 'relative',
        textAlign: 'center',
      }}>
        <div style={{
          maxWidth: '800px',
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
            <img
              src="/logo_white.png"
              alt="Nine Tales Media Logo"
              style={{
                width: '120px',
                height: 'auto',
                margin: '0 auto 24px',
                display: 'block',
                filter: 'drop-shadow(0 0 20px rgba(255, 107, 53, 0.6))',
                animation: 'float 6s ease-in-out infinite',
              }}
            />

            <h1 style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 700,
              color: 'white',
              marginBottom: '12px',
              fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)',
              lineHeight: 1.2,
            }}>
              About Nine Tales Media
            </h1>

            <p style={{
              fontSize: '1rem',
              color: '#9ca3af',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}>
              We craft digital experiences that tell your story and drive results. From strategy to execution, we're your partners in digital transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Simple Journey Text */}
      <section style={{
        padding: '30px 0',
        position: 'relative',
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '0 24px',
          position: 'relative',
          zIndex: 1,
        }}>
          <motion.div
            className="text-center mb-8"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 style={{
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 700,
              color: 'white',
              marginBottom: '12px',
              fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)',
            }}>
              Our Journey
            </h2>
          </motion.div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}>
              {storySteps.map((step, index) => (
                <motion.div
                  key={step.title}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '20px',
                }}
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                {/* Simple dot */}
                <div style={{
                  width: '8px',
                  height: '8px',
                  background: index === 0 ? '#ff6b35' : index === 1 ? '#ff3366' : '#8b5cf6',
                  borderRadius: '50%',
                  flexShrink: 0,
                  marginTop: '8px',
                }} />

                {/* Content */}
                <div style={{
                  flex: 1,
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '8px',
                  }}>
                    <h3 style={{
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: 'white',
                      fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)',
                    }}>
                      {step.title}
                    </h3>
                    <span style={{
                      color: index === 0 ? '#ff6b35' : index === 1 ? '#ff3366' : '#8b5cf6',
                      fontWeight: 600,
                      fontSize: '14px',
                    }}>
                      {step.year}
                    </span>
                  </div>

                  <p style={{
                    fontSize: '1rem',
                    color: '#d1d5db',
                    lineHeight: 1.6,
                    marginBottom: '12px',
                  }}>
                    {step.content}
                  </p>

                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                  }}>
                    {step.achievements.map((achievement, i) => (
                      <span
                        key={i}
                        style={{
                          fontSize: '13px',
                          color: index === 0 ? '#ff6b35' : index === 1 ? '#ff3366' : '#8b5cf6',
                          fontWeight: 500,
                        }}
                      >
                        {i > 0 && '•'} {achievement}
                      </span>
                    ))}
                  </div>
                </div>
                </motion.div>
              ))}
          </div>

          {/* Simple connecting line */}
          <div style={{
            width: '100%',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(255, 107, 53, 0.3), transparent)',
            margin: '32px 0',
          }} />
        </div>
      </section>

      {/* Simple Values List */}
      <section style={{
        padding: '40px 0',
        position: 'relative',
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: '0 24px',
          position: 'relative',
          zIndex: 1,
        }}>
          <motion.div
            className="text-center mb-8"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: 700,
              color: 'white',
              marginBottom: '12px',
              fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)',
            }}>
              Our Values
            </h2>
          </motion.div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}>
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  padding: '16px',
                  background: 'rgba(26, 26, 46, 0.2)',
                  borderRadius: '8px',
                }}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div style={{
                  width: '32px',
                  height: '32px',
                  background: value.color,
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <value.icon style={{ width: '18px', height: '18px', color: 'white' }} />
                </div>

                <div style={{
                  flex: 1,
                }}>
                  <h3 style={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: 'white',
                    marginBottom: '6px',
                    fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)',
                  }}>
                    {value.title}
                  </h3>

                  <p style={{
                    fontSize: '0.875rem',
                    color: '#9ca3af',
                    lineHeight: 1.5,
                  }}>
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Revolutionary Team Layout */}
      <section style={{
        padding: '80px 0',
        position: 'relative',
        background: 'linear-gradient(135deg, rgba(10, 10, 15, 0.7) 0%, rgba(22, 33, 62, 0.4) 100%)',
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 24px',
          position: 'relative',
          zIndex: 1,
        }}>
          {/* Creative Header */}
          <div style={{
            textAlign: 'center',
            marginBottom: '60px',
            position: 'relative',
          }}>
            {/* Background logo effect */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '300px',
              height: '300px',
              background: 'radial-gradient(circle, rgba(255, 107, 53, 0.08) 0%, transparent 70%)',
              filter: 'blur(50px)',
              animation: 'pulse 8s ease-in-out infinite',
            }} />

          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 28px',
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                borderRadius: '32px',
                border: '1px solid rgba(255, 107, 53, 0.3)',
                marginBottom: '24px',
              }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #ff6b35, #ff3366)',
                  animation: 'pulse 2s infinite',
                }} />
                <span style={{
                  color: '#ff6b35',
                  fontWeight: 600,
                  fontSize: '15px',
                  letterSpacing: '0.5px',
                }}>
                  The Creative Force
                </span>
              </div>

              <h2 style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 800,
                color: 'white',
                marginBottom: '20px',
                fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)',
                position: 'relative',
                zIndex: 2,
              }}>
                Meet Our{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #ff6b35 0%, #ff3366 33%, #8b5cf6 66%, #0891b2 100%)',
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: 'shimmer 5s ease-in-out infinite',
                }}>
                  Dream Team
                </span>
            </h2>

              <p style={{
                fontSize: '1.25rem',
                color: '#d1d5db',
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: 1.6,
                position: 'relative',
                zIndex: 2,
              }}>
                The visionaries, strategists, and creators who turn ideas into extraordinary digital experiences
            </p>
          </motion.div>
          </div>

          {/* Simple Team Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px',
          }}>
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                style={{
                  padding: '20px',
                  background: 'rgba(26, 26, 46, 0.2)',
                  borderRadius: '12px',
                  textAlign: 'center',
                }}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div style={{
                  width: '80px',
                  height: '80px',
                  margin: '0 auto 16px',
                  background: `linear-gradient(135deg, ${member.color}44, ${member.color}22)`,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '40px',
                  border: `2px solid ${member.color}33`,
                }}>
                  {member.image}
                </div>

                <h3 style={{
                  fontSize: '1.125rem',
                  fontWeight: 700,
                  color: 'white',
                  marginBottom: '4px',
                  fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)',
                }}>
                  {member.name}
                </h3>

                <p style={{
                  fontSize: '0.75rem',
                  color: member.color,
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginBottom: '12px',
                }}>
                  {member.role}
                </p>

                <p style={{
                  fontSize: '0.875rem',
                  color: '#9ca3af',
                  lineHeight: 1.5,
                }}>
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Team stats at bottom */}
          <div style={{
            margin: '40px auto 0',
            maxWidth: '800px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '20px',
          }}>
            <div style={{
              textAlign: 'center',
              padding: '16px',
              background: 'rgba(26, 26, 46, 0.2)',
              borderRadius: '12px',
            }}>
              <div style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                color: '#ff6b35',
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
                Years Combined Experience
              </div>
            </div>

            <div style={{
              textAlign: 'center',
              padding: '16px',
              background: 'rgba(26, 26, 46, 0.2)',
              borderRadius: '12px',
            }}>
              <div style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                color: '#ff3366',
                fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)',
                marginBottom: '4px',
              }}>
                100%
              </div>
              <div style={{
                fontSize: '0.75rem',
                color: '#9ca3af',
                fontWeight: 500,
              }}>
                Dedicated to Excellence
              </div>
            </div>

            <div style={{
              textAlign: 'center',
              padding: '16px',
              background: 'rgba(26, 26, 46, 0.2)',
              borderRadius: '12px',
            }}>
              <div style={{
                fontSize: '1.5rem',
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
                Client Support
              </div>
            </div>

            <div style={{
              textAlign: 'center',
              padding: '16px',
              background: 'rgba(26, 26, 46, 0.2)',
              borderRadius: '12px',
            }}>
              <div style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                color: '#0891b2',
                fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)',
                marginBottom: '4px',
              }}>
                50+
              </div>
              <div style={{
                fontSize: '0.75rem',
                color: '#9ca3af',
                fontWeight: 500,
              }}>
                Happy Clients
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Simple CTA */}
      <section style={{
        padding: '40px 0',
        position: 'relative',
        textAlign: 'center',
      }}>
        <div style={{
          maxWidth: '800px',
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
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: 700,
              color: 'white',
              marginBottom: '16px',
              fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)',
            }}>
              Ready to Work Together?
            </h2>

            <p style={{
              fontSize: '1.125rem',
              color: '#9ca3af',
              marginBottom: '24px',
            }}>
              Let's create something amazing for your business.
            </p>

            <div style={{
              display: 'flex',
              gap: '12px',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}>
              <Link
              href="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'linear-gradient(135deg, #ff6b35 0%, #ff3366 50%, #8b5cf6 100%)',
                  color: 'white',
                  padding: '12px 24px',
                  borderRadius: '24px',
                  fontWeight: 600,
                  fontSize: '15px',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Get In Touch
              </Link>

              <Link
                href="/portfolio"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: 'white',
                  padding: '12px 24px',
                  borderRadius: '24px',
                  fontWeight: 600,
                  fontSize: '15px',
                  textDecoration: 'none',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
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
                View Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}