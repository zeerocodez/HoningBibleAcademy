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
  image: string;
  modules: Module[];
}

// Based on the 17 Certificate Programmes from the flyer
export const courses: Course[] = [
  { slug: 'cert-biblical-studies', title: '1. Certificate in Biblical Studies', description: 'Foundational study of the Bible.', price: '₦75,000 / $50 USD', duration: 'Self-paced', image: 'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=600&auto=format&fit=crop', modules: [] },
  { slug: 'cert-biblical-languages', title: '2. Certificate in Biblical Languages (Greek & Hebrew)', description: 'Learn to read the original languages of Scripture.', price: '₦75,000 / $50 USD', duration: 'Self-paced', image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=600&auto=format&fit=crop', modules: [] },
  { slug: 'cert-industrial-theology', title: '3. Certificate in Industrial Theology', description: 'Applying theology to the workplace and industry.', price: '₦75,000 / $50 USD', duration: 'Self-paced', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop', modules: [] },
  { slug: 'cert-cybertheology', title: '4. Certificate in Cybertheology', description: 'The intersection of theology and digital spaces.', price: '₦75,000 / $50 USD', duration: 'Self-paced', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop', modules: [] },
  { slug: 'cert-ecumenial-theology', title: '5. Certificate in Ecumenial Theology', description: 'Theology of church unity and interdenominational relations.', price: '₦75,000 / $50 USD', duration: 'Self-paced', image: 'https://images.unsplash.com/photo-1438032005730-c779502fac39?q=80&w=600&auto=format&fit=crop', modules: [] },
  { slug: 'cert-philosophical-theology', title: '6. Certificate in Philosophical Theology', description: 'Exploring theological concepts through philosophical methods.', price: '₦75,000 / $50 USD', duration: 'Self-paced', image: 'https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=600&auto=format&fit=crop', modules: [] },
  { slug: 'cert-biblical-hermeneutics', title: '7. Certificate in Biblical Hermeneutics', description: 'Principles of biblical interpretation.', price: '₦75,000 / $50 USD', duration: 'Self-paced', image: 'https://images.unsplash.com/photo-1473186578172-c141e6798cf4?q=80&w=600&auto=format&fit=crop', modules: [] },
  { slug: 'cert-digital-hermeneutics', title: '8. Certificate in Digital Hermeneutics', description: 'Interpreting scripture in the digital age.', price: '₦75,000 / $50 USD', duration: 'Self-paced', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop', modules: [] },
  { slug: 'cert-homiletics', title: '9. Certificate in Homiletics', description: 'The art and theology of preaching.', price: '₦75,000 / $50 USD', duration: 'Self-paced', image: 'https://images.unsplash.com/photo-1544413660-299165566b1d?q=80&w=600&auto=format&fit=crop', modules: [] },
  { slug: 'cert-missiology', title: '10. Certificate in Missiology', description: 'The theology and practice of missions.', price: '₦75,000 / $50 USD', duration: 'Self-paced', image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=600&auto=format&fit=crop', modules: [] },
  { slug: 'cert-christian-apologetics', title: '11. Certificate in Christian Apologetics', description: 'Defending the Christian faith.', price: '₦75,000 / $50 USD', duration: 'Self-paced', image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=600&auto=format&fit=crop', modules: [] },
  { slug: 'cert-family-marriage-ministry', title: '12. Certificate in Family and Marriage Ministry', description: 'Ministering to couples and families.', price: '₦75,000 / $50 USD', duration: 'Self-paced', image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=600&auto=format&fit=crop', modules: [] },
  { slug: 'cert-pastoral-counselling', title: '13. Certificate in Pastoral Counselling', description: 'Biblical approaches to counseling.', price: '₦75,000 / $50 USD', duration: 'Self-paced', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600&auto=format&fit=crop', modules: [] },
  { slug: 'cert-strategic-leadership', title: '14. Certificate in Strategic Leadership', description: 'Leadership principles for ministry and beyond.', price: '₦75,000 / $50 USD', duration: 'Self-paced', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600&auto=format&fit=crop', modules: [] },
  { slug: 'cert-church-planting', title: '15. Certificate in Church Planting', description: 'Strategies and theology for starting new churches.', price: '₦75,000 / $50 USD', duration: 'Self-paced', image: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=600&auto=format&fit=crop', modules: [] },
  { slug: 'cert-church-administration', title: '16. Certificate in Church Administration', description: 'Managing the operations of a church.', price: '₦75,000 / $50 USD', duration: 'Self-paced', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop', modules: [] },
  { slug: 'cert-trauma-informed-support', title: '17. Certificate in Trauma-Informed Support', description: 'Providing care with a trauma-informed perspective.', price: '₦75,000 / $50 USD', duration: 'Self-paced', image: 'https://images.unsplash.com/photo-1527628173875-3c7bfd28ad78?q=80&w=600&auto=format&fit=crop', modules: [] }
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find(course => course.slug === slug);
}
