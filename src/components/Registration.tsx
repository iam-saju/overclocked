import { useState } from 'react';
import { UserPlus, CheckCircle2, AlertCircle, User, Mail, Phone, Building, Users, Award, Shield } from 'lucide-react';

export default function Registration() {
  const [formData, setFormData] = useState({
    teamName: '',
    institution: '',
    leaderName: '',
    leaderEmail: '',
    leaderPhone: '',
    member2Name: '',
    member3Name: '',
    member4Name: '',
    experienceLevel: 'Beginner'
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setMessage('');

    if (!formData.teamName || !formData.institution || !formData.leaderName ||
        !formData.leaderEmail || !formData.leaderPhone) {
      setStatus('error');
      setMessage('Please fill in all required fields');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.leaderEmail)) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.leaderPhone.replace(/[^0-9]/g, ''))) {
      setStatus('error');
      setMessage('Please enter a valid 10-digit phone number');
      return;
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setStatus('success');
      setMessage('Team registered successfully! You will receive a confirmation email shortly.');
    } catch (error) {
      setStatus('error');
      setMessage('Registration failed. Please try again.');
    }
  };

  return (
    <section id="register" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-200 via-yellow-300 to-red-400 relative">
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-96 h-96 bg-yellow-500 rounded-full filter blur-[150px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-orange-500 rounded-full filter blur-[150px] opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-red-500 rounded-full filter blur-[150px] opacity-15 animate-pulse delay-500"></div>
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-yellow-600 rounded-full filter blur-[150px] opacity-15 animate-pulse delay-700"></div>

        {/* Retro grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `repeating-linear-gradient(0deg, #000 0px, #000 1px, transparent 1px, transparent 20px),
                            repeating-linear-gradient(90deg, #000 0px, #000 1px, transparent 1px, transparent 20px)`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-black text-gray-800 mb-4 cyber-title">
            TEAM <span className="text-orange-600">REGISTRATION</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mb-6"></div>
        </div>

        {/* ID Card Style Form */}
        <div className="bg-gradient-to-br from-white to-gray-100 rounded-2xl shadow-2xl border-4 border-orange-400 overflow-hidden relative max-w-3xl mx-auto" style={{
          background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #e9ecef 100%)'
        }}>
          {/* ID Card Header */}
          <div className="bg-gradient-to-r from-orange-500 to-red-500 px-4 py-3 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            <div className="relative z-10 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-black text-white gaming-font">HACKER ID CARD</h3>
                <p className="text-white/90 text-xs hack-font font-bold">OVERCLOCKED CTF 2024</p>
              </div>
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-white text-xs gaming-font font-black">🏆</span>
              </div>
            </div>
          </div>
          
          {/* ID Card Body */}
          <div className="p-6 h-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-lg gaming-font font-black">👤</span>
              </div>
              <div>
                <p className="text-xs text-gray-600 gaming-font font-bold">TEAM LEADER</p>
                <p className="text-sm text-gray-800 gaming-font font-black">HACKER PROFILE</p>
              </div>
            </div>

            {/* Form Fields */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-black text-gray-600 mb-2 gaming-font">TEAM NAME</label>
                  <input
                    type="text"
                    name="teamName"
                    value={formData.teamName}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-3 border-2 border-gray-300 rounded-lg text-sm gaming-font font-bold text-gray-800 focus:outline-none focus:border-orange-400"
                    placeholder="TEAM NAME"
                  />
                </div>
                <div>
                  <label className="block text-sm font-black text-gray-600 mb-2 gaming-font">INSTITUTION</label>
                  <input
                    type="text"
                    name="institution"
                    value={formData.institution}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-3 border-2 border-gray-300 rounded-lg text-sm gaming-font font-bold text-gray-800 focus:outline-none focus:border-orange-400"
                    placeholder="INSTITUTION"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-black text-gray-600 mb-2 gaming-font">FULL NAME</label>
                  <input
                    type="text"
                    name="leaderName"
                    value={formData.leaderName}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-3 border-2 border-gray-300 rounded-lg text-sm gaming-font font-bold text-gray-800 focus:outline-none focus:border-orange-400"
                    placeholder="FULL NAME"
                  />
                </div>
                <div>
                  <label className="block text-sm font-black text-gray-600 mb-2 gaming-font">EMAIL</label>
                  <input
                    type="email"
                    name="leaderEmail"
                    value={formData.leaderEmail}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-3 border-2 border-gray-300 rounded-lg text-sm gaming-font font-bold text-gray-800 focus:outline-none focus:border-orange-400"
                    placeholder="EMAIL"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-black text-gray-600 mb-2 gaming-font">PHONE</label>
                  <input
                    type="tel"
                    name="leaderPhone"
                    value={formData.leaderPhone}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-3 border-2 border-gray-300 rounded-lg text-sm gaming-font font-bold text-gray-800 focus:outline-none focus:border-orange-400"
                    placeholder="PHONE"
                  />
                </div>
                <div>
                  <label className="block text-sm font-black text-gray-600 mb-2 gaming-font">LEVEL</label>
                  <select
                    name="experienceLevel"
                    value={formData.experienceLevel}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-3 border-2 border-gray-300 rounded-lg text-sm gaming-font font-bold text-gray-800 focus:outline-none focus:border-orange-400"
                  >
                    <option value="">SELECT</option>
                    <option value="Beginner">BEGINNER</option>
                    <option value="Intermediate">INTERMEDIATE</option>
                    <option value="Advanced">ADVANCED</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-black text-gray-600 mb-2 gaming-font">MEMBER 2</label>
                  <input
                    type="text"
                    name="member2Name"
                    value={formData.member2Name}
                    onChange={handleChange}
                    className="w-full px-3 py-3 border-2 border-gray-300 rounded-lg text-sm gaming-font font-bold text-gray-800 focus:outline-none focus:border-orange-400"
                    placeholder="OPTIONAL"
                  />
                </div>
                <div>
                  <label className="block text-sm font-black text-gray-600 mb-2 gaming-font">MEMBER 3</label>
                  <input
                    type="text"
                    name="member3Name"
                    value={formData.member3Name}
                    onChange={handleChange}
                    className="w-full px-3 py-3 border-2 border-gray-300 rounded-lg text-sm gaming-font font-bold text-gray-800 focus:outline-none focus:border-orange-400"
                    placeholder="OPTIONAL"
                  />
                </div>
                <div>
                  <label className="block text-sm font-black text-gray-600 mb-2 gaming-font">MEMBER 4</label>
                  <input
                    type="text"
                    name="member4Name"
                    value={formData.member4Name}
                    onChange={handleChange}
                    className="w-full px-3 py-3 border-2 border-gray-300 rounded-lg text-sm gaming-font font-bold text-gray-800 focus:outline-none focus:border-orange-400"
                    placeholder="OPTIONAL"
                  />
                </div>
              </div>

              {/* Status Messages */}
              {status === 'success' && (
                <div className="bg-green-100 border-2 border-green-400 rounded-lg p-3">
                  <p className="text-green-800 text-xs hack-font font-bold">{message}</p>
                </div>
              )}

              {status === 'error' && (
                <div className="bg-red-100 border-2 border-red-400 rounded-lg p-3">
                  <p className="text-red-800 text-xs hack-font font-bold">{message}</p>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-black py-4 rounded-lg hover:from-orange-600 hover:to-red-600 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed gaming-font text-base"
                >
                  {status === 'submitting' ? 'SUBMITTING...' : 'CREATE ID CARD'}
                </button>
              </div>

              {/* Terms */}
              <div className="pt-4 pb-2">
                <p className="text-gray-600 text-sm text-center gaming-font font-bold">
                  BY REGISTERING, YOU AGREE TO THE COMPETITION RULES AND CODE OF CONDUCT
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}