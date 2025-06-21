'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const articles = [
  {
    id: 1,
    title: 'DSI wins student organization of the year',
    image: '/images/newsletter/1.jpeg',
    articleImage: '/images/newsletter/2.jpeg',
    description: `Yesterday we had the honor of being named Organization of the Year (GRSO) at this year's Student Involvement Awards🎉\n\nWe are honored and humbled to share this with all of you who have continuously supported us, whether by attending our workshops, competing alongside us at hackathons, or helping fund our initiatives.\n\nWe also want to congratulate our newly elected External Vice President, My Pham, on winning the Emerging Gator Award, which recognizes outstanding underclassmen leaders. We are so proud to have My on our team.\n\nThis award is a testament to the work we have been doing and the core belief that knowledge should be accessible to all. Thank you!`,
  },
  {
    id: 2,
    title: "DSI member's chatbot SAMSARA wins AI hackathon",
    image: '/images/newsletter/4.jpeg',
    articleImage: '',
    description: `Join us in congratulating one of our students, Kalim Qazi, in winning first place nationally at Sentient's Hackathon!\n\nWe are extremely proud of you and of your hard work!`,
  },
];

export default function NewsletterPage() {
  const [selected, setSelected] = useState(articles[0].id);
  const selectedArticle = articles.find(a => a.id === selected);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white drop-shadow-lg">DSI Newsletter</h1>
      <div className="w-full max-w-5xl px-4">
        <div className="flex space-x-8 overflow-x-auto pb-8 scrollbar-hide">
          {articles.map((article) => (
            <button
              key={article.id}
              onClick={() => setSelected(article.id)}
              className={`group flex-shrink-0 w-80 sm:w-96 rounded-2xl bg-white/30 dark:bg-gray-800/40 shadow-xl border border-white/20 dark:border-gray-700 backdrop-blur-md overflow-hidden transition-transform duration-300 relative focus:outline-none ${selected === article.id ? 'ring-4 ring-teal-400 scale-105' : 'hover:scale-105 hover:shadow-2xl'}`}
              style={{ minWidth: '320px', maxWidth: '380px' }}
            >
              <div className="relative w-full h-72 sm:h-96">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover object-center transition-all duration-300 group-hover:scale-110"
                  priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 w-full bg-white dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 rounded-b-2xl p-6 flex flex-col justify-end">
                <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 dark:text-teal-200 drop-shadow-lg mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-100 transition-colors duration-300 break-words whitespace-normal text-center w-full">
                  {article.title}
                </h2>
              </div>
            </button>
          ))}
        </div>
        {/* Article content below the scroll */}
        <div className="mt-10 flex flex-col items-center w-full">
          <div className="w-full max-w-3xl bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 flex flex-col items-center">
            {selectedArticle.articleImage && (
              <div className="relative w-full h-64 sm:h-80 mb-6 rounded-xl overflow-hidden">
                <Image
                  src={selectedArticle.articleImage}
                  alt={selectedArticle.title}
                  fill
                  className="object-cover object-center"
                  priority={true}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>
            )}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-teal-200 mb-4 text-center drop-shadow-lg">
              {selectedArticle.title}
            </h2>
            {selectedArticle.description ? (
              <p className="text-gray-700 dark:text-teal-100 text-lg font-medium opacity-90 text-center whitespace-pre-line mb-2 break-words w-full">
                {selectedArticle.description}
              </p>
            ) : (
              <span className="text-teal-700 dark:text-teal-200 text-base font-medium opacity-90 text-center">Article coming soon!</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 