'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  CheckCircleIcon,
  PaperAirplaneIcon,
  SparklesIcon,
  GlobeAltIcon,
  ChatBubbleLeftRightIcon,
  CalendarDaysIcon
} from '@heroicons/react/24/outline';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: '',
    service: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formattedMessage, setFormattedMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Format the message
    const serviceLabels: { [key: string]: string } = {
      content: 'Content Creation',
      ads: 'Meta & Google Ads',
      tvc: 'TVC Production',
      ecommerce: 'E-commerce Marketing',
      web: 'Web Development',
      ai: 'AI Chatbot Integration',
      other: 'Other'
    };

    const formattedSubject = `New Contact Form Submission from ${formData.name}`;
    
    let formattedBody = `New Contact Form Submission\n\n`;
    formattedBody += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;
    formattedBody += `CONTACT INFORMATION:\n`;
    formattedBody += `Name: ${formData.name}\n`;
    formattedBody += `Email: ${formData.email}\n`;
    if (formData.company) {
      formattedBody += `Company: ${formData.company}\n`;
    }
    if (formData.service) {
      formattedBody += `Service Interest: ${serviceLabels[formData.service] || formData.service}\n`;
    }
    if (formData.budget) {
      formattedBody += `Budget: ${formData.budget}\n`;
    }
    formattedBody += `\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;
    formattedBody += `MESSAGE:\n`;
    formattedBody += `${formData.message}\n\n`;
    formattedBody += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    formattedBody += `Submitted: ${new Date().toLocaleString()}\n`;

    setFormattedMessage(formattedBody);

    // Create mailto link
    const emailTo = 'info@ninetalesmedia.co.in';
    const mailtoLink = `mailto:${emailTo}?subject=${encodeURIComponent(formattedSubject)}&body=${encodeURIComponent(formattedBody)}`;

    // Open email client
    try {
      window.location.href = mailtoLink;
      
      // Simulate delay for better UX
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setSubmitStatus('success');
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          company: '',
          budget: '',
          message: '',
          service: ''
        });
        setSubmitStatus('idle');
      }, 3000);
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
        top: '10%',
        left: '5%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(255, 107, 53, 0.08) 0%, transparent 70%)',
        filter: 'blur(100px)',
        animation: 'morphShape 30s ease-in-out infinite',
      }} />

      <div style={{
        position: 'absolute',
        bottom: '15%',
        right: '8%',
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

      {/* Hero Section */}
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
              Let&apos;s Start Your{' '}
              <span style={{
                background: 'linear-gradient(135deg, #ff6b35 0%, #ff3366 33%, #8b5cf6 66%, #0891b2 100%)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'shimmer 5s ease-in-out infinite',
              }}>
                Digital Journey
              </span>
            </h1>

            <p style={{
              fontSize: '1.25rem',
              color: '#9ca3af',
              maxWidth: '700px',
              margin: '0 auto 48px',
              lineHeight: 1.6,
            }}>
              Ready to transform your business? Let&apos;s discuss how our premium digital solutions can accelerate your growth and deliver exceptional results.
            </p>

            {/* Quick Contact Stats */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '40px',
              flexWrap: 'wrap',
              marginBottom: '48px',
            }}>
              <div style={{
                textAlign: 'center',
                padding: '20px',
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '16px',
                border: '1px solid rgba(255, 107, 53, 0.2)',
              }}>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: 800,
                  color: '#ff6b35',
                  fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)',
                }}>
                  24hr
                </div>
                <div style={{
                  fontSize: '0.875rem',
                  color: '#9ca3af',
                  fontWeight: 600,
                }}>
                  Response Time
                </div>
              </div>

              <div style={{
                textAlign: 'center',
                padding: '20px',
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '16px',
                border: '1px solid rgba(255, 51, 102, 0.2)',
              }}>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: 800,
                  color: '#ff3366',
                  fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)',
                }}>
                  Free
                </div>
                <div style={{
                  fontSize: '0.875rem',
                  color: '#9ca3af',
                  fontWeight: 600,
                }}>
                  Initial Consultation
                </div>
              </div>

              <div style={{
                textAlign: 'center',
                padding: '20px',
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '16px',
                border: '1px solid rgba(139, 92, 246, 0.2)',
              }}>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: 800,
                  color: '#8b5cf6',
                  fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)',
                }}>
                  98%
                </div>
                <div style={{
                  fontSize: '0.875rem',
                  color: '#9ca3af',
                  fontWeight: 600,
                }}>
                  Client Satisfaction
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section style={{
        padding: '80px 0',
        position: 'relative',
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 24px',
          position: 'relative',
          zIndex: 1,
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '60px',
            alignItems: 'start',
          }}>
            {/* Contact Information */}
            <motion.div
              style={{
                padding: '40px',
                background: 'rgba(26, 26, 46, 0.5)',
                borderRadius: '24px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
              variants={{
                initial: { opacity: 0, x: -30 },
                animate: { opacity: 1, x: 0 },
              }}
              initial="initial"
              whileInView="animate"
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 24px',
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                borderRadius: '28px',
                border: '1px solid rgba(255, 107, 53, 0.3)',
                marginBottom: '32px',
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
                }}>
                  Get In Touch
                </span>
              </div>

              <h2 style={{
                fontSize: '2rem',
                fontWeight: 800,
                color: 'white',
                marginBottom: '24px',
                fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)',
              }}>
                Let&apos;s Start a Conversation
              </h2>

              <p style={{
                fontSize: '1.125rem',
                color: '#9ca3af',
                marginBottom: '40px',
                lineHeight: 1.6,
              }}>
                Ready to transform your business? We&apos;re here to help you achieve extraordinary results.
              </p>

              {/* Contact Methods */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '16px',
                  background: 'rgba(26, 26, 46, 0.2)',
                  borderRadius: '12px',
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: '#ff6b35',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <EnvelopeIcon style={{ width: '20px', height: '20px', color: 'white' }} />
                  </div>
                  <div>
                    <div style={{
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: 'white',
                      marginBottom: '2px',
                    }}>
                    Email Us
                    </div>
                    <div style={{
                      color: '#9ca3af',
                      fontSize: '0.9375rem',
                    }}>
                      info@ninetalesmedia.co.in
                    </div>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '16px',
                  background: 'rgba(26, 26, 46, 0.2)',
                  borderRadius: '12px',
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: '#ff3366',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <PhoneIcon style={{ width: '20px', height: '20px', color: 'white' }} />
                  </div>
                  <div>
                    <div style={{
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: 'white',
                      marginBottom: '2px',
                    }}>
                    Call Us
                    </div>
                    <div style={{
                      color: '#9ca3af',
                      fontSize: '0.9375rem',
                    }}>
                      +918743077753
                    </div>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '16px',
                  background: 'rgba(26, 26, 46, 0.2)',
                  borderRadius: '12px',
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: '#8b5cf6',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <MapPinIcon style={{ width: '20px', height: '20px', color: 'white' }} />
                  </div>
                  <div>
                    <div style={{
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: 'white',
                      marginBottom: '2px',
                    }}>
                    Visit Us
                    </div>
                    <div style={{
                      color: '#9ca3af',
                      fontSize: '0.9375rem',
                    }}>
                      Delhi, IN
                    </div>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '20px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: '16px',
                  border: '1px solid rgba(8, 145, 178, 0.2)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#0891b2';
                  e.currentTarget.style.background = 'rgba(8, 145, 178, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(8, 145, 178, 0.2)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                }}
                >
                  <div style={{
                    width: '48px',
                    height: '48px',
                    background: 'linear-gradient(135deg, #0891b2, #059669)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <ClockIcon style={{ width: '24px', height: '24px', color: 'white' }} />
                  </div>
                  <div>
                    <div style={{
                      fontSize: '1.125rem',
                      fontWeight: 700,
                      color: 'white',
                      marginBottom: '2px',
                    }}>
                      Response Time
                    </div>
                    <div style={{
                      color: '#9ca3af',
                      fontSize: '0.9375rem',
                    }}>
                      We typically respond within 24 hours
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              style={{
                padding: '40px',
                background: 'rgba(26, 26, 46, 0.6)',
                borderRadius: '24px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
              variants={{
                initial: { opacity: 0, x: 30 },
                animate: { opacity: 1, x: 0 },
              }}
              initial="initial"
              whileInView="animate"
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 style={{
                fontSize: '2rem',
                fontWeight: 800,
                color: 'white',
                marginBottom: '32px',
                fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)',
              }}>
                Send Us a Message
              </h2>
              
              <form onSubmit={handleSubmit} style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
              }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '20px',
                }}>
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '0.9375rem',
                      fontWeight: 600,
                      color: '#9ca3af',
                      marginBottom: '8px',
                    }}>
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        background: 'rgba(42, 42, 56, 0.8)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '12px',
                        color: 'white',
                        fontSize: '1rem',
                        transition: 'all 0.3s ease',
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#ff6b35';
                        e.currentTarget.style.background = 'rgba(42, 42, 56, 1)';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                        e.currentTarget.style.background = 'rgba(42, 42, 56, 0.8)';
                      }}
                      required
                    />
                  </div>
                  
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '0.9375rem',
                      fontWeight: 600,
                      color: '#9ca3af',
                      marginBottom: '8px',
                    }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        background: 'rgba(42, 42, 56, 0.8)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '12px',
                        color: 'white',
                        fontSize: '1rem',
                        transition: 'all 0.3s ease',
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#ff6b35';
                        e.currentTarget.style.background = 'rgba(42, 42, 56, 1)';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                        e.currentTarget.style.background = 'rgba(42, 42, 56, 0.8)';
                      }}
                      required
                    />
                  </div>
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '20px',
                }}>
                <div>
                    <label style={{
                      display: 'block',
                      fontSize: '0.9375rem',
                      fontWeight: 600,
                      color: '#9ca3af',
                      marginBottom: '8px',
                    }}>
                      Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        background: 'rgba(42, 42, 56, 0.8)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '12px',
                        color: 'white',
                        fontSize: '1rem',
                        transition: 'all 0.3s ease',
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#ff6b35';
                        e.currentTarget.style.background = 'rgba(42, 42, 56, 1)';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                        e.currentTarget.style.background = 'rgba(42, 42, 56, 0.8)';
                      }}
                  />
                </div>

                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '0.9375rem',
                      fontWeight: 600,
                      color: '#9ca3af',
                      marginBottom: '8px',
                    }}>
                      Service Interest
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        background: 'rgba(42, 42, 56, 0.8)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '12px',
                        color: 'white',
                        fontSize: '1rem',
                        transition: 'all 0.3s ease',
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#ff6b35';
                        e.currentTarget.style.background = 'rgba(42, 42, 56, 1)';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                        e.currentTarget.style.background = 'rgba(42, 42, 56, 0.8)';
                      }}
                    >
                      <option value="">Select a service</option>
                      <option value="content">Content Creation</option>
                      <option value="ads">Meta & Google Ads</option>
                      <option value="tvc">TVC Production</option>
                      <option value="ecommerce">E-commerce Marketing</option>
                      <option value="web">Web Development</option>
                      <option value="ai">AI Chatbot Integration</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.9375rem',
                    fontWeight: 600,
                    color: '#9ca3af',
                    marginBottom: '8px',
                  }}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      background: 'rgba(42, 42, 56, 0.8)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '12px',
                      color: 'white',
                      fontSize: '1rem',
                      resize: 'vertical',
                      transition: 'all 0.3s ease',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#ff6b35';
                      e.currentTarget.style.background = 'rgba(42, 42, 56, 1)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.background = 'rgba(42, 42, 56, 0.8)';
                    }}
                    placeholder="Tell us about your project and how we can help..."
                    required
                  />
                </div>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                      padding: '16px 20px',
                      background: 'rgba(34, 197, 94, 0.1)',
                      border: '1px solid rgba(34, 197, 94, 0.3)',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      marginBottom: '16px',
                    }}
                  >
                    <CheckCircleIcon style={{ width: '24px', height: '24px', color: '#22c55e' }} />
                    <div>
                      <div style={{ color: '#22c55e', fontWeight: 600, fontSize: '1rem', marginBottom: '4px' }}>
                        Message Sent Successfully!
                      </div>
                      <div style={{ color: '#9ca3af', fontSize: '0.875rem' }}>
                        Your email client should open shortly. If it doesn&apos;t, please send to info@ninetalesmedia.co.in
                      </div>
                    </div>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                      padding: '16px 20px',
                      background: 'rgba(239, 68, 68, 0.1)',
                      border: '1px solid rgba(239, 68, 68, 0.3)',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      marginBottom: '16px',
                    }}
                  >
                    <div style={{ width: '24px', height: '24px', color: '#ef4444', fontSize: '1.5rem' }}>⚠️</div>
                    <div>
                      <div style={{ color: '#ef4444', fontWeight: 600, fontSize: '1rem', marginBottom: '4px' }}>
                        Error Sending Message
                      </div>
                      <div style={{ color: '#9ca3af', fontSize: '0.875rem' }}>
                        Please try again or contact us directly at info@ninetalesmedia.co.in
                      </div>
                    </div>
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    padding: '18px 32px',
                    background: isSubmitting 
                      ? 'rgba(255, 255, 255, 0.1)' 
                      : 'linear-gradient(135deg, #ff6b35 0%, #ff3366 50%, #8b5cf6 100%)',
                    border: 'none',
                    borderRadius: '16px',
                    color: 'white',
                    fontWeight: 700,
                    fontSize: '1.125rem',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    transition: 'all 0.4s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px',
                    opacity: isSubmitting ? 0.7 : 1,
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        style={{ width: '20px', height: '20px', border: '2px solid white', borderTop: '2px solid transparent', borderRadius: '50%' }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <PaperAirplaneIcon style={{ width: '20px', height: '20px' }} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{
        padding: '80px 0',
        position: 'relative',
        background: 'linear-gradient(135deg, rgba(10, 10, 15, 0.8) 0%, rgba(22, 33, 62, 0.4) 100%)',
      }}>
        <div style={{
          maxWidth: '1000px',
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
              fontWeight: 800,
              color: 'white',
              marginBottom: '16px',
              fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)',
            }}>
              Frequently Asked Questions
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: '#9ca3af',
              maxWidth: '600px',
              margin: '0 auto',
            }}>
              Quick answers to common questions about our services and process.
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '32px',
          }}>
            {[
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary based on scope and complexity. Most projects range from 2-12 weeks, with smaller projects completing in 2-4 weeks and larger digital transformations taking 8-12 weeks."
              },
              {
                question: "Do you offer ongoing support after project completion?",
                answer: "Yes! We provide 30 days of free support after project launch, and offer ongoing maintenance packages to ensure your digital assets continue performing optimally."
              },
              {
                question: "What industries do you specialize in?",
                answer: "We work with businesses across all industries, with particular expertise in e-commerce, technology, healthcare, finance, and creative services. Our solutions are tailored to your specific industry needs."
              },
              {
                question: "Can you work with our existing team and systems?",
                answer: "Absolutely! We pride ourselves on seamless integration with existing teams, workflows, and technology stacks. We'll work alongside your team to ensure smooth collaboration."
              },
              {
                question: "How do you measure project success?",
                answer: "Success is measured through key performance indicators (KPIs) established at project start. We track metrics like conversion rates, engagement, ROI, user satisfaction, and business growth objectives."
              },
              {
                question: "Do you provide training for our team?",
                answer: "Yes! We include comprehensive training and documentation as part of our service packages. This ensures your team can effectively manage and optimize the solutions we deliver."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                style={{
                  background: 'rgba(26, 26, 46, 0.4)',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  padding: '24px',
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
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 107, 53, 0.3)';
                  e.currentTarget.style.background = 'rgba(26, 26, 46, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                  e.currentTarget.style.background = 'rgba(26, 26, 46, 0.4)';
                }}
              >
                <h3 style={{
                  fontSize: '1.125rem',
                  fontWeight: 700,
                  color: 'white',
                  marginBottom: '12px',
                  fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)',
                }}>
                  {faq.question}
                </h3>
                <p style={{
                  fontSize: '0.9375rem',
                  color: '#d1d5db',
                  lineHeight: 1.6,
                }}>
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
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
              Ready to Get Started?
            </h2>

            <p style={{
              fontSize: '1.125rem',
              color: '#9ca3af',
              marginBottom: '32px',
            }}>
              Let&apos;s discuss your project and how we can help transform your business.
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
                Schedule Free Consultation
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
                View Our Portfolio
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}