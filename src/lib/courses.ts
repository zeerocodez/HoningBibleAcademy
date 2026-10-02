export interface Module {
  id: string;
  title: string;
  description: string;
}

export interface Course {
  slug: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  modules: Module[];
}

export const courses: Course[] = [
  {
    slug: 'the-biblical-narrative',
    title: 'The Biblical Narrative',
    description: 'Understand the unified story of the Bible from Genesis to Revelation. This course covers the major themes, covenants, and the overarching redemptive plan.',
    price: '$99', // Editable configuration
    duration: '12 Weeks (Self-paced)',
    modules: [
      { id: '1', title: 'Bibliology', description: 'The study of the nature and origin of the Bible.' },
      { id: '2', title: 'Interpreting Scripture', description: 'Principles for reading and understanding the text.' },
      { id: '3', title: 'Creation to the Kingdom', description: 'From Genesis to the establishment of Israel.' },
      { id: '4', title: 'The Kingdom United and Divided', description: 'The history of Israel’s kings and prophets.' },
      { id: '5', title: 'The Exile and Return', description: 'The Babylonian exile and the restoration.' },
      { id: '6', title: 'The Doctrine of Christ', description: 'The person and work of Jesus.' },
      { id: '7', title: 'The Gospels', description: 'The life and teachings of Jesus in the four Gospels.' },
      { id: '8', title: 'Acts and the Epistles', description: 'The early church and the letters of the apostles.' },
      { id: '9', title: 'End Times', description: 'Eschatology and the culmination of history.' },
      { id: '10', title: 'Ethics and Apologetics', description: 'Living faithfully and defending the faith.' },
      { id: '11', title: 'The Doctrine of the Holy Spirit', description: 'The person and work of the Spirit.' },
      { id: '12', title: 'Church History', description: 'A brief overview of the church through the ages.' }
    ]
  }
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find(course => course.slug === slug);
}
