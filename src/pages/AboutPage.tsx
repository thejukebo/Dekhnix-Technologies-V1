import { useEffect, useRef } from 'react';
import { Target, Zap, Heart, Users, Award, TrendingUp, Linkedin } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
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
            About <span className="gradient-text">Dekhnix Technologies</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Bridging the gap between academic learning and industry readiness
          </p>
        </div>

        <div ref={addToRefs} className="mb-32 opacity-0">
          <div className="glass-morphism p-12 rounded-3xl">
            <h2 className="text-4xl font-bold text-white mb-6 text-center">
              Our <span className="gradient-text">Story</span>
            </h2>
            <div className="max-w-4xl mx-auto space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Dekhnix Technologies was founded with a singular vision: to empower college students with the skills and confidence they need to succeed in today's competitive job market.
              </p>
              <p>
                We recognized a critical gap between what students learn in college and what companies actually look for in candidates. This gap often leaves talented students unprepared for placements, despite their academic excellence.
              </p>
              <p>
                Today, we partner with over 100 colleges across India, delivering comprehensive Campus Recruitment Training, hands-on technical workshops, and innovation-driven hackathons. We've impacted 50,000+ students and helped countless colleges improve their placement statistics.
              </p>
              <p>
                Our programs are designed by industry professionals, delivered by experienced trainers, and continuously refined based on real placement trends and company requirements.
              </p>
            </div>
          </div>
        </div>

        <div ref={addToRefs} className="mb-32 opacity-0">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Our <span className="gradient-text">Mission & Values</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-10 h-10" />,
                title: 'Our Mission',
                description: 'To make every college student in India placement-ready through world-class training and practical exposure.',
              },
              {
                icon: <Heart className="w-10 h-10" />,
                title: 'Our Values',
                description: 'Excellence, integrity, innovation, and a genuine commitment to student success drive everything we do.',
              },
              {
                icon: <Zap className="w-10 h-10" />,
                title: 'Our Approach',
                description: 'Practical, industry-aligned training that focuses on real-world skills and measurable outcomes.',
              },
            ].map((item, idx) => (
              <div key={idx} className="glass-morphism p-8 rounded-2xl text-center hover-lift">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#30F0FF] to-[#9A6CFF] rounded-xl flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div ref={addToRefs} className="mb-32 opacity-0">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Why We're <span className="gradient-text">Different</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Award className="w-8 h-8" />,
                title: 'Industry-Aligned Curriculum',
                description: 'Our programs are designed based on actual placement requirements from top companies.',
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Expert Trainers',
                description: 'Learn from professionals who have worked in leading tech companies and understand the industry.',
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: 'Proven Results',
                description: 'Partner colleges see an average 40% increase in placement offers after our programs.',
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: 'End-to-End Support',
                description: 'From planning to execution to post-training support, we handle everything seamlessly.',
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start space-x-4 glass-morphism p-6 rounded-xl hover:bg-white/5 smooth-transition">
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

        <div ref={addToRefs} className="mb-32 opacity-0">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Meet Our <span className="gradient-text">Team</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Rajesh Kumar',
                role: 'Founder & CEO',
                bio: '10+ years in tech industry, passionate about education',
              },
              {
                name: 'Priya Sharma',
                role: 'Head of Training',
                bio: 'Former placement coordinator, expert in CRT programs',
              },
              {
                name: 'Aditya Patel',
                role: 'Technical Lead',
                bio: 'Full-stack developer, workshop design specialist',
              },
            ].map((member, idx) => (
              <div key={idx} className="glass-morphism p-8 rounded-2xl text-center hover-lift group">
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-[#30F0FF] to-[#9A6CFF] rounded-full flex items-center justify-center">
                  <Users className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-[#30F0FF] font-semibold mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm mb-4">{member.bio}</p>
                <button className="w-10 h-10 mx-auto bg-white/5 hover:bg-[#30F0FF]/20 rounded-lg flex items-center justify-center smooth-transition">
                  <Linkedin size={18} className="text-gray-400 group-hover:text-[#30F0FF]" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div ref={addToRefs} className="mb-32 opacity-0">
          <div className="glass-morphism p-12 rounded-3xl">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Our <span className="gradient-text">Impact</span>
            </h2>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { value: '100+', label: 'Partner Colleges' },
                { value: '50,000+', label: 'Students Trained' },
                { value: '10,000+', label: 'Workshop Hours' },
                { value: '95%', label: 'Satisfaction Rate' },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-5xl font-bold gradient-text mb-3">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div ref={addToRefs} className="opacity-0">
          <div className="bg-gradient-to-r from-[#30F0FF]/10 to-[#9A6CFF]/10 p-12 rounded-3xl border border-[#30F0FF]/20 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Join Us in <span className="gradient-text">Transforming Education</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Whether you're a college looking to enhance student outcomes or a student ready to level up your skills, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('colleges')}
                className="px-8 py-4 bg-gradient-to-r from-[#30F0FF] to-[#9A6CFF] text-[#0B0C10] font-bold rounded-xl hover:scale-105 smooth-transition"
              >
                Partner With Us
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 glass-morphism text-white font-semibold rounded-xl hover:bg-white/10 smooth-transition"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
