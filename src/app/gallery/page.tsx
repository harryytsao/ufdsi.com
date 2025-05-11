import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | UF DSI",
  description: "View photos from UF Data Science and Informatics events and activities",
};

const GalleryPage = () => {
  return (
    <>
      <section className="pt-[150px] pb-[120px]">
        <div className="container">
          <div className="border-b border-gray-200 pb-16 dark:border-gray-700 md:pb-20 lg:pb-28">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4">
                <div className="mb-12 text-center">
                  <h2 className="mb-5 text-3xl font-bold leading-tight text-gray-900 dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                    Photo Gallery
                  </h2>
                  <p className="mx-auto max-w-[800px] text-base text-gray-700 dark:text-gray-300">
                    Explore photos from our events, workshops, and community activities.
                  </p>
                </div>
              </div>

              <div className="w-full px-4">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {/* Gallery image placeholders - will be replaced with actual images */}
                  <div className="overflow-hidden rounded-md shadow-lg">
                    <img
                      src="/images/hero/landing-page.jpg"
                      alt="Gallery Image 1"
                      className="h-full w-full object-cover transition duration-300 ease-in-out hover:scale-110"
                    />
                  </div>
                  <div className="overflow-hidden rounded-md shadow-lg">
                    <img
                      src="/images/hero/landing-page.jpg"
                      alt="Gallery Image 2"
                      className="h-full w-full object-cover transition duration-300 ease-in-out hover:scale-110"
                    />
                  </div>
                  <div className="overflow-hidden rounded-md shadow-lg">
                    <img
                      src="/images/hero/landing-page.jpg"
                      alt="Gallery Image 3"
                      className="h-full w-full object-cover transition duration-300 ease-in-out hover:scale-110"
                    />
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

export default GalleryPage; 