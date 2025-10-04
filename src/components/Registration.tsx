import { useState } from 'react';
import { UserPlus, CheckCircle2, AlertCircle } from 'lucide-react';

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

    setTimeout(() => {
      setStatus('success');
      setMessage('Registration successful! Check your email for confirmation details.');
      setFormData({
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
    }, 1500);
  };

  return (
    <section id="register" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a2e] to-[#0a0a0a] relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            TEAM <span className="text-[#00ff9d] glow-green">REGISTRATION</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#00ff9d] to-transparent mx-auto mb-8"></div>
          <p className="text-[#a0a0a0] text-lg">
            Assemble your team of 1-4 members and register for the ultimate CTF experience
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-[#1a1a2e] border border-[#00ff9d]/20 rounded-xl p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-white font-semibold mb-2">
                Team Name <span className="text-[#ff006e]">*</span>
              </label>
              <input
                type="text"
                name="teamName"
                value={formData.teamName}
                onChange={handleChange}
                required
                className="w-full bg-[#0a0a0a] border border-[#00ff9d]/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00ff9d] transition-colors"
                placeholder="Enter team name"
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">
                Institution/College <span className="text-[#ff006e]">*</span>
              </label>
              <input
                type="text"
                name="institution"
                value={formData.institution}
                onChange={handleChange}
                required
                className="w-full bg-[#0a0a0a] border border-[#00ff9d]/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00ff9d] transition-colors"
                placeholder="Enter institution name"
              />
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold text-[#00d9ff] mb-4">Team Leader Details</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-semibold mb-2">
                  Full Name <span className="text-[#ff006e]">*</span>
                </label>
                <input
                  type="text"
                  name="leaderName"
                  value={formData.leaderName}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#0a0a0a] border border-[#00ff9d]/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00ff9d] transition-colors"
                  placeholder="Enter leader name"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Email <span className="text-[#ff006e]">*</span>
                </label>
                <input
                  type="email"
                  name="leaderEmail"
                  value={formData.leaderEmail}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#0a0a0a] border border-[#00ff9d]/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00ff9d] transition-colors"
                  placeholder="leader@example.com"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Phone <span className="text-[#ff006e]">*</span>
                </label>
                <input
                  type="tel"
                  name="leaderPhone"
                  value={formData.leaderPhone}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#0a0a0a] border border-[#00ff9d]/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00ff9d] transition-colors"
                  placeholder="10-digit number"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Experience Level <span className="text-[#ff006e]">*</span>
                </label>
                <select
                  name="experienceLevel"
                  value={formData.experienceLevel}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#0a0a0a] border border-[#00ff9d]/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00ff9d] transition-colors"
                >
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold text-[#00d9ff] mb-4">
              Team Members <span className="text-[#a0a0a0] text-sm font-normal">(Optional - Add 0 to 3 members)</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-white font-semibold mb-2">Member 2</label>
                <input
                  type="text"
                  name="member2Name"
                  value={formData.member2Name}
                  onChange={handleChange}
                  className="w-full bg-[#0a0a0a] border border-[#00ff9d]/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00ff9d] transition-colors"
                  placeholder="Optional"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Member 3</label>
                <input
                  type="text"
                  name="member3Name"
                  value={formData.member3Name}
                  onChange={handleChange}
                  className="w-full bg-[#0a0a0a] border border-[#00ff9d]/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00ff9d] transition-colors"
                  placeholder="Optional"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Member 4</label>
                <input
                  type="text"
                  name="member4Name"
                  value={formData.member4Name}
                  onChange={handleChange}
                  className="w-full bg-[#0a0a0a] border border-[#00ff9d]/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00ff9d] transition-colors"
                  placeholder="Optional"
                />
              </div>
            </div>
          </div>

          {status === 'success' && (
            <div className="mb-6 bg-[#00ff9d]/10 border border-[#00ff9d] rounded-lg p-4 flex items-start gap-3">
              <CheckCircle2 className="text-[#00ff9d] flex-shrink-0 mt-0.5" size={20} />
              <p className="text-[#00ff9d]">{message}</p>
            </div>
          )}

          {status === 'error' && (
            <div className="mb-6 bg-[#ff006e]/10 border border-[#ff006e] rounded-lg p-4 flex items-start gap-3">
              <AlertCircle className="text-[#ff006e] flex-shrink-0 mt-0.5" size={20} />
              <p className="text-[#ff006e]">{message}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full bg-[#00ff9d] text-[#0a0a0a] font-bold py-4 rounded-lg hover:bg-[#00d9a0] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,157,0.5)] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <UserPlus size={20} />
            {status === 'submitting' ? 'SUBMITTING...' : 'REGISTER TEAM'}
          </button>

          <p className="text-[#a0a0a0] text-sm mt-4 text-center">
            By registering, you agree to the competition rules and code of conduct
          </p>
        </form>
      </div>
    </section>
  );
}
