import { useEffect, useRef } from 'react';
import { GraduationCap, Target, Code, Trophy, Calendar, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

interface StudentsPageProps {
  onNavigate: (page: string) => void;
}

export default function StudentsPage({ onNavigate }: StudentsPageProps) {
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

  return (
    <div className="bg-[#0B0C10] min-h-screen pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20 opacity-0 animate-fadeInUp">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#30F0FF]/10 rounded-full mb-6">
            <GraduationCap className="w-5 h-5 text-[#30F0FF]" />
            <span className="text-[#30F0FF] font-semibold">For Students</span>
          </div>
          <h1 className="text-6xl font-bold text-white mb-6">
            Become <span className="gradient-text">Placement Ready</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Master in-demand skills, ace your interviews, and land your dream job with Dekhnix training programs.
          </p>
        </div>

        <div ref={addToRefs} className="mb-32 opacity-0">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Why <span className="gradient-text">Join Our Programs?</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-10 h-10" />,
                title: 'Placement Success',
                description: 'Learn exactly what top companies look for in candidates',
                benefits: ['Proven interview techniques', 'Real coding problems', 'Mock interview practice'],
              },
              {
                icon: <Code className="w-10 h-10" />,
                title: 'Industry Skills',
                description: 'Master technologies and tools used by professionals',
                benefits: ['Latest tech stacks', 'Hands-on projects', 'Portfolio building'],
              },
              {
                icon: <Sparkles className="w-10 h-10" />,
                title: 'Career Growth',
                description: 'Stand out from the crowd with proven expertise',
                benefits: ['Certificate of completion', 'LinkedIn profile boost', 'Network with peers'],
              },
            ].map((reason, idx) => (
              <div key={idx} className="glass-morphism p-8 rounded-2xl hover-lift">
                <div className="w-16 h-16 bg-gradient-to-br from-[#30F0FF] to-[#9A6CFF] rounded-xl flex items-center justify-center mb-6">
                  {reason.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{reason.title}</h3>
                <p className="text-gray-400 mb-6">{reason.description}</p>
                <ul className="space-y-2">
                  {reason.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center space-x-2 text-gray-400 text-sm">
                      <CheckCircle size={14} className="text-[#30F0FF]" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div ref={addToRefs} className="mb-32 opacity-0">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            <span className="gradient-text">Available Programs</span>
          </h2>

          <div className="space-y-8">
            <div className="glass-morphism p-10 rounded-2xl hover-lift">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#30F0FF] to-[#3B2FBF] rounded-xl flex items-center justify-center">
                    <Target className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Campus Recruitment Training</h3>
                    <p className="text-[#30F0FF]">Complete placement preparation</p>
                  </div>
                </div>
                <span className="px-4 py-2 bg-[#30F0FF]/10 text-[#30F0FF] rounded-lg font-semibold">
                  4-8 weeks
                </span>
              </div>

              <p className="text-gray-400 mb-6 leading-relaxed">
                Our most comprehensive program covering everything you need to crack campus placements - from aptitude tests to technical interviews to HR rounds.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-white font-semibold mb-3">You'll Learn:</h4>
                  <ul className="space-y-2">
                    {['Quantitative & Logical Aptitude', 'Data Structures & Algorithms', 'Problem Solving Techniques', 'Interview Strategies'].map((item, i) => (
                      <li key={i} className="flex items-center space-x-2 text-gray-400 text-sm">
                        <CheckCircle size={14} className="text-[#30F0FF]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-3">You'll Get:</h4>
                  <ul className="space-y-2">
                    {['Daily practice sessions', 'Mock tests & interviews', 'Resume review & LinkedIn', 'Performance tracking'].map((item, i) => (
                      <li key={i} className="flex items-center space-x-2 text-gray-400 text-sm">
                        <CheckCircle size={14} className="text-[#30F0FF]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button
                onClick={() => onNavigate('events')}
                className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-lg smooth-transition flex items-center space-x-2"
              >
                <span>Check Upcoming Sessions</span>
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="glass-morphism p-10 rounded-2xl hover-lift">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#9A6CFF] to-[#30F0FF] rounded-xl flex items-center justify-center">
                    <Code className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Technical Workshops</h3>
                    <p className="text-[#30F0FF]">Master trending technologies</p>
                  </div>
                </div>
                <span className="px-4 py-2 bg-[#30F0FF]/10 text-[#30F0FF] rounded-lg font-semibold">
                  1-5 days
                </span>
              </div>

              <p className="text-gray-400 mb-6 leading-relaxed">
                Intensive, hands-on workshops on the hottest tech stacks and frameworks. Build real projects and add them to your portfolio.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {['Python', 'Web Dev', 'AI/ML', 'Git/GitHub', 'React', 'Data Science', 'Cloud', 'DevOps'].map((tech, i) => (
                  <div key={i} className="px-4 py-3 bg-white/5 rounded-lg text-center text-gray-400 text-sm font-medium">
                    {tech}
                  </div>
                ))}
              </div>

              <button
                onClick={() => onNavigate('events')}
                className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-lg smooth-transition flex items-center space-x-2"
              >
                <span>See Workshop Schedule</span>
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="glass-morphism p-10 rounded-2xl hover-lift">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#30F0FF] to-[#9A6CFF] rounded-xl flex items-center justify-center">
                    <Trophy className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Hackathons</h3>
                    <p className="text-[#30F0FF]">Compete, innovate, and win</p>
                  </div>
                </div>
                <span className="px-4 py-2 bg-[#30F0FF]/10 text-[#30F0FF] rounded-lg font-semibold">
                  24-48 hrs
                </span>
              </div>

              <p className="text-gray-400 mb-6 leading-relaxed">
                Test your skills in real-world challenges, collaborate with talented peers, and build innovative solutions. Win prizes and recognition!
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {[
                  { label: 'Team-based', icon: '👥' },
                  { label: 'Mentorship', icon: '🎯' },
                  { label: 'Prizes & Certs', icon: '🏆' },
                ].map((feature, i) => (
                  <div key={i} className="flex items-center space-x-3 px-4 py-3 bg-white/5 rounded-lg">
                    <span className="text-2xl">{feature.icon}</span>
                    <span className="text-gray-400 text-sm">{feature.label}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => onNavigate('events')}
                className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-lg smooth-transition flex items-center space-x-2"
              >
                <span>View Upcoming Hackathons</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <div ref={addToRefs} className="mb-32 opacity-0">
          <div className="glass-morphism p-10 rounded-2xl">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              <span className="gradient-text">Frequently Asked Questions</span>
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: 'How do I join a program?',
                  a: 'Programs are organized through your college. Check with your TPO or training coordinator for upcoming sessions.',
                },
                {
                  q: 'Do I need prior experience?',
                  a: 'No! Our programs are designed for all skill levels. We start from basics and gradually build up.',
                },
                {
                  q: 'Will I get a certificate?',
                  a: 'Yes, all participants who complete the program receive a certificate of completion.',
                },
                {
                  q: 'Can I attend if my college hasn\'t partnered?',
                  a: 'Ask your TPO or HOD to contact us! We\'re always excited to partner with new colleges.',
                },
              ].map((faq, idx) => (
                <div key={idx} className="border-b border-white/10 pb-6 last:border-0">
                  <h3 className="text-lg font-semibold text-white mb-2">{faq.q}</h3>
                  <p className="text-gray-400">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div ref={addToRefs} className="opacity-0">
          <div className="bg-gradient-to-r from-[#30F0FF]/10 to-[#9A6CFF]/10 p-12 rounded-3xl border border-[#30F0FF]/20 text-center">
            <Calendar className="w-16 h-16 mx-auto mb-6 text-[#30F0FF]" />
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to <span className="gradient-text">Level Up?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Check out our upcoming events and register for programs at your campus.
            </p>
            <button
              onClick={() => onNavigate('events')}
              className="px-8 py-4 bg-gradient-to-r from-[#30F0FF] to-[#9A6CFF] text-[#0B0C10] font-bold rounded-xl hover:scale-105 smooth-transition inline-flex items-center space-x-2"
            >
              <span>Browse Events</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
