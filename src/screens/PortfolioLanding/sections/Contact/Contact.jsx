import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    type: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setStatus({ type: 'error', message: 'Please enter your name' });
      return false;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setStatus({ type: 'error', message: 'Please enter a valid email' });
      return false;
    }
    if (!formData.message.trim()) {
      setStatus({ type: 'error', message: 'Please enter a message' });
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: "f25ebc49-45ed-4245-9469-baa23e3fcd00",  
          to_email: "nisiashley22@gmail.com",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          from_name: "Portfolio Contact Form",
          replyto: formData.email,
          subject: "New Portfolio Message"
        })
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          type: 'success',
          message: "Message sent successfully! I’ll get back to you soon."
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or email me directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Desktop View - Unchanged */}
      <div className="hidden lg:flex w-full min-h-screen bg-gradient-to-br from-purple-900 via-slate-900 to-blue-900 items-center justify-center px-4 py-16">
        <div className="w-full max-w-6xl flex items-center justify-between gap-16">
          
          {/* Left */}
          <div className="flex-1 text-white">
            <h1 className="text-6xl font-bold mb-6">
              Get in touch
            </h1>
            <h2 className="text-2xl font-semibold mb-4">
              Have questions about my work?
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
              Feel free to reach out if you'd like to know more about my projects, skills, or experience. I'm happy to chat!
            </p>
          </div>

          {/* Form */}
          <div className="flex-1 max-w-xl">
            <div className="space-y-4">
              
              <div className="flex gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  placeholder="Name"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  placeholder="Email Address"
                />
              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={8}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none"
                placeholder="Your message"
              />

              {status.message && (
                <div className={`flex items-center gap-3 p-3 rounded-lg ${
                  status.type === 'success' 
                    ? 'bg-green-500/20 border border-green-500/50' 
                    : 'bg-red-500/20 border border-red-500/50'
                }`}>
                  {status.type === 'success' ? (
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-red-400" />
                  )}
                  <p className={`text-sm ${status.type === 'success' ? 'text-green-200' : 'text-red-200'}`}>
                    {status.message}
                  </p>
                </div>
              )}

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-white text-gray-900 font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:bg-gray-100 transform hover:scale-105 disabled:opacity-50 flex items-center justify-center gap-2 shadow-lg"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-gray-900 border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>

            <div className="mt-8 text-center">
              <a 
                href="mailto:nisiashley22@gmail.com" 
                className="text-white/70 hover:text-white text-sm transition inline-block border-b border-white/30 hover:border-white pb-1"
              >
                nisiashley22@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View - Modified to full-width format like other sections */}
      <div className="block lg:hidden w-full min-h-screen bg-gradient-to-br from-purple-900 via-slate-900 to-blue-900 flex flex-col px-4 py-16">
        <div className="w-full flex flex-col gap-8">
          
          {/* Left */}
          <div className="text-white text-center">
            <h1 className="text-4xl font-bold mb-4">
              Get in touch
            </h1>
            <h2 className="text-xl font-semibold mb-3">
              Have questions about my work?
            </h2>
            <p className="text-base text-gray-300 leading-relaxed">
              Feel free to reach out if you'd like to know more about my projects, skills, or experience. I'm happy to chat!
            </p>
          </div>

          {/* Form */}
          <div className="w-full">
            <div className="space-y-3">
              
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all text-sm"
                placeholder="Name"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all text-sm"
                placeholder="Email Address"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-3 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none text-sm"
                placeholder="Your message"
              />

              {status.message && (
                <div className={`flex items-center gap-2 p-2 rounded-lg ${
                  status.type === 'success' 
                    ? 'bg-green-500/20 border border-green-500/50' 
                    : 'bg-red-500/20 border border-red-500/50'
                }`}>
                  {status.type === 'success' ? (
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-red-400" />
                  )}
                  <p className={`text-xs ${status.type === 'success' ? 'text-green-200' : 'text-red-200'}`}>
                    {status.message}
                  </p>
                </div>
              )}

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-white text-gray-900 font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:bg-gray-100 transform hover:scale-105 disabled:opacity-50 flex items-center justify-center gap-2 shadow-lg text-sm"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-gray-900 border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

            <div className="mt-6 text-center">
              <a 
                href="mailto:nisiashley22@gmail.com" 
                className="text-white/70 hover:text-white text-xs transition inline-block border-b border-white/30 hover:border-white pb-1"
              >
                nisiashley22@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
