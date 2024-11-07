const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="mb-12 rounded-lg bg-white px-8 py-11 shadow-lg transition-all duration-300 hover:shadow-xl sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h2 className="mb-6 text-2xl font-bold text-black sm:text-3xl lg:text-2xl xl:text-3xl">
                Contact Us
              </h2>
              <p className="text-lg font-medium leading-relaxed text-body-color">
                Please reach out to us at{" "}
                <a
                  href="mailto:dsiufl@gmail.com"
                  className="text-primary transition-colors duration-300 hover:text-primary/80 hover:underline"
                >
                  dsiufl@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
