import { useEffect, useRef } from 'react';
import ParticleBackground from '../components/ParticleBackground';
import { Target, Zap, Users, TrendingUp, CheckCircle, ArrowRight, Download, Code, Brain, Trophy } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
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

  return (
    <div className="bg-[#0B0C10] min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ParticleBackground />

        <div className="absolute inset-0 bg-gradient-to-b from-[#27206F]/20 via-transparent to-[#0B0C10]" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="opacity-0 animate-fadeInUp">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
              Bring <span className="gradient-text">Industry-Ready</span>
              <br />
              Training to Your Campus
            </h1>
          </div>

          <div className="opacity-0 animate-fadeInUp delay-200">
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Dekhnix delivers Campus Recruitment Training, technical workshops, and hackathons — fully managed, tailored for your college.
            </p>
          </div>

          <div className="opacity-0 animate-fadeInUp delay-400 flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-gradient-to-r from-[#30F0FF] to-[#9A6CFF] text-[#0B0C10] font-bold rounded-xl text-lg hover:scale-105 smooth-transition shadow-lg hover:shadow-[#30F0FF]/50"
            >
              Book a Program
            </button>
            <button className="px-8 py-4 glass-morphism text-white font-semibold rounded-xl text-lg hover:bg-white/10 smooth-transition flex items-center space-x-2">
              <Download size={20} />
              <span>Download Brochure</span>
            </button>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-0 animate-fadeInUp delay-600">
            {[
              { label: 'Colleges Trained', value: '100+' },
              { label: 'Students Impacted', value: '50K+' },
              { label: 'Workshop Hours', value: '10K+' },
              { label: 'Success Rate', value: '95%' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-[#30F0FF] rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#30F0FF] rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      <section ref={addToRefs} className="py-32 px-6 opacity-0">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">
              What <span className="gradient-text">We Do</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Comprehensive training solutions for modern campuses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-12 h-12" />,
                title: 'Campus Recruitment Training',
                description: 'End-to-end CRT programs covering aptitude, coding, interviews, and resume building.',
                color: 'from-[#30F0FF] to-[#3B2FBF]',
              },
              {
                icon: <Code className="w-12 h-12" />,
                title: 'Hands-On Workshops',
                description: 'Industry-relevant technical workshops on trending technologies and frameworks.',
                color: 'from-[#9A6CFF] to-[#30F0FF]',
              },
              {
                icon: <Trophy className="w-12 h-12" />,
                title: 'On-Campus Hackathons',
                description: 'Fully organized hackathons with themes, mentors, judging, and prizes.',
                color: 'from-[#30F0FF] to-[#9A6CFF]',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="glass-morphism p-8 rounded-2xl hover-lift group cursor-pointer"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 smooth-transition`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={addToRefs} className="py-32 px-6 bg-gradient-to-b from-transparent to-[#1A1C22]/30 opacity-0">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">
              Why <span className="gradient-text">Colleges Choose</span> Dekhnix
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Brain className="w-8 h-8" />,
                title: 'Custom Curriculum',
                description: 'Programs tailored to your students\' needs and placement goals',
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Industry Trainers',
                description: 'Learn from professionals with real-world experience',
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: 'End-to-End Logistics',
                description: 'We handle everything from planning to execution',
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: 'Placement-Ready Outcomes',
                description: 'Proven track record of improving placement statistics',
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: 'Zero Infrastructure Burden',
                description: 'We bring all necessary resources and equipment',
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: 'Measurable Results',
                description: 'Detailed reports and performance analytics',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-start space-x-4 p-6 glass-morphism rounded-xl hover:bg-white/5 smooth-transition"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#30F0FF] to-[#9A6CFF] rounded-lg flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={addToRefs} className="py-32 px-6 opacity-0">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">
              How <span className="gradient-text">It Works</span>
            </h2>
            <p className="text-gray-400 text-lg">Simple, seamless, and effective</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discover', description: 'Explore our programs and find the perfect fit' },
              { step: '02', title: 'Proposal', description: 'We create a customized plan for your college' },
              { step: '03', title: 'Delivery', description: 'Expert trainers deliver engaging sessions' },
              { step: '04', title: 'Reporting', description: 'Receive detailed performance analytics' },
            ].map((item, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#30F0FF] to-[#9A6CFF] rounded-full flex items-center justify-center text-2xl font-bold text-[#0B0C10] group-hover:scale-110 smooth-transition">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={addToRefs} className="py-32 px-6 bg-gradient-to-b from-[#1A1C22]/30 to-transparent opacity-0">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">
              Our <span className="gradient-text">Programs</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Campus Recruitment Training',
                duration: '4-8 weeks',
                topics: ['Aptitude', 'Coding', 'Interviews', 'Resume Building'],
              },
              {
                title: 'Technical Workshops',
                duration: '1-5 days',
                topics: ['Python', 'Web Dev', 'AI/ML', 'Git/GitHub'],
              },
              {
                title: 'Hackathons',
                duration: '24-48 hours',
                topics: ['Innovation', 'Team Building', 'Real Problems', 'Prizes'],
              },
            ].map((program, idx) => (
              <div
                key={idx}
                className="glass-morphism p-8 rounded-2xl hover-lift group cursor-pointer"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{program.title}</h3>
                <div className="text-[#30F0FF] font-semibold mb-6">{program.duration}</div>
                <ul className="space-y-3 mb-8">
                  {program.topics.map((topic, i) => (
                    <li key={i} className="flex items-center space-x-2 text-gray-400">
                      <CheckCircle size={16} className="text-[#30F0FF]" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => onNavigate('programs')}
                  className="w-full py-3 bg-white/5 hover:bg-white/10 text-white rounded-lg smooth-transition flex items-center justify-center space-x-2"
                >
                  <span>Learn More</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={addToRefs} className="py-32 px-6 opacity-0">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-morphism p-12 rounded-3xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your <span className="gradient-text">Campus?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Join 100+ colleges that have empowered their students with industry-ready skills.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 bg-gradient-to-r from-[#30F0FF] to-[#9A6CFF] text-[#0B0C10] font-bold rounded-xl text-lg hover:scale-105 smooth-transition shadow-lg"
              >
                Schedule a Discovery Call
              </button>
              <button
                onClick={() => onNavigate('colleges')}
                className="px-8 py-4 glass-morphism text-white font-semibold rounded-xl text-lg hover:bg-white/10 smooth-transition"
              >
                View Programs for Colleges
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
