import { useState, useEffect, useRef } from 'react';
import { Calendar, MapPin, Users, Filter, ArrowRight, Clock, Target, Code, Trophy } from 'lucide-react';

interface EventsPageProps {
  onNavigate: (page: string) => void;
}

export default function EventsPage({ onNavigate }: EventsPageProps) {
  const [filter, setFilter] = useState<'all' | 'crt' | 'workshop' | 'hackathon'>('all');
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  const events = [
    {
      id: 1,
      title: 'Campus Recruitment Training - Batch 12',
      type: 'crt' as const,
      date: 'Jan 15 - Mar 10, 2024',
      location: 'VIT Vellore',
      college: 'VIT University',
      spotsLeft: 45,
      status: 'upcoming' as const,
    },
    {
      id: 2,
      title: 'Full Stack Web Development Workshop',
      type: 'workshop' as const,
      date: 'Jan 20-22, 2024',
      location: 'BITS Pilani',
      college: 'BITS Pilani',
      spotsLeft: 30,
      status: 'upcoming' as const,
    },
    {
      id: 3,
      title: 'AI Innovation Hackathon',
      type: 'hackathon' as const,
      date: 'Feb 3-4, 2024',
      location: 'IIT Madras',
      college: 'IIT Madras',
      spotsLeft: 20,
      status: 'upcoming' as const,
    },
    {
      id: 4,
      title: 'Python for Data Science',
      type: 'workshop' as const,
      date: 'Feb 10-12, 2024',
      location: 'NIT Trichy',
      college: 'NIT Tiruchirappalli',
      spotsLeft: 40,
      status: 'upcoming' as const,
    },
    {
      id: 5,
      title: 'Campus Recruitment Training - Batch 13',
      type: 'crt' as const,
      date: 'Feb 15 - Apr 10, 2024',
      location: 'SRM University',
      college: 'SRM Institute',
      spotsLeft: 60,
      status: 'upcoming' as const,
    },
    {
      id: 6,
      title: 'Web3 & Blockchain Hackathon',
      type: 'hackathon' as const,
      date: 'Mar 1-2, 2024',
      location: 'Amrita University',
      college: 'Amrita Vishwa Vidyapeetham',
      spotsLeft: 25,
      status: 'upcoming' as const,
    },
  ];

  const filteredEvents = filter === 'all' ? events : events.filter(e => e.type === filter);

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

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'crt':
        return <Target className="w-6 h-6" />;
      case 'workshop':
        return <Code className="w-6 h-6" />;
      case 'hackathon':
        return <Trophy className="w-6 h-6" />;
      default:
        return <Calendar className="w-6 h-6" />;
    }
  };

  const getEventColor = (type: string) => {
    switch (type) {
      case 'crt':
        return 'from-[#30F0FF] to-[#3B2FBF]';
      case 'workshop':
        return 'from-[#9A6CFF] to-[#30F0FF]';
      case 'hackathon':
        return 'from-[#30F0FF] to-[#9A6CFF]';
      default:
        return 'from-[#30F0FF] to-[#9A6CFF]';
    }
  };

  return (
    <div className="bg-[#0B0C10] min-h-screen pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 opacity-0 animate-fadeInUp">
          <h1 className="text-6xl font-bold text-white mb-6">
            Upcoming <span className="gradient-text">Events</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Join our training programs, workshops, and hackathons happening across campuses
          </p>
        </div>

        <div ref={addToRefs} className="mb-12 opacity-0">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center space-x-2 text-gray-400">
              <Filter className="w-5 h-5" />
              <span className="font-medium">Filter by:</span>
            </div>
            {[
              { id: 'all', label: 'All Events' },
              { id: 'crt', label: 'CRT Programs' },
              { id: 'workshop', label: 'Workshops' },
              { id: 'hackathon', label: 'Hackathons' },
            ].map((option) => (
              <button
                key={option.id}
                onClick={() => setFilter(option.id as typeof filter)}
                className={`px-6 py-2.5 rounded-lg font-medium smooth-transition ${
                  filter === option.id
                    ? 'bg-gradient-to-r from-[#30F0FF] to-[#9A6CFF] text-[#0B0C10]'
                    : 'glass-morphism text-gray-400 hover:bg-white/10'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <div ref={addToRefs} className="grid md:grid-cols-2 gap-8 mb-20 opacity-0">
          {filteredEvents.map((event, idx) => (
            <div
              key={event.id}
              className="glass-morphism rounded-2xl overflow-hidden hover-lift group"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className={`h-2 bg-gradient-to-r ${getEventColor(event.type)}`} />

              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${getEventColor(event.type)} rounded-lg flex items-center justify-center`}>
                    {getEventIcon(event.type)}
                  </div>
                  <span className="px-3 py-1 bg-[#30F0FF]/10 text-[#30F0FF] text-sm font-semibold rounded-full uppercase">
                    {event.type}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#30F0FF] smooth-transition">
                  {event.title}
                </h3>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3 text-gray-400">
                    <Calendar className="w-5 h-5 text-[#30F0FF]" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-400">
                    <MapPin className="w-5 h-5 text-[#30F0FF]" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-400">
                    <Users className="w-5 h-5 text-[#30F0FF]" />
                    <span>{event.spotsLeft} spots remaining</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <button className="flex-1 py-3 bg-gradient-to-r from-[#30F0FF] to-[#9A6CFF] text-[#0B0C10] font-bold rounded-lg hover:scale-105 smooth-transition">
                    Register Now
                  </button>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="px-4 py-3 glass-morphism text-white rounded-lg hover:bg-white/10 smooth-transition"
                  >
                    Host at My College
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div ref={addToRefs} className="opacity-0">
          <div className="bg-gradient-to-r from-[#30F0FF]/10 to-[#9A6CFF]/10 p-12 rounded-3xl border border-[#30F0FF]/20">
            <div className="text-center">
              <Clock className="w-16 h-16 mx-auto mb-6 text-[#30F0FF]" />
              <h2 className="text-4xl font-bold text-white mb-6">
                Want to <span className="gradient-text">Host an Event</span> at Your College?
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                We bring our complete training programs, workshops, and hackathons to campuses across India. Let's bring innovation to your college!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-8 py-4 bg-gradient-to-r from-[#30F0FF] to-[#9A6CFF] text-[#0B0C10] font-bold rounded-xl hover:scale-105 smooth-transition inline-flex items-center justify-center space-x-2"
                >
                  <span>Request a Program</span>
                  <ArrowRight size={20} />
                </button>
                <button
                  onClick={() => onNavigate('colleges')}
                  className="px-8 py-4 glass-morphism text-white font-semibold rounded-xl hover:bg-white/10 smooth-transition"
                >
                  Learn More for Colleges
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
