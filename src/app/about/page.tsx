'use client';
import dynamic from "next/dynamic";

// Use dynamic import with no SSR for the carousel component to avoid hydration issues
const NewsCarousel = dynamic(() => import("@/components/NewsCarousel"), { ssr: false });

const AboutPage = () => {
  // Article IDs for "org of year", "Ccc award", and "nvidia workshop"
  const featuredArticleIds = [1, 10, 7];

  return (
    <>
      <section className="pt-[150px] pb-[120px]">
        <div className="container">
          <div className="border-b border-gray-200 pb-16 dark:border-gray-700 md:pb-20 lg:pb-28">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
                <div className="mb-12 max-w-[540px] lg:mb-0">
                  <h2 className="mb-5 text-3xl font-bold leading-tight text-gray-900 dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                    About Data Science & Informatics
                  </h2>
                  <p className="mb-6 text-base leading-relaxed text-gray-700 dark:text-gray-300">
                    The UF Data Science and Informatics (DSI) is a Student Organization at the University of Florida founded in 2015. We are dedicated to promoting data science education, research, and collaboration to students of all majors and grade levels.
                  </p>
                  <p className="mb-6 text-base leading-relaxed text-gray-700 dark:text-gray-300">
                    We offer workshops, networking events, research opportunities, and a supportive community for anyone interested in data science, machine learning, artificial intelligence, and related fields. Most importantly, we believe knowledge should be accessible to all.
                  </p>
                  <p className="mb-6 text-base leading-relaxed text-gray-700 dark:text-gray-300">
                    We are proudly sponsored by the UF Artificial Intelligence and Research Informatics Institute (AIIRI), which provides resources and support for our initiatives.
                  </p>
                </div>
              </div>

              <div className="w-full px-4 lg:w-1/2">
                <div className="text-center">
                  <div className="relative z-10 inline-block w-full max-w-[500px]">
                    <NewsCarousel articleIds={featuredArticleIds} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage; 