'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChatBubbleLeftRightIcon, XMarkIcon, PaperAirplaneIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm the Nine Tales AI assistant. How can I help you today?",
      isBot: true,
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      setUnreadCount(0);
    }
  }, [isOpen]);

  // Simulate new message notification
  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        const newMessage = {
          id: messages.length + 1,
          text: "Hey there! Do you need help with your digital marketing strategy?",
          isBot: true,
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, newMessage]);
        setUnreadCount(prev => prev + 1);
      }, 15000);
      
      return () => clearTimeout(timer);
    }
  }, [isOpen, messages.length]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot response with typing indicator
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: getBotResponse(inputValue),
        isBot: true,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const getBotResponse = (input: string) => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
      return "Hello there! How can I help you with your digital marketing needs today?";
    } else if (lowerInput.includes('service') || lowerInput.includes('offer')) {
      return "We offer a wide range of services including content creation, Meta & Google ads management, TVC production, e-commerce marketing, web development, AI chatbot integration, and custom software development.";
    } else if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('quote')) {
      return "Our pricing varies based on your specific needs. Would you like to schedule a consultation call to discuss your project requirements?";
    } else if (lowerInput.includes('contact') || lowerInput.includes('talk') || lowerInput.includes('human')) {
      return "You can reach our team at info@ninetalesmedia.co.in or call us at +918743077753. Alternatively, you can fill out our contact form and we'll get back to you within 24 hours.";
    } else {
      return "Thanks for your message! Our team will get back to you soon. In the meantime, feel free to explore our services or contact us directly for immediate assistance.";
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Floating Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 bg-gradient-primary rounded-full shadow-lg flex items-center justify-center relative overflow-hidden group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{ 
            boxShadow: [
              '0 0 20px rgba(255, 107, 53, 0.5)',
              '0 0 30px rgba(255, 107, 53, 0.8)',
              '0 0 20px rgba(255, 107, 53, 0.5)',
            ]
          }}
          transition={{ 
            boxShadow: { duration: 2, repeat: Infinity },
            scale: { duration: 0.2 }
          }}
        >
          {/* Enhanced fox tail design */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-orange via-primary-red to-primary-purple opacity-90 rounded-full" />
          
          {/* Icon with animation */}
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="relative z-10"
          >
            {isOpen ? (
              <XMarkIcon className="w-6 h-6 text-white" />
            ) : (
              <ChatBubbleLeftRightIcon className="w-6 h-6 text-white" />
            )}
          </motion.div>

          {/* Enhanced ripple effect */}
          <motion.div
            className="absolute inset-0 bg-white/20 rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.5], opacity: [0.5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          {/* Notification badge */}
          {unreadCount > 0 && !isOpen && (
            <motion.div 
              className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 15 }}
            >
              {unreadCount}
            </motion.div>
          )}
        </motion.button>
      </motion.div>

      {/* Enhanced Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 w-96 h-[500px] bg-black/90 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-700 z-50 overflow-hidden"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Enhanced Header */}
            <div className="bg-gradient-primary p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <motion.div 
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <span className="text-white text-sm font-bold">🦊</span>
                </motion.div>
                <div>
                  <h3 className="text-white font-semibold">Nine Tales Assistant</h3>
                  <div className="flex items-center text-white/80 text-xs">
                    <span className="relative flex h-2 w-2 mr-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    Online now
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Container with Glass Effect */}
            <div className="h-[380px] overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-black/50 to-gray-900/30 backdrop-blur-md">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {message.isBot && (
                    <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center mr-2 flex-shrink-0 self-end">
                      <span className="text-white text-xs">🦊</span>
                    </div>
                  )}
                  
                  <div
                    className={`max-w-[75%] p-3 rounded-2xl text-sm shadow-md ${
                      message.isBot
                        ? 'bg-gray-800/80 text-white rounded-tl-none'
                        : 'bg-gradient-primary text-white rounded-tr-none'
                    }`}
                  >
                    <div className="mb-1">{message.text}</div>
                    <div className={`text-xs ${message.isBot ? 'text-gray-400' : 'text-white/70'} text-right`}>
                      {formatTime(message.timestamp)}
                    </div>
                  </div>
                  
                  {!message.isBot && (
                    <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center ml-2 flex-shrink-0 self-end">
                      <span className="text-white text-xs">You</span>
                    </div>
                  )}
                </motion.div>
              ))}
              
              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  className="flex justify-start"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center mr-2 flex-shrink-0">
                    <span className="text-white text-xs">🦊</span>
                  </div>
                  <div className="bg-gray-800/80 p-3 rounded-2xl rounded-tl-none text-white">
                    <div className="flex space-x-1">
                      <motion.div 
                        className="w-2 h-2 bg-gray-400 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                      />
                      <motion.div 
                        className="w-2 h-2 bg-gray-400 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                      />
                      <motion.div 
                        className="w-2 h-2 bg-gray-400 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}
              
              {/* Scroll anchor */}
              <div ref={messagesEndRef} />
            </div>

            {/* Enhanced Input Area */}
            <div className="p-4 border-t border-gray-700/50 backdrop-blur-md bg-black/40">
              <div className="flex space-x-2">
                <motion.div 
                  className="flex-1 relative"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="w-full bg-gray-800/70 text-white rounded-full px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-orange border border-gray-600/50 pr-10"
                  />
                  {inputValue && (
                    <motion.button
                      onClick={handleSendMessage}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-primary-orange hover:text-white transition-colors"
                      whileHover={{ scale: 1.1, rotate: -10 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <PaperAirplaneIcon className="w-5 h-5 rotate-90" />
                    </motion.button>
                  )}
                </motion.div>
                
                <motion.button
                  onClick={() => {
                    setMessages([{
                      id: 1,
                      text: "Hello! I'm the Nine Tales AI assistant. How can I help you today?",
                      isBot: true,
                      timestamp: new Date(),
                    }]);
                  }}
                  className="bg-gray-700 text-white p-3 rounded-full hover:bg-gray-600 transition-colors"
                  whileHover={{ rotate: 180 }}
                  whileTap={{ scale: 0.9 }}
                  title="Reset conversation"
                >
                  <ArrowPathIcon className="w-5 h-5" />
                </motion.button>
              </div>
              
              {/* Suggestion chips */}
              <div className="flex flex-wrap gap-2 mt-3">
                {['Hello!', 'What services do you offer?', 'How much do you charge?', 'I want to talk to someone'].map((suggestion) => (
                  <motion.button
                    key={suggestion}
                    onClick={() => {
                      setInputValue(suggestion);
                      setTimeout(() => handleSendMessage(), 100);
                    }}
                    className="bg-gray-700/50 hover:bg-gray-600 text-white/90 text-xs py-1.5 px-3 rounded-full border border-gray-600/30"
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,107,53,0.3)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {suggestion}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingChatbot;