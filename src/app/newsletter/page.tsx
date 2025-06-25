'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const articles = [
  {
    id: 1,
    title: 'DSI wins student organization of the year',
    image: '/images/newsletter/grso-org-year25/1.jpeg',
    articleImage: '/images/newsletter/grso-org-year25/2.jpeg',
    date: 'March 2025',
    category: 'Awards',
    featured: true,
    description: `DSI was named Organization of the Year (GRSO) at this year's Student Involvement Awards across all UF student organizations! 🎉\n\nWe are honored and humbled to share this with all of you who have continuously supported us, whether by attending our workshops, competing alongside us at hackathons, or helping fund our initiatives.\n\nWe also want to congratulate our newly elected External Vice President, My Pham, on winning the Emerging Gator Award, which recognizes outstanding underclassmen leaders. We are so proud to have My on our team.\n\nThis award is a testament to the work we have been doing and the core belief that knowledge should be accessible to all.`,
  },
  {
    id: 2,
    title: "DSI member's chatbot SAMSARA wins AI hackathon",
    image: '/images/newsletter/samsara25/1.jpeg',
    articleImage: '/images/newsletter/samsara25/1.jpeg',
    date: 'February 2025',
    category: 'Competition',
    featured: true,
    description: `Join us in congratulating one of our students, Kalim Qazi, in winning first place nationally at Sentient's Hackathon!\n\n Across 7 days of public access, Samsara logged nearly 24 hours of total usage and received over 2,800 messages, all from organic traffic. We are extremely proud of you and of your hard work!`,
  },
  {
    id: 3,
    title: "DSI members win Best Visualization at DataFest 2025",
    image: '/images/newsletter/datafest25/1.jpg',
    articleImage: '/images/newsletter/datafest25/1.jpg',
    date: 'February 2025',
    category: 'Competition',
    featured: false,
    description: `Matheus Kunzler Maldaner, Ishan Kumthekar, Aadhitya Vijaisenthi, Aaron Goffstein and Adit Potta won Best Visualization at DataFest 2025!`,
  },
  {
    id: 4,
    title: "DSI members win Most Popular Award at 2024 AI Days Hackathon",
    image: '/images/newsletter/ai-days24/1.jpg',
    articleImage: '/images/newsletter/ai-days24/2.jpg',
    date: 'December 2024',
    category: 'Competition',
    featured: false,
    description: `Raul Valle, Landon Nayab, Matheus Kunzler Maldaner and Stephen Wormald won Most Popular Award for their FPGA Implementation of a Differentiable Logic Gate Neural Network.`,
  },
  {
    id: 5,
    title: "DSI members win Best AI Hack at SwampHacks 2025",
    image: '/images/newsletter/swamphacks25/1.jpg',
    articleImage: '/images/newsletter/swamphacks25/1.jpg',
    date: 'January 2025',
    category: 'Competition',
    featured: false,
    description: `DSI members Matheus Kunzler Maldaner, Kristian O'Connor, Danush Singla and Pranav Bhargava won the Best AI Hack at SwampHacks 2025, University of Florida's Largest Hackathon, by programming an interface to visualize the inner workings of Differentiable Logic Gate Neural Networks.`,
  },
  {
    id: 6,
    title: "DSI members win Most Popular Award at ShellHacks 2024",
    image: '/images/newsletter/shellhacks24/1.jpg',
    articleImage: '/images/newsletter/shellhacks24/2.jpg',
    date: 'September 2024',
    category: 'Competition',
    featured: false,
    description: `Thanks to the financial support of Dr. Juan Gilbert and CISE and AIIRI's collaboration, DSI was able to send 54 students to compete at ShellHacks 2024, Florida's largest hackathon with over 700 participants! DSI members Raul Valle, Matheus Kunzler Maldaner, Emily Jiji and Evan Partidas won the Most Popular project and several other UF students won specific company track prizes.`,
  },
  {
    id: 7,
    title: "DSI and UFIT hosted Nvidia Deep Learning Workshop",
    image: '/images/newsletter/nvidia-dli24/1.jpg',
    articleImage: '/images/newsletter/nvidia-dli24/2.jpg',
    date: 'November 2024',
    category: 'Workshop',
    featured: false,
    description: `DSI and UFIT hosted a Deep Learning Workshop at Nvidia's Auditorium in Malachowsky Hall. The workshop was led by Matt Gitzendanner and attended by 400 students. At the end of this four part series, students who successfully completed the course were able to earn an official Nvidia Deep Learning Certificate for free!`,
  },
  {
    id: 8,
    title: "DSI members win Best Overall at DataFest 2024",
    image: '/images/newsletter/datafest24/2.jpg',
    articleImage: '/images/newsletter/datafest24/1.jpg',
    date: 'April 2024',
    category: 'Competition',
    featured: false,
    description: `Eric Chao, Justin Witter, Patrick Leiman, Matheus Kunzler Maldaner and Raul Valle won Best Overall at DataFest 2024!`,
  },
  {
    id: 9,
    title: "DSI members win Best AI Hack and 2nd Place Overall at OSC Mini Hackathon",
    image: '/images/newsletter/osc-minihack24/1.png',
    articleImage: '/images/newsletter/osc-minihack24/1.png',
    date: 'March 2024',
    category: 'Competition',
    featured: false,
    description: `DSI members Matheus Kunzler Maldaner, Raul Valle and Sebastian Sosa won the Best AI Hack and 2nd Place Overall at OSC Mini Hackathon by programming a Discord Bot that can use sentiment analysis to predict when undesired content is posted in a server.`,
  },
];

