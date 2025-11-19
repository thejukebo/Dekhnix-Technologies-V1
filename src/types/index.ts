export interface Program {
  id: string;
  title: string;
  description: string;
  duration: string;
  category: 'crt' | 'workshop' | 'hackathon';
  topics?: string[];
  outcomes?: string[];
}

export interface Event {
  id: string;
  title: string;
  type: 'crt' | 'workshop' | 'hackathon';
  date: string;
  location: string;
  college?: string;
  status: 'upcoming' | 'ongoing' | 'completed';
  spotsLeft?: number;
}

export interface ContactForm {
  role: string;
  name: string;
  email: string;
  phone: string;
  collegeName: string;
  city: string;
  programInterested: string;
  preferredDates: string;
  message: string;
}
