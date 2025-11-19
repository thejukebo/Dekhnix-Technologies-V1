import { useState, useEffect, useRef } from 'react';
import { Send, Calendar, MessageCircle, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    role: '',
    name: '',
    email: '',
    phone: '',
    collegeName: '',
    city: '',
    programInterested: '',
    preferredDates: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);

    setTimeout(() => {
      setIsSuccess(false);
      setFormData({
        role: '',
        name: '',
        email: '',
        phone: '',
        collegeName: '',
        city: '',
        programInterested: '',
        preferredDates: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/91XXXXXXXXXX?text=Hi! I want to know more about Dekhnix programs for my college.', '_blank');
  };

  return (
    <div className="bg-[#0B0C10] min-h-screen pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20 opacity-0 animate-fadeInUp">
          <h1 className="text-6xl font-bold text-white mb-6">
            Book a <span className="gradient-text">Program</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Let's bring industry-ready training to your campus. Fill out the form or contact us directly.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div ref={addToRefs} className="glass-morphism p-8 rounded-2xl text-center hover-lift opacity-0">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#30F0FF] to-[#9A6CFF] rounded-full flex items-center justify-center">
              <MessageCircle className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">WhatsApp</h3>
            <p className="text-gray-400 text-sm mb-4">Quick response guaranteed</p>
            <button
              onClick={handleWhatsApp}
              className="px-6 py-2 bg-[#25D366] text-white rounded-lg hover:scale-105 smooth-transition"
            >
              Chat Now
            </button>
          </div>

          <div ref={addToRefs} className="glass-morphism p-8 rounded-2xl text-center hover-lift opacity-0 delay-100">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#30F0FF] to-[#9A6CFF] rounded-full flex items-center justify-center">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
            <p className="text-gray-400 text-sm mb-4">Mon-Sat, 9 AM - 6 PM</p>
            <a
              href="tel:+91XXXXXXXXXX"
              className="px-6 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 smooth-transition inline-block"
            >
              +91 XXXXX XXXXX
            </a>
          </div>

          <div ref={addToRefs} className="glass-morphism p-8 rounded-2xl text-center hover-lift opacity-0 delay-200">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#30F0FF] to-[#9A6CFF] rounded-full flex items-center justify-center">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
            <p className="text-gray-400 text-sm mb-4">We'll respond within 24 hours</p>
            <a
              href="mailto:hello@dekhnix.tech"
              className="px-6 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 smooth-transition inline-block"
            >
              hello@dekhnix.tech
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div ref={addToRefs} className="opacity-0">
            <div className="glass-morphism p-10 rounded-3xl">
              <h2 className="text-3xl font-bold text-white mb-8">
                Request a <span className="gradient-text">Program</span>
              </h2>

              {isSuccess ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#30F0FF] to-[#9A6CFF] rounded-full flex items-center justify-center animate-scaleIn">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Thank You!</h3>
                  <p className="text-gray-400">
                    We've received your request. Our team will contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      I am a *
                    </label>
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#30F0FF] smooth-transition"
                    >
                      <option value="">Select your role</option>
                      <option value="tpo">TPO / Training Coordinator</option>
                      <option value="hod">HOD / Faculty Member</option>
                      <option value="club">Club Coordinator</option>
                      <option value="student">Student</option>
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#30F0FF] smooth-transition"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#30F0FF] smooth-transition"
                        placeholder="john@college.edu"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#30F0FF] smooth-transition"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        College Name *
                      </label>
                      <input
                        type="text"
                        name="collegeName"
                        value={formData.collegeName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#30F0FF] smooth-transition"
                        placeholder="ABC Institute of Technology"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        City *
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#30F0FF] smooth-transition"
                        placeholder="Bangalore"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Program Interested In *
                    </label>
                    <select
                      name="programInterested"
                      value={formData.programInterested}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#30F0FF] smooth-transition"
                    >
                      <option value="">Select a program</option>
                      <option value="crt">Campus Recruitment Training</option>
                      <option value="workshop-python">Workshop: Python</option>
                      <option value="workshop-web">Workshop: Web Development</option>
                      <option value="workshop-ai">Workshop: AI/ML</option>
                      <option value="workshop-git">Workshop: Git/GitHub</option>
                      <option value="workshop-custom">Workshop: Custom</option>
                      <option value="hackathon">Hackathon</option>
                      <option value="multiple">Multiple Programs</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Preferred Dates
                    </label>
                    <input
                      type="text"
                      name="preferredDates"
                      value={formData.preferredDates}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#30F0FF] smooth-transition"
                      placeholder="e.g., First week of March 2024"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Additional Details
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#30F0FF] smooth-transition resize-none"
                      placeholder="Tell us about your requirements, batch size, or any specific needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-[#30F0FF] to-[#9A6CFF] text-[#0B0C10] font-bold rounded-xl hover:scale-105 smooth-transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <span>Submitting...</span>
                    ) : (
                      <>
                        <span>Submit Request</span>
                        <Send size={20} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          <div ref={addToRefs} className="space-y-8 opacity-0 delay-200">
            <div className="glass-morphism p-8 rounded-2xl">
              <div className="flex items-center space-x-3 mb-6">
                <Calendar className="w-8 h-8 text-[#30F0FF]" />
                <h3 className="text-2xl font-bold text-white">Schedule a Call</h3>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Prefer to discuss over a call? Book a 30-minute discovery session with our team to explore how we can help your college.
              </p>
              <button className="w-full py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg smooth-transition">
                Book Discovery Call
              </button>
            </div>

            <div className="glass-morphism p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Quick Info</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#30F0FF] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Address</p>
                    <p className="text-gray-400 text-sm">Bangalore, Karnataka, India</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-[#30F0FF] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-gray-400 text-sm">hello@dekhnix.tech</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-[#30F0FF] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-gray-400 text-sm">+91 XXXXX XXXXX</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#30F0FF]/10 to-[#9A6CFF]/10 p-8 rounded-2xl border border-[#30F0FF]/20">
              <h3 className="text-xl font-bold text-white mb-4">Download Brochure</h3>
              <p className="text-gray-400 text-sm mb-6">
                Get detailed information about all our programs, pricing, and success stories.
              </p>
              <button className="w-full py-3 bg-gradient-to-r from-[#30F0FF] to-[#9A6CFF] text-[#0B0C10] font-bold rounded-lg hover:scale-105 smooth-transition">
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