const CategoryBadge = ({ category }: { category: string }) => {
  const categoryColors = {
    'Awards': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    'Competition': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    'Workshop': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${categoryColors[category] || 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200'}`}>
      {category}
    </span>
  );
};

const ArticleCard = ({ article, onClick, isSelected }: { article: any; onClick: () => void; isSelected: boolean }) => (
  <article 
    className={`group cursor-pointer transition-all duration-300 ${isSelected ? 'ring-2 ring-primary' : ''}`}
    onClick={onClick}
  >
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 left-4">
          <CategoryBadge category={article.category} />
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <time className="text-sm text-gray-500 dark:text-gray-400">{article.date}</time>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-200">
          {article.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
          {article.description.split('\n')[0]}
        </p>
      </div>
    </div>
  </article>
);

const FeaturedArticle = ({ article, onClick }: { article: any; onClick: () => void }) => (
  <article 
    className="group cursor-pointer transition-all duration-300"
    onClick={onClick}
  >
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute top-6 left-6">
          <CategoryBadge category={article.category} />
        </div>
        <div className="absolute bottom-6 left-6 right-6">
          <time className="text-white/90 text-sm mb-2 block">{article.date}</time>
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-3 line-clamp-2">
            {article.title}
          </h2>
        </div>
      </div>
    </div>
  </article>
);

export default function NewsletterPage() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [filter, setFilter] = useState('All');
  
  const featuredArticles = articles.filter(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);
  
  const categories = ['All', ...Array.from(new Set(articles.map(a => a.category)))];
  
  const filteredArticles = filter === 'All' 
    ? regularArticles 
    : regularArticles.filter(article => article.category === filter);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header Section */}
      <section className="bg-white dark:bg-gray-800 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              DSI Newsletter
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Stay updated with the latest achievements, events, and news from the University of Florida Data Science and Informatics community.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Featured Stories
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredArticles.map((article) => (
                <FeaturedArticle
                  key={article.id}
                  article={article}
                  onClick={() => setSelectedArticle(article)}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Article Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 md:mb-0">
              All Stories
            </h2>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    filter === category
                      ? 'bg-primary text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                onClick={() => setSelectedArticle(article)}
                isSelected={selectedArticle?.id === article.id}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Article Modal/Detail View */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              {/* Close Button */}
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Article Image */}
              <div className="relative h-64 md:h-80">
                <Image
                  src={selectedArticle.articleImage || selectedArticle.image}
                  alt={selectedArticle.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Article Content */}
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-4 mb-4">
                  <CategoryBadge category={selectedArticle.category} />
                  <time className="text-sm text-gray-500 dark:text-gray-400">
                    {selectedArticle.date}
                  </time>
                </div>

                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  {selectedArticle.title}
                </h1>

                <div className="prose prose-lg dark:prose-invert max-w-none">
                  {selectedArticle.description.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 