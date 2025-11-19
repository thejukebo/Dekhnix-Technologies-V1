import { useEffect, useRef } from 'react';
import { Target, Code, Trophy, Clock, Users, CheckCircle, ArrowRight } from 'lucide-react';

interface ProgramsPageProps {
  onNavigate: (page: string) => void;
}

export default function ProgramsPage({ onNavigate }: ProgramsPageProps) {
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
          <h1 className="text-6xl font-bold text-white mb-6">
            Our <span className="gradient-text">Programs</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Comprehensive training solutions designed to make your students industry-ready
          </p>
        </div>

        <div ref={addToRefs} className="mb-32 opacity-0">
          <div className="glass-morphism p-12 rounded-3xl">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-[#30F0FF] to-[#3B2FBF] rounded-xl flex items-center justify-center">
                <Target className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-white">Campus Recruitment Training</h2>
                <p className="text-[#30F0FF] font-semibold">Complete Placement Preparation</p>
              </div>
            </div>

            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Our comprehensive CRT program prepares students for every stage of the campus placement process, from aptitude tests to final HR interviews.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-[#30F0FF]" />
                  <span>Program Details</span>
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-[#30F0FF] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">Duration: 4-8 weeks (flexible)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-[#30F0FF] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">Mode: On-campus or hybrid</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-[#30F0FF] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">Batch size: 50-200 students</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-[#30F0FF] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">Post-training support included</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
                  <Users className="w-5 h-5 text-[#30F0FF]" />
                  <span>What's Covered</span>
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-[#30F0FF] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">Quantitative & Logical Aptitude</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-[#30F0FF] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">Data Structures & Algorithms</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-[#30F0FF] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">Technical & HR Interview Prep</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-[#30F0FF] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">Resume Building & LinkedIn</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white/5 p-6 rounded-xl mb-8">
              <h3 className="text-lg font-semibold text-white mb-3">Expected Outcomes</h3>
              <p className="text-gray-400">
                Students gain confidence, master problem-solving techniques, and significantly improve placement success rates. Colleges report an average 40% increase in placement offers.
              </p>
            </div>

            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-gradient-to-r from-[#30F0FF] to-[#9A6CFF] text-[#0B0C10] font-bold rounded-xl hover:scale-105 smooth-transition flex items-center space-x-2"
            >
              <span>Schedule CRT Program</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div ref={addToRefs} className="mb-32 opacity-0">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Technical <span className="gradient-text">Workshops</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Hands-on, industry-relevant workshops on trending technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Python Programming',
                duration: '2-3 days',
                level: 'Beginner to Intermediate',
                topics: ['Python Basics', 'Data Structures', 'OOP Concepts', 'Project Building'],
              },
              {
                title: 'Web Development',
                duration: '3-5 days',
                level: 'Beginner to Advanced',
                topics: ['HTML/CSS/JS', 'React Basics', 'Backend Integration', 'Deployment'],
              },
              {
                title: 'AI/ML Fundamentals',
                duration: '3-4 days',
                level: 'Intermediate',
                topics: ['ML Algorithms', 'Data Preprocessing', 'Model Training', 'Real Use Cases'],
              },
              {
                title: 'Git & GitHub',
                duration: '1 day',
                level: 'All Levels',
                topics: ['Version Control', 'Collaboration', 'Open Source', 'Portfolio Building'],
              },
              {
                title: 'Resume & LinkedIn',
                duration: '1 day',
                level: 'All Levels',
                topics: ['ATS Optimization', 'Project Showcase', 'Profile Building', 'Networking'],
              },
              {
                title: 'Custom Workshop',
                duration: 'Flexible',
                level: 'Customizable',
                topics: ['Your Choice', 'Tailored Content', 'Specific Goals', 'Target Outcomes'],
              },
            ].map((workshop, idx) => (
              <div
                key={idx}
                className="glass-morphism p-8 rounded-2xl hover-lift group"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">{workshop.title}</h3>
                  <Code className="w-8 h-8 text-[#30F0FF]" />
                </div>
                <div className="flex items-center space-x-4 mb-6">
                  <span className="px-3 py-1 bg-[#30F0FF]/10 text-[#30F0FF] text-sm rounded-full">
                    {workshop.duration}
                  </span>
                  <span className="px-3 py-1 bg-white/5 text-gray-400 text-sm rounded-full">
                    {workshop.level}
                  </span>
                </div>
                <ul className="space-y-2">
                  {workshop.topics.map((topic, i) => (
                    <li key={i} className="flex items-center space-x-2 text-gray-400 text-sm">
                      <CheckCircle size={14} className="text-[#30F0FF]" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 glass-morphism text-white font-semibold rounded-xl hover:bg-white/10 smooth-transition inline-flex items-center space-x-2"
            >
              <span>Book a Workshop</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div ref={addToRefs} className="opacity-0">
          <div className="glass-morphism p-12 rounded-3xl">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-[#9A6CFF] to-[#30F0FF] rounded-xl flex items-center justify-center">
                <Trophy className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-white">On-Campus Hackathons</h2>
                <p className="text-[#30F0FF] font-semibold">Innovation Meets Competition</p>
              </div>
            </div>

            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Fully organized, end-to-end managed hackathons that bring out the best in your students. We handle everything from themes to judging to prizes.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white/5 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-4">Format</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>• 24-48 hour duration</li>
                  <li>• Team-based challenges</li>
                  <li>• Mentorship provided</li>
                  <li>• Live judging & demos</li>
                </ul>
              </div>

              <div className="bg-white/5 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-4">Themes</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>• Social Impact</li>
                  <li>• AI/ML Innovation</li>
                  <li>• Web3 & Blockchain</li>
                  <li>• Custom themes</li>
                </ul>
              </div>

              <div className="bg-white/5 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-4">We Provide</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>• Problem statements</li>
                  <li>• Mentors & judges</li>
                  <li>• Prizes & certificates</li>
                  <li>• Marketing support</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#30F0FF]/10 to-[#9A6CFF]/10 p-6 rounded-xl mb-8 border border-[#30F0FF]/20">
              <h3 className="text-lg font-semibold text-white mb-3">Why Host a Hackathon?</h3>
              <p className="text-gray-400">
                Hackathons boost innovation, improve teamwork, and give students real-world problem-solving experience. They also enhance your college's tech reputation and attract top companies for placements.
              </p>
            </div>

            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-gradient-to-r from-[#30F0FF] to-[#9A6CFF] text-[#0B0C10] font-bold rounded-xl hover:scale-105 smooth-transition flex items-center space-x-2"
            >
              <span>Host a Hackathon</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
