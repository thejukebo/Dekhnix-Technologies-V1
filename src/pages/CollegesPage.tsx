import { useEffect, useRef } from 'react';
import { Building2, Target, Users, Zap, Calendar, FileText, CheckCircle, ArrowRight, Award, TrendingUp } from 'lucide-react';

interface CollegesPageProps {
  onNavigate: (page: string) => void;
}

export default function CollegesPage({ onNavigate }: CollegesPageProps) {
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
            <Building2 className="w-5 h-5 text-[#30F0FF]" />
            <span className="text-[#30F0FF] font-semibold">For TPOs, HODs & Faculty</span>
          </div>
          <h1 className="text-6xl font-bold text-white mb-6">
            Your Campus Training & <span className="gradient-text">Innovation Partner</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Empower your students with industry-ready skills. Zero hassle, maximum impact.
          </p>
        </div>

        <div ref={addToRefs} className="mb-32 opacity-0">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                The <span className="gradient-text">Challenge</span> You Face
              </h2>
              <ul className="space-y-4">
                {[
                  'Students lack placement-ready skills',
                  'Limited resources for comprehensive training',
                  'Difficulty organizing technical events',
                  'Need to improve placement statistics',
                  'Want industry exposure for students',
                ].map((challenge, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-gray-400">
                    <div className="w-2 h-2 bg-[#30F0FF] rounded-full mt-2 flex-shrink-0" />
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Our <span className="gradient-text">Solution</span>
              </h2>
              <ul className="space-y-4">
                {[
                  'Comprehensive CRT programs that work',
                  'Expert trainers with industry experience',
                  'Fully managed workshops & hackathons',
                  'Proven track record of results',
                  'End-to-end logistics handled',
                ].map((solution, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-gray-400">
                    <CheckCircle size={20} className="text-[#30F0FF] mt-0.5 flex-shrink-0" />
                    <span>{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div ref={addToRefs} className="mb-32 opacity-0">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              <span className="gradient-text">Engagement Models</span>
            </h2>
            <p className="text-gray-400 text-lg">Choose what works best for your college</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-10 h-10" />,
                title: 'Campus Recruitment Training',
                description: 'Complete placement preparation program',
                duration: '4-8 weeks',
                ideal: 'Pre-final & final year students',
                deliverables: ['Daily sessions', 'Mock tests', 'Interview prep', 'Performance reports'],
              },
              {
                icon: <Zap className="w-10 h-10" />,
                title: 'Technical Workshops',
                description: 'Intensive skill-building sessions',
                duration: '1-5 days',
                ideal: 'All years, specific departments',
                deliverables: ['Hands-on training', 'Project work', 'Certificates', 'Resources'],
              },
              {
                icon: <Award className="w-10 h-10" />,
                title: 'Campus Hackathons',
                description: 'Innovation-focused competitions',
                duration: '24-48 hours',
                ideal: 'Tech clubs, coding enthusiasts',
                deliverables: ['Full organization', 'Mentors & judges', 'Prizes', 'Media coverage'],
              },
            ].map((model, idx) => (
              <div key={idx} className="glass-morphism p-8 rounded-2xl hover-lift">
                <div className="w-16 h-16 bg-gradient-to-br from-[#30F0FF] to-[#9A6CFF] rounded-xl flex items-center justify-center mb-6">
                  {model.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{model.title}</h3>
                <p className="text-gray-400 mb-6">{model.description}</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2 text-sm">
                    <Calendar className="w-4 h-4 text-[#30F0FF]" />
                    <span className="text-gray-400">{model.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Users className="w-4 h-4 text-[#30F0FF]" />
                    <span className="text-gray-400">{model.ideal}</span>
                  </div>
                </div>
                <div className="border-t border-white/10 pt-6">
                  <p className="text-sm text-gray-500 mb-3">Deliverables:</p>
                  <ul className="space-y-2">
                    {model.deliverables.map((item, i) => (
                      <li key={i} className="text-sm text-gray-400 flex items-center space-x-2">
                        <CheckCircle size={14} className="text-[#30F0FF]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div ref={addToRefs} className="mb-32 opacity-0">
          <div className="glass-morphism p-12 rounded-3xl">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Sample <span className="gradient-text">Program Schedule</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-4">8-Week CRT Program</h3>
                <div className="space-y-3">
                  {[
                    { week: 'Week 1-2', topic: 'Quantitative Aptitude' },
                    { week: 'Week 3-4', topic: 'Logical Reasoning' },
                    { week: 'Week 5-6', topic: 'Data Structures & Coding' },
                    { week: 'Week 7', topic: 'Technical Interviews' },
                    { week: 'Week 8', topic: 'HR Rounds & Resume Building' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center">
                      <span className="text-gray-400">{item.week}</span>
                      <span className="text-white font-medium">{item.topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-4">3-Day Web Dev Workshop</h3>
                <div className="space-y-3">
                  {[
                    { day: 'Day 1', topic: 'HTML, CSS & JavaScript Basics' },
                    { day: 'Day 2', topic: 'React Fundamentals' },
                    { day: 'Day 3', topic: 'Backend Integration & Deployment' },
                  ].map((item, idx) => (
                    <div key={idx} className="pb-3 border-b border-white/10 last:border-0">
                      <div className="font-semibold text-[#30F0FF] mb-1">{item.day}</div>
                      <div className="text-gray-400 text-sm">{item.topic}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div ref={addToRefs} className="mb-32 opacity-0">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            What <span className="gradient-text">We Need</span> From Your End
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Infrastructure',
                items: ['Classroom with projector', 'Seating for students', 'Whiteboard', 'Stable internet (for workshops)'],
              },
              {
                title: 'Coordination',
                items: ['Single point of contact', 'Student attendance tracking', 'Schedule coordination', 'Feedback collection'],
              },
              {
                title: 'Student Engagement',
                items: ['Mandatory attendance policy', 'Pre-screening (if needed)', 'Assignment submission', 'Active participation'],
              },
              {
                title: 'Logistics Support',
                items: ['Entry permissions for trainers', 'Access to facilities', 'Announcement support', 'Certificate distribution'],
              },
            ].map((requirement, idx) => (
              <div key={idx} className="glass-morphism p-8 rounded-2xl">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
                  <FileText className="w-5 h-5 text-[#30F0FF]" />
                  <span>{requirement.title}</span>
                </h3>
                <ul className="space-y-3">
                  {requirement.items.map((item, i) => (
                    <li key={i} className="flex items-start space-x-3 text-gray-400">
                      <CheckCircle size={16} className="text-[#30F0FF] mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div ref={addToRefs} className="mb-32 opacity-0">
          <div className="glass-morphism p-12 rounded-3xl">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              <span className="gradient-text">Impact Metrics</span> from Partner Colleges
            </h2>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { metric: '40%', label: 'Increase in Placement Offers' },
                { metric: '85%', label: 'Student Satisfaction Rate' },
                { metric: '100+', label: 'Colleges Trained' },
                { metric: '50K+', label: 'Students Impacted' },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-[#30F0FF] to-[#9A6CFF] rounded-full flex items-center justify-center">
                    <TrendingUp className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl font-bold gradient-text mb-2">{stat.metric}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div ref={addToRefs} className="opacity-0">
          <div className="bg-gradient-to-r from-[#30F0FF]/10 to-[#9A6CFF]/10 p-12 rounded-3xl border border-[#30F0FF]/20 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to <span className="gradient-text">Partner With Us?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help elevate your campus placement statistics and student outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 bg-gradient-to-r from-[#30F0FF] to-[#9A6CFF] text-[#0B0C10] font-bold rounded-xl hover:scale-105 smooth-transition flex items-center justify-center space-x-2"
              >
                <span>Book a Discovery Call</span>
                <ArrowRight size={20} />
              </button>
              <button className="px-8 py-4 glass-morphism text-white font-semibold rounded-xl hover:bg-white/10 smooth-transition flex items-center justify-center space-x-2">
                <FileText size={20} />
                <span>Download Brochure</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
